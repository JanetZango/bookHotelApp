import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservationPage } from '../reservation/reservation';
import { BookingformPage } from '../bookingform/bookingform';
import { ConfirmationPage } from '../confirmation/confirmation';

/**
 * Generated class for the WeddingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wedding',
  templateUrl: 'wedding.html',
})
export class WeddingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeddingPage');
  }
  next() {
    var x = Math.floor((Math.random() * 100) );
    this.navCtrl.push(BookingformPage , {roomNo:x});

  }
next1(){
  this.navCtrl.push(ReservationPage);
}
}
