import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {BLE} from '@ionic-native/ble';
import {BluetoothLE} from "@ionic-native/bluetooth-le";
import {BluetoothSerial} from '@ionic-native/bluetooth-serial';

class BluetoothDevice {
  address: string;
  id: string;
  class: number;
  name: string;
}

/**
 * Generated class for the BluetoothPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bluetooth',
  templateUrl: 'bluetooth.html',
})
export class BluetoothPage {

  info: string = "";
  info2: string = "";
  bleDevices: BluetoothDevice[];
  activeBluetooth: boolean = false;
  isScanning: boolean = false;
  isDeviceFound: boolean = false;
  bleDeviceSelected: any;

  constructor(private bluetoothSerial: BluetoothSerial, public bluetoothle: BluetoothLE, public plt: Platform, private ble: BLE, public navCtrl: NavController, public navParams: NavParams) {

    this.bleDevices = [];
  }

  bleStop() {
    // this.bluetoothle.stopScan().then(data => {
    //   this.info = data.status+"";
    // });
  }

  activateBluetooth() {
    this.isScanning = false;
    this.isDeviceFound = false;
    if (this.activeBluetooth) {
      this.bluetoothSerial.enable().then(data => {
        this.info = "Bluetooth activé";
      });
    } else {
      this.bluetoothle.initialize().then(data => {

        this.bluetoothle.disable();

        this.info = "Bluetooth désactivé";
      });
    }
  }

  deviceSelected() {
    this.info = JSON.stringify("connect");

    this.bluetoothSerial.connect(this.bleDeviceSelected).subscribe(data => {
      this.info = JSON.stringify(data);
      this.bluetoothle.initialize().then(data => {
        this.bluetoothle.connect({address: this.bleDeviceSelected, autoConnect: true}).subscribe(data => {
          this.info2 = JSON.stringify(data);
        }, err => {
          this.info2 = JSON.stringify(err)
        });
      });
    }, err => {
      this.info = JSON.stringify(err);

    });
  }

  bleScan() {

    this.bleDevices = [];
    this.info = "";
    this.info2 = "";
    this.isDeviceFound = false;
    this.isScanning = true;
    this.bluetoothSerial.isEnabled().then(data => {
      this.bluetoothSerial.discoverUnpaired().then(data => {
        this.isScanning = false;
        this.isDeviceFound = true;
        for (let i = 0; i < data.length; i++) {
          let bleD: BluetoothDevice = data[i];
          bleD.name = bleD.name == undefined ? bleD.address : bleD.name;

          this.bleDevices.push(bleD);
        }


      });
    });

    // this.ble.enable().then(data => {
    //   this.info = data;
    //
    //   this.ble.startScan([]).subscribe(data => {
    //     this.info = data;
    //   }, err => {
    //     this.info = err;
    //   });
    // }).catch(err => {
    //   this.info =err;
    // });

    // this.plt.ready().then((readySource) => {
    //
    //   this.info = "ready : " + readySource;
    //
    //   this.bluetoothle.initialize().then(ble => {
    //     this.info = 'ble' + ble.status; // logs 'enabled'
    //
    //     this.bluetoothle.startScan({services: []}).subscribe(data => {
    //       this.info = "rssi:"+data.status.rssi;
    //       if (typeof data.status.advertisement !== "string") {
    //         let tab = data.status.advertisement.serviceUuids;
    //         this.info = data.status.advertisement.manufacturerData + " "+
    //         data.status.advertisement.localName + " is : " + data.status.advertisement.isConnectable;
    //         this.info2+= " "+this.info;
    //       } else {
    //         this.info = data.status.advertisement;
    //         this.info2+= " "+this.info;
    //
    //       }
    //     }, err => {
    //       this.info = JSON.stringify(err);
    //     });
    //
    //   });
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BluetoothPage');
  }

}
