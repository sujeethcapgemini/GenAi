import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

// const styles = StyleSheet.create({
//     chatContainer: {
//         flex: 1,
//         paddingVertical: 40,
//         width: width * 0.99,
//     },
// });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
       
    },
    input: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
    userMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#d1a1d5',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
    },
    botMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
    },
   buttonContainer1: {
        paddingVertical: 10,
   }
});

export default styles;