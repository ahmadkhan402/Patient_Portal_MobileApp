import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import CustomHeader from '../../../components/header';
import styles from './styles';
import { colors } from '../../utils/database';
import CustomAddModal from '../../../components/customAddModal';

export default function MyApointments() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const data = [
        {
            doctorName: 'Dr. Imran Doger',
            purpose: 'Diabetes',
            clinic: 'Din Medical Complex',
            time: '03:00 PM'
        },
        {
            doctorName: 'Dr. Sarah Khan',
            purpose: 'General Checkup',
            clinic: 'City Medical Center',
            time: '10:30 AM'
        },
        {
            doctorName: 'Dr. John Smith',
            purpose: 'Cardiology Consultation',
            clinic: 'HeartCare Hospital',
            time: '02:00 PM'
        },
        {
            doctorName: 'Dr. Emily Wong',
            purpose: 'Dental Cleaning',
            clinic: 'Smile Dental Clinic',
            time: '11:15 AM'
        },
        {
            doctorName: 'Dr. Imran Doger',
            purpose: 'Diabetes',
            clinic: 'Din Medical Complex',
            time: '03:00 PM'
        },
        {
            doctorName: 'Dr. Sarah Khan',
            purpose: 'General Checkup',
            clinic: 'City Medical Center',
            time: '10:30 AM'
        },
        {
            doctorName: 'Dr. John Smith',
            purpose: 'Cardiology Consultation',
            clinic: 'HeartCare Hospital',
            time: '02:00 PM'
        },
        {
            doctorName: 'Dr. Emily Wong',
            purpose: 'Dental Cleaning',
            clinic: 'Smile Dental Clinic',
            time: '11:15 AM'
        }
    ];
    const data1 = [
        {
            doctorName: 'Dr. Imran Doger',
            purpose: 'Diabetes',
            clinic: 'Din Medical Complex',
            time: '03:00 PM'
        },
        {
            doctorName: 'Dr. Sarah Khan',
            purpose: 'General Checkup',
            clinic: 'City Medical Center',
            time: '10:30 AM'
        },
        {
            doctorName: 'Dr. John Smith',
            purpose: 'Cardiology Consultation',
            clinic: 'HeartCare Hospital',
            time: '02:00 PM'
        },

    ];

    const handleAddMedicine = (newMedicine) => {
        console.log('Adding new medicine:', newMedicine);
        // Perform actions to add the new medicine (e.g., update state, send API request, etc.)
    };
    return (
        <View style={styles.container}>
            <CustomHeader />
            <View style={styles.itemcontainer}>
                <View style={styles.content}>
                    <Text style={styles.title}>Welcome to My Doctor</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => setIsModalVisible(true)}>
                        <Text style={styles.buttonText}>Add</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.divider}>
                        <Text style={styles.itemtitle}>Current Appointments</Text>
                        <View style={[styles.listHeader]}>
                            <Text style={styles.cellHeader}>Dr.Name</Text>
                            <Text style={styles.cellHeader}>purpose</Text>
                            <Text style={styles.cellHeader}>Clinic</Text>
                            <Text style={styles.cellHeader}>Time</Text>
                        </View>

                        {data1.map((item, index) => (
                            <View style={[styles.listItem, { backgroundColor: index % 2 === 0 ? '#f9f9f9' : colors.lightGrey, borderBottomEndRadius: 20 }]}>
                                <Text style={styles.cell}>{item.doctorName}</Text>
                                <Text style={styles.cell}>{item.purpose}</Text>
                                <Text style={styles.cell}>{item.clinic}</Text>
                                <Text style={styles.cell}>{item.time}</Text>
                            </View>
                        ))
                        }

                    </View>
                    <View style={styles.divider}>
                        <Text style={styles.itemtitle}>Recent Appointments</Text>
                        <View style={[styles.listHeader]}>
                            <Text style={styles.cellHeader}>Dr.Name</Text>
                            <Text style={styles.cellHeader}>purpose</Text>
                            <Text style={styles.cellHeader}>Clinic</Text>
                            <Text style={styles.cellHeader}>Time</Text>
                        </View>
                        {data.map((item, index) => (
                            <View style={[styles.listItem, { backgroundColor: index % 2 === 0 ? '#f9f9f9' : colors.lightGrey, borderBottomEndRadius: 20 }]}>
                                <Text style={styles.cell}>{item.doctorName}</Text>
                                <Text style={styles.cell}>{item.purpose}</Text>
                                <Text style={styles.cell}>{item.clinic}</Text>
                                <Text style={styles.cell}>{item.time}</Text>
                            </View>
                        ))
                        }
                    </View>
                </ScrollView>
            </View>

            <CustomAddModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                title={'Add Appointment'}
                item1={'Doctor Name'}
                item2={'Purpose'}
                item3={'Clinic Name'}
                item4={'Time'}
                onAdd={handleAddMedicine}
            />
        </View>
    )

}
