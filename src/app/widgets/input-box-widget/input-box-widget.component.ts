import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl } from '@angular/forms';


import { JsonSchemaFormService} from '../../../../node_modules/angular6-json-schema-form';
@Component({
  selector: 'input-box-widget',
  template: ` <div [class]="options?.htmlClass || ''">
  <label *ngIf="options?.title"
    [attr.for]="'control' + layoutNode?._id"
    [class]="options?.labelHtmlClass || ''"
    [style.display]="options?.notitle ? 'none' : ''"
    [innerHTML]="options?.title"></label>
  <input *ngIf="boundControl"
    [formControl]="formControl"
    [attr.aria-describedby]="'control' + layoutNode?._id + 'Status'"
    [attr.list]="'control' + layoutNode?._id + 'Autocomplete'"
    [attr.maxlength]="options?.maxLength"
    [attr.minlength]="options?.minLength"
    [attr.pattern]="options?.pattern"
    [attr.placeholder]="options?.placeholder"
    [attr.required]="options?.required"
    [class]="options?.fieldHtmlClass || ''"
    [id]="'control' + layoutNode?._id"
    [name]="controlName"
    [readonly]="options?.readonly ? 'readonly' : null"
    [type]="layoutNode?.type">
  <input *ngIf="!boundControl"
    [attr.aria-describedby]="'control' + layoutNode?._id + 'Status'"
    [attr.list]="'control' + layoutNode?._id + 'Autocomplete'"
    [attr.maxlength]="options?.maxLength"
    [attr.minlength]="options?.minLength"
    [attr.pattern]="options?.pattern"
    [attr.placeholder]="options?.placeholder"
    [attr.required]="options?.required"
    [class]="options?.fieldHtmlClass || ''"
    [disabled]="controlDisabled"
    [id]="'control' + layoutNode?._id"
    [name]="controlName"
    [readonly]="options?.readonly ? 'readonly' : null"
    [type]="layoutNode?.type"
    [value]="controlValue"
    (input)="updateValue($event)">
    <datalist *ngIf="options?.typeahead?.source"
      [id]="'control' + layoutNode?._id + 'Autocomplete'">
      <option *ngFor="let word of options?.typeahead?.source" [value]="word">
    </datalist>
</div>`,
  styleUrls: ['./input-box-widget.component.css']
})
export class InputBoxWidgetComponent implements OnInit {
 
  formControl: AbstractControl;
  controlName: string;
  controlValue: string;
  controlDisabled:boolean;
  boundControl: boolean;
  options: any;
  autoCompleteList: string[];
  layoutNode: any;
  layoutIndex: number[];
  dataIndex: number[];
  constructor(private jsf: JsonSchemaFormService) { }

  ngOnInit() {
    this.options = this.layoutNode.options || {};
    this.jsf.initializeControl(this);
  }

  updateValue(event) {
    this.jsf.updateValue(this, event.target.value);
  }


}
