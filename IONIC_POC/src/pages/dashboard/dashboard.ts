import { Component } from '@angular/core';
import {Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConfigProvider} from "../../providers/config/config";

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  pages: any;

  constructor(public events: Events, private ConfigService : ConfigProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.pages = this.ConfigService.getPages();
  }


  changePage(page){
    this.events.publish('dashboard:page', page, Date.now());

  }

}
