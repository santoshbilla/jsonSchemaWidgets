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
submittedFormData: any = null;

  constructor(  private widgetLibrary: WidgetLibraryService) {
    widgetLibrary.registerWidget('sample', HelloWorldWidgetComponent);
    widgetLibrary.registerWidget('radhika', InputBoxWidgetComponent);
   }
    yourNewWidgets = {
    input: InputBoxWidgetComponent,          // Replace existing 'input' widget
   sample: HelloWorldWidgetComponent // Add new 'sample' widget
  }
  ngOnInit() {
    
    // Define the JSON Schema as an object because [schema] in view takes an object
      this.yourJsonSchema = 
      {
          "schema": {
           
            "field": 
            {
              "title": "A field",
            },
            "example":
            {
              "title":"example"
            },
            "text1":
            {
              "title": "text1"
            }
          },
          
          "form": [
            {
              "key": "field",
              
              "type":"input",
            
            },
            {
              "key":"example",
              "type":"radhika",
              
            },
            {
              "key": "text1",
              "type":"sample"

            },
            {
              "type": "submit",
              "title": "Submit"
            }
          ]
        
    } 
}

}
