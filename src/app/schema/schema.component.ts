import { Component, OnInit, Input} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {HelloWorldWidgetComponent} from '../widgets/hello-world-widget/hello-world-widget.component';
import {InputBoxWidgetComponent} from '../widgets/input-box-widget/input-box-widget.component';
import { ɵc as WidgetLibraryService } from 'angular6-json-schema-form';
import { MarkdownEditorWidgetComponent } from '../widgets/markdownEditorWidget/markdown-editor-widget/markdown-editor-widget.component';
import { UiSwitchWidgetComponent } from "../widgets/ui-switch-widget/ui-switch-widget.component";
import { QswitchWidgetComponent } from "../widgets/q-switch-widget/q-switch-widget.component";
import { QswitchArrayWidgetComponent } from '../widgets/q-switch-array-widget/q-switch-array-widget.component';
@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})

export class SchemaComponent implements OnInit {
yourJsonSchema : any;
yourJsonLayout: any;
@Input() layoutNode: any;
formControl: AbstractControl;
data: any;
formData: any;
  constructor(  private widgetLibrary: WidgetLibraryService) {
    widgetLibrary.registerWidget('sample', HelloWorldWidgetComponent);
    widgetLibrary.registerWidget('radhika', InputBoxWidgetComponent);
    widgetLibrary.registerWidget('q-markdown',MarkdownEditorWidgetComponent);
    widgetLibrary.registerWidget('q-uiSwitch', UiSwitchWidgetComponent);
    widgetLibrary.registerWidget('q-switch', QswitchWidgetComponent);
    widgetLibrary.registerWidget('q-switchArray', QswitchArrayWidgetComponent);
  }
    yourNewWidgets = {
    
   'sample': HelloWorldWidgetComponent, // Add new 'sample' widget
   'q-markdown': MarkdownEditorWidgetComponent,
   'q-uiSwitch' : UiSwitchWidgetComponent,
   'q-switch' : QswitchWidgetComponent,
   'q-switchArray' : QswitchArrayWidgetComponent
  }
  ngOnInit() {
   
    // Define the JSON Schema as an object because [schema] in view takes an object
    // check the condition for default checkbox and widget for default property
    
    /*layout: [ {
        "key": "boolean",
        "type": "q-switch"  
      }
     {
        "key": "boolean",
        "type": "checkbox"  
      }]
    }*/
      this.yourJsonSchema = {

        "schema": 
        {
            "type": "object",
            "properties": {
              "array": {
                "title": "Array with enum defaults to 'checkboxes'",
                "type": "array",
                "items": {
                  "type": "number",
                  "enum": [ 1, 3 , 5]
                }
              }
            },
            
        },
        "layout":
            [
              { "key": "array",
              "type": "q-switchArray",
              "additional":{
                "layoutOrientation": "vertical"
              },
              "titleMap": [
                { "value": "4", "name": "Reading" },
                { "value": "3", "name": "Dancing" },
                { "value": "5", "name": "C" }
              ]
            }
            ],
            "data":{
              "array": ["3"] 
            }
         
      }
  
   
     
    }
   
    onSubmit(event) {
      this.formData = event;
    }
    onChangesFunction(event){
      this.data = event;
    }
}



