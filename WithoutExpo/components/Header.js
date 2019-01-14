import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HeaderBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#0f0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{

    }
});
