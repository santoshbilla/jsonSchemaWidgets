import { Component, OnInit, Input } from '@angular/core';
import { JsonSchemaFormService } from "angular6-json-schema-form";
import { AbstractControl } from '@angular/forms';

interface Additional
{
  trueValue: any;
  falseValue: any;
}
@Component({
  selector: 'app-q-switch-widget',
  templateUrl: './q-switch-widget.component.html',
  styleUrls: ['./q-switch-widget.component.css']
})
export class QswitchWidgetComponent implements OnInit {
  @Input() layoutNode: any;
  qSwitchWidgetModel: any = false;
  formControl: AbstractControl;
  options : any;
  disabled : boolean = false;
  checked : boolean = false;
  additional: Additional = {
    trueValue: true,
    falseValue: false
  };
  constructor(private jsf : JsonSchemaFormService) { }

  ngOnInit() {
    this.setDefault();
    this.additional = { ...this.additional, ...this.options.additional, ...this.setDefault().trueValue }
    this.jsf.initializeControl(this);
  }

  updateValue(){
    let result = this.getResult();
    this.jsf.updateValue(this, result);
  }

  setDefault(){
    this.options = this.layoutNode.options;
    // If default value is given set the true value as default value 
    //Only for true because if default is given as false checked is already false
    if(this.layoutNode.options.default){
      this.options.checked = true;
      this.additional.trueValue = this.layoutNode.options.default;
    }
    // Set layout as checked = true
    if(this.options.checked)
    {
      this.qSwitchWidgetModel = this.options.checked;
    }
    return {checked : this.options.checked, trueValue: this.additional.trueValue};
  }
  
  
  getResult(): any {
    let result: any = this.qSwitchWidgetModel;
    if(this.qSwitchWidgetModel){

      result = this.typecastValue(this.additional.trueValue, this.qSwitchWidgetModel);

    } else {

      result = this.typecastValue(this.additional.falseValue, this.qSwitchWidgetModel);

    }
    return result;
  }



  typecastValue(value, model) {
    console.log(value, model);
    if(this.layoutNode.dataType === 'string') {
      value =  value.toString();
    }
  
    if(this.layoutNode.dataType === 'number' || this.layoutNode.dataType === 'integer') {

        value = parseInt(value);
        if(isNaN(value)){ //value cannot be typecased to a number

          if(model){
            value = 1; //true
          } else {
            value = 0; // false
          }
        }
    }

    if(this.layoutNode.dataType === 'boolean'){ //ignore user additional values
      value = model;
    }
    return value;
  }
}
