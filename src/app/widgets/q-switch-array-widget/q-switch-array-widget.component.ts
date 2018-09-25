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
  @Input() layoutNode: any;
  @Input() layoutOrientation : any;
  checkboxList: TitleMapItem[] = [];

  options: any;
  constructor(private jsf : JsonSchemaFormService) { }

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.jsf.initializeControl(this);
    console.log(this.layoutNode.type)
    this.layoutOrientation = (this.layoutNode.type === 'q-switchArray') ? 'horizontal' : 'vertical';
    console.log(this.checkboxList)
      this.checkboxList = buildTitleMap(
        this.options.titleMap || this.options.enumNames, this.options.enum, true
      );
    console.log("for each values")
    console.log("controlValue",this.jsf.getFormControl(this))
    console.log(this.checkboxList)
    this.jsf.getFormControl(this);
    
  

}
updateValue(event) {
  for (let checkboxItem of this.checkboxList) {
    if(event.target.value === checkboxItem.value){
      checkboxItem.checked = event.target.checked;
    }
  }
 console.log("in update event", event)
 this.jsf.updateArrayCheckboxList(this, this.checkboxList);
  }
 
}


