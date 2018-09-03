import { Component, OnInit } from '@angular/core';

import {HelloWorldWidgetComponent} from '../widgets/hello-world-widget/hello-world-widget.component';
import {InputBoxWidgetComponent} from '../widgets/input-box-widget/input-box-widget.component';
import { ɵc as WidgetLibraryService } from 'angular6-json-schema-form';
import { MarkdownEditorWidgetComponent } from '../widgets/markdownEditorWidget/markdown-editor-widget/markdown-editor-widget.component';
@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})

export class SchemaComponent implements OnInit {
  
yourJsonSchema : any;
yourJsonLayout: any;

formData;
  constructor(  private widgetLibrary: WidgetLibraryService) {
    widgetLibrary.registerWidget('sample', HelloWorldWidgetComponent);
    widgetLibrary.registerWidget('radhika', InputBoxWidgetComponent);
    widgetLibrary.registerWidget('q-markdown',MarkdownEditorWidgetComponent)
   }
    yourNewWidgets = {
    
   'sample': HelloWorldWidgetComponent, // Add new 'sample' widget
   'q-markdown': MarkdownEditorWidgetComponent 
  }
  ngOnInit() {
    
    // Define the JSON Schema as an object because [schema] in view takes an object
      this.yourJsonSchema = 
      {
        "schema": {
      
        "definitions": {
          "address": {
            "type": "object",
            "properties": {
              "street_address": { "type": "string" },
              "city":           { "type": "string" },
              "state":          { "type": "string" }
            },
            "required": ["street_address", "city", "state"]
          }
        },
      
        "type": "object",
        "properties": {
          "billing_address": { "$ref": "#/definitions/address" },
        }
      },
      "layout":[
        {
          "key":"billing_address",
      "type":"div",
      "items":[
        {
          "key":"billing_address.street_address",
          "type":"sample"
        },
        {
          "key":"billing_address.city",
          "type":"q-markdown"
        },
        {
          "key":"billing_address.state",
          "type":"radhika"
        }]
      }
      ]
    }

    }
    OnSubmit(event) {
      console.log("insubmit")
      this.formData = event;
      console.log(this.formData)
    }

}



