import { Component, OnInit } from '@angular/core';

import {HelloWorldWidgetComponent} from '../widgets/hello-world-widget/hello-world-widget.component';
import {InputBoxWidgetComponent} from '../widgets/input-box-widget/input-box-widget.component';
import { ɵc as WidgetLibraryService } from 'angular6-json-schema-form';
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
   }
    yourNewWidgets = {
    
   sample: HelloWorldWidgetComponent // Add new 'sample' widget
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
          "shipping_address": { "$ref": "#/definitions/address" },
          "sample":{"$ref":"#/definitions/address"}
        }
      }}
    }
    OnSubmit(event) {
      console.log("insubmit")
      this.formData = event;
      console.log(this.formData)
    }

}



