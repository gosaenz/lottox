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

export default class SignupForm extends Component {
    // Constructor for the SignUp page
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            password: '',
            confirm: '',
            id: ''
        };
    }

    // Store credential in the database
    signup = () => {
        if (this.state.password !== this.state.confirm) {
            Alert.alert('Alerta', 'Contraseñas no coinciden', [{ text: 'Ok' }])
        } else {

            this._storeData().then(
                () => {
                    this.props.navigation.navigate('Main');
                }
            );

        }
    };


    // Save data to local storage
    _storeData = async () => {
        try {

            await AsyncStorage.setItem('firstname', this.state.firstname);
            await AsyncStorage.setItem('lastname', this.state.lastname);
            await AsyncStorage.setItem('password', this.state.password);
            await AsyncStorage.setItem('id', this.state.id);

        } catch (error) {
            console.log('Error' + error);
        }
    };

    // Render the SignUp page
    render() {
        return (

            <View style={styles.container}>
                <TextInput
                    placeholder='Nombre'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    style={styles.input}
                    onSubmitEditing={() => this.lastNameInput.focus()}
                    autoCapitalize='none'
                    autoCorrect={false}
                    ref={input => (this.nameInput = input)}
                    onChangeText={firstname => this.setState({ firstname })}
                    value={this.state.name}
                />
                <TextInput
                    placeholder='Apellido'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    style={styles.input}
                    onSubmitEditing={() => this.idInput.focus()}
                    autoCapitalize='none'
                    autoCorrect={false}
                    ref={input => (this.lastNameInput = input)}
                    onChangeText={lastname => this.setState({ lastname })}
                    value={this.state.lastname}
                />
                <TextInput
                    placeholder='Cédula'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    style={styles.input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType='numeric'
                    autoCapitalize='none'
                    autoCorrect={false}
                    ref={input => (this.idInput = input)}
                    onChangeText={id => this.setState({ id })}
                    value={this.state.id}
                />
                <TextInput
                    placeholder='Contraseña'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    secureTextEntry
                    style={styles.input}
                    onSubmitEditing={() => this.confirmPasswordInput.focus()}
                    ref={input => (this.passwordInput = input)}
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                />

                <TextInput
                    placeholder='Confirmar Contraseña'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    secureTextEntry
                    style={styles.input}
                    ref={input => (this.confirmPasswordInput = input)}
                    onChangeText={confirm => this.setState({ confirm })}
                    value={this.state.confirm}
                />

                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => this.signup()}
                >
                    <Text style={styles.buttonText}>Crear Cuenta</Text>
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