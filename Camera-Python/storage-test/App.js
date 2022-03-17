import React, { useState } from "react";
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  const [food, setFood] = useState();

  const save = async () => {
    try {
      await AsyncStorage.setItem("MyFood", food);

    } catch (err){
      alert(err);
    }
  }

  const load = async () =>{
    try {
      await AsyncStorage.setItem("MyFood", food);

    } catch (err){
      alert(err);
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={equire(".assets/welcome.png")}
        style={{width: "100%", height: 200, marginTop: 64}}
        resizeMode="contain"
      />

      <Text style={{height: 30}}>{food}</Text>
      <Text style={styles.food}>What's your favourite food?</Text>

      <TextInput style={styles.input} onChangeText={(text) => setFood(text)} />

      <TouchableOpacity style={styles.button}>
        <Text style={{color: "white" }}>Save my food!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
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
    alighSelf: "stretch",
    margin: 32,
    height: 64,
    borderRadius: 6,
    paddingHorizontal: 16,
    fontSize: 24,
    fontWeight: "300",
  },
  button: {
    backgroundColor: "#575DD9",
    alighItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 32,
    marginHorizontal: 32,
    borderRadius: 6,
  }
});
