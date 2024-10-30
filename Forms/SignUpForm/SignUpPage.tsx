import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { connect } from 'react-redux';
import { signup } from '../../redux/actions/authActions';
import { bindActionCreators, Dispatch } from 'redux';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

interface Credentials {
  email: string;
  username: string;
  password: string;
}

type Props = StackScreenProps<RootStackParamList,'SignUp'>  & {
  signup: (credentials: Credentials) => void;
  loading: boolean;
  error: string | null;
};

interface SignupPageState {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  isPasswordVisible: boolean;
  isConfirmPasswordVisible: boolean;
}

class SignUpPage extends Component<Props, SignupPageState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      isPasswordVisible: false,
      isConfirmPasswordVisible: false,
    };
  }

  handleSignup = async () => {
    const { email, username, password, confirmPassword, } = this.state;
    const { signup } = this.props;

    if(!email.trim() || !password.trim() || !username.trim() || !confirmPassword.trim()){
      return Alert.alert('Input Error','All Fields are required.');
    }

    if (password !== confirmPassword) {
      return Alert.alert('Error', 'Passwords do not match!');
    } 
    try {
    await signup({ email , username , password});

    if(this.props.error) {
      Alert.alert('Signup Failed', this.props.error);
    } else {
      Alert.alert('Signup Successful','You can now log in!');
      this.props.navigation.navigate('Login');
    }
  } catch (error) {
    Alert.alert('Error', 'An unexpected error occurred. Please try again.');
  }
};
  

  togglePasswordVisibility = (field: 'isPasswordVisible' | 'isConfirmPasswordVisible') => {
    this.setState(prevState => ({
      [field]: !prevState[field] 
    } as any));
  };

  render() {
    const {
      email,
      username,
      password,
      confirmPassword,
      isPasswordVisible,
      isConfirmPasswordVisible
    } = this.state;

    const { loading } = this.props;

    return (
      <LinearGradient colors={['#e1bee7', '#f5f5f5']} style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>

        <View style={styles.inputContainer}>
          <CustomTextInput
            iconName="person"
            iconColor="#626262"
            iconSize={20}
            iconPosition="left"
            style={styles.inputWithIcon}
            value={username}
            onChangeText={(text) => this.setState({ username: text })}
            placeholder="Username"
          />
          <CustomTextInput
            iconName="mail"
            iconColor="#626262"
            iconSize={20}
            iconPosition="left"
            style={styles.inputWithIcon}
            value={email}
            onChangeText={(text) => this.setState({ email: text })}
            placeholder="Email"
          />
        
          <View style={styles.passwordContainer}>
            <CustomTextInput
              iconName="lock-closed"
              iconColor="#626262"
              iconSize={20}
              iconPosition="left"
              style={styles.inputWithIcon}
              value={password}
              onChangeText={(text) => this.setState({ password: text })}
              placeholder="Password"
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => this.togglePasswordVisibility('isPasswordVisible')}
            >
              <Ionicons
                name={isPasswordVisible ? 'eye' : 'eye-outline'}
                size={20}
                color="#626262"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.passwordContainer}>
            <CustomTextInput
              iconName="lock-closed"
              iconColor="#626262"
              iconSize={20}
              iconPosition="left"
              style={styles.inputWithIcon}
              value={confirmPassword}
              onChangeText={(text) => this.setState({ confirmPassword: text })}
              placeholder="Confirm Password"
              secureTextEntry={!isConfirmPasswordVisible}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => this.togglePasswordVisibility('isConfirmPasswordVisible')}
            >
              <Ionicons
                name={isConfirmPasswordVisible ? 'eye' : 'eye-outline'}
                size={20}
                color="#626262"
              />
            </TouchableOpacity>
          </View>
        </View>

        {loading ? (
          <Text>Loading...</Text>
        ) : (
        <View style={styles.buttonContainer}>
          <CustomButton
            title="Sign Up"
            onPress={this.handleSignup}
          />
        </View>
          )} 

        <Text style={styles.footerText}>
          Already have an account?{' '}
          <Text 
            style={styles.linkText} 
            onPress={() => this.props.navigation.navigate('Login')}
          >
            Log In
          </Text>
        </Text>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state: { auth:{loading: boolean; error: string | null } }) => ({
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch: Dispatch) => 
bindActionCreators({signup}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);


