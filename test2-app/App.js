import React from "react";
import {DataTable} from 'react-native-paper';
import {customData} from './customData.json';
import { SafeAreaView, TextInput } from "react-native";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import {useRoutes} from 'hookrouter';
import { Wrapper } from "./Components/Wrapper";
import { Navbar } from "./Components/Navbar";
import {Profile} from './Pages/Home';
import {Logs} from './Pages/Logs';
import {Fridge} from './Pages/Fridge';
import {NotFound} from './Pages/NotFound';

const routes =  {
  '/': () => <Profile/>,
  '/Fridge': () => <Fridge/>,
  '/Logs/:name': ({name}) => <Logs name={name}/>,
}
export default function App() {
  const match = useRoutes(routes)
  return(
    <Wrapper>
      <Navbar/>
      {match || < NotFound />}
      
    </Wrapper>

  );

}


