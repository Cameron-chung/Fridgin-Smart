import React, { useState } from "react";
import { Page } from "../Components/Page";
import { DataTable } from "react-native-paper";
import {
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import FoodItem from "../Components/FoodItem";

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Apple",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Banana ",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "juice Item",
  },
];
export const Fridge = () => {
  const [food, setFood] = useState();

  const handleAddFood = () => {
    //keyboard.dimiss(); //on mobile device, can dismiss keyboard once enter is hit
    setFoodItems([...foodItems, food]); //food is appended to foodItems[]arry
    setFood(null); //textinput area empties
  };
  //this is how we create a state for a function componenet in REACT NATIVE. 'Food' would be the name of the state. 'setFood' would be the function we're gonna use to set the first's arugment's state.

  //Now we have the food items, but now we want to store the items in an array 
  //so we can map them over
    const [foodItems, setFoodItems] = useState([]);

    const deleteItem = (index) => {
        let foodItemsCopy = [...foodItems];
        foodItemsCopy.splice(index,1);
        setFoodItems(foodItemsCopy)
    }
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <Page title="Fridge">
      Contents of your Fridge:
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {
          foodItems.map((item, index) => {
              return <FoodItem key = {index} text = {item}/>
          })
      }
      {/* <FoodItem text={"chicken"} />
      <FoodItem text={"tomato"} />
      <FoodItem text={"brocolli"} />
      <FoodItem text={"orange"} /> */} 
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardwrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Add Items manually"}
          onChangeText={(text) => setFood(text)}
        />

        <TouchableOpacity onPress={() => handleAddFood()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Page>
  );
};

const styles = StyleSheet.create({
  keyboardwrapper: {
    //position: 'absolute',
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "100%",
  },
  addWrapper: {
    //used for '+' button
    height: 60,
    width: 60,
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    alignItems: "center",
  },
  addText: {
    alignItems: "Right",
  },
});
