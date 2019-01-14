import {Component, ElementRef, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  Environment, GoogleMapOptions, Marker
} from '@ionic-native/google-maps';
import {Geolocation} from '@ionic-native/geolocation';
import {
  NativeGeocoder,
  NativeGeocoderReverseResult,
  NativeGeocoderForwardResult,
  NativeGeocoderOptions
} from '@ionic-native/native-geocoder';

/**
 * Generated class for the CartoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
class CapgeminiItem {
  lat: number;
  lon: number;
  title: string;

  constructor(lat, lon, title) {
    this.lat = lat;
    this.lon = lon;
    this.title = title;
  }
}

class Address {
  num: string;
  rue: string;
  ville: string;
  cp: string;
  region: string;
  pays: string;

  constructor(num: string, rue: string, ville: string, cp: string, region: string, pays: string) {
    this.num = num;
    this.rue = rue;
    this.ville = ville;
    this.cp = cp;
    this.region = region;
    this.pays = pays;
  }
}

@IonicPage()
@Component({
  selector: 'page-carto',
  templateUrl: 'carto.html',
})
export class CartoPage {
  map: GoogleMap;
  //AIzaSyA-3Fb6WbEZvtEsXN6YaUvqnJcaJbRdpwo
  capgeminis: CapgeminiItem[] = [];
  lat: number;
  lon: number;
  address: Address;


  constructor(private nativeGeocoder: NativeGeocoder, private geolocation: Geolocation, public navCtrl: NavController, public navParams: NavParams) {
    this.capgeminis.push(new CapgeminiItem(43.4815734, 5.4062605, "Capgemini Aix-en-Provence"));
    this.capgeminis.push(new CapgeminiItem(43.652018, 4.005800, "Capgemini Montpellier"));
    this.capgeminis.push(new CapgeminiItem(43.493400, -1.474570, "Capgemini Bayonne"));
    this.capgeminis.push(new CapgeminiItem(47.638770, 6.862100, "Capgemini Belfort"));
    this.capgeminis.push(new CapgeminiItem(44.835000, -0.575490, "Capgemini Bordeaux"));
    this.capgeminis.push(new CapgeminiItem(48.389870, -4.487180, "Capgemini Brest"));
    this.capgeminis.push(new CapgeminiItem(49.638670, -1.614240, "Capgemini Cherbourg"));
    this.capgeminis.push(new CapgeminiItem(45.777210, 3.082520, "Capgemini Clermont"));
    this.capgeminis.push(new CapgeminiItem(49.189520, 2.415120, "Capgemini Gouvieux"));
    this.capgeminis.push(new CapgeminiItem(45.194260, 5.731670, "Capgemini Grenoble"));
    this.capgeminis.push(new CapgeminiItem(50.631290, 3.062750, "Capgemini Lille"));
    this.capgeminis.push(new CapgeminiItem(45.767310, 4.834310, "Capgemini Lyon"));
    this.capgeminis.push(new CapgeminiItem(48.690780, 6.182470, "Capgemini Nancy"));
    this.capgeminis.push(new CapgeminiItem(47.218260, -1.557180, "Capgemini Nantes"));
    this.capgeminis.push(new CapgeminiItem(43.607190, 7.124060, "Capgemini Nice-Sophia Antipolis"));
    this.capgeminis.push(new CapgeminiItem(47.901400, 1.903920, "Capgemini Orléans"));
    this.capgeminis.push(new CapgeminiItem(48.856890, 2.350850, "Capgemini Paris"));
    this.capgeminis.push(new CapgeminiItem(43.297540, -0.374640, "Capgemini Pau"));
    this.capgeminis.push(new CapgeminiItem(48.117268, -1.677793, "Capgemini Rennes"));
    this.capgeminis.push(new CapgeminiItem(44.453540, 4.341560, "Capgemini Ruoms"));
    this.capgeminis.push(new CapgeminiItem(48.573406, 7.752111, "Capgemini Strasbourg"));
    this.capgeminis.push(new CapgeminiItem(43.604652, 1.444209, "Capgemini Toulouse"));
    this.capgeminis.push(new CapgeminiItem(47.390289, 0.688850, "Capgemini Tours"));

  }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    // This code is necessary for browser
    Environment.setEnv({
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyD7NlgBaRW4MlA90u6D-FcEf3PxLkXTfwA',
    });
    //
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 45.750000,
          lng: 4.850000
        },
        zoom: 5,
        tilt: 30
      }
    };


    this.map = GoogleMaps.create('map_canvas', mapOptions);

    for (let i = 0; i < this.capgeminis.length; i++) {

      let marker: Marker = this.map.addMarkerSync({
        title: this.capgeminis[i].title,
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: this.capgeminis[i].lat,
          lng: this.capgeminis[i].lon
        }
      });
    }


    // marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
    //   alert('clicked');
    // });


  }

  locateMe() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;
      let marker: Marker = this.map.addMarkerSync({
        title: "Moi",
        icon: 'red',
        animation: 'DROP',
        position: {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude
        }
      });

      let options: NativeGeocoderOptions = {
        useLocale: true,
        maxResults: 5
      };

      let mapOptions: GoogleMapOptions = {
        camera: {
          target: {
            lat: this.lat,
            lng: this.lon
          },
          zoom: 18,
          tilt: 30
        }
      };

      this.map.setOptions(mapOptions);

      this.nativeGeocoder.reverseGeocode(this.lat, this.lon, options)
        .then((result: NativeGeocoderReverseResult[]) => {
          this.address = new Address(result[0].subThoroughfare, result[0].thoroughfare, result[0].locality, result[0].postalCode, result[0].administrativeArea, result[0].countryName);
        })
        .catch((error: any) => console.log(error));

    }).catch((error) => {
      console.log('Error getting location', error);
    });

  }

}
