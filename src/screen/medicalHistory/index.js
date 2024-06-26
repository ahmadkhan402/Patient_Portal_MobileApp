import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import CustomHeader from '../../../components/header';
import styles from './styles';
import { colors } from '../../utils/database';
import CustomAddModal from '../../../components/customAddModal';

export default function MedicalHistory() {
    const [isModalVisible, setIsModalVisible] = useState(false);


    const diseaseData = [
        {
          id: '1',
          diseaseName: 'Typhoid',
          symptoms: 'High fever, stomach pain, headache, weakness',
          hospitalName: 'City Hospital',
          checkupDateTime: '2024-04-20 10:00 AM',
        },
        {
          id: '2',
          diseaseName: 'Coronavirus',
          symptoms: 'Fever, dry cough, difficulty breathing, loss of taste or smell',
          hospitalName: 'General Medical Center',
          checkupDateTime: '2024-04-22 11:30 AM',
        },
        {
          id: '3',
          diseaseName: 'Hepatitis',
          symptoms: 'Jaundice, fatigue, abdominal pain, nausea',
          hospitalName: 'Regional Clinic',
          checkupDateTime: '2024-04-25 09:45 AM',
        },
        {
          id: '4',
          diseaseName: 'Diabetes',
          symptoms: 'Increased thirst, frequent urination, fatigue, blurred vision',
          hospitalName: 'Endocrinology Center',
          checkupDateTime: '2024-04-28 02:15 PM',
        },
      ];
      
      const handleAddMedicine = (newMedicine) => {
        console.log('Adding new medicine:', newMedicine);
        // Perform actions to add the new medicine (e.g., update state, send API request, etc.)
      };
    const renderDiseaseItem = ({ item,index }) => (
        <View style={styles.itemContainer}>
        <View style={{flexDirection:"row"}}>
        <View style={styles.itemIndexContainer}>
        <Text style={styles.itemIndex}>{index}</Text>
        </View>
            
        <View style={styles.itemContent}>
            <Text style={styles.diseaseName}>{item.diseaseName}</Text>
            <Text style={styles.subtitle}>Symptoms:</Text>
            <Text>{item.symptoms}</Text>
            <Text style={styles.subtitle}>Hospital Name:</Text>
            <Text>{item.hospitalName}</Text>
            <Text style={styles.subtitle}>Checkup Date/Time:</Text>
            <Text>{item.checkupDateTime}</Text>
                 
        </View>
        </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <CustomHeader />
            <View style={styles.itemcontainer}>
                <View style={styles.content}>
                    <Text style={styles.title}>Welcome to Medicine</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => setIsModalVisible(true)}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={diseaseData}
                    renderItem={renderDiseaseItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            <CustomAddModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                title={'Add Medical history'}
                item1={'Disease Name'}
                item2={'Symptoms'}
                item3={'Doctor Name'}
                item4={'Hospital Name'}
                item5={'Checkup Date Time'}
             onAdd={handleAddMedicine}
            />
        </View>
    )
}