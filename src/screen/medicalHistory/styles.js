import { StyleSheet } from "react-native";
import { colors } from "../../utils/database";

const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor:"white"
    },
    buttonContainer: {
        flexDirection: 'row', // Use flexDirection to align items horizontally
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    noListContainer:{
        flex:1,
justifyContent:"center",
alignItems:"center"
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
    itemcontainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#f0f0f0',
    },
    listContainer: {
        flexGrow: 1,
        width:"100%",
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#f0f0f0',
    },
    content: {
        paddingTop: 20,
        justifyContent: "flex-start",
        alignItems: "flex-start",

    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    itemContent:{
        width:"90%",
    },
    itemContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginBottom: 20,
        padding: 20,
        // width: '100%',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    diseaseName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontWeight: 'bold',
        marginTop: 10,
    },
    itemIndexContainer:{
        justifyContent:"center",
        alignItems:"center",
        borderWidth:1,
        borderColor:colors.black,
        borderRadius:20,
        // width:"10%",
        paddingHorizontal:5,
        height:"20%",
    },
    itemIndex:{
        fontSize:30,
        fontWeight:"700",
       
    }
});

export default styles;