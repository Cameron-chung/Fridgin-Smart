import * as React from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import AsyncStorage from "@react-native-async-storage/async-storage";

//////////////// CREDENTIALS FROM EDAMAM ////////////////
//  5fcdcfd1 Application ID
//  534473b68cb75e0091e737bb1b3866ea     API Key
//  https://developer.edamam.com/food-database-api-docs for documentation and demo

var app_key = "534473b68cb75e0091e737bb1b3866ea"; // obtained from edamame application
var app_id = "5fcdcfd1"; // # obtained from edamame application

var api_source = "https://api.edamam.com/api/food-database/v2/parser";

var item_name = "";

export const ScannerScreen = ({ navigation, route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const barCodeReuqest = async (data) => {
    return new Promise((resolve, reject) => {
      var upc = data;
      // found in edamame demo, specifies the upc and uses app key and id to authenticate
      var requestAPI =
        api_source +
        "?app_id=" +
        app_id +
        "&app_key=" +
        app_key +
        "&upc=" +
        upc +
        "&nutrition-type=cooking";
      let request = new XMLHttpRequest();
      try {
        request.open("GET", requestAPI);
        request.send();
        request.onload = () => {
          if (request.status == 200) {
            var item = JSON.parse(request.response);
            resolve(item);
            item_name = item.hints[0].food.label;
            alert("The item name is: " + item_name);
          } else {
            resolve("fefe");
          }
        }; // end of reload
      } catch (error) {
        reject(error);
      }
    });
  };

  const save = async (item_name) => {
    try {
      await AsyncStorage.setItem(item_name, item_name);

    } catch (err){
        alert(err);
    }
  }

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    let request = await barCodeReuqest(data);
    if (request !== "fefe") {
      item_name = request.hints[0].food.label;
    } else {
      Alert.alert(
        "Warning",
        "This item is not available in the API! Would you like to add it manually?",
        [
          {
            text: "yes",
          },
          {
            text: "no",
          },
        ]
      );
    }
    await save(item_name);

    navigation.navigate("Fridge", { list: list });
  }; //end of handlebarcodescanned

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
