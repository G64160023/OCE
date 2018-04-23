import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';

@Component({
templateUrl: 'app.html'
})
export class MyApp {
   rootPage:any = WelcomePage; // Replace tabsPage with Welcome

   constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
   platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
   });
 }
 initializeApp() {
  this.platform.ready().then(() => {
    this.statusBar.styleDefault();
  });

  this.auth.afAuth.authState
    .subscribe(
      user => {
        if (user) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = WelcomePage;
        }
      },
      () => {
        this.rootPage = WelcomePage;
      }
    );
}
}
