import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    tabsContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'#E0E0E0',
        paddingVertical: 10,
    },
    tab: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        flex: 1,
        alignItems: 'center',
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#139394',
    },
    tabText: {
        fontSize: 16,
        color: '#333',
    },
    activeTabText: {
        color: '#139394',
        fontWeight: 'bold',
    },
});

export default styles;