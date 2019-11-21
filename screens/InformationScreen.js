import React from "react";
import { Button, Text, View } from "react-native";
import Carousel from "react-native-carousel-control";

import Colors from '../assets/colors';

class InformationScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container} >
                <Carousel
                    pageStyle={{ backgroundColor: Colors.primary_dark }}
                >
                    <View
                        style={styles.container}
                    >
                        <Text>First!</Text>
                    </View>
                    <View
                        style={styles.container}
                    >
                        <Text>Second!</Text>
                    </View>
                    <View
                        style={styles.container}
                    >
                        <Text>Third!</Text>
                        <Button
                            title="Continuar"
                            onPress={() => this.props.navigation.navigate("Login")}
                        />
                    </View>
                </Carousel>
            </View>
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
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
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

export default InformationScreen