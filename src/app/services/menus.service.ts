import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/primeng';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { TranslateService } from '@ngx-translate/core';

import { TabsService, TabItem } from './tabs.service';

@Injectable()
export class MenusService {
  items: Array<MenuItem>;
  obMenuClick$: Observable<TabItem>;
  obMenus$: Observable<Array<MenuItem>>;
  private obMenuClickSource: Subject<TabItem>;
  private obMenusSource: Subject<Array<MenuItem>>;
  constructor(
    private tabsService: TabsService,
    private translateService: TranslateService) {
    this.obMenuClickSource = new Subject<TabItem>();
    this.obMenuClick$ = this.obMenuClickSource.asObservable();
    this.obMenusSource = new Subject<Array<MenuItem>>();
    this.obMenus$ = this.obMenusSource.asObservable();
    this.translateService.get('menus').subscribe(res => {
      this.obMenusSource.next(this.getAll(res));
    });
    this.translateService.onLangChange.subscribe(event => {
      this.obMenusSource.next(this.getAll(event.translations.menus));
    });
  }

  private openTab(route: string) {
    this.obMenuClickSource.next(this.tabsService.getTab(route));
  }

  private getAll(translatedMenus): Array<MenuItem> {
    return [
      {
        label: 'Demo',
        icon: 'fa-book',
        expanded: true,
        items: [
          {
            label: translatedMenus['dashboard'],
            icon: 'fa-bookmark-o',
            command: () => { this.openTab('menus.dashboard') }
          },
          {
            label: translatedMenus['grid-page'],
            icon: 'fa-bookmark-o',
            command: () => { this.openTab('menus.grid-page') }
          },
          {
            label: translatedMenus['form-page'],
            icon: 'fa-bookmark-o',
            command: () => { this.openTab('menus.form-page') }
          },
        ]
      },
      {
        label: 'File',
        icon: 'fa-file-o',
        items: [{
          label: 'New',
          icon: 'fa-plus',
          items: [
            { label: 'Project' },
            { label: 'Other' },
          ]
        },
        { label: 'Open' },
        { label: 'Quit' }
        ]
      },
      {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
          { label: 'Undo', icon: 'fa-mail-forward' },
          { label: 'Redo', icon: 'fa-mail-reply' }
        ]
      },
      {
        label: 'Help',
        icon: 'fa-question',
        items: [
          {
            label: 'Contents'
          },
          {
            label: 'Search',
            icon: 'fa-search',
            items: [
              {
                label: 'Text',
                items: [
                  {
                    label: 'Workspace'
                  }
                ]
              },
              {
                label: 'File'
              }
            ]
          }
        ]
      },
      {
        label: 'Actions',
        icon: 'fa-gear',
        items: [
          {
            label: 'Edit',
            icon: 'fa-refresh',
            items: [
              { label: 'Save', icon: 'fa-save' },
              { label: 'Update', icon: 'fa-save' },
            ]
          },
          {
            label: 'Other',
            icon: 'fa-phone',
            items: [
              { label: 'Delete', icon: 'fa-minus' }
            ]
          }
        ]
      }
    ];
  }
}