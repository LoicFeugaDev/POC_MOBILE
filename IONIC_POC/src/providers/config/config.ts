import { Injectable } from '@angular/core';
import {ListPage} from "../../pages/list/list";
import {DashboardPage} from "../../pages/dashboard/dashboard";
import {HomePage} from "../../pages/home/home";
import {FormulairePage} from "../../pages/formulaire/formulaire";
import {PhotoPage} from "../../pages/photo/photo";
import {CartoPage} from "../../pages/carto/carto";
import {QrcodePage} from "../../pages/qrcode/qrcode";
import {ApiPage} from "../../pages/api/api";
import {SignaturePageModule} from "../../pages/signature/signature.module";
import {SignaturePage} from "../../pages/signature/signature";
import {BluetoothPage} from "../../pages/bluetooth/bluetooth";
import {SettingsPage} from "../../pages/settings/settings";

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  constructor() {
    console.log('Hello ConfigProvider Provider');
  }

  getPages(){
    return [
      // { title: 'Dashboard', component: DashboardPage },
      { title: 'FORMS', component: FormulairePage , icon: 'md-person-add'},
      { title: 'PHOTO', component: PhotoPage , icon: 'md-camera'},
      { title: 'MAPS', component: CartoPage , icon: 'md-map'},
      { title: 'QRCODE', component: QrcodePage , icon: 'md-qr-scanner'},
      { title: 'CALLAPI', component: ApiPage , icon: 'ios-at-outline'},
      { title: 'SIGNATURE', component: SignaturePage , icon: 'md-create'},
      { title: 'BLUETOOTH', component: BluetoothPage , icon: 'md-bluetooth'},
      { title: 'SETTINGS', component: SettingsPage , icon : 'md-settings' }
    ];
  }

}
