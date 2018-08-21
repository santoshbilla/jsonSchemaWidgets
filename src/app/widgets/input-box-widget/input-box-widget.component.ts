import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';


import { JsonSchemaFormService} from '../../../../node_modules/angular6-json-schema-form';
@Component({
  selector: 'input-box-widget',
  template: `<input />`,
  styleUrls: ['./input-box-widget.component.css']
})
export class InputBoxWidgetComponent implements OnInit {
  private jsf;
    formControl: AbstractControl;
    controlName: string;
    controlValue: string;
    controlDisabled: boolean;
    boundControl: boolean;
    options: any;
    autoCompleteList: string[];
    layoutNode: any;
    layoutIndex: number[];
    dataIndex: number[];
  constructor(jsf: JsonSchemaFormService) { }

  ngOnInit() {
  
  }

}
