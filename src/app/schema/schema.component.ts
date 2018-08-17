import { Component, OnInit } from '@angular/core';
import {JsonSchemaService} from '../json-schema.service'

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {
yourJsonSchema;
  constructor(private jsonSchema : JsonSchemaService) { }

  ngOnInit() {
   
 this.jsonSchema.getSchema()
 .subscribe((data)=>{
    this.yourJsonSchema = data;
   });
}

}
