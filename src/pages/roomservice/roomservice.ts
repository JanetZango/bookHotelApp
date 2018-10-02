import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingformPage } from '../bookingform/bookingform';
import { ReservationPage } from '../reservation/reservation';
import { OrderPage } from '../order/order';

/**
 * Generated class for the RoomservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-roomservice',
  templateUrl: 'roomservice.html',
})
export class RoomservicePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomservicePage');
  }
next(){
  this.navCtrl.push(OrderPage);
}
next1(){
  this.navCtrl.push(ReservationPage);
}
}
