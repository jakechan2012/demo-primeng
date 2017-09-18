import { Injectable, Type } from '@angular/core';

import { DashboardComponent } from '../components/dashboard';
import { GridPageComponent } from '../components/grid-page';
import { FormPageComponent } from '../components/form-page';

@Injectable()
export class TabsService {
  tabSource: any;
  constructor() {
    this.tabSource = {
      'menus.dashboard': DashboardComponent,
      'menus.grid-page': GridPageComponent,
      'menus.form-page': FormPageComponent,
    }
  }

  getTab(route: string): TabItem {
    return new TabItem(route, this.tabSource[route]);
  }
}

export class TabItem {
  constructor(public route: string, public component: Type<any>) { }
}