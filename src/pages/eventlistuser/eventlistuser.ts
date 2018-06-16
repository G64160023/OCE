import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';


@Component({
  selector: 'page-eventlistuser',
  templateUrl: 'eventlistuser.html',
})
export class EventlistuserPage {

  events:any;
  other_events:any;
  id:any;
    constructor(public navCtrl: NavController, public navParams: NavParams, public data:Data,public http:Http,public alertCtrl:AlertController, public loadCtrl:LoadingController) {
    }
    ionViewWillEnter() {
      this.data.getData().then((data) =>
      {
        console.log(data);
        this.id= data.id;
       this.getEvent();
       this.getOtherEvent();
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
      seeDetail(data){
        let dataEvent = data;
        
        let prompt = this.alertCtrl.create({
          title: data.event_name,
          message: data.location+"<br>"+data.date_start+"<br>"+data.date_end,
          
        });
        prompt.present();
      }
      seeDetailOther(data){
        let dataEvent = data;
        
        let prompt = this.alertCtrl.create({
          title: data.event_name,
          message: data.location+"<br>"+data.hour+"<br>"+data.date_start+"<br>"+data.date_end,
        });
        prompt.present();
      }
      getOtherEvent(){
        this.http.get(this.data.BASE_URL+"/read_other_event.php?id="+this.id).subscribe(data => {
          let response = data.json();
          console.log(response);
          if(response.status==200){
            this.other_events = response.data;
            console.log(this.other_events);
            
          console.log(event);
          }
          else alert("No Data");
        });
        //apiGet  
      }
  }
  