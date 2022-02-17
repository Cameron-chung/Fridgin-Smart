import requests # to send requests to the edamam API
import json # to parse json object
import tkinter as tk
from tkinter import ttk
from tkinter import filedialog as fd
from tkinter.messagebox import showinfo
from OCR import OpticalCharacterRecognition


############ CREDENTIALS FROM EDAMAM ##############
# 72310948 Application ID
# 5c1f635cceec1d9cd8bbc31cd5940f7e	 API Key 
# https://developer.edamam.com/edamam-docs-recipe-api for documentation and demo

app_key = '&app_key=5c1f635cceec1d9cd8bbc31cd5940f7e' # obtained from edamame application
app_id = '&app_id=72310948' # obtained from edamame application

api_source = "https://api.edamam.com/api/recipes/v2?type=public"


# Setting up GUI for selection 
window = tk.Tk()
greeting = tk.Label(text="Welcome to Fridgin' Smarts' OCR Item Search. Choose your image and hit submit")
greeting.pack()


def select_file():
    filetypes = (
        ('image files', '*.png *.jpg'),
        ('All files', '*.*')
    )
    filename = fd.askopenfilename(
        title='Open a file',
        initialdir='.py\OCRSearch\images',
        filetypes=filetypes)

    text = OpticalCharacterRecognition(filename)

    showinfo(
        title='The text read is as follows:',
        message=text
    )

# open button
open_button = ttk.Button(
    window,
    text='Choose an Image',
    command=select_file
)



open_button.pack(expand=True)



window.mainloop()