from doctr.models import ocr_predictor
from doctr.io import DocumentFile
import os

def extract_text(dir="images"):
    final = ""
    model = ocr_predictor(pretrained=True)
    for img in os.listdir(dir):
        doc = DocumentFile.from_images(dir + "/" + img)
        result = model(doc)
        final+=(img + result.render())
    return final

if __name__ == "__main__":
    #print(extract_text("images"))
    model = ocr_predictor(pretrained=True)
    doc = DocumentFile.from_pdf("transcript.pdf")
    print(model(doc).render())
