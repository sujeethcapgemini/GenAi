import React, { Component } from 'react';
import { TextInput, View, StyleProp, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles'; 

interface CustomTextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  style?: StyleProp<TextStyle>;
  iconName?: string; 
  iconColor?: string; 
  iconSize?: number;
  iconPosition?: 'left' | 'right';
}

class CustomTextInput extends Component<CustomTextInputProps> {
  render() {
    const { value, onChangeText, placeholder, secureTextEntry, style, iconName, iconColor, iconSize = 20, iconPosition = 'left' } = this.props;

    const renderIcon = iconName ? (
      <Icon name={iconName} 
            size={iconSize} 
            color={iconColor} 
            style={[ styles.icon,
                     iconPosition === 'left' ? styles.iconLeft : styles.iconRight
                  ]} 
      />
    ) : null;

    return (
      <View style={[styles.container]}> 
        {iconPosition === 'left' && renderIcon}
        <TextInput
          style={[styles.input, 
                  style, 
                  iconName ? (iconPosition === 'left' ? styles.inputWithIconLeft : styles.inputWithIconRight) : {}]} 
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
        />
        {iconPosition === 'right' && renderIcon}
      </View>
    );
  }
}

export default CustomTextInput;
