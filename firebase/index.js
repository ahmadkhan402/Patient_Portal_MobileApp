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
  apiKey: "AIzaSyBX1UdMFbfH4r70i-dBqt8bksZKpkaxVbM",
  authDomain: "patentportal-110bc.firebaseapp.com",
  projectId: "patentportal-110bc",
  storageBucket: "patentportal-110bc.appspot.com",
  messagingSenderId: "1013277587081",
  appId: "1:1013277587081:web:5bf35a7867cfd4ef10b858"
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
export { auth }
export { db }
export { storage }
export { database }