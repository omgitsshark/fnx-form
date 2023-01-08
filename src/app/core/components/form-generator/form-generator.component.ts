import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormConfig } from '../../interfaces';

@Component({
  selector: 'app-form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.scss']
})
export class FormGeneratorComponent implements OnInit {
  @Input('formConfig') set setFormConfig(formConfig: FormConfig) {
    this.config = formConfig;


    if (!this.form) {
      this.form = this.generateReactiveForm(formConfig);
    }
  }


  config: FormConfig | null = null;
  form: FormGroup | null = null;

  constructor() { }

  ngOnInit() {
  }


  private generateReactiveForm(formConfig: FormConfig): FormGroup {
      const formGroup = new FormGroup({});


      return formGroup;
  }

}
