import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import CustomHeader from '../../../components/header';
import styles from './styles';
import { colors } from '../../utils/database';
import CustomAddModal from '../../../components/customAddModal';
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase';
export default function Medicine() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [data, setData] = useState([]);

  //   const data = [
  //   { name: 'Medicine A', time: 'Morning', quantity: '1 pill', duration: '7 days' },
  //   { name: 'Medicine B', time: 'Afternoon', quantity: '2 pills', duration: '14 days' },
  //   { name: 'Medicine C', time: 'Evening', quantity: '1 tablet', duration: '10 days' },
  //   { name: 'Medicine D', time: 'Night', quantity: '1 capsule', duration: '30 days' },
  //   { name: 'Medicine E', time: 'Morning', quantity: '1 pill', duration: '5 days' },
  //   { name: 'Medicine F', time: 'Afternoon', quantity: '1 pill', duration: '21 days' },
  //   { name: 'Medicine G', time: 'Evening', quantity: '2 tablets', duration: '14 days' },
  //   { name: 'Medicine H', time: 'Night', quantity: '1 capsule', duration: '7 days' },
  //   { name: 'Medicine I', time: 'Morning', quantity: '2 pills', duration: '10 days' },
  //   { name: 'Medicine J', time: 'Afternoon', quantity: '1 tablet', duration: '7 days' },
  //   { name: 'Medicine K', time: 'Evening', quantity: '1 pill', duration: '30 days' },
  //   { name: 'Medicine L', time: 'Night', quantity: '1 capsule', duration: '14 days' },
  //   { name: 'Medicine D', time: 'Night', quantity: '1 capsule', duration: '30 days' },
  //   { name: 'Medicine E', time: 'Morning', quantity: '1 pill', duration: '5 days' },
  //   { name: 'Medicine F', time: 'Afternoon', quantity: '1 pill', duration: '21 days' },
  //   { name: 'Medicine G', time: 'Evening', quantity: '2 tablets', duration: '14 days' },
  //   { name: 'Medicine H', time: 'Night', quantity: '1 capsule', duration: '7 days' },
  //   { name: 'Medicine I', time: 'Morning', quantity: '2 pills', duration: '10 days' },
  //   { name: 'Medicine J', time: 'Afternoon', quantity: '1 tablet', duration: '7 days' },
  //   { name: 'Medicine K', time: 'Evening', quantity: '1 pill', duration: '30 days' },
  //   { name: 'Medicine L', time: 'Night', quantity: '1 capsule', duration: '14 days' },
  //   // Add more medicine objects as needed
  // ];;

  const renderItem = ({ item, index }) => {
    const backgroundColor = index % 2 === 0 ? '#f9f9f9' : colors.lightGrey; // Alternate row colors

    return (
      <View style={[styles.listItem, { backgroundColor }]}>
        <Text style={styles.cell}>{item.name}</Text>
        <Text style={styles.cell}>{item.time}</Text>
        <Text style={styles.cell}>{item.quantity}</Text>
        <Text style={styles.cell}>{item.duration}</Text>
      </View>

    );
  };

  const handleAddMedicine = async (newMedicine) => {
    console.log('====================================');
    console.log('Adding new medicine ==:', newMedicine);
    console.log('====================================');
    try {
      const userRef = doc(collection(db, `PatientPortal/${auth.currentUser.uid}`, "Medicines"));
      await setDoc(userRef, {
        name: newMedicine.itemN1,
        duration: newMedicine.itemN2,
        quantity: newMedicine.itemN3,
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
      const querySnapshot = await getDocs(collection(db, `PatientPortal/${auth.currentUser.uid}`, "Medicines"));
      querySnapshot.forEach((doc) => {
        array.push(doc.data())

      });
      setData(array);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }
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
        <View style={[styles.listHeader]}>
          <Text style={styles.cellHeader}>Name</Text>
          <Text style={styles.cellHeader}>Time</Text>
          <Text style={styles.cellHeader}>Quantity</Text>
          <Text style={styles.cellHeader}>Duration</Text>
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
        title={'Add Medicine'}
        item1={'Medicine Name'}
        item2={'Duration'}
        item3={'Quantity'}
        item4={'Time'}
        onAdd={handleAddMedicine}
      />
    </View>
  )

}
