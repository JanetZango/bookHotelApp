import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmationPage } from '../confirmation/confirmation';
/**
 * Generated class for the BookingformPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-bookingform',
  templateUrl: 'bookingform.html',
})
export class BookingformPage {
database;
name;
email;
number;
adults;
children;
checkin;
checkout;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
room =this.navParams.get("roomNo");
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingformPage');  
   
  }
  book(){
      let instance = {
        name: this.name,
        email: this.email,
        phoneNumber:this.number,
        adults:this.adults,
        children:this.children,
        checkin:this.checkin,
        checkout:this.checkout, 
        roomNo:this.room
      };
      console.log(instance);
      console.log(this.name,this.email,this.number,this.adults,this.children,this.checkin,this.checkout,this.room);
      this.navCtrl.push(ConfirmationPage , {obj:instance});    

    
    firebase.database().ref('Bookings').push({
      name: this.name,
      email: this.email,
      phoneNumber:this.number,
      adults:this.adults,
      children:this.children,
      checkin:this.checkin,
      checkout:this.checkout, 
      roomNo:this.room
    });
  }

 
}



