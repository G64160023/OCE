import { Component } from '@angular/core';
import {  NavController, NavParams,AlertController, ViewController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import * as moment from 'moment';
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
  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
  minDate = new Date().toISOString();
  event_name:any;
  location:any;
  hour:any;
  date_start:any;
  date_end:any;
 userData:any;

 id:any;
  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController,public data:Data, public http:Http, public calendar:Calendar, public alertCtrl:AlertController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
    this.data.getData().then((data) =>
    {
      console.log(data);
      this.userData = data;
     this.id= data.id;
      })
  }
 
  cancel() {
    this.viewCtrl.dismiss();
  }
 
  save() {
    let input = {
      org_id: this.id,
      event_name :this.event_name,
      location: this.location,
      date_start: this.date_start, 
      date_end: this.date_end, 
      hour: this.hour,
      };
    console.log(input);
    this.http.post(this.data.BASE_URL+"/create_event.php",input).subscribe(data => {
      let response = data.json();
      console.log(response); ;
    this.calendar.createEvent(this.event_name, this.location,this.hour, new Date(this.date_start), new Date(this.date_end)).then(
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
 
}
  