import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
/**
 * Generated class for the QrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {

  options:BarcodeScannerOptions;
  text:string="";
  constructor(private barcodeScanner: BarcodeScanner,private qrScanner: QRScanner,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrcodePage');
  }

  qrcode(){
    // this.qrScanner.prepare()
    //   .then((status: QRScannerStatus) => {
    //     if (status.authorized) {
    //       // camera permission was granted
    //
    //
    //       // start scanning
    //       let scanSub = this.qrScanner.scan().subscribe((text: string) => {
    //         this.text = text;
    //
    //         this.qrScanner.hide(); // hide camera preview
    //         scanSub.unsubscribe(); // stop scanning
    //       });
    //
    //     } else if (status.denied) {
    //       // camera permission was permanently denied
    //       // you must use QRScanner.openSettings() method to guide the user to the settings page
    //       // then they can grant the permission from there
    //     } else {
    //       // permission was denied, but not permanently. You can ask for permission again at a later time.
    //     }
    //   })
    //   .catch((e: any) => console.log('Error is', e));

    this.options={
      prompt:"Scan QRCode"
    };
    this.barcodeScanner.scan(this.options).then(data => {
      this.text = data.text;
    });
  }

}
