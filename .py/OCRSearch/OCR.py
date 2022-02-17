import cv2
from matplotlib.pyplot import text
import pytesseract

 
# Mention the installed location of Tesseract-OCR in your system
pytesseract.pytesseract.tesseract_cmd =  r"C:\\Program Files\\Tesseract-OCR\\tesseract.exe"


# Method to read text from iamge
def OpticalCharacterRecognition(imagefilename):

    img = cv2.imread(imagefilename)
    text = pytesseract.image_to_string(img)

    if text == "":
        return "ERROR: No Recognizable Text Found"
    else:
        # print (text)
        return text

if __name__ == "__main__":
  # Take the image from user
    image=".py\OCRSearch\images\sample.jpg"
    OpticalCharacterRecognition(image)