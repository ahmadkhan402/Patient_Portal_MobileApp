import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './route';
 import { GestureHandlerRootView } from "react-native-gesture-handler";

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './Drawer';

export default function App() {
  return (
  <GestureHandlerRootView style={{ flex: 1 }}>
  <NavigationContainer>
    <DrawerNavigator/> 
   {/* <Routes/> */}
   </NavigationContainer>
</GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
