import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import CustomHeader from '../../../components/header';
import ScreenNames from '../../../route/routes';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation()
    const [activeBox, setActiveBox] = useState(null);
const userName = "Ahmad";
  const handleBoxPress = (boxName) => {
    setActiveBox(boxName);
  };

  return (
    <View style={styles.container}>
    <CustomHeader userName={userName} />


    <View style={styles.itemContainer}>
      <Text style={styles.title}>Welcome to My Patient Portal</Text>
      <View style={styles.boxContainer}>
        <TouchableOpacity
          style={[styles.box, activeBox === 'Medicine' && styles.blueBox]}
          onPress={() =>{ 
            handleBoxPress('Medicine'),
            setTimeout(() => navigation.navigate(ScreenNames.MEDICINE), 500)}}
        >
          <Text style={[styles.boxText, activeBox === 'Medicine' && styles.blueText]}>Medicine</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, activeBox === 'My Doctor' && styles.blueBox]}
          onPress={() => handleBoxPress('My Doctor')}
        >
          <Text style={[styles.boxText, activeBox === 'My Doctor' && styles.blueText]}>My Doctor</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.boxContainer}>
        <TouchableOpacity
          style={[styles.box, activeBox === 'Medical History' && styles.blueBox]}
          onPress={() => handleBoxPress('Medical History')}
        >
          <Text style={[styles.boxText, activeBox === 'Medical History' && styles.blueText]}>Medical History</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, activeBox === 'Appointments' && styles.blueBox]}
          onPress={() => handleBoxPress('Appointments')}
        >
          <Text style={[styles.boxText, activeBox === 'Appointments' && styles.blueText]}>Appointments</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  );
}
