import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    button: {
        width: width * 0.82,
        paddingVertical: 12,
        paddingHorizontal: 30,
        backgroundColor: '#6200ee',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;