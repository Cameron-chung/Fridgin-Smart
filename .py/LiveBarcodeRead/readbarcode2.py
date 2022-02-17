import cv2


from PyQt5.QtCore import QTimer
from PyQt5.QtGui import QImage, QPixmap

## open webcam view
cap = cv2.VideoCapture()
# The device number might be 0 or 1 depending on the device and the webcam
cap.open(0, cv2.CAP_DSHOW)
while(True):
    ret, frame = cap.read()
    cv2.imshow('frame', frame)
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
cap.release()
cv2.destroyAllWindows()

def __init__(self):
        # Create a timer.
        self.timer = QTimer()
        self.timer.timeout.connect(self.nextFrameSlot)
 
def nextFrameSlot(self):
        rval, frame = self.vc.read()
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        image = QImage(frame, frame.shape[1], frame.shape[0], QImage.Format_RGB888)
        pixmap = QPixmap.fromImage(image)
        self.label.setPixmap(pixmap)
 
        results = dbr.decodeBuffer(frame, 0x3FF | 0x2000000 | 0x4000000 | 0x8000000 | 0x10000000)
        out = ''
        index = 0
        for result in results:
            out += "Index: " + str(index) + "\n"
            out += "Barcode format: " + result[0] + '\n'
            out += "Barcode value: " + result[1] + '\n'
            out += '-----------------------------------\n'
            index += 1
 
        self.results.setText(out)