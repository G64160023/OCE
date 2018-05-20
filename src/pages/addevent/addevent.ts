import { Component } from '@angular/core';
import {  NavController, NavParams,AlertController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
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
  event_name: any;
  location: any;
  date_start: any;
  date_end:any;
  hour:any;
  title:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController, public calendar: Calendar, public data: Data, public http: Http ) {
  }
  save() {
    let input = {
      name :this.event_name,
      location: this.location,
      date_start: this.date_start, 
      date_end: this.date_end, 
      hour: this.hour,
      };
    console.log(input);
  this.http.post(this.data.BASE_URL+"/create_event.php",input).subscribe(data => {
      let response = data.json();
      console.log(response); 
    this.calendar.createEvent(response.name, response.location,response.hour, new Date(response.date_start), new Date(response.date_end)).then(
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
  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddeventPage');
  }

}
