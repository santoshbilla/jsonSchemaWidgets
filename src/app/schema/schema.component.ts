import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {
yourJsonSchema : any;
  constructor() { }

  ngOnInit() {
    // Define the JSON Schema as an object because [schema] in view takes an object
      this.yourJsonSchema = 
        {
            "schema":
            {
                "type":"object",
            "properties": {
              "radios": {
                "title": "Basic radio button example",
                "type": "string",
                "enum": [ "a", "b", "c" ]
              },
              "devices":{
                "type": "array",
                "title": "devices",
                "items":
                  {
                    "type": "string",
                    "enum": ["Mobile","Tablet", "Desktop"]
                  }
                }, 
            },
          },
            "layout":  
            [
            { "key": "radios",
              "type": "radios",
              "titleMap": [
                { "value": "c", "name": "C" },
                { "value": "b", "name": "B" },
                { "value": "a", "name": "A" }
              ]},
              {
                "key": "devices",
                "type":"checkboxes",
                "titleMap":[
                  {"value":"Mobile", "name":"Mobile"},
                  {"value":"Tablet", "name":"Tablet"},
                  {"value":"Desktop", "name":"Desktop"}
                ]}
          ]   
  }; 
  }
}
