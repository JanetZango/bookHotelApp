import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoadingController } from 'ionic-angular';
/**
 * Generated class for the AboutusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-aboutus',
  templateUrl: 'aboutus.html',
})
export class AboutusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutusPage');
  }


// signout(){
//   firebase.auth().signOut().then(function() {
//     const loader = this.loadingCtrl.create({
//       content: "Signing out...",
//       duration: 1000
//     });
//     loader.present();
//     this.navCtrl.push(HomePage);
//   })
  
// }
signout(){
  this.navCtrl.push(HomePage);
}

}
