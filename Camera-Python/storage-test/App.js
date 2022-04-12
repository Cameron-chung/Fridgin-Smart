import React from "react";
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {

  const [food, setFood] = React.useState("");

  const save = async () => {
    try {
      await AsyncStorage.setItem("MyFood", food);

    } catch (err){
        alert(err);
    }
  }

  const load = async () =>{
    try {
      let food = await AsyncStorage.getItem("MyFood");

      if (food !== null){
        setFood(food);
      }
    } catch (err){
        alert(err);
    }
  }

  const remove = async () =>{
    try {
      await AsyncStorage.removeItem("MyFood");

      if (food !== null){
        setFood(food);
      }
    } catch (err){
        alert(err);
    } finally {
        setFood("");
    }
  }

  React.useEffect(() => {
    load();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/welcome.png")}
        style={{width: "100%", height: 200, marginTop: 64}}
        resizeMode="contain"
      />

      <Text style={{height: 30}}>{food}</Text>
      <Text style={styles.food}>What's your favourite food?</Text>

      <TextInput style={styles.input} onChangeText={(text) => setFood(text)} />

      <TouchableOpacity style={styles.button} onPress={() => save()}>
        <Text style={{color: "white" }}>Save my food!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => remove()}>
        <Text style={{color: "white" }}>Remove my food!</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: "300",
  },
  input: {
    borderWidth: 1,
    borderColor: "#575DD9",
    alignSelf: "stretch",
    margin: 32,
    height: 64,
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 24,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "#575DD9",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 32,
    marginHorizontal: 32,
    borderRadius: 6,
  }
});

const wrapSetList = async (item_name) => {
  return new Promise((resolve, reject) => {
    resolve(
      setList((prev) => {
        return [...prev, { item_name }];
      })
    );
  });
};

const deleteItem = (title) => {
  var array = [...newlist]; // make a separate copy of the array
  let newArray = [];
  //console.log(array);
    for(let i =0; i<array.length; i++){
      if(array[i].item_name !== title){
        newArray.push(array[i]);
      }
    }
    //console.log(newArray);
    setNewList(newArray);
};