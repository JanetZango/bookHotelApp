import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { AboutusPage } from '../aboutus/aboutus';
import { obj } from '../../app/class';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
declare var firebase;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 obj = {} as obj
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public loadingCtrl: LoadingController) {

  }
nextpage1(){
  this.navCtrl.push(RegistrationPage);
}
sigin(obj:obj){
firebase.auth().signInWithEmailAndPassword(obj.email,obj.password).then(()=>{
  const loader = this.loadingCtrl.create({
    content: "Signing in..."+obj.email,
    duration: 1000
  });
  loader.present();
  this.navCtrl.push(AboutusPage);


},
(error)=>{
  this.showAlert();

  
});
}
showAlert(){
  const alert = this.alertCtrl.create({
    title: 'Invalid',
    subTitle: 'Incorrect data entered!',
    buttons: ['OK']
  });
  alert.present();
}

}
