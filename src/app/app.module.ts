import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { SchemaComponent } from './schema/schema.component';
import { Bootstrap4FrameworkModule } from 'angular6-json-schema-form';
import { HelloWorldWidgetComponent } from './widgets/hello-world-widget/hello-world-widget.component';
import { InputBoxWidgetComponent } from './widgets/input-box-widget/input-box-widget.component';
@NgModule({
  declarations: [
    AppComponent,
    SchemaComponent,
    
    HelloWorldWidgetComponent,
    InputBoxWidgetComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    Bootstrap4FrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[     HelloWorldWidgetComponent, InputBoxWidgetComponent
      ]
})
export class AppModule { }
