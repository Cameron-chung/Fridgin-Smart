import React from "react";
import {DataTable} from 'react-native-paper';
import customData from './customData.json';

export default function App() {
  let foodArray = customData;
  // fetch("https://cors-anywhere.herokuapp.com/https://johnnypark.ca/api/imagelist").then(response => {
  //   return response.json()
  //   }).then(json => {
  //     console.log(json)
  //     this.setState({
  //       loading: false,
  //       fetchedData: json
  //     })
  //   }){customData.recipeCriteria1.ingredients}

  
  return (
    <DataTable>
    <DataTable.Header>
    <DataTable.Title>ID</DataTable.Title>
      <DataTable.Title >Ingredients</DataTable.Title>
      <DataTable.Title >Health</DataTable.Title>
      <DataTable.Title >Cuisine Type</DataTable.Title>
      <DataTable.Title> Meal </DataTable.Title>
    </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell>{customData.food1.ingredients}|</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>Oct 15th</DataTable.Cell>
      </DataTable.Row> 

    </DataTable>
  );
}
