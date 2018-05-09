import { Component } from '@angular/core';
import { ProfilePage } from '../ProfilePage/profile';
import { HomePage } from '../HomePage/homepage';
import { OrganizationPage } from '../OrganizationPage/organization';
import { SuperTabsController} from 'ionic2-super-tabs';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = HomePage;
  tab3Root = OrganizationPage;

  constructor(private superTabsCtrl: SuperTabsController) {
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
