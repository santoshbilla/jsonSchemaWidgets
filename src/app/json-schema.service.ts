import { Injectable } from '@angular/core';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';
import { JSchema } from './schema';

@Injectable({
  providedIn: 'root'
})
export class JsonSchemaService {
  private _url: string ="/assets/yourJsonSchema.json";
  yourJsonSchema;
  constructor(private http : HttpClient) { 

  }
  getSchema(): Observable<JSchema[]>{

 return this.http.get<JSchema[]>(this._url)
  }
}
