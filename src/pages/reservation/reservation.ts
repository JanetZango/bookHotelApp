import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutusPage } from '../aboutus/aboutus';
import { RoomservicePage } from '../roomservice/roomservice';
import { WeddingPage } from '../wedding/wedding';
import { SinglePage } from '../single/single';
import { DoublePage } from '../double/double';
import { EventsPage } from '../events/events';
import { LobbyPage } from '../lobby/lobby';

/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }
next(){
  this.navCtrl.push(AboutusPage);
}
next1(){
this.navCtrl.push(RoomservicePage);
}
next2(){
this.navCtrl.push(WeddingPage);
}
next3(){
  this.navCtrl.push(SinglePage);
}
next4(){
  this.navCtrl.push(DoublePage);
}
next5(){
  this.navCtrl.push(EventsPage);
}
next6(){
  this.navCtrl.push(LobbyPage);
}
}
