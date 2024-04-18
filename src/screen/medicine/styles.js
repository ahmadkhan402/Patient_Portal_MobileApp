import { StyleSheet } from "react-native";
import { colors } from "../../utils/database";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemcontainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderWidth:1,
    // borderBottomWidth: 0,
    borderLeftColor: colors.black,
    
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 8,
    borderWidth:1,
    backgroundColor: colors.silver,
     borderTopEndRadius:20,
      borderTopStartRadius:20, 
      borderBottomWidth:0,
      
  },
  cellHeader: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cell: {
    flex: 1,
    fontSize: 14,
    paddingRight:5
  },
  content: {
    paddingTop:20,
    justifyContent:"flex-start",
    alignItems:"flex-start",
  
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row', // Use flexDirection to align items horizontally
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'white', // Set button background color
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.black, // Button border color
    marginLeft: 10, // Add space between buttons
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;