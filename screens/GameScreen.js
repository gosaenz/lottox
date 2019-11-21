import React, { Component } from "react";
import {
    StyleSheet,
    FlatList,
    View,
    Alert,
    KeyboardAvoidingView,
    TouchableOpacity
} from "react-native";
import { Container, Content, Text, ListItem } from "native-base";
import { AsyncStorage } from "react-native";


export default class GameScreen extends Component {

    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            storeUser: "",
            locationArray: [
                { idLocation: "1", location: "Lotto" },
                { idLocation: "2", location: "Big Ball" },
                { idLocation: "3", location: "Navideña" }
            ]
        };
    }

    getUser = () => {
        alert(this.state.storeUser);
    };


    displayData = async () => {
        Alert.alert(await AsyncStorage.getItem("pruebaArray"));
        return (locationArray = JSON.parse(
            await AsyncStorage.getItem("pruebaArray")
        ));
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.keyboard} behavior="padding">
                <Container>
                    <Content contentContainerStyle={styles.content}>
                        <FlatList
                            data={this.state.locationArray}
                            keyExtractor={item => item.idLocation}
                            extraData={this.state}
                            renderItem={({ item }) => (
                                <LocationRow
                                    parentComponent={this}
                                    location={item.location}
                                    idLocation={item.idLocation}
                                />
                            )}
                        />
                    </Content>
                </Container>
            </KeyboardAvoidingView>
        );
    }
}

const LocationRow = ({ location, idLocation, parentComponent }) => (
    <View>
        <TouchableOpacity onLongPress={() => this.props.navigation.navigate('Game')}>
            <ListItem>
                <View style={styles.View}>
                    <Text style={styles.itemTitle}>{location}</Text>
                </View>
            </ListItem>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    textCenter: {
        textAlign: "center",
        width: "100%"
    },
    content: {
        flex: 1,
        padding: 20
    },
    loadingApp: {
        textAlign: "center",
        width: "100%",
        justifyContent: "center"
    },
    button: {
        marginLeft: "38%"
    },
    container: {
        backgroundColor: "white"
    },
    itemTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15
    },
    itemValue: {
        color: "gray",
        fontSize: 15,
        position: "absolute",
        right: 15,
        alignSelf: "flex-end"
    },
    keyboard: {
        flex: 1
    },
    View: {
        flex: 1,
        flexDirection: "row"
    }
});