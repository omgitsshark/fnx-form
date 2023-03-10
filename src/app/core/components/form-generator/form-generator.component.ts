import { Component, OnInit, Input } from '@angular/core';
import { AsyncValidatorFn, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { FormConfig, ValidatorsMap } from '../../interfaces';

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

  @Input() validators: ValidatorsMap | null = null;

  config: FormConfig | null = null;
  form: FormGroup | null = null;

  constructor() { }

  ngOnInit() {
  }

  private generateReactiveForm(formConfig: FormConfig): FormGroup {
    const formGroup = new FormGroup({});


    formConfig.fields.forEach((field) => {
      const control = new FormControl();

      // set validators
      field.validators.forEach((validator) => {

        if (validator.type === 'static' && this.validators && this.validators[validator.name]) {
          control.addValidators(this.validators[validator.name] as ValidatorFn)
        }

        if (validator.type === 'dynamic' && this.validators && this.validators[validator.name]) {
          const dynamicValidator = this.validators[validator.name] as ValidatorFn;

          control.addValidators(dynamicValidator(validator.value as any) as ValidatorFn)
        }

        if (validator.type === 'async' && this.validators && this.validators[validator.name]) {
          const dynamicValidator = this.validators[validator.name] as ValidatorFn;

          control.addAsyncValidators(dynamicValidator(validator.value as any) as AsyncValidatorFn)
        }
      })

      

      formGroup.addControl(field.name, control)

    })


    return formGroup;
  }

}
