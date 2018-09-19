import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QswitchWidgetComponent } from './q-switch-widget.component';

describe('QswitchWidgetComponent', () => {
  let component: QswitchWidgetComponent;
  let fixture: ComponentFixture<QswitchWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QswitchWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QswitchWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
