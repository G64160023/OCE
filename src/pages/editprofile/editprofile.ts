import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import { ProfilePage } from '../ProfilePage/profile';
import { SignupadminPage } from '../signupadmin/signupadmin';
import { ProfileadminPage } from '../profileadmin/profileadmin';


@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {

  org_id:any;
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
      this.org_id = temp.org_id;
      this.name = temp.name;
      this.email = temp.email;
      this.telephone=temp.telephone;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

  editProfile(){
    if(this.name && this.email && this.telephone  && (this.newPassword==this.newPasswordTest)){
      
      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();

      //apiPost
      let input = {
        org_id: this.org_id,
        name :this.name,
        email: this.email, 
        telephone:this.telephone,
        password :this.newPassword
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/edit_admin_profile.php?id="+this.org_id,input).subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.data.logout();
        this.data.login(response.data,"admin");//ke lokal
        
        this.navCtrl.setRoot(ProfileadminPage);
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