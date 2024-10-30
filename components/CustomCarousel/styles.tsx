import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    width: width * 0.75, 
    height: height * 0.16, 
    left: 50,
    top: 80
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 10,
    textAlign: 'center', 
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 10, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
});

export default styles;
