import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import { SchemaComponent } from './schema/schema.component';
import { Bootstrap4FrameworkModule } from 'angular6-json-schema-form';
@NgModule({
  declarations: [
    AppComponent,
    SchemaComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule, 
    BrowserAnimationsModule,
   Bootstrap4FrameworkModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
