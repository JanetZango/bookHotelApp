import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservationPage } from '../reservation/reservation';
import { BookingformPage } from '../bookingform/bookingform';

/**
 * Generated class for the DoublePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-double',
  templateUrl: 'double.html',
})
export class DoublePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoublePage');
  }
next1(){

  this.navCtrl.push(ReservationPage);
}
next() {
  var x = Math.floor((Math.random() * 100) );
  this.navCtrl.push(BookingformPage , {roomNo:x});

}
}
