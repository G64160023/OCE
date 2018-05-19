import { Component } from '@angular/core';
import {  NavController, NavParams,AlertController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
/**
 * Generated class for the AddeventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addevent',
  templateUrl: 'addevent.html',
})
export class AddeventPage {
  event = { title: "", location: "", message: "", startDate: "", endDate: "" };
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController, public calendar: Calendar ) {
  }
  save() {
    this.calendar.createEvent(this.event.title, this.event.location, this.event.message, new Date(this.event.startDate), new Date(this.event.endDate)).then(
      (msg) => {
        let alert = this.alertCtrl.create({
          title: 'Success!',
          subTitle: 'Event saved successfully',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.pop();
      },
      (err) => {
        let alert = this.alertCtrl.create({
          title: 'Failed!',
          subTitle: err,
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeventPage');
  }

}
