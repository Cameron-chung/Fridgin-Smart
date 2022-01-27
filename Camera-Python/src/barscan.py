from pyzbar.pyzbar import decode
from picamera.array import PiRGBArray
from picamera import PiCamera
import time
import cv2
# initialize the camera and grab a reference to the raw camera capture
cap = cv2.VideoCapture(0)
camera.resolution = (640, 480)
camera.vflip = True
cap.set(3, 640)
cap.set(4, 480)
used_codes = []

camera = True
while camera == True:
    success, frame = cap.read()
    
    for code in decode(frame):
        if code.data.decode('utf-8') not in used_codes:
            print('Approved. You can enter!')
            print(code.data.decode('utf-8'))
            used_codes.append(code.data.decode('utf-8'))
            time.sleep(5)
        elif code.data.decode('utf-8') in used_codes:
            print('Sorry, this code has been already used')
            time.sleep(5)
        else:
            pass
        
    cv2.imshow('Testing-code-scan', frame)
    cv2.waitKey(1)
