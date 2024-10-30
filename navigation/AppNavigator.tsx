import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginPage from '../Forms/LoginForm/LoginPage';
import SignUpPage from '../Forms/SignUpForm/SignUpPage';
import { RootStackParamList } from '../Forms/types';
import HomePage from '../Forms/HomeForm/HomePage';
import OnboardingPage from '../Forms/Onboarding/OnboardingPage';
import ChatBot from '../Forms/Chatbot/ChatBot';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator:React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Onboarding'>
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="SignUp" component={SignUpPage} />
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Onboarding" component={OnboardingPage} />
      <Stack.Screen name="ChatBot" component={ChatBot} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
