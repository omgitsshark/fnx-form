import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";
import { FormConfig } from "./interfaces";

const mock: FormConfig = {
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

const validatorMap: {
    [key: string]: ValidatorFn | ((length: number) => ValidatorFn)
} = {
    required: Validators.required,
    email: Validators.email,
    maxLength: (length: number) => Validators.maxLength(length),
    minLength: (length: number) => Validators.minLength(length)
}


export class Builder {
    build(formConfig: FormConfig): FormGroup | null {
        if (!formConfig || !formConfig.fields || formConfig.fields.length === 0) {
            return null;
        }

        const form = new FormGroup({})

        formConfig.fields.forEach((field) => {
            const validators: ValidatorFn[] = [];


            field.validators.forEach((validator) => {

                if (validator.type === 'static') {
                    validators.push(validatorMap[validator.name] as ValidatorFn) 
                } else {
                    const fn = validatorMap[validator.name] as (length: number) => ValidatorFn

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