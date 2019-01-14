import React from 'react';
import {Button, StyleSheet, Switch, Text, TextInput, View} from 'react-native';
import {Header} from "react-native-elements";
import Input from "react-native-elements/src/input/Input";
import {DatePicker} from "native-base";


export default class Formulaire extends React.Component {
    static navigationOptions = {
        title: 'Formulaire',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View style={styles.line}>
                    <Text>Nom : </Text>
                    <Input/>
                </View>


                <View style={styles.line}>
                    <Text>Prénom : </Text>
                    <Input/>
                </View>


                <View style={styles.line}>
                    <Text>Numéro : </Text>
                    <TextInput keyboardType='numeric'/>
                </View>

                <View style={styles.line}>
                    <Text>Date de naissance : </Text>
                    <DatePicker></DatePicker>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 100
    },
    line: {
        alignItems: 'stretch',
        justifyContent: 'center',
        flex: 1,
        height: 100,
    }
});
