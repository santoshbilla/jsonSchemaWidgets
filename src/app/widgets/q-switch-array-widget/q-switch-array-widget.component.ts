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
  selectAllSwitchModel : boolean = false;
  @Input() layoutNode: any;
  checkboxList: TitleMapItem[] = [];
  layoutOrientation : any = 'vertical';
  options: any;
  constructor(private jsf : JsonSchemaFormService) { }

  ngOnInit() {
    this.options = this.layoutNode.options|| {};
    //check if additional properties are given
    if(this.layoutNode.options.additional != undefined){
      //check if layoutOrientation is given
      //layoutOrientation based on additional properties defaults to vertical
      if(this.layoutNode.options.additional.layoutOrientation != undefined){
      this.layoutOrientation = this.layoutNode.options.additional.layoutOrientation;
      }
    }
    //Initialize control for jsf
    this.jsf.initializeControl(this);
    
      this.checkboxList = buildTitleMap(
        this.options.titleMap || this.options.enumNames, this.options.enum, true
      );
    this.jsf.getFormControl(this);

    //check the layout based on data provided by the user
    if (this.boundControl) {
      let result; 
      result =  this.jsf.getFormControl(this)
      this.checkboxList.forEach(checkboxItem =>checkboxItem.checked =  result.value.includes(checkboxItem.value));
  }
  //default SelectAll switch value
  if(this.checkboxList.filter(items => items.checked).length ===this.checkboxList.length){
    this.selectAllSwitchModel = true;
  }
}

updateValue(event) {
  for (let checkboxItem of this.checkboxList) {
    if(event.target.value === checkboxItem.value){
      checkboxItem.checked = event.target.checked;
    }
  }
 //if all the items are checked, make the switch all true
  if(this.boundControl){
    this.jsf.updateArrayCheckboxList(this, this.checkboxList);
  }

}
updateSelectAllSwitch(event){
  this.selectAllSwitchModel = event;
    //if the select all is true then all values true
    if(event){
      this.checkboxList.forEach(checkboxItem => checkboxItem.checked = true)
    }
    //if select all is false the all values false
    else{
      this.checkboxList.forEach(item=> item.checked = false)
    }

  this.jsf.updateArrayCheckboxList(this, this.checkboxList);

}
 
}


