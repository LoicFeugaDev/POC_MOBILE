import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Header} from "react-native-elements";

import ImagePicker from 'react-native-image-crop-picker';


export default class Photo extends React.Component {
    static navigationOptions = {
        title: 'Photo',
    };

    openCamera(){
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        // ImagePicker.showImagePicker(options, (response) => {
        //     // Same code as in above section!
        // });
        // ImagePicker.launchCamera(options, (response) => {
        //     // Same code as in above section!
        // });

        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    }

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <Button onPress={this.openCamera} title="Camera">Camera</Button>

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
