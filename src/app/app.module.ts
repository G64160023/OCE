import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { HomePage } from '../pages/HomePage/homepage';
import { OrganizationPage } from '../pages/OrganizationPage/organization';
import { ProfilePage } from '../pages/ProfilePage/profile';
import { Calendar} from '@ionic-native/calendar';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Data } from '../provider/data';
import { AddeventPage } from '../pages/addevent/addevent';
import {NgCalendarModule} from 'ionic2-calendar';
import { ChoosesignupPage } from '../pages/choosesignup/choosesignup';
import { SignupadminPage } from '../pages/signupadmin/signupadmin';
import { ChooseloginPage } from '../pages/chooselogin/chooselogin';
import { LoginadminPage } from '../pages/loginadmin/loginadmin';
import { EventlistPage } from '../pages/eventlist/eventlist';
import { EditeventPage } from '../pages/editevent/editevent';
import { GetstartedPage } from '../pages/getstarted/getstarted';
import { HomepageuserPage } from '../pages/homepageuser/homepageuser';
import { EventlistuserPage } from '../pages/eventlistuser/eventlistuser';
import { TabsuserPage } from '../pages/tabsuser/tabsuser';
import { ProfileadminPage } from '../pages/profileadmin/profileadmin';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { EdituserprofilePage } from '../pages/edituserprofile/edituserprofile';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrganizationPage,
    ProfilePage,
    ProfileadminPage,
    EditprofilePage,
    EdituserprofilePage,
    ChooseloginPage,
    LoginadminPage,
    AddeventPage,
    HomepageuserPage,
    EventlistuserPage,
    TabsuserPage,
    WelcomePage,
    LoginPage,
    ChoosesignupPage,
    SignupadminPage,
    GetstartedPage,
    SignupPage,
    EditeventPage,
    EventlistPage,
    TabsPage

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgCalendarModule,
    NgxErrorsModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule,
    IonicModule.forRoot(MyApp,{tabsPlacement: 'bottom',tabsHideOnSubPages: true,
      platforms: {
      android: {
        tabsPlacement: 'top'
      },
      ios: {
        tabsPlacement: 'button'
      },
      windows:{
        tabsPlacement: 'top'
      }
    }
  }),SuperTabsModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OrganizationPage,
    ProfilePage,
    ProfileadminPage,
    EditprofilePage,
    WelcomePage,
    LoginPage,
    ChooseloginPage,
    LoginadminPage,
    ChoosesignupPage,
    HomepageuserPage,
    EventlistuserPage,
    TabsuserPage,
    SignupadminPage,
    ProfileadminPage,
    EditprofilePage,
    SignupPage,
    TabsPage,
    EditeventPage,
    EventlistPage,
    GetstartedPage,
    EdituserprofilePage,
    AddeventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Data,
    Calendar,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
