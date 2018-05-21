import { Component } from '@angular/core';
import { NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
import { ChoosesignupPage } from '../choosesignup/choosesignup';
import { TabsPage } from '../tabs/tabs';
import { FormGroup } from '@angular/forms';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';

/**
 * Generated class for the LoginadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-loginadmin',
  templateUrl: 'loginadmin.html',
})
export class LoginadminPage {

  loginForm: FormGroup;
	loginError: string;
	email:any;
	password:any;
	constructor(
		public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http
  ) {
    this.menuCtrl.enable(false);
  }
	ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
	}
	login(){
	if(this.email && this.password){
		let loading = this.loadCtrl.create({
			content: 'memuat..'
		});

		loading.present();

		//apiPost
		let input = {
			email: this.email, 
			password: this.password
		};
		console.log(input);
		this.http.post(this.data.BASE_URL+"/login_admin.php",input).subscribe(data => {
		let response = data.json();
		console.log(response); 
		if(response.status==200){    
			this.data.logout();
			
			this.data.login(response.data,"user");//ke lokal
			
			this.navCtrl.setRoot(TabsPage);
			loading.dismiss();
		}
		else {
			loading.dismiss();
				let alert = this.alertCtrl.create({
					title: 'Login Failed',      
					message : 'please try again',
					buttons: ['OK']
				});
				alert.present();
				
		}    
		});
		//apiPost    
	}
}

    signup(){
      this.navCtrl.push(ChoosesignupPage);
    }


}
