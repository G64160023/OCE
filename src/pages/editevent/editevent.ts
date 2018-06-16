import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import { HomePage } from '../HomePage/homepage';
import { EventlistPage } from '../eventlist/eventlist';

@Component({
  selector: 'page-editevent',
  templateUrl: 'editevent.html',
})
export class EditeventPage {
  id:any;
  id_ev:any;
  event_name:any;
  location:any;
  hour:any;
  date_start:any;
  date_end:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {

    this.data.getData().then((data) =>
    {
      console.log(data);
      this.id = data.id;
    })

    let temp = this.navParams.data;
      this.event_name = temp.event_name;
      this.location = temp.location;
      this.date_start = temp.date_start;
      this.date_end = temp.date_end;
      this.id_ev=temp.id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewJobPage');
  }

  save(){
    if(this.event_name && this.location && this.date_start&&this.date_end){
      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();

      //apiPost
      let input = {
        event_name :this.event_name,
        location: this.location, 
        date_start: this.date_start,
        date_end: this.date_end,
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/edit_event.php?id_ev="+this.id_ev,input).subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.navCtrl.setRoot(EventlistPage);      
        loading.dismiss();
      }
      else {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Failed Editing Job',      
            buttons: ['OK']
          });
          alert.present();      
          loading.dismiss();
      }    
      });
      //apiPost  
    }
  }

  }
