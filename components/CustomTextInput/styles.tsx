import { StyleSheet, Dimensions } from "react-native";

const { width,height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      position:'relative',
      paddingHorizontal: 10,
      left: 20
    },
    icon: {
      position:'absolute',
      zIndex:1,
    },
    iconLeft: {
      paddingHorizontal: 20, 
    },
    iconRight: {
      paddingHorizontal: 20, 
    },
    input: {
      flex: 1,
      height: height * 0.07,
      color: '#000000',
      backgroundColor: "#E8E8E8",
      borderRadius: 1,
      elevation: 10,
      borderColor: '#676767',
      borderWidth: 0.5,
      
    },
    inputWithIconLeft: {
      paddingHorizontal: 50, 
    },
    inputWithIconRight: {
      paddingHorizontal: 50, 
    },
    
  });

  export default styles;
  