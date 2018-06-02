import { Component } from '@angular/core';
import {NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import { ProfilePage } from '../ProfilePage/profile';


@Component({
  selector: 'page-edituserprofile',
  templateUrl: 'edituserprofile.html',
})
export class EdituserprofilePage {

 
  id:any;
  email:any;
  password:any;
  name:any;
  passwordTest:any;
  newPassword:any;
  newPasswordTest:any;
  telephone:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {

      let temp = this.navParams.data;
      this.id = temp.id;
      this.name = temp.name;
      this.email = temp.email;
      this.telephone=temp.telephone;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

  editProfile(){
    if(this.name && this.email && this.telephone && (this.newPassword==this.newPasswordTest)){
      
      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();

      //apiPost
      let input = {
        id: this.id,
        name :this.name,
        email: this.email, 
        telephone:this.telephone,
        password :this.newPassword
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/edit_profile.php?id="+this.id,input).subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"user");//ke lokal
        
        this.navCtrl.setRoot(ProfilePage);
        loading.dismiss();
      }
      else {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Failed Editing Account',      
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