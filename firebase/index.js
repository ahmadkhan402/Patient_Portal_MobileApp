// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOLmybOzgPAl_dv9Nu6n6gjWYLOr4y74U",
  authDomain: "patientportal-2c9e0.firebaseapp.com",
  projectId: "patientportal-2c9e0",
  storageBucket: "patientportal-2c9e0.appspot.com",
  messagingSenderId: "153225066358",
  appId: "1:153225066358:web:5c58c0417d41d7adf76c57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const storage = getStorage(app)
const db = getFirestore(app);
const database = getDatabase(app)
export {auth}
export {db}
export {storage}
export {database}