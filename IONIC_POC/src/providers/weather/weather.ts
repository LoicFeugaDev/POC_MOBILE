import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import "rxjs/add/operator/map";
import Weather from '../../classes/Weather';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  url = "http://api.openweathermap.org/data/2.5/weather?q=";
  urlIcon ="https://openweathermap.org/img/w/";
  key = "4bc1d9f07a44db6907d6165bd52500a5";

  constructor(public http: HttpClient) {

  }


  buildUrl(city) {
    return this.url + city + "&appId=" + this.key;
  }

  buildIconWeather(code){
    return this.urlIcon+code+".png";
  }

  getWeather(city) {
    return new Promise(resolve => {
      this.http.get(this.buildUrl(city))
        .subscribe(data => {
          console.log(JSON.stringify(data));
          resolve(new Weather(data));
        },err => {
          resolve(false);
      });
    });
    // let lyonWeather = {
    //   "coord": {"lon": 4.83, "lat": 45.76},
    //   "weather": [{"id": 500, "main": "Rain", "description": "light rain", "icon": "10d"}],
    //   "base": "stations",
    //   "main": {"temp": 276.13, "pressure": 1019, "humidity": 96, "temp_min": 275.15, "temp_max": 277.15},
    //   "visibility": 10000,
    //   "wind": {"speed": 6.2, "deg": 350},
    //   "clouds": {"all": 75},
    //   "dt": 1547028000,
    //   "sys": {"type": 1, "id": 6505, "message": 0.0036, "country": "FR", "sunrise": 1547018432, "sunset": 1547050528},
    //   "id": 2996944,
    //   "name": "Lyon",
    //   "cod": 200
    // };

    // return new Promise(resolve => {
    //   return resolve(new Weather(lyonWeather));
    // })
  }

}
