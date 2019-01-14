import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Header} from "react-native-elements";




export default class Carto extends React.Component {
    static navigationOptions = {
        title: 'Carto',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Text>Carto</Text>

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
