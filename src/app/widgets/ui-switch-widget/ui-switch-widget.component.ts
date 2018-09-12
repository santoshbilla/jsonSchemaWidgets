import { Component, OnInit, Input } from '@angular/core';
import { JsonSchemaFormService } from "angular6-json-schema-form";
import { AbstractControl } from '@angular/forms';

interface Additional
{
    size ?: string;
    color ?: string;
    switchColor ?: string;
    defaultBgColor ?: string;
    defaultBoColor ?: string;
    checkedLabel : string;
    uncheckedLabel : string;
}
@Component({
  selector: 'app-ui-switch-widget',
  templateUrl: './ui-switch-widget.component.html',
  styleUrls: ['./ui-switch-widget.component.scss']
})
export class UiSwitchWidgetComponent implements OnInit {

  @Input() layoutNode: any;
  formControl: AbstractControl;
  change: Event;
  enable: boolean = false;  
 
  options: any;
  additional : Additional =  {
    size : "medium",
    color : "rgb(100, 189, 99)",
    switchColor : "#fff",
    defaultBgColor : "#fff",
    defaultBoColor : "#dfdfdf",
    checkedLabel : "",
    uncheckedLabel : "",
  };
  constructor(private jsf : JsonSchemaFormService) { }
 
  ngOnInit() {
    console.log(this.layoutNode)
    if (this.layoutNode && this.layoutNode.options && this.layoutNode.options.additional){
      this.additional = { ...this.layoutNode.options, ...this.layoutNode.options.additional};
  }

    this.jsf.initializeControl(this);
  }

  onChange(event){
    this.enable = event;

    this.jsf.updateValue(this, event);
  }
}
