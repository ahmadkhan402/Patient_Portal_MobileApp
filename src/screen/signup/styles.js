import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#3C3C3C',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  registerButton: {
    backgroundColor: 'blue',
    width: '100%',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 30,
    elevation: 10,
  },
  registerButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    flexDirection:"row",
    marginTop: 10,
   
  },
  forgotPasswordText: {
    color: 'black',
  },
  loginText: {
      color:'blue',
    //   fontSize: 18,
    //   fontWeight: 'bold',
  }
});

export default styles;
