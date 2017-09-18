import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'primeng',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    let lang = localStorage.getItem('lang');
    if (!lang || lang === 'undefined') lang = 'zh';
    this.translateService.setDefaultLang(lang);
  }
}
