import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from "react-native-elements";

export default class Settings extends React.Component {
    static navigationOptions = {
        title: 'Settings',
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Settings</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
