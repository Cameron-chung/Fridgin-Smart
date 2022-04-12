import * as React from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
//import { get } from "react-native/Libraries/Utilities/PixelRatio";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: "rgba(247,247,247,1.0)",
  },
  item: {
    padding: 10,
    fontSize: 14,
    height: 60,
    backgroundColor: "rgba(247,247,247,1.0)",
    borderRadius: 10,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
  },
  buttonContainer: {
    height: 50,
    alignItems: "flex-end",
  },
  button: {
    fontSize: 24,
  },
});

export const getTodaysDate = () =>{
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  return today;
}


export const FridgeScreen = ({ route }) => {
  const [newlist, setNewList] = useState([]);
  const [added, setAdded] = useState(false);
  const [routeparams, setRouteParams] = useState("");
  
 
  const selected = (title) => {
   
    Alert.alert(title, "Purchased on:" + getTodaysDate(),
     [
      {
        text: "Remove",
        onPress: () => {deleteItem(title)},
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ]);
  };

  const deleteItem = async (title) =>{
    try {
      await AsyncStorage.removeItem(title);

    } catch (err){
        alert(err);
    }
  }

  const getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch (e){
      //read key error
    }
  }

  const getMultipleItems = async() => {
    try {
      getAllKeys()
      newlist = await AsyncStorage.multiGet(keys)
    } catch (e){
      //read error
    }
  }

  const Item = ({ title }) => (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          selected(title);
        }}
      >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );

  const addItem = (arr) => { //add items to the list. arr it the list [Object{data}, ...] from scannner
    setRouteParams(route.params); //routeparams = route.params
    setAdded(false); //prevents infinte re-rendering
    setNewList(arr); //makes a copy of route.params.lists. There will be only one render coz of setNewList
        //console.log(arr); //testing for the BUG!!!!!
  };

  if(!!route.params && route.params !== routeparams){ //route.params should not be undefined and should be different than routeparams state variable
    setAdded(true); //setAdded(true) = will reload once it reaches the end of code
  }
  if (!!route.params && !!route.params.list && added) { //becuz 'added' in a parameter, it would only rerender once, thanks to line 102
    addItem(route.params.list); 
  } 

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionHeader}>
        This is the contents of your Fridge as of {getTodaysDate()}:
      </Text>
      <FlatList
        data={newlist}
        renderItem={({ item }) => <Item title={item.item_name} />}
      />
    </SafeAreaView>
  );
};
