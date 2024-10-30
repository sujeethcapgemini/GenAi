// import React, { Component } from "react";
// import { View } from "react-native";
// import { NavigationProp } from "@react-navigation/native";
// import { RootStackParamList } from "../types";
// import { GiftedChat, IMessage } from 'react-native-gifted-chat';
// import styles from "./styles";
// import LinearGradient from "react-native-linear-gradient";

// interface ChatMessage extends IMessage {
//     user: {
//         _id:  number;
//         name: string;
//     };
// }

// interface ChatBotProps {
//     navigation: NavigationProp<RootStackParamList>;
// }

// interface ChatBotState {
//     messages: ChatMessage[];
//     isTyping: boolean;
// }

// class ChatBot extends Component<ChatBotProps, ChatBotState> {
//     private messageIdCounter: number; // Counter for unique IDs

//     constructor(props: ChatBotProps) {
//         super(props);
//         this.state = {
//             messages: [],
//             isTyping: false,
//         };
//         this.messageIdCounter = 1; // Start the counter
//     }

//     componentDidMount() {
//         // Sends a greeting msg when the chat loads!
//         this.sendGreeting();
//     }

//     sendGreeting = () => {
//         const greetingMessage: ChatMessage = {
//             _id: this.messageIdCounter++,
//             text: 'Hello! How can I assist you today?',
//             createdAt: new Date(),
//             user: {
//                 _id: 2,
//                 name: 'Chatbot',
//             },
//         };

//         this.setState((prevState) => ({
//             messages: GiftedChat.append(prevState.messages,[greetingMessage]),
//         }));
//     };

//     handleSend = async (newMessages: IMessage[]) => {
//         const userMessage = newMessages[0];

//         if(!userMessage.text.trim()) return;

//         // Add the user message to the chat
//         this.setState((prevState) => ({
//             messages: GiftedChat.append(prevState.messages, newMessages as ChatMessage[]),
//         }));

//         // Generate bot response
//         this.getBotResponse(userMessage.text);
//     };

//     getBotResponse = (userMessage: string) => {
//         this.setState({ isTyping: true }); // Start typing indicator
//         let botResponse = '';

//         switch (userMessage.toLowerCase()) {
//             case 'signup':
//                 botResponse = 'Navigating to Sign Up...';
//                 this.props.navigation.navigate('SignUp');
//                 break;
//             case 'home':
//                 botResponse = 'Navigating to Home...';
//                 this.props.navigation.navigate('Home');
//                 break;
//             case 'onboarding':
//                 botResponse = 'Navigating to Onboarding...';
//                 this.props.navigation.navigate('Onboarding');
//                 break;
//             default:
//                 botResponse = `You wrote: ${userMessage}`;
//         }

//         const responseMessage: ChatMessage = {
//             _id: this.messageIdCounter++, // Unique ID for the message
//             text: botResponse,
//             createdAt: new Date(),
//             user: {
//                 _id: 2, // Bot ID
//                 name: 'Chatbot',
//             },
//         };

//         // Add the bot response to the chat after a short delay
//         setTimeout(() => {
//             this.setState((prevState) => ({
//                 messages: GiftedChat.append(prevState.messages, [responseMessage]),
//                 isTyping: false, // Stop typing indicator
//             }));
//         }, 1000); // Adjust the delay as needed
//     };

//     render() {
//         const { messages, isTyping } = this.state;

//         return (
//             <LinearGradient colors={['#e1bee7', '#f5f5f5']} style={styles.chatContainer}>
//                 <GiftedChat
//                     messages={messages}
//                     onSend={(newMessages) => this.handleSend(newMessages)}
//                     user={{
//                         _id: 1, // User ID
//                     }}
//                     inverted={true} 
//                     isTyping={isTyping} // Show typing indicator
//                 />
//             </LinearGradient>
//         );
//     }
// }

// export default ChatBot;


import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, FlatList, Text, ActivityIndicator, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { GoogleGenerativeAI } from "@google/generative-ai"; 
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const genAI = new GoogleGenerativeAI('AIzaSyBOTSCDOFXXLlucHfoCszzXoDG_C7LpkIg'); // Initialize with API key
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Get the model

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsubscribe = firestore()
            .collection('messages')
            .orderBy('createdAt', 'desc')
            .onSnapshot(snapshot => {
                const fetchedMessages = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setMessages(fetchedMessages);
            });

        return () => unsubscribe();
    }, []);

    const handleSend = async () => {
        if (inputMessage.trim()) {
            setLoading(true);
            try {
                await firestore().collection('messages').add({
                    text: inputMessage,
                    createdAt: new Date(),
                    user: { id: 1, name: 'User' },
                });

                // Get AI response from Google Generative AI
                const botResponse = await getAIResponse(inputMessage);
                await firestore().collection('messages').add({
                    text: botResponse,
                    createdAt: new Date(),
                    user: { id: 2, name: 'Chatbot' },
                });
            } catch (error) {
                console.error("Error sending messages: ", error);
                Alert.alert('Error', 'Could not send message. Please try again.');
            } finally {
                setInputMessage('');
                setLoading(false);
            }
        }
    };

    const clearMessages = async () => {
        setLoading(true);
        try {
            const batch = firestore().batch();
            const messagesCollection = await firestore().collection('messages').get();
            
            messagesCollection.docs.forEach(doc => {
                batch.delete(doc.ref);
            });

            await batch.commit();
            Alert.alert('Success', 'All messages cleared.');
        } catch (error) {
            console.error("Error clearing messages: ", error);
            Alert.alert('Error', 'Could not clear messages. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const getAIResponse = async (userMessage) => {
        try {
            const chat = model.startChat({
                history: [
                    {
                        role: "user",
                        parts: [{ text: userMessage }],
                    },
                ],
            });

            let result = await chat.sendMessage(userMessage);
            return result.response.text(); // Get the AI's response text
        } catch (error) {
            console.error("Error fetching AI response:", error);
            return "Sorry, I'm having trouble reaching the AI service.";
        }
    };

    return (
        <LinearGradient colors={['#e1bee7', '#f5f5f5']} style={styles.container}>
            <FlatList
                data={messages}
                renderItem={({ item }) => (
                    <Text style={item.user.id === 1 ? styles.userMessage : styles.botMessage}>
                        {item.text}
                    </Text>
                )}
                keyExtractor={item => item.id}
                inverted
            />
            <TextInput
                style={styles.input}
                value={inputMessage}
                onChangeText={setInputMessage}
                placeholder="Type your message..."
            />

            <View style={styles.buttonContainer1}>
                <Button title="Send" onPress={handleSend} />
            </View>
            <View style={styles.buttonContainer2}>
                <Button title="Clear All Messages" onPress={clearMessages} />
            </View>
            {loading && <ActivityIndicator size="small" color="#0000ff" />}
        </LinearGradient>
    );
};

export default ChatBot;
