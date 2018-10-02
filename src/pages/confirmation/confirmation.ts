import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SinglePage } from '../single/single';
import { HomePage } from '../home/home';
import { LoadingController } from 'ionic-angular';
declare var firebase;
/**
 * Generated class for the ConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation',
  templateUrl: 'confirmation.html',
})
export class ConfirmationPage implements OnInit {


  obj;
  room;
  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    this.obj = this.navParams.get("obj");
    console.log(this.obj);
   
  }
close(){
  this.navCtrl.push(HomePage);
}

logout() {
  const loader = this.loadingCtrl.create({
    spinner: 'bubbles',
    content: 'signing out....',
    duration: 3000
  });

  return new Promise((resolve, reject) => {
    firebase.auth().signOut().then(() => {
      loader.present();
      this.navCtrl.push(HomePage);
      resolve()
    }, (error) => {
      reject(error)

    });
  });

}
}