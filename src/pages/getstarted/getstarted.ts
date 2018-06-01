import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import { TabsPage } from '../tabs/tabs';
import { TabsuserPage } from '../tabsuser/tabsuser';


@Component({
  selector: 'page-getstarted',
  templateUrl: 'getstarted.html',
})
export class GetstartedPage {
  id:any;
  org_id:any;
  orgs:any;
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
    this.getOrganizations();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GetstartedPage');
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
  submit(){
    
    let input = {
      id :this.id,
      org_id:this.org_id
    };
    console.log(input);
      this.http.post(this.data.BASE_URL+"/create_member.php",input).subscribe(data => {
      let response = data.json();
      console.log(response);
    });
    this.navCtrl.push(TabsuserPage); 
  }

}
