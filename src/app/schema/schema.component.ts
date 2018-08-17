import { Component, OnInit } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {
yourJsonSchema;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("..//assets/yourJsonSchema.json")
    .subscribe((res)=>{console.log(res);
      this.yourJsonSchema = res;
  }); 
}

}
