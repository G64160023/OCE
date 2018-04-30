import { Component } from '@angular/core';
import { ProfilePage } from '../ProfilePage/profile';
import { HomePage } from '../HomePage/homepage';
import { OrganizationPage } from '../OrganizationPage/organization';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage;
  tab2Root = HomePage;
  tab3Root = OrganizationPage;

  constructor() {

  }
}
