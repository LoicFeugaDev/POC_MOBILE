import React from 'react';
import {ScrollView, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

import {NavigationActions} from 'react-navigation';
import {DrawerActions} from 'react-navigation';

export default class Drawer extends React.Component {
    items = ['Formulaire', 'Photo', 'Carto', 'Qrcode', 'CallApi', 'Signature', 'Bluetooth', 'Settings'];

    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }

    renderItem(){
        return this.items.map((item) => {
            return (
                <TouchableHighlight onPress={this.navigateToScreen(item)} key={item}>
                    <View style={styles.menuItem}>
                        <Text>
                            {item}
                        </Text>
                    </View>
                </TouchableHighlight>
            );
        });
    }

    render() {
        return (
            <View>
                <View style={styles.paddingTop}></View>
                <ScrollView>
                    <View>
                        {
                           this.renderItem()
                        }

                    </View>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    menuItem: {
        height: 60,
        fontSize: 20,
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paddingTop: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 50,
        flex: 1,
        height: 100
    }
});
