import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface CustomTabsProps {
    onSelectTab: (tab: string) => void;
    activeTab: string;
}

class CustomTabs extends Component<CustomTabsProps> {
    render() {
        const { activeTab, onSelectTab } = this.props;

        return (
            <View style={styles.tabsContainer}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'CARTE' && styles.activeTab]}
                    onPress={() => onSelectTab('CARTE')}
                >
                    <Text style={[styles.tabText, activeTab === 'CARTE' && styles.activeTabText]}>
                        CARTE
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.tab, activeTab === 'CONTI' && styles.activeTab]}
                    onPress={() => onSelectTab('CONTI')}
                >
                    <Text style={[styles.tabText, activeTab === 'CONTI' && styles.activeTabText]}>
                        CONTI
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default CustomTabs;