
import { Modal, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { colors } from '../../src/utils/database';
const styles = StyleSheet.create({

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 20,
    },
    modalContent: {
        justifyContent: 'center',
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 16
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'left',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:10,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
        width: '100%',
    },
    half: {
        width: '48%',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%',
    },
    closeButton: {
        //   backgroundColor: '#DDDDDD',
        justifyContent: "center",
        paddingVertical: 5,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        borderRadius: 13,
        borderWidth: 1,

    },
    addButton: {
        //   backgroundColor: 'blue',
        justifyContent: "center",
        paddingHorizontal: 20,
        borderRadius: 13,
        borderWidth: 1,
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default styles