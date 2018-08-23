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
          "type": "object",
          "title": "Comment",
          "properties": {
            "name": {
              "title": "Name",
              "type": "string"
            },
           
            "comment": {
              "title": "Comment",
              "type": "string",
              "validationMessage": "Don't be greedy!"
            }
          },
          "required": [
            "name",
            "comment"
          ]
        },

        "form": [  
          {"key": "name",
           "type":"text",
           "required": true
          },
          {
            "key": "comment",
            "type": "radhika",
            "value":"this is value",
            "required":true,
            "placeholder": "Make a comment"
          },
        ],
      }
    }
    OnSubmit(event) {
      console.log("insubmit")
      this.formData = event;
      console.log(this.formData)
    }

}



