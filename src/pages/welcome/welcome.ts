import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';
import { Http }  from '@angular/http';
import { Data } from '../../provider/data';
import { ChoosesignupPage } from '../choosesignup/choosesignup';
import { ChooseloginPage } from '../chooselogin/chooselogin';
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  constructor( public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {
  
    this.testapi();
  }
  login(){
  this.navCtrl.push(ChooseloginPage);
  }

  signup(){
  this.navCtrl.push(ChoosesignupPage);
  }
  testapi(){
    this.http.get("http://orgcal.atspace.cc/db_connect.php").subscribe(data=>{
      console.log(data);
    })
  }
}
