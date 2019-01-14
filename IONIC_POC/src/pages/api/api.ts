import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {WeatherProvider} from "../../providers/weather/weather";
import Weather from '../../classes/Weather';

/**
 * Generated class for the ApiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-api',
  templateUrl: 'api.html',
})
export class ApiPage {

  city: string = "";
  weather: Weather;

  constructor(public WeatherService: WeatherProvider, public navCtrl: NavController, public navParams: NavParams) {

    // this.getWeather();
  }

  getWeather() {
    this.WeatherService.getWeather(this.city).then(data => {

      if (data == false) {
        this.weather = new Weather({});
      } else {

        this.weather = <Weather> data;
      }
    }).catch(err => {
      console.log(err);
    });
  }


}


