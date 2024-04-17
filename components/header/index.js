import React from 'react';
import { View, Text,  Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import styles from './styles';

export default function CustomHeader({ userName }){
  const handleMenuPress = () => {
    // Handle menu button press (e.g., navigation drawer toggle)
    console.log('Menu button pressed');
  };

  return (
    <View style={styles.header}>
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleMenuPress}>
        <Ionicons name="menu-outline" size={30} color="#fff" style={styles.menuIcon} />
      </TouchableOpacity>
      <Image source={{uri:"data:image/jpeg;base64,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"}} style={styles.userAvatar} />
      <View style={styles.userInfo}>
        <Text style={styles.welcomeText}>Welcome back</Text>
        <Text style={styles.userName}>Ahmad</Text>
      </View>
      </View>
    </View>
  );
};
