import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-organization',
  templateUrl: 'organization.html'
})
export class OrganizationPage {
  Organizations:any;
  id:any;
  orgs:any;
  constructor(public navCtrl: NavController, public data:Data, public http:Http, public alertCtrl:AlertController) {
  this.getOrganizations();
  }
  getOrganizations(){
    this.http.get(this.data.BASE_URL+"/read_organization.php").subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status==200){
        this.orgs = response.data;  
      }
      else alert("No Data");
    });
    //apiGet  
  }
  seeDetail(data){
    let dataOrg = data;
    
    let prompt = this.alertCtrl.create({
      title: data.name,
      message: data.email+"<br>"+data.telephone ,
      
    });
    prompt.present();
  }
}
