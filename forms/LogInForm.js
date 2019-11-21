import React from 'react';
import { Component } from 'react';

import {
    AsyncStorage,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';


import Colors from '../assets/colors';

export default class LoginForm extends Component {
    // Constructor for the LogIn page
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            message: ''
        };
    }

    // Check credentials with the database
    login = () => {

        this.props.navigation.navigate('Main');

    };

    // Save username to local storage
    _storeData = async () => {
        try {
            await AsyncStorage.setItem('userName', this.state.username);
        } catch (error) {
            // Error saving data
        }
    };

    // Render the LogIn page
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder='Cédula'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType='numeric'
                    autoCapitalize='none'
                    autoCorrect={false}
                    ref={el => {
                        this.username = el;
                    }}
                    onChangeText={username => this.setState({ username })}
                    value={this.state.username}
                />
                <TextInput
                    placeholder='Contraseña'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    secureTextEntry
                    style={styles.input}
                    ref={input => (this.passwordInput = input)}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.login()}
                >
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    buttonContainer: {
        backgroundColor: Colors.white,
        marginTop: 20,
        paddingVertical: 10
    },
    buttonText: {
        color: Colors.primary_text,
        fontWeight: '700',
        textAlign: 'center'
    },
    container: {
        padding: 20
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: Colors.white,
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10
    }
};