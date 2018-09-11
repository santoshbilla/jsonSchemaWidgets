import { Component, OnInit , Input} from '@angular/core';
import { JsonSchemaFormService } from '../../../../node_modules/angular6-json-schema-form';
import { AbstractControl } from "@angular/forms";
@Component({
  selector: 'app-ui-switch-widget',
  template:  `
  <ui-switch  (change)="onChange($event)" [(ngModel)]="enable"></ui-switch>
<p>Enable: {{enable}} Count:{{count}} change: {{change}}</p>
 `,
  styleUrls: ['./ui-switch-widget.component.css']
})
export class UiSwitchWidgetComponent implements OnInit {
  @Input() layoutNode: any;
  formControl: AbstractControl;
 change: Event;
  enable: any= '';
  options: any;
count: number = 0;
  constructor(private jsf : JsonSchemaFormService) { }

  ngOnInit() {

    console.log("layoutnode properties", this.layoutNode)
    this.jsf.initializeControl(this);
  }

  onChange(event){
    this.count++;
    this.enable = event;
    this.change = event;
   // console.log('this.change in onchange', this.change)
   // console.log('this.enable in onchange', this.enable )
    this.jsf.updateValue(this,event);
   // console.log("onChange method\n ", "this.change ",this.change,"\n this.count ", this.count, "\nevent",event)
  }

  updateValue(event) {
    this.jsf.updateValue(this, event);
  }
}
