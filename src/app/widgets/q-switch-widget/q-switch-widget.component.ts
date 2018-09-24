import { Component, OnInit, Input } from '@angular/core';
import { JsonSchemaFormService } from "angular6-json-schema-form";
import { AbstractControl, FormControl, } from '@angular/forms';

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
  @Input() layoutIndex: any;
  @Input() dataIndex: any;
  formControl: AbstractControl;
  qSwitchWidgetModel: any= false;
  options : any;
  checked: any;
  additional: Additional = {
    trueValue: true,
    falseValue: false
  };
  
  constructor(private jsf : JsonSchemaFormService) { 
  
  }

  ngOnInit() {  

  console.log(this.layoutNode)
    this.options = {...this.layoutNode.options};
    this.additional = { ...this.additional, ...this.options.additional}
    this.setDefault(); 
    this.jsf.initializeControl(this);
  }

 updateValue(event){
   console.log("event",event)
   this.qSwitchWidgetModel = event;
   console.log("qSwitchwidgetmodel", this.qSwitchWidgetModel)
   let result = this.getResult();
   this.jsf.updateValue(this, result);
   
    }

  setDefault(){
    //default conditions for boolean and string type
    if(this.layoutNode.dataType === 'boolean'){    
      this.getModelValue();
    
    }else{
      console.log("data type is not boolean")
    }
  }
  

  getModelValue(){
    if(this.jsf.getFormControlValue(this) === this.additional.trueValue){
      this.qSwitchWidgetModel = true
    }

    if(this.options.default === this.additional.trueValue){
      this.qSwitchWidgetModel = true;
    }
  return this.qSwitchWidgetModel;
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
