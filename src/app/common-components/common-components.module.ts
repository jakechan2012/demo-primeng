import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import {
  DataTableModule,
  ButtonModule,
} from 'primeng/primeng';

import { ConditionAreaComponent } from './condition-area';
import { DataAreaComponent } from './data-area';
import { FunctionAreaComponent } from './function-area';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    DataTableModule,
    ButtonModule,
  ],
  declarations: [
    ConditionAreaComponent,
    DataAreaComponent,
    FunctionAreaComponent,
  ],
  exports: [
    ConditionAreaComponent,
    DataAreaComponent,
    FunctionAreaComponent,
  ],
})
export class CommonComponentsModule { }
