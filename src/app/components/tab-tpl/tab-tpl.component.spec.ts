import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTplComponent } from './tab-tpl.component';

describe('TabTplComponent', () => {
  let component: TabTplComponent;
  let fixture: ComponentFixture<TabTplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabTplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabTplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
