import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import CustomHeader from '../../../components/header';
import styles from './styles';
import { colors } from '../../utils/database';
import CustomAddModal from '../../../components/customAddModal';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase';
export default function MyDoctor() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);
  console.log("data", data);

//   const data = [
//   {
//     doctorName: 'Dr. Imran Doger',
//     specification: 'MBBS',
//     clinic: 'Din Medical Complex',
//     time: '09:00 AM - 05:00 PM'
//   },
//   {
//     doctorName: 'Dr. Sarah Khan',
//     specification: 'MD (Pediatrics)',
//     clinic: 'City Pediatric Center',
//     time: '10:00 AM - 06:00 PM'
//   },
//   {
//     doctorName: 'Dr. John Smith',
//     specification: 'MD (Cardiology)',
//     clinic: 'HeartCare Hospital',
//     time: '08:00 AM - 04:00 PM'
//   },
//   {
//     doctorName: 'Dr. Emily Wong',
//     specification: 'DDS (Dentistry)',
//     clinic: 'Smile Dental Clinic',
//     time: '11:00 AM - 07:00 PM'
//   }
// ];

const handleAddMedicine = async (newMedicine) => {
  console.log('====================================');
  console.log('Adding new medicine:', newMedicine);
  console.log('====================================');
  try {
    const userRef = doc(collection(db, `PatientPortal/${auth.currentUser.uid}`, "MyDoctor"));
    await setDoc(userRef, {
      doctorName: newMedicine.itemN1,
      specification: newMedicine.itemN2,
      clinic: newMedicine.itemN3,
      time: newMedicine.itemN4,
      id: auth.currentUser.uid,
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
    const querySnapshot = await getDocs(collection(db, `PatientPortal/${auth.currentUser.uid}`, "MyDoctor"));
    querySnapshot.forEach((doc) => {
      array.push(doc.data())
     
    });
    setData(array);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

}
  const renderItem = ({ item, index }) => {
    const backgroundColor = index % 2 === 0 ? '#f9f9f9' : colors.lightGrey; // Alternate row colors

    return (
      <View style={[styles.listItem, { backgroundColor ,borderBottomEndRadius: 20}]}>
        <Text style={styles.cell}>{item.doctorName}</Text>
        <Text style={styles.cell}>{item.specification}</Text>
        <Text style={styles.cell}>{item.clinic}</Text>
        <Text style={styles.cell}>{item.time}</Text>
      </View>

    );
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
        <View style={[styles.listHeader]}>
            <Text style={styles.cellHeader}>Doctor Name</Text>
            <Text style={styles.cellHeader}>Specification</Text>
            <Text style={styles.cellHeader}>Clinic Name</Text>
            <Text style={styles.cellHeader}>Time</Text>
        </View>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <CustomAddModal
                visible={isModalVisible}
                onClose={() => setIsModalVisible(false)}
                title ={'Add Doctor'}
                item1={'Doctor Name'}
                item2={'Specification'}
                item3={'Clinic Name'}
                item4={'Time'}
                onAdd={handleAddMedicine}
            />
    </View>
  )

}
