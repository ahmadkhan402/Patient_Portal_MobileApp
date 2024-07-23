import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Alert } from 'react-native';
import CustomHeader from '../../../components/header';
import styles from './styles';
import { colors } from '../../utils/database';
import CustomAddModal from '../../../components/customAddModal';
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase';

export default function MyApointments() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    console.log("data", data);


    // const data = [
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
    //     {
    //         doctorName: 'Dr. Emily Wong',
    //         purpose: 'Dental Cleaning',
    //         clinic: 'Smile Dental Clinic',
    //         time: '11:15 AM'
    //     },
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
    //     {
    //         doctorName: 'Dr. Emily Wong',
    //         purpose: 'Dental Cleaning',
    //         clinic: 'Smile Dental Clinic',
    //         time: '11:15 AM'
    //     }
    // ];
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
        getDataOfRecentFromFirestore()
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

      const handleLongPress = (appointmentId) => {
        Alert.alert(
            'Appointment Done',
            'Are you sure you want to delete this appointment?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text:  'Done',
                    style: 'destructive',
                    onPress: () => deleteAppointment(appointmentId)
                }
            ],
            { cancelable: true }
        );
    };

    const deleteAppointment = async (appointmentId) => {
        try {
            const appointmentRef = doc(db, `PatientPortal/${auth.currentUser.uid}`, `Appointments/${auth.currentUser.uid}`, 'CurrentAppointments', appointmentId._id);
            await deleteDoc(appointmentRef);
            // After deletion, refresh data from Firestore
            getDataFromFirestore();

            handleAddMRecentAppointment(appointmentId);
        } catch (error) {
            console.error('Error deleting appointment:', error);
        }
    };
    const handleAddMRecentAppointment = async (newMedicine) => {
       console.log("new madicne", newMedicine);
        try {
          const userRef = doc(collection(db, `PatientPortal/${auth.currentUser.uid}`, `Appointments/${auth.currentUser.uid}`,"RecentAppointments"));
          await setDoc(userRef, {
            doctorName: newMedicine.doctorName,
            purpose: newMedicine.purpose,
            clinic: newMedicine.clinic,
            time: newMedicine.time,
            _id: userRef.id
          });
          getDataOfRecentFromFirestore()
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      
      };
     
      
     
    const getDataOfRecentFromFirestore = async () => {
        try {
          let array = []
          const querySnapshot = await getDocs(collection(db, `PatientPortal/${auth.currentUser.uid}`, `Appointments/${auth.currentUser.uid}`,"RecentAppointments"));
          querySnapshot.forEach((doc) => {
            array.push(doc.data())
           
          });
          setData1(array);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      
      }
      const [showMessage, setShowMessage] = useState(false);
      useEffect(() => {
        if (data.length === 0) {
          const timer = setTimeout(() => {
            setShowMessage(true);
          }, 1500);
          return () => clearTimeout(timer);
        } else {
          setShowMessage(false);
        }
      }, [data]);
      
      useEffect(() => {
        if (data1.length === 0) {
          const timer = setTimeout(() => {
            setShowMessage(true);
          }, 1500);
          return () => clearTimeout(timer);
        } else {
          setShowMessage(false);
        }
      }, [data1]);
    return (
        <View style={styles.container}>
            <CustomHeader />
            <View style={styles.itemcontainer}>
                <View style={styles.content}>
                    <Text style={styles.title}>Welcome to My Appointments</Text>
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
                        {data.length === 0 && showMessage && <Text>No Current Appointments Found</Text> } 
                        {data.map((item, index) => (
                         
                            <TouchableOpacity key={index} onLongPress={ () =>handleLongPress(item)} style={[styles.listItem, { backgroundColor: index % 2 === 0 ? '#f9f9f9' : colors.lightGrey, borderBottomEndRadius: 20 }]}>
                        
                                <Text style={styles.cell}>{item.doctorName}</Text>
                                <Text style={styles.cell}>{item.purpose}</Text>
                                <Text style={styles.cell}>{item.clinic}</Text>
                                <Text style={styles.cell}>{item.time}</Text>
                            </TouchableOpacity>
                        ))
                        }

                    </View>
                    
                    <View style={styles.divider}>
                        <Text style={styles.itemtitle}>Previous Appointments</Text>
                        <View style={[styles.listHeader]}>
                            <Text style={styles.cellHeader}>Dr.Name</Text>
                            <Text style={styles.cellHeader}>purpose</Text>
                            <Text style={styles.cellHeader}>Clinic</Text>
                            <Text style={styles.cellHeader}>Time</Text>
                        </View>
                        {data1.length === 0 && showMessage && <Text>No Recent Appointments Found</Text>} 
                        {data1.map((item, index) => (
                            <View key={index} style={[styles.listItem, { backgroundColor: index % 2 === 0 ? '#f9f9f9' : colors.lightGrey, borderBottomEndRadius: 20 }]}>
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
