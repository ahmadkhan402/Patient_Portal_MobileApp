import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import styles from './styles';
import { colors } from '../../src/utils/database';

export default function CustomAddModal ({ visible, onClose, onAdd , title ,item1,item2,item3,item4,item5}) {
  const [itemN1, setitem1] = useState('');
  const [itemN2, setitem2] = useState('');
  const [itemN3, setitem3] = useState('');
  const [itemN4, setitem4] = useState('');
  const [itemN5, setitem5] = useState('');
  const handleAddMedicine = () => {
    // Validate input fields before adding medicine
    if (!itemN1 || !itemN2 || !itemN3 || !itemN4) {
      alert('Please fill out all fields.');
      return;
    }

    // Create a new medicine object with input values
    const newMedicine = {
      itemN1,
      itemN2,
      itemN3,
      itemN4,
      itemN5

    };

    // Call the onAdd callback function with the new medicine object
    onAdd(newMedicine);

    // Clear input fields after adding medicine
    setitem1('');
    setitem2('');
    setitem3('');
    setitem4('');
    setitem5('');
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
          value={itemN1}
          onChangeText={setitem1}
        />
        <Text style={styles.label}>{item2}</Text>
        <TextInput
         placeholder={`Please add ${item2}`}
          style={styles.input}
          value={itemN2}
          onChangeText={setitem2}
        />
       
        
            <Text style={styles.label}>{item3}</Text>
            <TextInput
             placeholder={`Please add ${item3}`}
              style={styles.input}
              value={itemN3}
              onChangeText={setitem3}
            />
       
       
            <Text style={styles.label}>{item4}</Text>
            <TextInput
            placeholder={`Please add ${item4}`}
              style={styles.input}
              value={itemN4}
              onChangeText={setitem4}
            />
            {item5  && (
              
          <>
            <Text style={styles.label}>{item5}</Text>
            <TextInput
            placeholder={`Please add ${item5}`}
              style={styles.input}
              value={itemN5}
              onChangeText={setitem5}
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