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
    this.yourJsonSchema = {
    "schema":
      {
        "type": "object",
        "properties": {
          "first_name": { "type": "string" },
          "last_name": { "type": "string" },
          "phone":{"type": "number"},
          "email": {
            "type": "string",
            "pattern": "^\\S+@\\S+$",
            "description": "Email will be used for evil."
          },
          "language":{
            "type":"string",
            "description":"this is done using Angular Schema Forms"
          },
          "language1": {
            "description": "this is done using JSON Schema v4+",
            "type": "string",
            "oneOf":  [
              { "title": "MongoDB",    "enum": [ "MongoDB" ] },
              { "title": "ExpressJS",  "enum": [ "ExpressJS" ] },
              { "title": "Angular",    "enum": [ "Angular"  ] },
              { "title": "NodeJs",     "enum": [ "NodeJs"  ] }
            ]
          },
        },
        "required": [ "last_name" ,"phone", "email"],
      },
    "layout":  [
        { "type": "flex", "flex-flow": "row wrap", "items": [ "first_name", "last_name" ] },
        {"key": "phone", "title":"phone number", "placeholder":"Enter number here"},
        {"key":"email", "title":"Email Id", "placeholder":"Enter Email ID Here"},
        {
          "key":"language","titleMap": 
          [
            { "name": "MongoDB","value": "MongoDB" },
            { "name": "ExpressJS","value": "ExpressJS" },
            { "name": "Angular","value": "Angular"  },
            { "name": "NodeJs", "value": "NodeJs"  }
          ]
      },
     "language1"
      ],
    };
 }

}
