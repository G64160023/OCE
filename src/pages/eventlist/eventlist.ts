import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import { EditeventPage } from '../editevent/editevent';


@Component({
  selector: 'page-eventlist',
  templateUrl: 'eventlist.html',
})
export class EventlistPage {
events:any;
other_events:any;
id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:Data,public http:Http,public alertCtrl:AlertController, public loadCtrl:LoadingController) {
  }
  ionViewWillEnter() {
    this.data.getData().then((data) =>
    {
      console.log(data);
      this.id= data.org_id;
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
        message: "Location: "+data.location+"<br>Starts At: "+data.hour+"<br>Date Start: "+data.date_start+"<br>Date End: "+data.date_end,
        buttons: [
          {
            text: 'Delete',
            handler: data => {
              this.deleteEvent(dataEvent);
            }
          },
          {
            text: 'Edit',
            handler: data => {
              this.navCtrl.push(EditeventPage, dataEvent);
            }
          }
        ]
      });
      prompt.present();
    }
    seeDetailOther(data){
      let dataEvent = data;
      
      let prompt = this.alertCtrl.create({
        title: data.event_name,
        message: "Location: "+data.location+"<br>Starts At: "+data.hour+"<br>Date Start: "+data.date_start+"<br>Date End: "+data.date_end
                +"<br>Event By: "+data.name+"<br>Contact: "+data.email,
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
    deleteEvent(data){
      let dataEvent = data;
      let prompt = this.alertCtrl.create({
        title: 'Delete '+data.event_name,
        message: "This action can't be undo",
        buttons: [
          {
            text: 'Delete',
            handler: data => {
              console.log('Delete clicked');
              let loading = this.loadCtrl.create({
                content: 'memuat..'
              });
          
              loading.present();
              //apiPost
              let input = {
                id : dataEvent.id
              };
              console.log(input);
              this.http.post(this.data.BASE_URL+"/delete_event.php?id="+dataEvent.id,input).subscribe(data => {
              let response = data.json();
              console.log(response); 
              if(response.status==200){    
                this.getEvent();
                loading.dismiss();
              }
              else {
                loading.dismiss();
                  let alert = this.alertCtrl.create({
                    title: 'Failed',
                    message: 'please try again',      
                    buttons: ['OK']
                  });
                  alert.present();      
                  loading.dismiss();
              }    
              });
              //apiPost
            }
          },
          {
            text: 'Cancel',
            handler: data => {
              
            }
          }
        ]
      });
      prompt.present();
    }
}
