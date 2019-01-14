import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TranslateService} from "@ngx-translate/core";
import {AppState} from "../../app/app.state";

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  languageSelecte:string;
  themeSelecte:string;

  constructor(private theme: AppState, private translate: TranslateService,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  languageSelected(){
    this.translate.use(this.languageSelecte);
  }
  themeSelected(){
    this.theme.setActiveTheme(this.themeSelecte);
  }

}
