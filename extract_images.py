import pdfplumber
import fitz  # PyMuPDF
import os

pdf_path = r'C:\Users\Hello\OneDrive\Desktop\application doc\KININGU STEPHEN EXEC.PROFILE (3).pdf'
out_dir = r'C:\Users\Hello\my_profile\public\images'

os.makedirs(out_dir, exist_ok=True)

doc = fitz.open(pdf_path)
count = 0

for page_num in range(len(doc)):
    page = doc[page_num]
    images = page.get_images(full=True)
    for img_index, img in enumerate(images):
        xref = img[0]
        base_image = doc.extract_image(xref)
        image_bytes = base_image["image"]
        ext = base_image["ext"]
        width = base_image["width"]
        height = base_image["height"]

        # Only save meaningful images (skip tiny icons/artifacts)
        if width > 80 and height > 80:
            fname = f'page{page_num+1}_img{img_index+1}_{width}x{height}.{ext}'
            fpath = os.path.join(out_dir, fname)
            with open(fpath, 'wb') as f:
                f.write(image_bytes)
            print(f'Saved: {fname} ({width}x{height})')
            count += 1

print(f'\nTotal images extracted: {count}')
doc.close()
