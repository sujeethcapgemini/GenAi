import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import Store from './redux/Store';
import CardAccountsForm from './Forms/CardAccountsForm/CardAccountsForm';
import { firebase } from '@react-native-firebase/firestore';
import ChatBot from './Forms/Chatbot/ChatBot';

const firebaseConfig = {
   apiKey: 'AIzaSyCfTg40PjI24P85ww0V8pal3sdL2jb_wEw',
   authDomain: 'chatbot-ac47f.firebaseapp.com',
   projectId:'chatbot-ac47f',
   storageBucket:'chatbot-ac47f.appspot.com',
   messagingSenderId:'381095856006',
   appId: 'chatbot-ac47f',
};

if(!firebase.apps.length){
   firebase.initializeApp(firebaseConfig);
}

class App extends Component {
   render() {

      return (
         <Provider store={Store}>
            {/* <AppNavigator/>  */}
            {/* <CardAccountsForm /> */}
            <ChatBot />
         </Provider>


      );
   }
}

export default App;
