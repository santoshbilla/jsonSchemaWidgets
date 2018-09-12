import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { UiSwitchModule } from "ngx-ui-switch";

import { AppComponent } from './app.component';
import { SchemaComponent } from './schema/schema.component';
import { Bootstrap4FrameworkModule } from 'angular6-json-schema-form';
import { HelloWorldWidgetComponent } from './widgets/hello-world-widget/hello-world-widget.component';
import { InputBoxWidgetComponent } from './widgets/input-box-widget/input-box-widget.component';
import { MarkdownEditorWidgetComponent } from './widgets/markdownEditorWidget/markdown-editor-widget/markdown-editor-widget.component';
import {UiSwitchWidgetComponent} from './widgets/ui-switch-widget/ui-switch-widget.component';
@NgModule({
  declarations: [
    AppComponent,
    SchemaComponent,
    HelloWorldWidgetComponent,
    InputBoxWidgetComponent,
    MarkdownEditorWidgetComponent,
    UiSwitchWidgetComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    Bootstrap4FrameworkModule,
    LMarkdownEditorModule,
    UiSwitchModule.forRoot({
      
    })
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[     
    HelloWorldWidgetComponent, 
    InputBoxWidgetComponent, 
    MarkdownEditorWidgetComponent, 
    UiSwitchWidgetComponent
  ]
     
})
export class AppModule { }
