import React from "react";
import {DataTable} from 'react-native-paper';

export default function App() {
  return (
    <DataTable>
    <DataTable.Header>
      <DataTable.Title
        sortDirection='descending'>Item Name</DataTable.Title>
      <DataTable.Title numeric>Quantity</DataTable.Title>
      <DataTable.Title numeric>Expiry Date</DataTable.Title>
    </DataTable.Header>
    <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>Oct 15th</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>Oct 15th</DataTable.Cell>
      </DataTable.Row>

    </DataTable>
  );
}
