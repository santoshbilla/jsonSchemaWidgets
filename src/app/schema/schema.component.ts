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
         "clickhere": {"type": "submit", "style":"btn-success", "title":"click here"}

        },
        "required": [ "last_name" ],
      },
    "layout":  [
        { "type": "flex", "flex-flow": "row wrap", "items": [ "first_name", "last_name" ] },
      ],
    };
 }

}
