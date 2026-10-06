import fitz # pymupdf
from pathlib import Path

SOURCE_DIR = Path(r"C:\Users\rougu\OneDrive\Pictures\Picturesof Messeges")

def print_pdf_pages(rel_path, max_pages=None):
    full_path = SOURCE_DIR / rel_path
    doc = fitz.open(full_path)
    print(f"\n=======================================================")
    print(f"FILE: {rel_path} (Pages: {len(doc)})")
    print(f"=======================================================")
    pages_to_show = range(len(doc)) if max_pages is None else range(min(len(doc), max_pages))
    for p_idx in pages_to_show:
        text = doc[p_idx].get_text()
        print(f"--- Page {p_idx + 1} ---")
        for line in text.splitlines():
            if line.strip():
                print(f"  {line}")
    doc.close()

# Let's inspect imgoingtosendyourentiregoogledrive.pdf
print_pdf_pages("imgoingtosendyourentiregoogledrive.pdf", max_pages=3)

# Let's inspect everyrighttolookfamilycourtwatch.pdf
print_pdf_pages("everyrighttolookfamilycourtwatch.pdf", max_pages=3)

# Let's inspect EX04_2026-05-18_cps_unload_entire_folder.pdf
print_pdf_pages("EX04_2026-05-18_cps_unload_entire_folder.pdf")

# Let's inspect BLAKE2026_Page_1800.pdf
print_pdf_pages("BLAKE2026_Page_1800.pdf")

# Let's inspect Oops_towthreats.pdf
print_pdf_pages("Oops_towthreats.pdf")

# Let's inspect LeaaseNonanswertoCarAccountRequest.pdf
print_pdf_pages("LeaaseNonanswertoCarAccountRequest.pdf")

# Let's inspect Notauthorized.pdf and ResponsetoNotAuthorized.pdf
print_pdf_pages("Notauthorized.pdf")
print_pdf_pages("ResponsetoNotAuthorized.pdf")
