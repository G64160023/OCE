import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth.service';
import { WelcomePage } from '../welcome/welcome';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public app: App) {
    
  }
  logout() {
    this.navCtrl.parent.parent.setRoot(WelcomePage);
  }
}
