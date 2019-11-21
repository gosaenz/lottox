import React from 'react';
import { Component } from 'react';
import { Image, Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';

import Colors from '../assets/colors';

import LoginForm from '../forms/LogInForm';

export default class LoginScreen extends Component {
    // Disable headers for the LogIn screen
    static navigationOptions = {
        header: null
    };

    // Render the LogIn screen
    render() {
        return (
            <KeyboardAvoidingView style={styles.keyboard} behavior="padding">
                <View style={styles.container}>
                    <View style={styles.logo_container}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/images/flower.png')}
                        />
                    </View>
                    <View style={styles.logo_container}>
                        <Text style={styles.title}>INICIAR SESIÓN</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <LoginForm navigation={this.props.navigation} />
                    </View>
                    <View style={styles.logo_container}>
                        <Text style={styles.button_text}>
                            {' '}
                            ¿No tiene una cuenta todavía?
          </Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('SignUp')}
                            style={styles.button}
                        >
                            <Text style={styles.button_text}> Crear Cuenta </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}
const styles = {
    button: {
        borderRadius: 15
    },
    button_text: {
        color: Colors.primary_text,
        fontWeight: '700',
        marginBottom: 7,
        marginTop: 7,
        textAlign: 'center'
    },
    container: {
        backgroundColor: Colors.primary_dark,
        flex: 1
    },
    logo: {
        height: 100,
        opacity: 0.8,
        width: 200,
        resizeMode: 'contain'
    },
    logo_container: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginBottom: 5
    },
    title: {
        bottom: 0,
        color: Colors.white,
        fontSize: 25,
        marginTop: 15,
        opacity: 0.8,
        position: 'absolute'
    },
    keyboard: {
        flex: 1
    }
};