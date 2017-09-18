import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { TranslateService } from "@ngx-translate/core";
import * as _ from 'lodash';

import { TabsService, TabItem } from '../../services/tabs.service';
import { MenusService } from '../../services/menus.service';

@Component({
  selector: 'justech-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MenusService, TabsService]
})
export class HomeComponent implements OnInit, OnDestroy {
  tabs: TabItem[];
  menuItems: Array<any>;
  currentTabRoute: string;
  languages: Array<any>;
  language: string;
  languageLabel: string;
  langLeaveTimeout: any;
  subscriptionMenuClick: Subscription;
  subscriptionTranslations: Subscription;
  constructor(
    private menusService: MenusService,
    private tabsService: TabsService,
    private translateService: TranslateService) {
    this.currentTabRoute = 'menus.dashboard';
    this.subscriptionMenuClick = this.menusService.obMenuClick$.subscribe(tab => {
      if (!_.find(this.tabs, tab)) {
        this.tabs.push(tab);
      }
      this.currentTabRoute = tab.route;
    });
    this.subscriptionTranslations = this.menusService.obMenus$.subscribe(translatedMenus => {
      this.menuItems = translatedMenus;
    });
  }

  ngOnInit() {
    this.tabs = [this.tabsService.getTab(this.currentTabRoute)];
    this.languages = [
      { label: '中文', value: 'zh' },
      { label: 'English', value: 'en' },
    ];
    this.language = this.translateService.getDefaultLang();
    this.setLangLabel();
  }

  ngOnDestroy() {
    this.subscriptionMenuClick.unsubscribe();
    this.subscriptionTranslations.unsubscribe();
  }

  onTabChange(event) {
    this.currentTabRoute = this.tabs[event.index].route;
  }

  onTabClose(event) {
    _.pullAt(this.tabs, event.index);
    this.currentTabRoute = 'menus.dashboard';
  }

  setLang() {
    this.translateService.use(this.language);
    localStorage.setItem('lang', this.language);
    this.setLangLabel();
  }

  setLangLabel() {
    this.languageLabel = _.find(this.languages, { value: this.language }).label;
  }

  hideLangPanel(panel) {
    if (this.langLeaveTimeout) clearTimeout(this.langLeaveTimeout);
    this.langLeaveTimeout = setTimeout(() => {
      panel.hide();
    }, 100);
  }

  clearHideLangPanel() {
    clearTimeout(this.langLeaveTimeout);
  }
}
