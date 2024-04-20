
import {  StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../utils/database';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // paddingHorizontal: 20,
  },
  itemContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: Math.min(20, width * 0.1), // Adjust max font size based on screen width
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 5,
  },
  box: {
    flex: 1,
    backgroundColor: colors.backgroundLiteBlue,
    width: '100%',
    padding: 20,
    paddingVertical:60,
    marginRight: 5,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  blueBox: {
    flex: 1,
    backgroundColor: colors.blue,
    width: '100%',
    padding: 20,
    paddingVertical:60,
    marginRight: 4,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

  export default styles