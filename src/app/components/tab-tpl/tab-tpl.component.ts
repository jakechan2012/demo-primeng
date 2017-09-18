import { Component, AfterViewInit, Type, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';

import { TabContentDirective } from '../../directives/tab-content.directive';

@Component({
  selector: 'tab-tpl',
  templateUrl: './tab-tpl.component.html',
  styleUrls: ['./tab-tpl.component.css']
})
export class TabTplComponent implements AfterViewInit {
  @Input() tab: Type<any>;
  @ViewChild(TabContentDirective) tabHost: TabContentDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    // Expression has changed after it was checked
    // 动态创建的组件导致某些改动在生命周期之外，加入setTimeout以解决以上报错
    setTimeout(() => {
      let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.tab);
      let viewContainerRef = this.tabHost.viewContainerRef;
      viewContainerRef.createComponent(componentFactory);
    });
  }

}
