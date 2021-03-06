import { Component } from '@angular/core';
import { ProfilePage } from '../ProfilePage/profile';
import { HomePage } from '../HomePage/homepage';
import { OrganizationPage } from '../OrganizationPage/organization';
import { SuperTabsController} from 'ionic2-super-tabs';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import { EventlistPage } from '../eventlist/eventlist';
import { ProfileadminPage } from '../profileadmin/profileadmin';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfileadminPage;
  tab2Root = HomePage;
  tab3Root = EventlistPage;
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
