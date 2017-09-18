import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  TabViewModule,
  PanelModule,
  ChartModule,
  DataTableModule,
  ButtonModule,
  PanelMenuModule,
  OverlayPanelModule,
  ListboxModule,
  RadioButtonModule,
  InputTextModule,
  MessagesModule,
  AutoCompleteModule,
} from 'primeng/primeng';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabTplComponent } from './components/tab-tpl/tab-tpl.component';
import { LoginComponent } from './components/login';
import { HomeComponent } from './components/home';
import { DashboardComponent } from './components/dashboard';
import { GridPageComponent } from './components/grid-page/grid-page.component';
import { FormPageComponent } from './components/form-page/form-page.component';

import { CommonComponentsModule } from './common-components';
import { TabContentDirective } from './directives/tab-content.directive';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    CommonComponentsModule,
    TabViewModule,
    PanelModule,
    ChartModule,
    DataTableModule,
    ButtonModule,
    PanelMenuModule,
    OverlayPanelModule,
    ListboxModule,
    RadioButtonModule,
    InputTextModule,
    MessagesModule,
    AutoCompleteModule,
  ],
  declarations: [
    TabContentDirective,
    AppComponent,
    TabTplComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    GridPageComponent,
    FormPageComponent,
  ],
  entryComponents: [
    DashboardComponent,
    GridPageComponent,
    FormPageComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
