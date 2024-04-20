import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../../../route/routes';

export default function Register() {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an Account</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          autoCapitalize="words"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
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

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={()=> navigation.navigate(ScreenNames.LOGIN)}>
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
