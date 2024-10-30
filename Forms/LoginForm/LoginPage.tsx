import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Alert, ActivityIndicator} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/authActions';
import { bindActionCreators, Dispatch } from 'redux';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

interface Credentials {
  email: string;
  password: string;
}

type Props = StackScreenProps<RootStackParamList,'Login'>  & {
  login: (credentials: Credentials) => void;
  loading: boolean;
  error: string | null;
};

interface LoginPageState {
  email: string;
  password: string;
  isPasswordVisible: boolean;
 // translatedText: string;
 // translating: boolean;
}

class LoginPage extends Component<Props, LoginPageState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isPasswordVisible: false,
      //translatedText:'',
     // translating: false,
    };
  }

  // Function to translate UI text

  // translateUI = async () => {
  //   try {
  //     const translatedText = await TranslationService.translateText('Welcome Back!', 'es');
    
  //     this.setState({ translatedText, translating: false });
  //     Alert.alert('Translation', translatedText); 
  //   } catch (error) {
  //     this.setState({ translating: false });
  //     Alert.alert('Translation Error', 'Could not translate text.');
  //   }
  // };

  handleLogin = async () => {
    const { email , password } = this.state;

    // Validate input
    if(!email.trim() || !password.trim()) {
      Alert.alert('Input Error', 'Email and Password cannot be empty.');
      return;
    }

    // Perform login
    await this.props.login({ email, password});

    // Handle success and error messages
    const { loading, error } = this.props;

    if(!loading && error){
      Alert.alert('Login Failed', error);
    } else if(!loading && !error) {
      Alert.alert('Login Successful!', 'Welcome back!');
      this.setState({ email: '', password:''});
      this.props.navigation.navigate('Home');
    }
  };

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible
    }));
  };

render() {
    const { email, password, isPasswordVisible } = this.state;
    const { loading } = this.props;

    return (
      <LinearGradient colors={['#e1bee7', '#f5f5f5']} style={styles.container}>
        <Text style={styles.title1}>Welcome</Text>
        <Text style={styles.title2}>Back!</Text>

        <View style={styles.inputContainer}>
          <CustomTextInput
            iconName="person" 
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
              onPress={this.togglePasswordVisibility}
            >
              <Ionicons
                name={isPasswordVisible ? 'eye' : 'eye-outline'}
                size={20}
                color="#626262"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.forgetPasswordButton}>
            <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        { loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
        <View style={styles.buttonContainer}>
          <CustomButton
            title='Login'
            onPress={this.handleLogin}
          />

          <CustomButton 
            title='Open ChatBot'
            onPress={() => this.props.navigation.navigate('ChatBot')}
          />
          {/* <CustomButton
            title='Translate'
            onPress={this.translateUI}
          /> */}
        </View>
           )} 

        <Text style={styles.footerText}>
          Create An Account{' '}
          <Text style={styles.linkText} onPress={() => this.props.navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>

        {/* <ChatBot navigation={this.props.navigation} /> */}
      </LinearGradient>
    );
  }
}

//Map state and dispatch to props
const mapStateToProps = (state: { auth: {loading: boolean; error: string | null } }) => ({
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch: Dispatch) =>  
bindActionCreators({login}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);


