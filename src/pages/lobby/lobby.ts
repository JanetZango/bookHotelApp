import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservationPage } from '../reservation/reservation';;
import {BookingformPage} from '../bookingform/bookingform'
/**
 * Generated class for the LobbyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html',
})
export class LobbyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LobbyPage');
  }
next(){
  var x = Math.floor((Math.random() * 100) );
  this.navCtrl.push(BookingformPage , {roomNo:x});
}
next1(){
this.navCtrl.push(ReservationPage);
}
}
