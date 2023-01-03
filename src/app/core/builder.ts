import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";
import { FormConfig } from "./interfaces";

export interface ValidatorsMap {
    [key: string]: ValidatorFn | ((length: number) => ValidatorFn)
}

export const mock: FormConfig = {
    fields: [
        {
            field: 'input',
            validators: [{
                type: 'static',
                name: 'required'
            }],
            name: 'firstName'
        },
        {
            field: 'input',
            validators: [{
                type: 'dynamic',
                name: 'minLength',
                value: 10
            }],
            name: 'lastName'
        }
    ]
}

export const mockValidators: ValidatorsMap = {
    required: Validators.required,
    email: Validators.email,
    maxLength: (length: number) => Validators.maxLength(length),
    minLength: (length: number) => Validators.minLength(length)
}


export class Builder {

    static build(formConfig: FormConfig, validatorsMap: ValidatorsMap): FormGroup | null {

        // validate arguments
        if (!formConfig || !formConfig.fields || formConfig.fields.length === 0) {
            return null;
        }


        // create empty formGroup
        const form = new FormGroup({})

        // add controls and validators
        formConfig.fields.forEach((field) => {
            const validators: ValidatorFn[] = [];


            field.validators.forEach((validator) => {

                if (validator.type === 'static') {
                    validators.push(validatorsMap[validator.name] as ValidatorFn) 
                } else {
                    const fn = validatorsMap[validator.name] as (length: number) => ValidatorFn

                    validators.push(fn(validator.value || 0)) 
                }
                

                return; 
            })

            const control = new FormControl('', validators)


            form.addControl(field.name, control);
        })
        

        return form;
    }
}