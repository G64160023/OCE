import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import{ AddeventPage} from '../addevent/addevent';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import * as moment from 'moment';
import { CalendarComponent } from "ionic2-calendar/calendar";

@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html'
})
export class HomePage {
 
  @ViewChild(CalendarComponent) myCalendar:CalendarComponent;
 
  startTime=new Date();
  endTime=new Date();
  eventSource = [];
  eventsData=[];
  viewTitle: string;
  selectedDay = new Date();
 id:any;
 events:any;
 userData:any;
  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
  };
  
  constructor(public navCtrl: NavController, private modalCtrl: ModalController, private alertCtrl: AlertController, public data:Data, public http:Http) {
    
    }
    ionViewWillEnter() {
      this.data.getData().then((data) =>
    {
      console.log(data);
      this.id= data.org_id;
      this.getEvent();
      });
    }
    getEvent(){
      console.log(this.id);
    this.http.get(this.data.BASE_URL+"/read_event.php?id="+this.id).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.data!=null){
        this.events = response.data;
        console.log(this.events);
        for(let event of this.events){
          this.eventsData.push({
            title: event.event_name,
            startTime: new Date(event.date_start),
            endTime: new Date(event.date_end),
            allDay: false
        });
      }
      this.eventSource=this.eventsData;
      console.log(this.eventSource);
      }
      else alert("No Data");
    });
    //apiGet  
  }
  addEvent() {
   this.navCtrl.push(AddeventPage);
  }

 
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }
 
  onEventSelected(event) {
    let start = moment(this.events.date_start).format('LL');
    let end = moment(this.events.date_end).format('LL');
    
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
  
  loadEvents() {
      this.myCalendar.loadEvents(); 
  }  
}