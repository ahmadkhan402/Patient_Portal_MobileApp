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
    paddingHorizontal: 5,
    borderWidth:1,
    borderLeftColor: colors.black,
  },
  cell: {
    flex: 1,
    fontSize: 16,
  },
  content: {
    justifyContent:"center",
    alignItems:"center",
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {

   justifyContent:"flex-end",
    alignItems:"flex-end",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
   
    borderWidth:1,
    marginBottom:10
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;