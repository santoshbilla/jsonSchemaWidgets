import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBoxWidgetComponent } from './input-box-widget.component';

describe('InputBoxWidgetComponent', () => {
  let component: InputBoxWidgetComponent;
  let fixture: ComponentFixture<InputBoxWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputBoxWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputBoxWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
