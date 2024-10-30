import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      width: width,
      height: height,
    },
    indicatorContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      height: height * 0.1,
    },
    indicator: {
      fontSize: 24,
      color: '#888',
      paddingHorizontal: 5,
    },
    activeIndicator: {
      color: '#000', 
    },
    buttonContainer: {
      paddingVertical: 20,
      width: width,
      alignItems: 'center',
      position:'absolute',
      bottom: 30,
    },
  });

  export default styles;