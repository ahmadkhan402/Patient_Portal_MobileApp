import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../../route/routes';

export default function Login() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Welcome To Patient Portal</Text>

    <View style={styles.inputContainer}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your username"
        autoCapitalize="none"
      />
    </View>

    <View style={styles.inputContainer}>
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
    </View>

    <TouchableOpacity style={styles.forgotPassword}>
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.loginButtonText}>Login</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate(ScreenNames.SIGNUP)}>
      <Text style={styles.signupButtonText}>Register</Text>
    </TouchableOpacity>
  </View>
  );
}
