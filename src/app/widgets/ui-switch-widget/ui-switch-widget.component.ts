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
    trueValue : any;
    falseValue : any;
}
@Component({
  selector: 'app-ui-switch-widget',
  templateUrl: './ui-switch-widget.component.html',
  styleUrls: ['./ui-switch-widget.component.scss']
})
export class UiSwitchWidgetComponent implements OnInit {

  @Input() layoutNode: any;
  formControl: AbstractControl;
  qSwitchWidgetModel : any = false;
  qSwitchWidgetName : any = false;
  options: any;
  additional : Additional =  {
    size : "medium",
    color : "rgb(100, 189, 99)",
    switchColor : "#fff",
    defaultBgColor : "#fff",
    defaultBoColor : "#dfdfdf",
    checkedLabel : "",
    uncheckedLabel : "",
    trueValue  : true,
    falseValue : false
  };
  constructor(private jsf : JsonSchemaFormService) { }
  ngOnInit() {
    //If the additional property is defined, add those property to additional
    if(this.layoutNode.options.additional)
    {
        this.additional = {...this.additional, ...this.layoutNode.options.additional}
    }
    //If the layout additional property is undefined or NULL, take the default additional values
    if(this.layoutNode.options.additional == undefined || {})
    {
      this.layoutNode.options.additional = {...this.layoutNode.options.additional, ...this.additional}
    }
    // console.log("layoutnode.option.additional", this.layoutNode.options.additional)
    // console.log("truevalue", this.layoutNode.options.additional.trueValue)
    // console.log("falsevalue", this.layoutNode.options.additional.falseValue)
    this.jsf.initializeControl(this);
  }
/**
  * onchange Event when the switch is toggled
  * Update value in jsf service
  * change value of enable bound to ngModel
  * @author Radhika Agnihotri
  * @task QLIKTAG-2797
  */
  updateValue(){
    console.log("in update",this.additional)
    console.log("in update", this.layoutNode.options.additional)
    let checkboxValue : any = false; 
    console.log("qSwitchWidgetModel",this.qSwitchWidgetModel)
    if(this.qSwitchWidgetModel == true)
    {
      checkboxValue = this.additional.trueValue;
    }
    if(this.qSwitchWidgetModel == false)
   {
      checkboxValue = this.additional.falseValue;
    } 
    this.jsf.updateValue(this,checkboxValue);
   }
}

