import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LoginadminPage } from '../loginadmin/loginadmin';

/**
 * Generated class for the ChooseloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chooselogin',
  templateUrl: 'chooselogin.html',
})
export class ChooseloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseloginPage');
  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  loginadmin(){
    this.navCtrl.push(LoginadminPage);
  }
}
