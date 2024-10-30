import React, { Component } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, TextStyle } from 'react-native';
import styles from './styles';

interface CustomButtonProps extends TouchableOpacityProps {
    onPress: () => void;
    title: string;
    textStyle?: TextStyle;
}

class CustomButton extends Component<CustomButtonProps> {
    render() {
        const { onPress, title, textStyle, ...touchableProps } = this.props; 

        return (
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
                accessible={true}
                accessibilityLabel={title}
                accessibilityRole="button"
                {...touchableProps} 
            >
                <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            </TouchableOpacity>
        );
    }
}



export default CustomButton;
