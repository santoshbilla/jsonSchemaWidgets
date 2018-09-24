import { Component, OnInit, Input } from '@angular/core';
import { JsonSchemaFormService } from "angular6-json-schema-form";
import { AbstractControl} from '@angular/forms';

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
    let result;
    result = this.jsf.getFormControlValue(this);
    //default conditions for boolean and string type
    if(this.layoutNode.dataType === 'boolean'){    
     // if the data is defined
      if(result != undefined){
        console.log("check fromcontrol")
        this.qSwitchWidgetModel = result;
      }
      //if default properties are given
      if(this.options.default){
        console.log("check default true")
        this.qSwitchWidgetModel = this.options.default;
      }  
    }else{
      //the dataType is not boolean
      console.log("data type is not boolean")
      //if data is present
      if(result != undefined){ 
        this.qSwitchWidgetModel = this.getModelValue(result);
      }else{
        //is data is not present
        console.log("data undefined")
        // If schema contains a DEFAULT value 
        if(this.options.default){
        // Check layout additional trueValue and falseValue
          if(this.layoutNode.options.additional){
          // If default value === trueValue set qSwitchWidgetModel to TRUE
          // If default value === falseValue set qSwitchWidgetModel to FALSE 
            this.qSwitchWidgetModel = this.getModelValue(this.options.default)
          }
        }
      }
    }
  }
  

  getModelValue(value){
    console.log(value)
    //Check layout additional trueValue and falseValue
    if(this.layoutNode.options.additional){
      console.log("additional properties are defined")
   
    //If data value === trueValue set qSwitchWidgetModel to TRUE
    if(value === this.additional.trueValue){
      this.qSwitchWidgetModel = true;
    }
    //If data value === falseValue set qSwitchWidgetModel to FALSE
    if(value === this.additional.falseValue){
      this.qSwitchWidgetModel = false;
    } 
  }else{
    this.qSwitchWidgetModel = value;
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
