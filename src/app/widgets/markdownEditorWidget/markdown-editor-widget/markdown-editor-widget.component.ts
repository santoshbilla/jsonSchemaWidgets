import { Component, OnInit } from '@angular/core';
import { JsonSchemaFormService } from '../../../../../node_modules/angular6-json-schema-form';

@Component({
  selector: 'app-markdown-editor-widget',
  templateUrl: './markdown-editor-widget.component.html',
  styleUrls: ['./markdown-editor-widget.component.css']
})
export class MarkdownEditorWidgetComponent implements OnInit {
  options: any;
  layoutNode: any;
  constructor(private jsf : JsonSchemaFormService) { }

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.jsf.initializeControl(this);
  }

  updateValue(event) {
    this.jsf.updateValue(this, event.target.value);
  }


}
