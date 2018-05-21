import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import{ AddeventPage} from '../addevent/addevent';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import * as moment from 'moment';
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html'
})
export class HomePage {

  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
 id:any;
 events:any;
 userData:any;
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  
  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController, public data:Data, public http:Http) {
    this.data.getData().then((data) =>
     {
       console.log(data);
       this.userData = data;
       this.id= data.id;
       })
    }
   getEvent(){
    this.http.get(this.data.BASE_URL+"/read_event.php?id="+this.id).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status==200){
        this.events = response.data;
        console.log(this.events);
        for(let event of this.events){

        }
      console.log(event);
      }
      else alert("No Data");
    });
    //apiGet  
  }
  addEvent() {
    let modal = this.modalCtrl.create(AddeventPage, {selectedDay: this.selectedDay});
    modal.present();
    this.getEvent();
    console.log(this.events);
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = this.events;
        console.log(eventData);
        eventData.startTime = new Date(this.events.date_start);
        eventData.endTime = new Date(this.events.date_end);
 
        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }

 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    console.log(this.events);
    let start = moment(this.events.date_start).format('LLLL');
    let end = moment(this.events.date_end).format('LLLL');
    
    let alert = this.alertCtrl.create({
      title: '' + event.title,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }
 
  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;
  }
}