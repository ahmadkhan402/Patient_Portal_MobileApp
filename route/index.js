import { View, Text, AppState } from "react-native";
import React, { useEffect, useState } from "react";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import Login from "../src/screen/login"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenNames from "./routes";
import Register from "../src/screen/signup";
import Home from "../src/screen/home";
import Medicine from "../src/screen/medicine";




const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();



export default function Routes() {


  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
        <Stack.Screen name={ScreenNames.SIGNUP} component={Register} />
        <Stack.Screen name={ScreenNames.HOME} component={Home} />
        <Stack.Screen name={ScreenNames.MEDICINE} component={Medicine} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
