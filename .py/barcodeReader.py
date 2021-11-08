# Importing library
# use pip3 install pyzbar opencv-python to install
import cv2
from pyzbar.pyzbar import decode
  
# Make one method to decode the barcode
def BarcodeReader(image):

    # read the image in numpy array using cv2
    img = cv2.imread(image)
      
    # Decode the barcode image
    detectedBarcodes = decode(img)
      
    # If not detected then print the message
    if not detectedBarcodes:
        print("Barcode Not Detected or your barcode is blank/corrupted!")
    else:
          # Traverse through all the detected barcodes in image
        for barcode in detectedBarcodes: 
           
            # Locate the barcode position in image
            (x, y, w, h) = barcode.rect
             
             
            if barcode.data!="":
               
                # Print the barcode data
                # print(barcode.data)
                # print(barcode.type)
                return barcode
                 
 
if __name__ == "__main__":
  # Take the image from user
    image="testbarcode-images/02410037277.png"
    BarcodeReader(image)