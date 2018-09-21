import { Component, OnInit, Input } from '@angular/core';
import { JsonSchemaFormService } from "angular6-json-schema-form";
import { AbstractControl, FormControl } from '@angular/forms';

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
   
    this.options = {...this.layoutNode.options};
    this.setDefault(); 
    this.additional = { ...this.additional, ...this.options.additional}
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
    if(this.layoutNode.dataType === 'boolean' ){
      if(this.options.default){
        if(this.layoutNode.options.additional){
          this.getModelValue();
        }else{
          this.qSwitchWidgetModel = this.options.default;
        }
      }else{
      this.qSwitchWidgetModel = false;
      }
    }     
    }

  getModelValue(){
    console.log("in getModelValue")
    if(this.layoutNode.options.additional === null){
      console.log("additional is null")
    }else{
      
      if(this.layoutNode.options.additional.trueValue){
       this.qSwitchWidgetModel = true;
      }else{
        alert("trueValue not true");
      }
      if(this.layoutNode.options.additional.falseValue){
        this.qSwitchWidgetModel = false;
       }else{
        alert("falseValue not false");
       }
    
    }
    
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
