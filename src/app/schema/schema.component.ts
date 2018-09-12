import { Component, OnInit} from '@angular/core';

import {HelloWorldWidgetComponent} from '../widgets/hello-world-widget/hello-world-widget.component';
import {InputBoxWidgetComponent} from '../widgets/input-box-widget/input-box-widget.component';
import { ɵc as WidgetLibraryService } from 'angular6-json-schema-form';
import { MarkdownEditorWidgetComponent } from '../widgets/markdownEditorWidget/markdown-editor-widget/markdown-editor-widget.component';
import { UiSwitchWidgetComponent } from "../widgets/ui-switch-widget/ui-switch-widget.component";

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})

export class SchemaComponent implements OnInit {
yourJsonSchema : any;
yourJsonLayout: any;
data: any;
formData: any;
  constructor(  private widgetLibrary: WidgetLibraryService) {
    widgetLibrary.registerWidget('sample', HelloWorldWidgetComponent);
    widgetLibrary.registerWidget('radhika', InputBoxWidgetComponent);
    widgetLibrary.registerWidget('q-markdown',MarkdownEditorWidgetComponent);
    widgetLibrary.registerWidget('q-uiSwitch', UiSwitchWidgetComponent)
   }
    yourNewWidgets = {
    
   'sample': HelloWorldWidgetComponent, // Add new 'sample' widget
   'q-markdown': MarkdownEditorWidgetComponent,
   'q-uiSwitch' : UiSwitchWidgetComponent
  }
  ngOnInit() {

    // Define the JSON Schema as an object because [schema] in view takes an object
      this.yourJsonSchema = 
      {
        "schema": 
        {
          "type": "object",
          "title": "Object",
          "properties": {
            "information": {
              "type": "array",
              "title": "Information",
              "validation": "list",
              "uniqueItems": true,
              "items": {
                "type": "boolean",
                "title": "Bug"
              }
            }
          }
        },
        "layout":
          [
            {
              "key": "information",
              "type": "array",
              "items": [
                {
                  "title": "Bug",
                  "type": "q-uiSwitch",
                  "additional":{
                    'size': 'large',
                
                    color: 'rgb(0, 189, 99)',
                    switchColor: '#80FFA2',
                   
                    checkedLabel: 'on',
                    uncheckedLabel: 'off'
                  }
                }
              ]
            }
           ]
        
          }
        
    }
   
    onSubmit(event) {
      console.log("insubmit", event)
      this.formData = event;
     // console.log(this.formData)
    }
    onChanges(event){
      this.data = event;
    }
}



