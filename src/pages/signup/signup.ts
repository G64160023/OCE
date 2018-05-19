import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import { ProfilePage } from '../ProfilePage/profile';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  email:any;
  password:any;
  name:any;
  telephone:any;
  passwordTest:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUp(){
    if(this.name && this.email && this.password && this.telephone && (this.password == this.passwordTest)) {

      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();

      //apiPost
      let input = {
        name :this.name,
        password: this.password,
        email: this.email, 
        telephone:this.telephone
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/create_user.php",input).subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"user");//ke lokal
        
        this.navCtrl.setRoot(TabsPage);      
        loading.dismiss();
      }
      else if(response.status==409) {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Email Already Taken',      
            buttons: ['OK']
          });
          alert.present();
          loading.dismiss();
      }
      else {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Failed Creating New Account',      
            buttons: ['OK']
          });
          alert.present();      
          loading.dismiss();
      }    
      });
      //apiPost  
    }
  }

}