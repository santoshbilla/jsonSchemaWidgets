import { Component, OnInit, Input } from '@angular/core';
import { JsonSchemaFormService } from '../../../../../node_modules/angular6-json-schema-form';

@Component({
  selector: 'app-markdown-editor-widget',
  template: `<md-editor name="Content" [preRender]="preRenderFunc" 
  [(ngModel)]="content"
    [hideToolbar]='Option?.hideToolbar'
     [height]="'200px'" 
     [mode]="Option?.mode" 
     [options]="options" required maxlength="Option?.maxlength">
  </md-editor>
  
  
  `,
  styleUrls: ['./markdown-editor-widget.component.css']
})
export class MarkdownEditorWidgetComponent implements OnInit {
  Option: any;
  options: {};

  @Input() layoutNode: any;
  @Input() hideToolbar: boolean = false;
  content : string = '';

  constructor(private jsf : JsonSchemaFormService) { }

  ngOnInit() {
  if (this.layoutNode && this.layoutNode.options && this.layoutNode.options.additional) {
      this.options = { ...this.options, ...this.layoutNode.options.additional};
  }
  if (this.layoutNode) {
      this.Option = this.layoutNode.options.additional || {};
  }
  console.log("this.layoutNode.options",this.layoutNode.options)
    this.jsf.initializeControl(this);
   

  }

  updateValue(event) {
   
    console.log("In updateValue",this.layoutNode)
    this.jsf.updateValue(this, event.target.value);
  
  }
 


}
