import { Component } from '@angular/core';
import { NavController, App, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  id:any;
  email:any;
  name:any;
  telephone:any;
  userData:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {
    this.data.getData().then((data) =>
    {
      console.log(data);
      this.userData = data;
      this.name = data.name;
      this.email = data.email;
      this.telephone= data.telephone;
      })
    }
  logout() {
    let confirm = this.alertCtrl.create({
      title: 'Sign Out?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sign Out',
          handler: () => {
            console.log('Agree clicked');
            this.data.logout();  //hapus storage cache local  
            this.navCtrl.parent.parent.setRoot(WelcomePage);
          }
        }
      ]
    });
    confirm.present();
  }
}
