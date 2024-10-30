import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 15,
      paddingHorizontal: 15,
    },
    title: {
      fontSize: 28,
      paddingVertical: 20,
      fontWeight: 'bold',
      textAlign:'center',
      color:'#333',
    },
    buttonContainer: {
      paddingVertical: 10,
      paddingHorizontal: 20
    },
    itemContainer: {
      paddingVertical: 20,
      borderRadius: 3,
      elevation: 2,
    },
    itemTitle: {
      fontSize: 18,
    },
    itemAuthor: {
      fontSize: 14,
      color: '#555',
    },
    error: {
      color: 'red',
      paddingVertical: 10,
    },
  });

  export default styles;