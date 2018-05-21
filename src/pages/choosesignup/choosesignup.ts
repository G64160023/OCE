import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SignupadminPage } from '../signupadmin/signupadmin';

/**
 * Generated class for the ChoosesignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-choosesignup',
  templateUrl: 'choosesignup.html',
})
export class ChoosesignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosesignupPage');
  }
  signup(){
    this.navCtrl.push(SignupPage);
  }
  signupadmin(){
    this.navCtrl.push(SignupadminPage);
  }
}
