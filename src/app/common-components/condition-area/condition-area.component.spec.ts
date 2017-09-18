import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionAreaComponent } from './condition-area.component';

describe('ConditionAreaComponent', () => {
  let component: ConditionAreaComponent;
  let fixture: ComponentFixture<ConditionAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
