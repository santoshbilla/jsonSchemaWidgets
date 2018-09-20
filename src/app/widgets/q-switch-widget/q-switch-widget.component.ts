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
  qSwitchWidgetModel: any = false;
  control = new FormControl(this.qSwitchWidgetModel);
  boundControl = false;
  controlDisabled = false;
  options : any;
  disabled : boolean = false;
  checked : boolean = false;
  additional: Additional = {
    trueValue: true,
    falseValue: false
  };
  
  constructor(private jsf : JsonSchemaFormService) { 
  
  }

  ngOnInit() {
    //this.control.setValue(this.qSwitchWidgetModel)
    console.log("this.formcontrol", this.control)
    console.log(this.control.value)
    this.options = {...this.layoutNode.options};
    this.setDefault(); 
    this.additional = { ...this.additional, ...this.options.additional}
    this.jsf.initializeControl(this);
  }
 updateValue(){
    console.log(this.qSwitchWidgetModel)
    //event.preventDefault();
    console.log(this.control.value)
    this.control.setValue('true')
    console.log(this.control.value)
    console.log("in updateValue")
    let result = this.getResult();
    this.jsf.updateValue(this, result);
  }

  setDefault(){
    
    if(this.layoutNode.dataType === 'boolean' ){
      if(this.layoutNode.options.default){
        // if(this.layoutNode.options.checked){
        //   console.log("checked true")
        //   this.qSwitchWidgetModel= true;
        // }else{
        //   console.log("checked false")
        //   this.layoutNode.options.checked = true;
        //   this.setDefault();
        // }
        this.qSwitchWidgetModel= true;
      }else{      
        this.qSwitchWidgetModel = false;
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
