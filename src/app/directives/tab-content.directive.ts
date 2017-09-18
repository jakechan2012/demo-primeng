import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tab-host]'
})
export class TabContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
