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
   flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth:1,
    // borderBottomWidth: 0,
    borderLeftColor: colors.black,
    
  },
  listHeader: {
    width:"100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth:1,
    backgroundColor: colors.silver,
     borderTopEndRadius:20,
      borderTopStartRadius:20, 
      borderBottomWidth:0,
      
  },
  cellHeader: {
    // flex:1,
    width:"25%",
    fontWeight: 'bold',
    fontSize: 15,
    paddingHorizontal:5
  },
  cell: {
    paddingHorizontal:5,
    fontSize: 12,
    width:"25%",
   
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