import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import styles from './styles';
import { colors } from '../../src/utils/database';

export default function CustomAddModal ({ visible, onClose, onAdd , title ,item1,item2,item3,item4,item5}) {
  const [medicineName, setMedicineName] = useState('');
  const [duration, setDuration] = useState('');
  const [quantity, setQuantity] = useState('');
  const [time, setTime] = useState('');

  const handleAddMedicine = () => {
    // Validate input fields before adding medicine
    if (!medicineName || !duration || !quantity || !time) {
      alert('Please fill out all fields.');
      return;
    }

    // Create a new medicine object with input values
    const newMedicine = {
      name: medicineName,
      duration,
      quantity,
      time,
    };

    // Call the onAdd callback function with the new medicine object
    onAdd(newMedicine);

    // Clear input fields after adding medicine
    setMedicineName('');
    setDuration('');
    setQuantity('');
    setTime('');

    // Close the modal after adding medicine
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
      style={styles.modal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>{item1}</Text>
        <TextInput
         placeholder={`Please add ${item1}`}
          style={styles.input}
          value={medicineName}
          onChangeText={setMedicineName}
        />
        <Text style={styles.label}>{item2}</Text>
        <TextInput
         placeholder={`Please add ${item2}`}
          style={styles.input}
          value={duration}
          onChangeText={setDuration}
        />
       
        
            <Text style={styles.label}>{item3}</Text>
            <TextInput
             placeholder={`Please add ${item3}`}
              style={styles.input}
              value={quantity}
              onChangeText={setQuantity}
            />
       
       
            <Text style={styles.label}>{item4}</Text>
            <TextInput
            placeholder={`Please add ${item4}`}
              style={styles.input}
              value={time}
              onChangeText={setTime}
            />
            {item5  && (
              
          <>
            <Text style={styles.label}>{item5}</Text>
            <TextInput
            placeholder={`Please add ${item5}`}
              style={styles.input}
              value={time}
              onChangeText={setTime}
            />
            </>
         )}
   
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton} onPress={handleAddMedicine}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </Modal>
  );
};