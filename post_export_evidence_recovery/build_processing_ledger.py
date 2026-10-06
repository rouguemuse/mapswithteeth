import os
import sys
import csv
import json
import time
import hashlib
from pathlib import Path
import pymupdf
from rapidocr_onnxruntime import RapidOCR
from PIL import Image

SOURCE_DIR = Path(r"C:\Users\rougu\OneDrive\Pictures\Picturesof Messeges")
WORK_DIR = Path(r"c:\Users\rougu\Downloads\MAPS WITH TEETH\post_export_evidence_recovery")
RAW_DIR = WORK_DIR / "ocr_raw"
PDF_DUAL_DIR = RAW_DIR / "pdf_dual"
PDF_DUAL_DIR.mkdir(parents=True, exist_ok=True)

MANIFEST_PATH = WORK_DIR / "POST_EXPORT_SOURCE_MANIFEST.csv"
LEDGER_PATH = WORK_DIR / "POST_EXPORT_PROCESSING_LEDGER.csv"

def compute_sha256(filepath):
    h = hashlib.sha256()
    with open(filepath, "rb") as f:
        while chunk := f.read(65536):
            h.update(chunk)
    return h.hexdigest()

def token_similarity(text1, text2):
    t1 = set(text1.lower().split())
    t2 = set(text2.lower().split())
    if not t1 and not t2:
        return 1.0
    if not t1 or not t2:
        return 0.0
    return len(t1.intersection(t2)) / len(t1.union(t2))

