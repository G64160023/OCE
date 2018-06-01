import { Component } from '@angular/core';
import { Platform, Tabs } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WelcomePage } from '../pages/welcome/welcome';
import { Data } from '../provider/data'; 
import { HomePage } from '../pages/HomePage/homepage';
import { ProfilePage } from '../pages/ProfilePage/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { OrganizationPage } from '../pages/OrganizationPage/organization';
import { LoginPage } from '../pages/login/login';
import { TabsuserPage } from '../pages/tabsuser/tabsuser';
@Component({
templateUrl: 'app.html'
})
export class MyApp {
  role:any;
   rootPage:any = WelcomePage; // Replace tabsPage with Welcome
   pages: Array<{title: string, component: any}>;
   constructor(public platform: Platform, public statusBar: StatusBar, public data: Data, public splashScreen: SplashScreen) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Homepage', component: HomePage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Organizations', component: OrganizationPage}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    //Session
    this.data.getRole().then((role)=>
  {
    this.role=role;
  })
    this.data.isLogin().then((value)=>{
      if(value){
        if(this.role="admin"){
        this.rootPage = TabsPage;
      }
        else{
          this.rootPage=TabsuserPage;
        }
      } else {
         this.rootPage = WelcomePage;
      }    
    });  
  }
 
}
