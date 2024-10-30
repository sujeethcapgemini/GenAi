import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
        container: {
            flex: 1,
            paddingVertical: 40,
            paddingHorizontal: 20,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            elevation: 5,
            position: 'absolute',
            bottom: 0,
            width: width,
            height: height * 0.4,
            justifyContent: 'flex-start',
        },
        contentContainer: {
            flex: 1,
            justifyContent:'center',
            alignItems:'center',
        },
        title: {
            fontSize: 26,
            fontWeight:'bold',
            paddingVertical: 10,
            color: '#333',
            textAlign:'center',
        },
        author: {
            fontSize: 20,
            color:'#555',
            paddingHorizontal: 20,
            paddingVertical: 10,
            textAlign:'center',
        },
        buttonContainer: {
            paddingVertical: 10,
            alignItems: 'center',
            top: 40,
        },
        
});

export default styles;