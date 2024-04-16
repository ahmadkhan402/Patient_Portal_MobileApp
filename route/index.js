import { View, Text, AppState } from "react-native";
import React, { useEffect, useState } from "react";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenNames from "./routes";
import Login from "../src/screen/Login";
import Register from "../src/screen/signup";



const Stack = createNativeStackNavigator();
const navigationRef = createNavigationContainerRef();



export default function Routes() {


  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={ScreenNames.LOGIN} component={Login} />
        <Stack.Screen name={ScreenNames.SIGNUP} component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
