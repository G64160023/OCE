import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth.service';
import { WelcomePage } from '../welcome/welcome';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  site = {
    url: '',
    description: 'OCE (Organization Calender Event)'
  };
  constructor(public navCtrl: NavController, public app: App, private auth: AuthService, public db: AngularFireDatabase) {
    this.db.list('site').push(this.site);
  }
  logout() {

  	this.auth.signOut();
    this.navCtrl.parent.parent.setRoot(WelcomePage);
  }
}
