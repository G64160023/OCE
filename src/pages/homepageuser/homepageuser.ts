import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import { AddeventPage } from '../addevent/addevent';

@Component({
  selector: 'page-homepageuser',
  templateUrl: 'homepageuser.html',
})
export class HomepageuserPage {
  eventSource = [];
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
      this.id= data.id;
     this.getEvent();
      })
    }
    getEvent(){
    this.http.get(this.data.BASE_URL+"/read_event.php?id="+this.id).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status==200){
        this.events = response.data;
        console.log(this.events);
        
      console.log(event);
      }
      else alert("No Data");
    });
    //apiGet  
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