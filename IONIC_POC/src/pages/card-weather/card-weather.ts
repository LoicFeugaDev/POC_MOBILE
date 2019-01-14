import {Component, Input} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import Weather from "../../classes/Weather";

/**
 * Generated class for the CardWeatherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'card-weather',
  templateUrl: 'card-weather.html',
})
export class CardWeatherPage {

  @Input() weather:Weather;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardWeatherPage');
  }

}
