from pyzbar.pyzbar import decode
from ftplib import FTP
import os
import numpy as np
import cv2
import time
from picamera.array import PiRGBArray
from picamera import PiCamera
fourcc = cv2.VideoWriter_fourcc(*'X264')

def dec(frame):
     x=decode(frame)
     for i in x:
        (x, y, w, h) = i.rect
        cv2.rectangle(frame,(x, y),(x + w, y + h),(0, 0, 255),2)
        barcodeData = i.data.decode("utf-8")
        barcodeType = i.type
        return(barcodeData,barcodeType,1)
     return('','',0)

camera=PiCamera()
camera.resolution=(1296,730)
camera.framerate=20
rawCapture=PiRGBArray(camera)
time.sleep(0.1)
cv2.namedWindow("Image",cv2.WINDOW_NORMAL)

for frame in camera.capture_continuous(rawCapture,format="bgr",use_video_port=True):
    image=frame.array
    x,y,p=dec(image)
    cv2.imshow("Image",image)
    print(x)
    print(y)

    if cv2.waitKey(2) & 0xFF == ord('q'):
                break
    rawCapture.truncate(0)


        #cap.release()
cv2.destroyAllWindows()
