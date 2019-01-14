import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {Header} from "react-native-elements";
import Weather from "../classes/Weather";


export default class CallApi extends React.Component {
    static navigationOptions = {
        title: 'Call Api',
    };

    url = "http://api.openweathermap.org/data/2.5/weather?q=";
    key = "4bc1d9f07a44db6907d6165bd52500a5";

    constructor() {
        super();
        this.state = {
            weather: new Weather()
        };
    }

    buildUrlApi() {
        return this.url + "Lyon" + "&appId=" + this.key;
    }

    getMeteo() {
        let url = this.url+"Lyon&appId="+this.key;
        console.log('click '+url);
        fetch(url).then((response) => response.json()).then((weather) => {
            console.log(weather);
            this.setState({
                weather: new Weather(weather)
            })
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View style={styles.container}>
                <View>

                    <Text>City : </Text>
                    <TextInput
                        // onChang eText={(text) => this.setState({text})}
                        ></TextInput>
                </View>

                <Button title="Get" onPress={this.getMeteo()} ></Button>

                <Text>{this.state.weather.city} + {this.state.weather.humidity} + {this.state.weather.sky} + {this.state.weather.temperature} </Text>
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
