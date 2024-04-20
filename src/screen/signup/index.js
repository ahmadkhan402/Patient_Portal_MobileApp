import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../../route/routes';
import { auth, db } from '../../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Register() {
    const navigation = useNavigation()

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [Username, setUserName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [Error, setError] = useState("");
    const [id, setId] = useState("");
  

    const handleSignUp = () => {
      if(password !== confirmPassword){
        Alert.alert("Password not matched");
        return
      }
     try {
    
      createUserWithEmailAndPassword(auth, email, password )
        .then((userCredential) => {
          // Signed up
  
          const user = userCredential.user;
          console.log("User", user);
          setId(user.uid);
          AddUserData(id, Username, email);
          console.log("register User", user.uid);
          navigation.navigate(ScreenNames.LOGIN)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
  
          let customErrorMessage = "";
          if (errorCode == "auth/user-not-found") {
            customErrorMessage = "User not found.\n  Please check your email.";
          } else if (errorCode == "auth/wrong-password") {
            customErrorMessage = "Incorrect password.\n  Please try again.";
          } else if (errorCode == "auth/invalid-email") {
            customErrorMessage = "Invalid-email.\n  Please try again.";
          } else if (errorCode == "auth/network-request-failed") {
            customErrorMessage = "Network-request-failed.\n Please try again.";
          } else if (errorCode == "auth/weak-password") {
            customErrorMessage =
              "Weak password! \n Password should be at least 6 Characters.";
          } else if (errorCode == "auth/missing-password") {
            customErrorMessage = "Missing password! \n Please write password";
          } else if (errorCode == "auth/missing-email") {
            customErrorMessage = "Missing email! \n Please write email";
          } else {
            customErrorMessage = errorMessage;
          }
          setError(customErrorMessage);
        });
          
     } catch (error) {
      console.log("error", error);
     }
    };
    const AddUserData = async () => {
      try {
        const userRef = doc(db, "users", auth.currentUser.uid);
        await setDoc(userRef, {
          username: Username,
          email: email,
          id: auth.currentUser.uid,
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          autoCapitalize="words"
          onChangeText={(e) => setUserName(e)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(e) => setEmail(e)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={(p) => setPassword(p)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry={true}
          onChangeText={(p) => setConfirmPassword(p)}
        />
      </View>
      <View style = {styles.error}>
      <Text
          style={{
            alignItems:"flex-end",
            color: "red",
            textAlign: "right",
            fontSize: 13,
          }}
        >
          {Error}
        </Text>
        </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleSignUp}>
        <Text style={styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.forgotPassword}>
      <Text style={styles.forgotPasswordText}>Already have an account? </Text>
      <TouchableOpacity onPress={()=> navigation.navigate(ScreenNames.LOGIN)}>
        <Text style={styles.loginText}> Login</Text> 
        </TouchableOpacity>
     
      </View> 
    </View>
  );
}