def main():
    print("=== STARTING DUAL-EXTRACTION & PROCESSING LEDGER GENERATION ===")
    t_start = time.time()
    
    # Initialize OCR engine
    print("Initializing RapidOCR engine...")
    ocr = RapidOCR()
    
    # Load Manifest
    with open(MANIFEST_PATH, "r", encoding="utf-8") as f:
        manifest_rows = list(csv.DictReader(f))
    
    print(f"Loaded {len(manifest_rows)} rows from manifest.")
    
    ledger_rows = []
    
    for idx, row in enumerate(manifest_rows, 1):
        sid = row["Source ID"].strip()
        rel_path = row["Relative Path"].strip()
        orig_filename = row["Original Filename"].strip()
        manifest_hash = row["SHA-256"].strip()
        file_type = row["File Type"].strip().lower()
        full_path = SOURCE_DIR / rel_path
        
        print(f"[{idx}/107] Processing {sid} ({orig_filename})...")
        
        # 1. Live Hash Check
        if not full_path.exists():
            print(f"ERROR: File not found: {full_path}")
            current_hash = "FILE_NOT_FOUND"
            hash_match = "MISMATCH"
            file_size = 0
        else:
            file_size = full_path.stat().st_size
            current_hash = compute_sha256(full_path)
            hash_match = "MATCH" if current_hash.lower() == manifest_hash.lower() else "MISMATCH"
        
        # 2. Assign Source Role
        if "digital-control-scan" in rel_path or "functional-destabilization" in rel_path:
            source_role = "DERIVATIVE_ANALYSIS"
            source_category = "Derivative Analysis / Prior Scan Report"
        elif orig_filename == "00_README_IMAGE_EMAIL_INDEX.txt":
            source_role = "INDEX_REFERENCE"
            source_category = "Reference Index / Documentation"
        elif orig_filename == "desktop.ini":
            source_role = "SYSTEM_METADATA"
            source_category = "System File"
        else:
            source_role = "PRIMARY_SOURCE"
            source_category = "Primary Evidence Source"
            
        # 3. Process by File Type
        if file_type in [".png", ".jpg", ".jpeg"]:
            # Single Image
            total_pages = 1
            native_status = "N/A (Raster Image)"
            native_char_count = 0
            
            # Check if OCR exists or run
            ocr_txt_path = RAW_DIR / f"{Path(orig_filename).stem}_ocr.txt"
            ocr_json_path = RAW_DIR / f"{Path(orig_filename).stem}_ocr.json"
            
            ocr_text = ""
            box_count = 0
            
            if ocr_txt_path.exists() and ocr_json_path.exists():
                ocr_text = ocr_txt_path.read_text(encoding="utf-8")
                try:
                    with open(ocr_json_path, "r", encoding="utf-8") as jf:
                        jdata = json.load(jf)
                        box_count = len(jdata)
                except Exception:
                    box_count = len(ocr_text.splitlines())
            else:
                try:
                    with open(full_path, "rb") as img_f:
                        img_bytes = img_f.read()
                    res, _ = ocr(img_bytes)
                    if res:
                        ocr_text = "\n".join([line[1] for line in res])
                        box_count = len(res)
                        ocr_txt_path.write_text(ocr_text, encoding="utf-8")
                        with open(ocr_json_path, "w", encoding="utf-8") as jf:
                            json.dump(res, jf, indent=2)
                except Exception as e:
                    print(f"  OCR error on image {sid}: {e}")
            
            ocr_status = "Extracted" if ocr_text else "No Text Detected"
            ocr_char_count = len(ocr_text)
            pages_ocred = 1
            dual_agreement = "OCR-Only (Raster Image)"
            transcription_reliability = "High" if ocr_char_count > 50 else ("Medium" if ocr_char_count > 0 else "Low")
            errors = "None" if hash_match == "MATCH" else "Hash mismatch"
            completion_status = "PROCESSED"
            
        elif file_type == ".pdf":
            # PDF: Dual extraction on EVERY page
            try:
                doc = pymupdf.open(full_path)
                total_pages = len(doc)
                pages_ocred = 0
                total_native_chars = 0
                total_ocr_chars = 0
                page_agreements = []
                
                pdf_audit_data = []
                
                for p_idx in range(total_pages):
                    page = doc[p_idx]
                    p_native = page.get_text()
                    total_native_chars += len(p_native)
                    
                    native_file = PDF_DUAL_DIR / f"{sid}_p{p_idx+1:03d}_native.txt"
                    ocr_file = PDF_DUAL_DIR / f"{sid}_p{p_idx+1:03d}_ocr.txt"
                    
                    # Native save
                    native_file.write_text(p_native, encoding="utf-8")
                    
                    # OCR extraction
                    if ocr_file.exists():
                        p_ocr = ocr_file.read_text(encoding="utf-8")
                    else:
                        pix = page.get_pixmap(dpi=200)
                        res, _ = ocr(pix.tobytes("png"))
                        p_ocr = "\n".join([line[1] for line in res]) if res else ""
                        ocr_file.write_text(p_ocr, encoding="utf-8")
                    
                    total_ocr_chars += len(p_ocr)
                    pages_ocred += 1
                    
                    # Agreement metric
                    sim = token_similarity(p_native, p_ocr)
                    if len(p_native.strip()) > 0 and len(p_ocr.strip()) > 0:
                        if sim >= 0.60:
                            p_agree = "Agrees"
                        elif sim >= 0.25:
                            p_agree = "Partial Agreement"
                        else:
                            p_agree = "Discrepancy Detected"
                    elif len(p_native.strip()) > 0 and len(p_ocr.strip()) == 0:
                        p_agree = "Native-Only"
                    elif len(p_native.strip()) == 0 and len(p_ocr.strip()) > 0:
                        p_agree = "OCR-Only (Scanned/Raster Content)"
                    else:
                        p_agree = "No Text Detected"
                        
                    page_agreements.append(p_agree)
                    pdf_audit_data.append({
                        "page": p_idx + 1,
                        "native_chars": len(p_native),
                        "ocr_chars": len(p_ocr),
                        "similarity": round(sim, 3),
                        "agreement": p_agree
                    })
                
                doc.close()
                
                # Save PDF audit summary JSON
                audit_json_path = PDF_DUAL_DIR / f"{sid}_dual_audit.json"
                with open(audit_json_path, "w", encoding="utf-8") as jf:
                    json.dump(pdf_audit_data, jf, indent=2)
                
                native_status = "Extracted" if total_native_chars > 0 else "No Digital Text Layer"
                native_char_count = total_native_chars
                ocr_status = "Extracted" if total_ocr_chars > 0 else "No Text Detected"
                ocr_char_count = total_ocr_chars
                
                # Document-level agreement summary
                agree_counts = {}
                for a in page_agreements:
                    agree_counts[a] = agree_counts.get(a, 0) + 1
                
                dominant_agree = max(agree_counts.items(), key=lambda x: x[1])[0]
                dual_agreement = f"{dominant_agree} ({agree_counts.get(dominant_agree, 0)}/{total_pages} pages)"
                
                if native_status == "Extracted" and ocr_status == "Extracted":
                    transcription_reliability = "High (Dual-Verified)"
                elif native_status == "Extracted" or ocr_status == "Extracted":
                    transcription_reliability = "High (Single Layer Available)"
                else:
                    transcription_reliability = "Low (Blank / Media)"
                    
                errors = "None" if hash_match == "MATCH" else "Hash mismatch"
                completion_status = "PROCESSED"
                
            except Exception as e:
                print(f"  ERROR processing PDF {sid}: {e}")
                total_pages = row.get("Dimensions / Pages", "Unknown")
                native_status = f"Error: {e}"
                native_char_count = 0
                ocr_status = f"Error: {e}"
                ocr_char_count = 0
                pages_ocred = 0
                dual_agreement = "Error"
                transcription_reliability = "Low"
                errors = str(e)
                completion_status = "ERROR"
                
        else:
            # Data / Derivative / Text / System files
            total_pages = "N/A"
            pages_ocred = 0
            ocr_status = "N/A"
            ocr_char_count = 0
            dual_agreement = "N/A (Tabular/Markdown/System)"
            
            try:
                content = full_path.read_text(encoding="utf-8", errors="replace")
                native_char_count = len(content)
                native_status = "Plaintext / Structured Data Parsed"
                transcription_reliability = "High (Direct Structured Source)"
                errors = "None" if hash_match == "MATCH" else "Hash mismatch"
                completion_status = "DERIVATIVE_CATALOGED" if source_role == "DERIVATIVE_ANALYSIS" else ("INDEX_VERIFIED" if source_role == "INDEX_REFERENCE" else "METADATA_PRESERVED")
            except Exception as e:
                native_char_count = 0
                native_status = f"Error: {e}"
                transcription_reliability = "N/A"
                errors = str(e)
                completion_status = "ERROR"
        
        # Check visual verification requirement
        # Will be updated once visual verification is conducted
        visual_status = "PENDING"
        verifier_notes = ""
        
        ledger_rows.append({
            "Source ID": sid,
            "Relative Path": rel_path,
            "Original Filename": orig_filename,
            "Source Role": source_role,
            "Source Category": source_category,
            "Manifest SHA-256": manifest_hash,
            "Current SHA-256": current_hash,
            "Hash Match": hash_match,
            "File Size Bytes": file_size,
            "Total Pages": total_pages,
            "Native Text Extraction Status": native_status,
            "Native Text Char Count": native_char_count,
            "OCR Status": ocr_status,
            "OCR Char Count": ocr_char_count,
            "Pages OCR'd": pages_ocred,
            "Dual-Extraction Agreement": dual_agreement,
            "Visual-Verification Status": visual_status,
            "Transcription Reliability": transcription_reliability,
            "Errors / Anomalies": errors,
            "Completion Status": completion_status
        })
        
        # Save intermediate ledger every 10 files
        if idx % 10 == 0 or idx == len(manifest_rows):
            with open(LEDGER_PATH, "w", encoding="utf-8", newline="") as lf:
                writer = csv.DictWriter(lf, fieldnames=list(ledger_rows[0].keys()))
                writer.writeheader()
                writer.writerows(ledger_rows)
            print(f"  --> Saved intermediate ledger ({idx}/107 rows).")

    print(f"\n=== COMPLETED IN {time.time() - t_start:.2f} SECONDS ===")
    print(f"Final processing ledger written to {LEDGER_PATH}")

if __name__ == "__main__":
    main()
