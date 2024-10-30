import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./styles";
import LinearGradient from "react-native-linear-gradient";

interface CustomHeaderProps {
    title: string;
    leftIcon?: string;           
    rightIcon?: string;
    backIcon?:string;          
    iconPosition?: 'left' | 'right' | 'both'; 
    showBackButton?: boolean;    
    onBackPress?: () => void;    
    onLeftIconPress?: () => void;    
    onRightIconPress?: () => void;   
    iconSize?: number;           
    iconColor?: string;          
}

class CustomHeader extends Component<CustomHeaderProps> {
    static defaultProps = {
        iconSize: 30,
        iconColor: 'white',
        iconPosition: 'both',    
        showBackButton: false,   
    };

    renderLeftComponent() {
        const { showBackButton, onBackPress, leftIcon,backIcon, iconPosition, onLeftIconPress, iconSize, iconColor } = this.props;

        if (backIcon && showBackButton) {
            return (
                <TouchableOpacity onPress={onBackPress} style={styles.iconContainer}>
                    <Ionicons 
                        name={backIcon} 
                        size={iconSize} 
                        color={iconColor} 
                    />
                </TouchableOpacity>
            );
        }
    

        if (leftIcon && (iconPosition === 'left' || iconPosition === 'both')) {
            return (
                <TouchableOpacity onPress={onLeftIconPress} style={styles.iconContainer}>
                    <Ionicons 
                        name={leftIcon} 
                        size={iconSize} 
                        color={iconColor} 
                    />
                </TouchableOpacity>
            );
        }

        return null;
    }

    renderRightComponent() {
        const { rightIcon, iconPosition, onRightIconPress, iconSize, iconColor } = this.props;

        
        if (rightIcon && (iconPosition === 'right' || iconPosition === 'both')) {
            return (
                <TouchableOpacity onPress={onRightIconPress} style={styles.iconContainer}>
                    <Ionicons 
                        name={rightIcon} 
                        size={iconSize} 
                        color={iconColor} 
                    />
                </TouchableOpacity>
            );
        }

        return null;
    }

    render() {
        const { title, showBackButton, iconPosition } = this.props;

        return (
            <LinearGradient
                colors={['#139394', '#009688']}
                style={styles.headerContainer}
            >
                <View style={styles.subHeader}>
                    
                    {this.renderLeftComponent()}

                    
                    <Text style={styles.headerTitle}>{title}</Text>

                
                    {this.renderRightComponent()}
                </View>

            
                {!showBackButton && iconPosition === 'both' && (
                    <View style={styles.bothIconsContainer}>
                        {this.renderLeftComponent()}
                        {this.renderRightComponent()}
                    </View>
                )}
            </LinearGradient>
        );
    }
}

export default CustomHeader;
