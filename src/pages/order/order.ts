import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { RoomservicePage } from '../roomservice/roomservice';
/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  database;
  food;
  people;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');

  }
  order(){
    firebase.database().ref('Orders').push({
      food: this.food,
      people: this.people,

    });
console.log(this.food,this.people);
this.showAlert();
  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Order',
      subTitle: 'Your order as been placed!',
      buttons: ['OK']
    });
    alert.present();
  }
  next(){
    this.navCtrl.push(RoomservicePage);
  }
}
