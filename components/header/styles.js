import { StyleSheet } from 'react-native';
import { colors } from '../../src/utils/database';
const styles = StyleSheet.create({
    header: {
     flex: 0.2,
     justifyContent: 'center',
      backgroundColor: colors.blue,
      paddingTop:20,
    },
 headerContainer: {

    flexDirection: 'row',
    alignItems: 'center',
      paddingHorizontal: 20,
    
 },
    menuIcon: {
      marginRight: 20,

    },
    userAvatar: {

      width: 60,
      height: 60,
      borderRadius: 30,
      marginRight: 25,
    },
    userInfo: {
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
    },
    welcomeText: {
      fontSize: 16,
      fontWeight: '200',
      color: '#fff',
    },
    userName: {
      fontSize: 19,
      fontWeight: 'bold',
      color: '#fff',
    },
  });
  export default styles