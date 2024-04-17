import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import CustomHeader from '../../../components/header';
import styles from './styles';

export default function Medicine() {
    const data = [
        { name: 'Medicine A', time: 'Morning', quantity: '1 pill', duration: '7 days' },
        { name: 'Medicine B', time: 'Afternoon', quantity: '2 pills', duration: '14 days' },
      ];
    
      const renderItem = ({ item, index }) => {
        const backgroundColor = index % 2 === 0 ? '#f9f9f9' : '#ffffff'; // Alternate row colors
    
        return (
          <View style={[styles.listItem, { backgroundColor }]}>
            <Text style={styles.cell}>{item.name}</Text>
            <Text style={styles.cell}>{item.time}</Text>
            <Text style={styles.cell}>{item.quantity}</Text>
            <Text style={styles.cell}>{item.duration}</Text>
          </View>
        );
      };
    
      return (
        <View style={styles.container}>
       <CustomHeader/>
       <View style={styles.itemcontainer}>
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Medicine</Text>
      </View>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Add</Text></TouchableOpacity>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        </View>
      )
    
}
