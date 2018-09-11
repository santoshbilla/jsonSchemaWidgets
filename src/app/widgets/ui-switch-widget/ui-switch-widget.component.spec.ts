import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSwitchWidgetComponent } from './ui-switch-widget.component';

describe('UiSwitchWidgetComponent', () => {
  let component: UiSwitchWidgetComponent;
  let fixture: ComponentFixture<UiSwitchWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSwitchWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSwitchWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
