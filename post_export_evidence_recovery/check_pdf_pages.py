import csv
from pathlib import Path
import fitz  # PyMuPDF

SOURCE_DIR = Path(r"C:\Users\rougu\OneDrive\Pictures\Picturesof Messeges")
MANIFEST = Path(r"c:\Users\rougu\Downloads\MAPS WITH TEETH\post_export_evidence_recovery\POST_EXPORT_SOURCE_MANIFEST.csv")

pdf_count = 0
total_pdf_pages = 0
pdf_page_list = []

with open(MANIFEST, "r", encoding="utf-8") as f:
    for row in csv.DictReader(f):
        if row["File Type"].lower() == ".pdf":
            pdf_count += 1
            rel_path = row["Relative Path"]
            full_path = SOURCE_DIR / rel_path
            try:
                doc = fitz.open(full_path)
                pages = len(doc)
                total_pdf_pages += pages
                pdf_page_list.append((row["Source ID"], rel_path, pages, full_path.stat().st_size))
                doc.close()
            except Exception as e:
                pdf_page_list.append((row["Source ID"], rel_path, -1, str(e)))

print(f"Total PDFs: {pdf_count}")
print(f"Total PDF Pages: {total_pdf_pages}")
print("Top 10 largest / highest page count PDFs:")
for sid, rel, pages, sz in sorted(pdf_page_list, key=lambda x: x[2], reverse=True)[:10]:
    print(f"  {sid}: {rel} ({pages} pages, {sz} bytes)")
