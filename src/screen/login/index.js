import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../../route/routes';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

export default function Login() {
  const navigation = useNavigation()

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [Error, setError] = useState("");
  const [send, setSend] = useState("");


  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
          navigation.navigate(ScreenNames.HOME)
        }
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
        } else if (errorCode == "auth/invalid-credential") {
          customErrorMessage =
            "Invalid Email or Password.\n  Please try again.";
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
          setError(customErrorMessage)
          setTimeout(() => {
            setError("");
          }, 1000);
      });
  };
   
const handleForgetPassword = () => {
  if (email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSend("Email has been send Successfully");
        setTimeout(() => {
          setSend("");
        }, 1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setTimeout(() => {
          setError("");
        }, 1000);
      });
  } else {
      setError("Please enter valid email");
        setTimeout(() => {
          setError("");
        }, 1000);
  }
};
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome To Patient Portal</Text>

    <View style={styles.inputContainer}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
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

    <TouchableOpacity style={styles.forgotPassword} onPress={handleForgetPassword}>
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.loginButton}onPress={handleLogin}>
      <Text style={styles.loginButtonText}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate(ScreenNames.SIGNUP)}>
      <Text style={styles.signupButtonText}>Register</Text>
    </TouchableOpacity>
    
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
        {send != "" && <Text style = {{alignItems:"flex-end",  textAlign: "right", fontSize: 13,color:"green"}}>{send}</Text>}
  
        </View>
  </View>
  );
}
