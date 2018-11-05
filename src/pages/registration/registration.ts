import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutusPage } from '../aboutus/aboutus';
import { obj } from '../../app/class';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  obj = {} as obj
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,public alertCtrl: AlertController,public loadingCtrl: LoadingController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  goback(){
    this.navCtrl.pop();
  }


  register(obj: obj) {
    firebase.auth().createUserWithEmailAndPassword(obj.email, obj.password).then(() => {
      const loader = this.loadingCtrl.create({
        content: "You have registered successfully!..."+obj.email,
        duration: 1000
      });
      loader.present();
      this.navCtrl.push(AboutusPage); 
    },
      (error) => {
        this.showAlert();
      });
  }
  presentToast(){
    const toast = this.toastCtrl.create({
      message: 'Registered successfully!!',
      duration: 3000
    });
    toast.present();
  }
  showAlert(){
    const alert = this.alertCtrl.create({
      title: 'Invalid',
      subTitle: 'incorect email format and password must be 6 characters!',
      buttons: ['OK']
    });
    alert.present();
  }



}
