export default class Weather {
    city ="";
    humidity=0;
    sky="";
    /**
     * - 273.15
     * @type {number}
     */
    temperature=0;

    constructor(json){
        if(this.correctJson(json)){
            this.city = json.name;
            this.humidity = json.main.humidity;
            this.sky = json.weather[0].description;
            this.temperature = (json.main.temp  - 273.15 ).toFixed(2);
        }else{
            this.city = "";
            this.humidity = 0;
            this.sky = "";
            this.temperature = 0;
        }
    }

    correctJson(json){
        if(json != null &&
            json != "" &&
            json != {} &&
            json.hasOwnProperty("base") &&
            json.hasOwnProperty("main")) {
            return true;
        }else{
            return false;
        }
    }

}