import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal: 15,
        paddingVertical: 15,
    },
    subHeader: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'space-between',
    },
    iconContainer: {
        paddingHorizontal: 10,
    },
    headerTitle: {
        color:'white',
        fontSize: 20,
        fontWeight:'600',
        flex: 1,
        textAlign:'left',
        paddingHorizontal: 30,
    },
    bothIconsContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal: 15,
    }
});

export default styles;