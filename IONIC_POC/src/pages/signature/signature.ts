import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignaturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signature',
  templateUrl: 'signature.html',
})
export class SignaturePage implements AfterViewInit{
  clic=false;
  xCoord="";
  yCoord="";
  @ViewChild('can') canvas : ElementRef;
  cntx;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  mouseDown(e){
    console.log(e);
    this.clic=true;
    this.cntx.save();
    this.xCoord=e.pageX-e.srcElement.offsetLeft+"";
    this.yCoord=e.pageY-e.srcElement.offsetTop+"";
  }
  mouseUp(){
    this.clic=false;
  }

  mouseMove(e){
      this.cntx.beginPath();
      this.cntx.moveTo(e.pageX-e.srcElement.offsetLeft,e.pageY-e.srcElement.offsetTop);
      this.cntx.lineTo(this.xCoord,this.yCoord);
      this.cntx.stroke();
      this.cntx.closePath();
      this.xCoord=e.pageX-e.srcElement.offsetLeft+"";
      this.yCoord=e.pageY-e.srcElement.offsetTop+"";
      console.log(this.xCoord);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignaturePage');
  }

  ngAfterViewInit(): void {
    this.cntx = this.canvas.nativeElement.getContext("2d");
    this.cntx.strokeStyle="red";
    this.cntx.lineWidth=10;
    this.cntx.lineCap="round";
    this.cntx.fillStyle="#fff";
    this.cntx.fillRect(0,0,this.canvas.nativeElement.width,this.canvas.nativeElement.height);

  }

}
