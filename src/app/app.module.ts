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
import { AuthService } from '../providers/auth-service/auth.service';
import { HomePage } from '../pages/HomePage/homepage';
import { OrganizationPage } from '../pages/OrganizationPage/organization';
import { ProfilePage } from '../pages/ProfilePage/profile';
import { Calendar} from '@ionic-native/calendar';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { Data } from '../provider/data';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OrganizationPage,
    ProfilePage,
    WelcomePage,
    LoginPage,
    SignupPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    WelcomePage,
    LoginPage,
    SignupPage,
    TabsPage
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
