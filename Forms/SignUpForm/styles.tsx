import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#000000',
      paddingVertical: 30,
    },
    inputContainer: {
      width: 0.95 * width,
      paddingHorizontal: 20,
      right: 20,
      paddingVertical: 30,
    },
    inputWithIcon: {
      flex: 1,
      height: 0.07 * height,
      color: '#000000',
      backgroundColor: "#E8E8E8",
      borderRadius: 10,
      elevation: 10,
      marginVertical: 10,
      borderColor: '#676767',
      borderWidth: 0.5,
    },
    passwordContainer: {
      position: 'relative',
    },
    buttonContainer: {
      width: 0.9 * width,
      alignItems: 'center',
      paddingVertical: 10,
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
      top: 28,
    },
  });

  export default styles;
  