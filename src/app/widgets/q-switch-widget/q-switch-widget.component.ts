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
   this.qSwitchWidgetModel = event;
   let result = this.getResult();
   this.jsf.updateValue(this, result);
  }

  setDefault(){
    let result;
    result = this.jsf.getFormControlValue(this);
    console.log("controlValue", result)
    console.log("default", this.options.default)
    //default conditions for boolean and string type
    if(this.layoutNode.dataType === 'boolean'){  
      if(this.options.default !=undefined){
        this.qSwitchWidgetModel = this.options.default;
      }
     // if the data is defined
      if(result != undefined){
        this.qSwitchWidgetModel = result;
      }
    }else{
      //the dataType is not boolean
      //is data is not present
      // If schema contains a DEFAULT value 
      if(this.options.default != undefined){
          this.qSwitchWidgetModel = this.getModelValue(this.options.default);
      }
      //if data is present
      if(result != undefined){ 
         this.qSwitchWidgetModel = this.getModelValue(result);
      }
    }
  }
  

  getModelValue(value){
    let result: boolean;
    result =  false;
    //Check layout additional trueValue and falseValue
    //If data value === trueValue set qSwitchWidgetModel to TRUE
    if(value === this.additional.trueValue){
     result = true;
    }
  return result;
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
