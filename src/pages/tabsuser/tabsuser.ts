import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../ProfilePage/profile';
import { HomepageuserPage } from '../homepageuser/homepageuser';
import { OrganizationPage } from '../OrganizationPage/organization';
import { SuperTabsController } from 'ionic2-super-tabs';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import { EventlistuserPage } from '../eventlistuser/eventlistuser';

@Component({
  selector: 'page-tabsuser',
  templateUrl: 'tabsuser.html',
})
export class TabsuserPage {
  tab1Root = ProfilePage;
  tab2Root = HomepageuserPage;
  tab3Root = EventlistuserPage;
  tab4Root = OrganizationPage;

  constructor(private superTabsCtrl: SuperTabsController, public data:Data,   public http:Http) {
  }
  hideToolbar() {
    this.superTabsCtrl.showToolbar(false);
  }
  
  showToolbar() {
    this.superTabsCtrl.showToolbar(true);
  }
  
  onTabSelect(ev: any) {
    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
  }
  
}