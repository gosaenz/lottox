import React from 'react';
import { Component } from 'react';
import { Image, Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';

import Colors from '../assets/colors';

import SignupForm from '../forms/SignInForm';

export default class SignupScreen extends Component {
    // Disable headers for SignUp screen
    static navigationOptions = {
        header: null
    };

    // Render SignUp screen
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
                        <Text style={styles.title}>CREAR CUENTA</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <SignupForm navigation={this.props.navigation} />
                    </View>
                    <View style={styles.logo_container}>
                        <Text style={styles.button_text}>
                            {' '}
                            ¿Ya tiene una cuenta?
                        </Text>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Login')}
                            style={styles.button}
                        >
                            <Text style={styles.button_text}> Iniciar Sesión </Text>
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
        marginTop: 15,
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
        justifyContent: 'center'
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