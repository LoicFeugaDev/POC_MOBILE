import { Component, ViewChild } from '@angular/core';
import {Events, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TranslateService } from '@ngx-translate/core';

import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ListPage } from '../pages/list/list';
import {ConfigProvider} from "../providers/config/config";
import {CartoPage} from "../pages/carto/carto";
import {ApiPage} from "../pages/api/api";
import {AppState} from "./app.state";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = DashboardPage;

  pages: Array<{title: string, component: any}>;
  selectedTheme: String;

  constructor( public global:AppState, translate: TranslateService,public events: Events, private ConfigService : ConfigProvider, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    translate.setDefaultLang('fr');

    this.global.getActiveTheme().subscribe(val => this.selectedTheme = val);

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    // used for an example of ngFor and navigation
    this.pages = this.ConfigService.getPages();



    events.subscribe('dashboard:page', (page, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      this.openPage(page);
    });

  }

  toggleAppTheme() {
    console.log('toggle');
    if (this.selectedTheme === 'theme-black') {
      this.global.setActiveTheme('theme-white');
    } else {
      this.global.setActiveTheme('theme-black');
    }
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.statusBar.hide();
      this.splashScreen.hide();
    });
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);

    this.nav.push(page.component);
  }
}
