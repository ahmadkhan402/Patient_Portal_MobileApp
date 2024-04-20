import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import CustomHeader from '../../../components/header';
import styles from './styles';
import { colors } from '../../utils/database';
import CustomAddModal from '../../../components/customAddModal';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase';

export default function MyApointments() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [data1, setData] = useState([]);
    console.log("data", data);


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
    // const data1 = [
    //     {
    //         doctorName: 'Dr. Imran Doger',
    //         purpose: 'Diabetes',
    //         clinic: 'Din Medical Complex',
    //         time: '03:00 PM'
    //     },
    //     {
    //         doctorName: 'Dr. Sarah Khan',
    //         purpose: 'General Checkup',
    //         clinic: 'City Medical Center',
    //         time: '10:30 AM'
    //     },
    //     {
    //         doctorName: 'Dr. John Smith',
    //         purpose: 'Cardiology Consultation',
    //         clinic: 'HeartCare Hospital',
    //         time: '02:00 PM'
    //     },

    // ];

    const handleAddMedicine = async (newMedicine) => {
        console.log('====================================');
        console.log('Adding new medicine:', newMedicine);
        console.log('====================================');
        try {
          const userRef = doc(collection(db, `PatientPortal/${auth.currentUser.uid}`, `Appointments/${auth.currentUser.uid}`,"CurrentAppointments"));
          await setDoc(userRef, {
            doctorName: newMedicine.itemN1,
            purpose: newMedicine.itemN2,
            clinic: newMedicine.itemN3,
            time: newMedicine.itemN4,
            _id: userRef.id
          });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      
      };
      
      useEffect(() => {
        getDataFromFirestore()
      }, [isModalVisible])
      
      const getDataFromFirestore = async () => {
        try {
          let array = []
          const querySnapshot = await getDocs(collection(db, `PatientPortal/${auth.currentUser.uid}`, `Appointments/${auth.currentUser.uid}`,"CurrentAppointments"));
          querySnapshot.forEach((doc) => {
            array.push(doc.data())
           
          });
          setData(array);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      
      }

      const handleAppointentDone = async (item) => {
          console.log("item",item);
      }
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
                <ScrollView showsVerticalScrollIndicator={false} key={Math.random()}>
                    <View style={styles.divider}>
                        <Text style={styles.itemtitle}>Current Appointments</Text>
                        <View style={[styles.listHeader]}>
                            <Text style={styles.cellHeader}>Dr.Name</Text>
                            <Text style={styles.cellHeader}>purpose</Text>
                            <Text style={styles.cellHeader}>Clinic</Text>
                            <Text style={styles.cellHeader}>Time</Text>
                        </View>

                        {data1.map((item, index) => (
                            <TouchableOpacity onLongPress={handleAppointentDone(item._id)} style={[styles.listItem, { backgroundColor: index % 2 === 0 ? '#f9f9f9' : colors.lightGrey, borderBottomEndRadius: 20 }]}>
                                <Text style={styles.cell}>{item.doctorName}</Text>
                                <Text style={styles.cell}>{item.purpose}</Text>
                                <Text style={styles.cell}>{item.clinic}</Text>
                                <Text style={styles.cell}>{item.time}</Text>
                            </TouchableOpacity>
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
