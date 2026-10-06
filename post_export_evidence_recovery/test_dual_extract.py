import time
from pathlib import Path
import pymupdf
from rapidocr_onnxruntime import RapidOCR
from PIL import Image
import io

ocr = RapidOCR()
pdf_path = Path(r"C:\Users\rougu\OneDrive\Pictures\Picturesof Messeges\everyrighttolookfamilycourtwatch.pdf")
doc = pymupdf.open(pdf_path)
page = doc[0]

t0 = time.time()
native_text = page.get_text()
t1 = time.time()

pix = page.get_pixmap(dpi=200)
img_bytes = pix.tobytes("png")
t2 = time.time()

result, _ = ocr(img_bytes)
t3 = time.time()

ocr_text = "\n".join([line[1] for line in result]) if result else ""

print(f"Native extract: {t1-t0:.3f}s, char count: {len(native_text)}")
print(f"Render pixmap 200 DPI: {t2-t1:.3f}s, size: {pix.width}x{pix.height}")
print(f"RapidOCR: {t3-t2:.3f}s, lines: {len(result) if result else 0}, char count: {len(ocr_text)}")
doc.close()
