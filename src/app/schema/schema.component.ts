import { Component, OnInit, Input} from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {HelloWorldWidgetComponent} from '../widgets/hello-world-widget/hello-world-widget.component';
import {InputBoxWidgetComponent} from '../widgets/input-box-widget/input-box-widget.component';
import { ɵc as WidgetLibraryService } from 'angular6-json-schema-form';
import { MarkdownEditorWidgetComponent } from '../widgets/markdownEditorWidget/markdown-editor-widget/markdown-editor-widget.component';
import { UiSwitchWidgetComponent } from "../widgets/ui-switch-widget/ui-switch-widget.component";
import { QswitchWidgetComponent } from "../widgets/q-switch-widget/q-switch-widget.component";
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
    widgetLibrary.registerWidget('q-switch', QswitchWidgetComponent)
   }
    yourNewWidgets = {
    
   'sample': HelloWorldWidgetComponent, // Add new 'sample' widget
   'q-markdown': MarkdownEditorWidgetComponent,
   'q-uiSwitch' : UiSwitchWidgetComponent,
   'q-switch' : QswitchWidgetComponent
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
              "boolean": {
                "type": "boolean",
                "title": "boolean",
                "default":true
                          
              }, 
              "string": {
                "type": "string",
                "title": "string",
                "default": "false"
             
              },
              "number": {
                "type": "number",
                "title": "number",
                "default": 1
              }

            },
            
        },
        "layout":
            [
              {
                "key": "boolean",
                "type": "q-switch",
                "additional":{
                  "trueValue": true,
                  "falseValue": false
                  
                }
              },
              {
                "key": "string",
                "type": "q-switch",
                "additional":{
                  "trueValue": "true",
                  "falseValue": "false"
                }
              },
              {
                "key": "number",
                "type": "q-switch",
                "additional":{
                  "trueValue": 1,
                  "falseValue": 0
                }
              }
            ],
             "data":{
              "string": "false",
             "boolean": false,
             "number": 0
            }      
      }
  
   
     
    }
   
    onSubmit(event) {
      console.log("insubmit", event)
      this.formData = event;
     // console.log(this.formData)
    }
    onChangesFunction(event){
      console.log("onchanges", event)
      this.data = event;
    }
}



