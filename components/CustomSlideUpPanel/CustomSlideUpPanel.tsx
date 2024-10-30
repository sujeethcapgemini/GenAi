import React, { Component } from "react";
import { View, Text, ActivityIndicator } from 'react-native';
import styles from "./styles";
import CustomButton from "../CustomButton/CustomButton";
import LinearGradient from "react-native-linear-gradient";

interface Book {
    title: string;
    author: string;
}

interface CustomSlideUpPanelProps {
    book: Book | null;
    onClose: () => void;
    onAddToCart: (book: Book) => void;
    loading: boolean;
}

class CustomSlideUpPanel extends Component<CustomSlideUpPanelProps> {
    render() {
        const { book, onClose, onAddToCart, loading } = this.props;

        if (!book) return null;

        return (
            <LinearGradient
                colors={['#e1bee7', '#ffffff']}
                style={styles.container}
            >
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>{book.title || 'Unknown Title'}</Text>
                    <Text style={styles.author}>by  {book.author || 'Unknown Author'}</Text>

                    <View style={styles.buttonContainer}>
                        {loading ? (
                            <ActivityIndicator size="small" color="#0000ff" />
                        ) : (
                            <CustomButton
                                title="Add to Cart"
                                onPress={() => onAddToCart(book)}
                                accessibilityLabel={`Add ${book.title} by ${book.author} to the cart.`}
                            />
                        )}
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton title="Close" onPress={onClose} accessibilityLabel="Close the panel" />
                    </View>
                </View>
            </LinearGradient>
        );

    }
}

export default CustomSlideUpPanel;