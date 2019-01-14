import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Header} from "react-native-elements";
import { Icon } from 'react-native-elements'
import {DrawerActions, NavigationActions} from "react-navigation";

export default class Dashboard extends React.Component {
    static navigationOptions = {
        title: 'Dashboard',
    };
    navigateToScreen = (route) => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        });
        this.props.navigation.dispatch(navigateAction);
        this.props.navigation.dispatch(DrawerActions.closeDrawer())
    }
    render() {
        const {navigate} = this.props.navigation;
        let ss = 52;

        return (
            <View style={styles.container}>
                <View style={styles.line}>
                    <View style={styles.element}>
                        <Icon size={ss} name="person-add" onPress={this.navigateToScreen('Formulaire')}/>
                        <Text>Formulaire</Text>
                    </View>
                    <View style={styles.element}>

                        <Icon size={ss} name="photo-camera" onPress={this.navigateToScreen('Photo')}/>
                        <Text>Photo</Text>
                    </View>
                </View>

                <View style={styles.line}>
                    <View style={styles.element}>

                        <Icon size={ss} name="language" onPress={this.navigateToScreen('Carto')}/>
                        <Text>Carto</Text>
                    </View>
                    <View style={styles.element}>

                        <Icon size={ss} name="qrcode" type="material-community" onPress={this.navigateToScreen('Qrcode')}/>
                        <Text>QR Code</Text>
                    </View>
                </View>

                <View style={styles.line}>
                    <View style={styles.element}>

                        <Icon size={ss} name="email" type="entypo" onPress={this.navigateToScreen('CallApi')}/>
                        <Text>Appel Api</Text>
                    </View>
                    <View style={styles.element}>

                        <Icon size={ss} name="create" onPress={this.navigateToScreen('Signature')}/>
                        <Text>Signature</Text>
                    </View>
                </View>

                <View style={styles.line}>
                    <View style={styles.element}>

                        <Icon size={ss} name="bluetooth" type="font-awesome" onPress={this.navigateToScreen('Bluetooth')}/>
                        <Text>Bluetooth</Text>
                    </View>
                    <View style={styles.element}>

                        <Icon size={ss} name="settings" onPress={this.navigateToScreen('Settings')} />
                        <Text>Paramètre</Text>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection:'column',
        alignItems:'stretch'
    },
    line: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',        alignItems:'stretch',

        flexDirection:'row'
    },
    element: {
        flex:1,
        borderWidth: 1,
        justifyContent:'center',
        alignItems:'center',
        borderColor: 'black',
    }
});
