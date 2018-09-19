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

  /**
   * Initialize widget defaults
   */
  ngOnInit() {

    this.options = this.layoutNode.options;
    this.additional = { ...this.additional, ...this.options.additional }
    if(this.layoutNode.options.default && this.layoutNode.options.default === true )
    {
      this.options.checked = this.layoutNode.options.default;
    }
    if(this.options.checked && this.options.checked === true)
    {
      this.qSwitchWidgetModel = this.options.checked;
    }
  
    this.jsf.initializeControl(this);
  }

  /**
   * [updateValue description]
  */
  updateValue(){
    let result = this.getResult();
    this.jsf.updateValue(this, result);
  }

  /**
   * [get true/false value of switch]
   * @return [description]
  */
  getResult(): any {
    let result: any = this.qSwitchWidgetModel;
    if(this.qSwitchWidgetModel){

      result = this.typecastValue(this.additional.trueValue, this.qSwitchWidgetModel);

    } else {

      result = this.typecastValue(this.additional.falseValue, this.qSwitchWidgetModel);

    }
    return result;
  }

  /**
   * [return the proper value type according to layoutNode.dataType]
   * @param  value [additional.trueValue / additional.falseValue]
   * @return       [typecasted value]
   */
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
