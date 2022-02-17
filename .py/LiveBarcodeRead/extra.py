from dbr import *
license_key = 't0260NwAAAHV***************'
image_file = r'C:\Users\pluto\OneDrive\Documents\School\Fourth Year\SYSC 4907\Working Directory\Fridgin-Smart\.py\LiveBarcodeRead\images\02410037277.png'

reader = BarcodeReader()
reader.init_license(license_key)
try:
    text_results = reader.decode_file(image_file)
    if text_results != None:
        for text_result in text_results:
            print("Barcode Format :")
            print(text_result.barcode_format_string)
            print("Barcode Text :")
            print(text_result.barcode_text)
            print("Localization Points : ")
            print(text_result.localization_result.localization_points)
            print("-------------")
except BarcodeReaderError as bre:
    print(bre)