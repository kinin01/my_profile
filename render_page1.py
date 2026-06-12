import fitz  # PyMuPDF
import os

pdf_path = r"C:\Users\Hello\OneDrive\Desktop\application doc\KININGU STEPHEN EXEC.PROFILE (3).pdf"
doc = fitz.open(pdf_path)
page = doc[0]

# Render at 2x for clarity
mat = fitz.Matrix(2, 2)
pix = page.get_pixmap(matrix=mat)
out = r"C:\Users\Hello\my_profile\public\images\page1_preview.png"
pix.save(out)
print(f"Saved: {out} ({pix.width}x{pix.height})")
doc.close()
