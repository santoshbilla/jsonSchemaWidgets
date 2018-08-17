import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Bootstrap4FrameworkModule} from 'angular6-json-schema-form';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SchemaComponent } from './schema/schema.component';

@NgModule({
  declarations: [
    AppComponent,
    SchemaComponent
  ],
  imports: [
    BrowserModule,
    Bootstrap4FrameworkModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
