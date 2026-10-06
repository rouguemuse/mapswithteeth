import pymupdf
import sys
from pathlib import Path

# Ensure stdout handles UTF-8
sys.stdout.reconfigure(encoding='utf-8')

SOURCE_DIR = Path(r"C:\Users\rougu\OneDrive\Pictures\Picturesof Messeges")

def examine_doc(filename, search_terms=None):
    doc = pymupdf.open(SOURCE_DIR / filename)
    print(f"\n=======================================================")
    print(f"FILE: {filename} ({len(doc)} pages)")
    print(f"=======================================================")
    for idx, page in enumerate(doc):
        text = page.get_text()
        if search_terms:
            matches = [t for t in search_terms if t.lower() in text.lower()]
            if matches:
                print(f"--- Page {idx+1} (Matches: {matches}) ---")
                for line in text.splitlines():
                    if any(m.lower() in line.lower() for m in search_terms):
                        print(f"  MATCH LINE: {line}")
                print(f"--- Full Text Page {idx+1} ---")
                print(text[:1500])
        else:
            print(f"--- Page {idx+1} ---")
            print(text[:1000])
    doc.close()

examine_doc("imgoingtosendyourentiregoogledrive.pdf", ["entire Google Photos", "album", "printed"])
examine_doc("41messegeaccusationsthreats.pdf", ["tow", "Google Drive", "Jessy", "improvements", "insurance"])
examine_doc("Oops_towthreats.pdf", ["insurance", "rent", "leverage", "towed"])
examine_doc("LeaaseNonanswertoCarAccountRequest.pdf", ["6,500", "6,180", "320", "title"])
examine_doc("BLAKE2026_Page_1800.pdf", ["hide", "pictures", "gone"])
examine_doc("Notauthorized.pdf")
examine_doc("ResponsetoNotAuthorized.pdf")
