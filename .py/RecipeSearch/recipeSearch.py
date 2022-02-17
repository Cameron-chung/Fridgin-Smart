import requests # to send requests to the edamam API
import json # to parse json object
import tkinter as tk
import marshal


############ CREDENTIALS FROM EDAMAM ##############
# 72310948 Application ID
# 5c1f635cceec1d9cd8bbc31cd5940f7e	 API Key 
# https://developer.edamam.com/edamam-docs-recipe-api for documentation and demo

app_key = '&app_key=5c1f635cceec1d9cd8bbc31cd5940f7e' # obtained from edamame application
app_id = '&app_id=72310948' # obtained from edamame application

api_source = "https://api.edamam.com/api/recipes/v2?type=public"

# ingredients = input("Welcome to the Recipe Search Function.\n Please enter a comma separated list of ingredients to find a recipe :)") # prompt the user for the type of input they would like to use

# ingredients = ingredients.replace(" ", "")
# ingredients = ingredients.replace(",", "%20")

# query = "q=" + ingredients

# response = requests.get(api_source + query + app_key + app_id) # found in edamame demo, specifies the upc and uses app key and id to authenticate


# result  = json.loads(response.text)

# print("The first recipe found is " + result["hits"][0]["recipe"]["label"])

# Setting up GUI for selection 
window = tk.Tk()
greeting = tk.Label(text="Welcome to Fridgin' Smarts' Recipe Search. Enter Your criteria and hit submit!")
greeting.pack()


ingredientsLbl = tk.Label(text="Ingredients")
ingredientsEntry = tk.Entry()
ingredientsLbl.pack(side="left")
ingredientsEntry.pack(side="left")

# Health dropdown menu options
healthOptions = [
    "Health",
    "dairy-free",
    "egg-free",
    "peanut-free",
    "fish-free",
    "pork-free",
    "red-Meat-free",
    "alcohol-free",
    "kosher"
]

# datatype of menu text
health = tk.StringVar(window)
health.set(healthOptions[0])

# Create Dropdown menu
healthDrop = tk.OptionMenu(window , health , *healthOptions )
healthDrop.pack()

# Cuisine Type dropdown menu options
cuisineTypeOptions = [
    "Cuisine Type",
    "American",
    "Asian",
    "British",
    "Caribbean",
    "Central Europe",
    "Chinese",
    "Eastern Europe",
    "French",
    "Indian",
    "Italian",
    "Japanese",
    "Kosher",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "South American",
    "South East Asian"
]

# datatype of menu text
cuisineType = tk.StringVar(window)
cuisineType.set(cuisineTypeOptions[0])

# Create Dropdown menu
cuisineTypeDrop = tk.OptionMenu(window , cuisineType , *cuisineTypeOptions )
cuisineTypeDrop.pack()

mealTypeOptions = [
    "Meal Type",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snack"
]

# datatype of menu text
mealType = tk.StringVar(window)
mealType.set(mealTypeOptions[0])

# Create Dropdown menu
mealTypeDrop = tk.OptionMenu(window , mealType , *mealTypeOptions )
mealTypeDrop.pack()


recipeCriteria = {
    "ingredients": marshal.dumps(ingredientsEntry.get()),
    "health": marshal.dumps(health.get()),
    "cuisineType": marshal.dumps(cuisineType.get()),
    "mealType": marshal.dumps(mealType.get())
}




def printCriteria():
    recipeCriteria = {
        "ingredients": ingredientsEntry.get(),
        "health": health.get(),
        "cuisineType": cuisineType.get(),
        "mealType": mealType.get()
    }

    recipeCriteriaJSON = json.loads(json.dumps(recipeCriteria))

    print("You have entered the following recipe search criteria:")
    print(recipeCriteriaJSON["ingredients"])
    print(recipeCriteriaJSON["health"])
    print(recipeCriteriaJSON["cuisineType"])
    print(recipeCriteriaJSON["mealType"])

    searchForRecipe(recipeCriteria)



submitBtn = tk.Button(
    text="Submit",
    width=10,
    height=2,
    command=printCriteria
)

submitBtn.pack()


def searchForRecipe(recipeCriteria):
    ingrQuery = "&q=" + recipeCriteria["ingredients"].replace(" ", "").replace(",", "%20")
    healthQuery = "&health=" + recipeCriteria["health"]
    cuisineTypeQuery = "&cuisineType=" + recipeCriteria["cuisineType"]
    mealTypeQuery = "&mealType=" + recipeCriteria["mealType"]
    # print(api_source + ingrQuery + healthQuery + cuisineTypeQuery + mealTypeQuery + app_key + app_id)
    response = requests.get(api_source + ingrQuery + healthQuery + cuisineTypeQuery + mealTypeQuery + app_key + app_id) # found in edamame demo, specifies the upc and uses app key and id to authenticate
    # print(response)
    result  = json.loads(response.text)
    print(result)
    print("The first recipe found is " + result["hits"][0]["recipe"]["label"])
    print("The second recipe found is " + result["hits"][1]["recipe"]["label"])



window.mainloop()