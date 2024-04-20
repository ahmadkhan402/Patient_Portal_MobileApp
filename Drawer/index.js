import { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Button, useWindowDimensions, StyleSheet, Image } from 'react-native';

import { NavigationContainer, useFocusEffect, useIsFocused, useNavigation } from '@react-navigation/native';

import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { AntDesign ,Ionicons} from '@expo/vector-icons';
import ScreenNames from '../route/routes';
import Login from '../src/screen/login';
import Home from '../src/screen/home';
import Medicine from '../src/screen/medicine';
import MedicalHistory from '../src/screen/medicalHistory';
import MyDoctor from '../src/screen/myDoctor';
import MyApointments from '../src/screen/appointments';
import Routes from '../route';
import styles from './styles';
import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();



// function Screen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Tabs"
//         component={Routes}
//         options={{ headerShown: false }} />
//     </Stack.Navigator>
//   )
// }

function CustomDrawerContent(props) {
  const [userName, setUserName] = useState("");

  const isfocus = useIsFocused()
  const status = useDrawerStatus()
  // useFocusEffect(() => {
  //   getDataFromFirestore()
  // })
  useEffect(() => {
    if(auth?.currentUser?.uid) getDataFromFirestore()

}, [status])

const getDataFromFirestore = async () => {
  const docRef = doc(db, "users", auth?.currentUser?.uid);
  try{
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    setUserName(docSnap.data()?.username)
  } else {
    console.log("No such document!");
  }
}catch(error){
  console.log("error",error)
}
}

  const navigation = useNavigation()
    const Handlelogout=()=>{
      signOut(auth).then(() => {

        // alert('Sign-out successful')
        navigation.navigate(ScreenNames.LOGIN)
      }).catch((error) => {
        // An error happened.
        alert('An error happened')
      });

    }


  return (
    <View style={styles.drawerContainer}>
    <View style={styles.drawerTopIcon}>
    <Ionicons name="menu-outline" size={30} color="#fff" />
    </View>
      <View style={styles.drawerHeader}>
        {/* Display your name at the top */}
        <Text style={styles.nameText}>{userName.substring(0, 10)}</Text>
      </View>

      {/* Your existing content */}
      <View style={styles.content}>
        <TouchableOpacity style={styles.logoutButton} onPress={Handlelogout}>
          <AntDesign name="logout" size={24} color="#fff"/>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


export default function DrawerNavigator() {

  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}
    
      screenOptions={{
        headerShown: false,
        headerTitleAlign: 'right',
        headerStyle: {
          backgroundColor: '#2c2c6c', // Instagram's header color
        },
        headerTintColor: '#fff', // Instagram's header text color
        headerTitleStyle: {
          fontWeight: 'bold',
        },
   
      }}>
      <Drawer.Screen name={ScreenNames.ROUTE} component={Routes} />
      {/* <Drawer.Screen name={ScreenNames.HOME} component={Home} />
        <Drawer.Screen name={ScreenNames.MEDICINE} component={Medicine} />
        <Drawer.Screen name={ScreenNames.MEDICALHISTORY} component={MedicalHistory} />
        <Drawer.Screen name={ScreenNames.MYDOCTOR} component={MyDoctor} />
        <Drawer.Screen name={ScreenNames.MYAPOINTMENTS} component={MyApointments} /> */}
    </Drawer.Navigator>
  )
}