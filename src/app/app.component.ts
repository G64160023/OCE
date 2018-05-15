import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { Data } from '../provider/data'; 
@Component({
templateUrl: 'app.html'
})
export class MyApp {
   rootPage:any = WelcomePage; // Replace tabsPage with Welcome

   constructor(platform: Platform, statusBar: StatusBar, public data: Data, splashScreen: SplashScreen) {
   platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
   });
 
  }
 
}
