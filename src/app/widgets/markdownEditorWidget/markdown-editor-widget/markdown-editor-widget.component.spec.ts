import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownEditorWidgetComponent } from './markdown-editor-widget.component';

describe('MarkdownEditorWidgetComponent', () => {
  let component: MarkdownEditorWidgetComponent;
  let fixture: ComponentFixture<MarkdownEditorWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownEditorWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownEditorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
