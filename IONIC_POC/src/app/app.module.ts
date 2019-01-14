import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {DashboardPage} from "../pages/dashboard/dashboard";
import {ConfigProvider} from '../providers/config/config';
import {FormulairePage} from "../pages/formulaire/formulaire";
import {CartoPage} from "../pages/carto/carto";
import {PhotoPage} from "../pages/photo/photo";
import {QrcodePage} from "../pages/qrcode/qrcode";
import {ApiPage} from "../pages/api/api";
import {BluetoothPage} from "../pages/bluetooth/bluetooth";
import {SettingsPage} from "../pages/settings/settings";
import {SignaturePage} from "../pages/signature/signature";
import { WeatherProvider } from '../providers/weather/weather';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Camera} from "@ionic-native/camera";
import {GoogleMaps} from "@ionic-native/google-maps";
import {QRScanner} from "@ionic-native/qr-scanner";
import {BLE} from '@ionic-native/ble';
import {BluetoothLE} from "@ionic-native/bluetooth-le";
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import {CardWeatherPage} from "../pages/card-weather/card-weather";
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder} from '@ionic-native/native-geocoder';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { TranslateModule,TranslateLoader  } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {AppState} from "./app.state";


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    FormulairePage,
    PhotoPage,
    CartoPage,
    QrcodePage,
    ApiPage,
    CardWeatherPage,
    SignaturePage,
    BluetoothPage,
    SettingsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    FormulairePage,
    PhotoPage,
    CartoPage,
    QrcodePage,
    ApiPage,
    SignaturePage,
    BluetoothPage,
    SettingsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConfigProvider,
    HttpClient,
    GoogleMaps,
    WeatherProvider,
    AppState,
    BluetoothSerial,
    NativeGeocoder,
    Geolocation,
    BluetoothLE,
    BarcodeScanner,
    BLE,
    QRScanner
  ]
})
export class AppModule {
}
