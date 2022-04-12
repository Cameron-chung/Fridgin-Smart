import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FridgeScreen} from "./components/Fridge"
import {ScannerScreen} from "./components/Scanner"
import {SettingsScreen} from "./components/Settings"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Scanner') {
              return (
                <MaterialCommunityIcons
                  name={
                    focused
                      ? 'cart'
                      : 'cart-plus'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Fridge') {
              return (
                <MaterialCommunityIcons
                  name={focused ? 'fridge' : 'fridge-outline'}
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'Settings') {
              return (
                <Ionicons
                  name={focused ? 'ios-settings-sharp' : 'ios-settings-outline'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'tomato',
        })}
      >
        <Tab.Screen
          name="Scanner"
          component={ScannerScreen}
          //options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen 
          name="Fridge" 
          component={FridgeScreen}
          />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}