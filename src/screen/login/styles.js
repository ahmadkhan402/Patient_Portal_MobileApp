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
    marginBottom: 3,
    marginTop:20
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
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 2,
  },
  forgotPasswordText: {
    color: 'blue',
  },
  loginButton: {
    backgroundColor: 'blue',
    width: '100%',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 30,
    elevation:10
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 30,
    elevation:10
  },
  signupButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default styles;
