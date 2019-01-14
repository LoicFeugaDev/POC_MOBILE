;export default class Weather{

  city;
  humidity;
  sky;
  temperature;
  longitude;
  latitude;
  mainWeather;
  urlWeatherIcon;
  urlIcon ="https://openweathermap.org/img/w/";
  //m/s
  windSpeed;



  constructor(json){
    if(this.correctJson(json)){
      this.city = json.name;
      this.humidity = json.main.humidity;
      this.sky = json.weather[0].description;
      this.longitude = json.coord.lon;
      this.latitude = json.coord.lat;
      this.mainWeather = json.weather[0].main;
      this.urlWeatherIcon = this.buildIconWeather(json.weather[0].icon);
      this.windSpeed = json.wind.speed;
      this.temperature = (json.main.temp  - 273.15 ).toFixed(1);
    }else{
      this.city = "";
      this.humidity = 0;
      this.sky = "";
      this.temperature = 0;
    }
  }


  buildIconWeather(code){
    return this.urlIcon+code+".png";
  }

  correctJson(json){
    if(json != null &&
      json != '' &&
      json != {} &&
      json.hasOwnProperty('base') &&
      json.hasOwnProperty('main')) {
      return true;
    }else{
      return false;
    }
  }
}
