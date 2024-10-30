import React, { Component } from "react";
import { View,Text } from "react-native";
import CustomCarousel from "../../components/CustomCarousel/CustomCarousel";
import styles from "./styles";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import CustomButton from "../../components/CustomButton/CustomButton";
import LinearGradient from "react-native-linear-gradient";

interface Slide {
  title: string;
  description: string;
}

type OnboardingScreenProp = StackScreenProps<RootStackParamList,'Onboarding'>;

class OnboardingPage extends Component<OnboardingScreenProp> {
  private slides: Slide[] = [
    { title: 'Welcome to Our App', description: 'Discover amazing features.' },
    { title: 'Easy Navigation', description: 'Navigate with ease and simplicity.' },
    { title: 'Get Started', description: 'Join us today and enjoy the experience!' },
  ];

  state = {
    activeSlide: 0,
  };

  handleSnapToItem = (index: number) => {
    this.setState({ activeSlide: index });
  };

  handleLogin = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
        <LinearGradient colors={['#e1bee7','#f5f5f5']} style={styles.container}>
          <CustomCarousel 
            data={this.slides} 
            onSnapToItem={this.handleSnapToItem} 
          />
          <View style={styles.indicatorContainer}>
            {this.slides.map((_, index) => (
              <Text key={index} style={[
                styles.indicator,
                this.state.activeSlide === index ? styles.activeIndicator : null
              ]}>●</Text>
            ))}
          </View>

          {this.state.activeSlide === this.slides.length - 1 && (
            <View style={styles.buttonContainer}>
              <CustomButton
                title="Get Started"
                onPress={this.handleLogin}
              />
            </View>
          )}
        </LinearGradient>
      );
    }
  }

export default OnboardingPage;
