import { Component, OnInit , Input} from '@angular/core';
import { JsonSchemaFormService } from "angular6-json-schema-form";
import { AbstractControl} from '@angular/forms';
import { buildTitleMap, TitleMapItem } from "angular6-json-schema-form";
@Component({
  selector: 'app-q-switch-array-widget',
  templateUrl: './q-switch-array-widget.component.html',
  styleUrls: ['./q-switch-array-widget.component.css']
})
export class QswitchArrayWidgetComponent implements OnInit {
  formControl: AbstractControl;
  boundControl : boolean =  false;
  @Input() layoutNode: any;
  checkboxList: TitleMapItem[] = [];
  layoutOrientation : any = 'vertical';
  options: any;
  additional;
  constructor(private jsf : JsonSchemaFormService) { }

  ngOnInit() {
    console.log("boundcontrol",this.boundControl)
    this.options = {...this.layoutNode.options,  ...this.layoutNode.options.additional}|| {};

    console.log("layoutnodetype",this.layoutNode.type)
    console.log("this.options.layoutOrientation", this.options.layoutOrientation)
    if(this.options.layoutOrientation != undefined){
      this.layoutOrientation = this.options.layoutOrientation;
    }
    this.jsf.initializeControl(this);
      this.checkboxList = buildTitleMap(
        this.options.titleMap || this.options.enumNames, this.options.enum, true
      );
    this.jsf.getFormControl(this);
    console.log("data", this.layoutNode.value)
    console.log("default", this.layoutNode.default)
    console.log("data provided", this.jsf.getFormControlValue(this))
    if (this.boundControl) {
      let result; 
      result =  this.jsf.getFormControl(this)
      this.checkboxList.forEach(checkboxItem =>checkboxItem.checked =  result.value.includes(checkboxItem.value));
  }
}
updateValue(event) {
  for (let checkboxItem of this.checkboxList) {
    if(event.target.value === checkboxItem.value){

      checkboxItem.checked = event.target.checked;
    }
  }
  if(this.boundControl){
    this.jsf.updateArrayCheckboxList(this, this.checkboxList);
  }

}
 
}


