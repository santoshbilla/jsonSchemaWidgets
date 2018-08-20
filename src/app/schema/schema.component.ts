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
      "type": "object",
      "properties":{
        "comment": {
           "title": "Comment",
           "type": "string"
         }
      },
      

    };
 }

}
