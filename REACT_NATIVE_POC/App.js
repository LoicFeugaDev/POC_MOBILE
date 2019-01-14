import React from 'react';
import {StyleSheet} from 'react-native';
import {ThemeProvider, Button, Header} from "react-native-elements";
import SideMenu from "react-native-side-menu/index";
import Settings from "./screens/Settings";
import Home from "./screens/Home";
import {createDrawerNavigator,createAppContainer} from 'react-navigation';
import Drawer from "./components/Drawer";
import Dashboard from "./screens/Dashboard";
import Bluetooth from "./screens/Bluetooth";
import CallApi from "./screens/CallApi";
import Carto from "./screens/Carto";
import Formulaire from "./screens/Formulaire";
import Photo from "./screens/Photo";
import Qrcode from "./screens/Qrcode";
import Signature from "./screens/Signature";

const MainNavigator = createDrawerNavigator({
    Dashboard: {screen: Dashboard},
    Home: {screen: Home},
    Bluetooth: {screen: Bluetooth},
    CallApi: {screen: CallApi},
    Carto: {screen: Carto},
    Formulaire: {screen: Formulaire},
    Photo: {screen: Photo},
    Qrcode: {screen: Qrcode},
    Signature: {screen: Signature},
    Settings: {screen: Settings},
},{
    initialRouteName: 'Dashboard',
    contentComponent: Drawer,
    drawerWidth: 300
});

const App = createAppContainer(MainNavigator);

export default App;

// export default class App extends React.Component {
//
//     sideMenuOpened = false;
//
//     constructor() {
//         super();
//         this.state = {
//             header: 'App',
//             sideMenuOpen: false,
//         }
//     }
//
//
//     render() {
//         return (
//             <SideMenu isOpen={this.state.sideMenuOpen} >
//
//                 <Header
//                     placement="left"
//                     leftComponent={{icon: 'menu', color: '#fff'}}
//                     centerComponent={{text: this.state.header, style: {color: '#fff'}}}
//                 />
//             </SideMenu>
//         );
//     }
// }
//

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
