import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, normalizeURL} from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the PhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {

  imageSrc;
   options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(private camera: Camera,public navCtrl: NavController, public navParams: NavParams) {
  }

  openCamera(){
    this.camera.getPicture(this.options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;


      this.imageSrc = base64Image;
    }, (err) => {
      // Handle error
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoPage');
  }

}
