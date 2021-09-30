
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import {NavigationContainer} from "react-navigation/native"
import HomeScreen from './screens/HomeScreen';
import ISStrackerScreen from './screens/ISStrackerScreen';
import MetorsScreen from './screens/MetorsScreen';


const Stack=createStackNavigator()


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen  name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen  name="ISS" component={ISStrackerScreen}></Stack.Screen>
        <Stack.Screen  name="Metors" component={MetorsScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}



