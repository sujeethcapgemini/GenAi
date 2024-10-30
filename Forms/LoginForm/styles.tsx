import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 40
    },
    title1: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#000000',
      alignSelf: 'center',
    },
    title2: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#000000',
      alignSelf: 'center',
      paddingVertical: 10,
    },
    inputContainer: {
      width: 0.95 * width, 
      paddingHorizontal: 20,
      paddingVertical: 20,
    },
    inputWithIcon: {
      flex: 1,
      height: 0.07 * height,
      color: '#000000',
      backgroundColor: "#E8E8E8",
      borderRadius: 10,
      elevation: 10,
      paddingVertical: 10, 
    },
    passwordContainer: {
      position: 'relative',
      paddingVertical: 20
    },
    forgetPasswordButton: {
      alignSelf: 'flex-end',
      paddingVertical: 10,
    },
    forgetPasswordText: {
      color: '#6200ee',
      fontSize: 12,
    },
    buttonContainer: {
      width: 0.9 * width,
      alignItems: 'center',
      paddingVertical: 15,
      paddingLeft: 45,
      
    },
    footerText: {
      textAlign: 'center',
      fontSize: 12,
      paddingVertical: 10,
    },
    linkText: {
      color: '#6200ee',
      fontSize: 14,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
    },
    eyeIcon: {
      position: 'absolute',
      right: 10,
      top: 40,
    },
  });

  export default styles;