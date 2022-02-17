import requests # to send requests to the edamam API
import json # to parse json object
from barcodeReader import BarcodeReader # barcode reader function
import tkinter as tk
from tkinter.filedialog import askopenfilename



############ CREDENTIALS FROM EDAMAM ##############
# 5fcdcfd1 Application ID
# 534473b68cb75e0091e737bb1b3866ea	 API Key 
# https://developer.edamam.com/food-database-api-docs for documentation and demo

app_key = '534473b68cb75e0091e737bb1b3866ea' # obtained from edamame application
app_id = '5fcdcfd1' # obtained from edamame application

api_source = "https://api.edamam.com/api/food-database/v2/parser"

choice = input("Welcome to the Barcode Search Function.\n Would you like to search using an image or a number?") # prompt the user for the type of input they would like to use

if choice == "image":
    tk.Tk().withdraw()  # we don't want a full GUI, so keep the root window from appearing
    image_filename = askopenfilename() # get the filepath of the image
    UPC = str(BarcodeReader (image_filename).data)
    print("\nThe UPC read from the image is: " + UPC)
elif choice == "number":
    UPC = str(input("Enter the UPC or EAN13: \n")) # samples: 028400003001. 4011. 0024100372775

response = requests.get(api_source + "?app_id=" + app_id + "&app_key=" + app_key + "&upc=" + UPC + "&nutrition-type=cooking") # found in edamame demo, specifies the upc and uses app key and id to authenticate

# print(response)
# print(response.status_code)


if response.status_code == 404:
    print("No item with the UPC has been found. Would you like to enter this item in manually?")
else: 
    item  = json.loads(response.text)
    print("The item entered is " + item["hints"][0]["food"]['label'])