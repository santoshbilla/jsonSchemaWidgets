import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QswitchArrayWidgetComponent } from './q-switch-array-widget.component';

describe('QswitchArrayWidgetComponent', () => {
  let component: QswitchArrayWidgetComponent;
  let fixture: ComponentFixture<QswitchArrayWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QswitchArrayWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QswitchArrayWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
