import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";
import { FormConfig } from "./interfaces";


const mock: FormConfig = {
    fields: [
        {
            field: 'input',
            validators: ['required'],
            name: 'input'
        }
    ]
}

const validatorMap: {
    [key: string]: ValidatorFn
} = {
    required: Validators.required
}


export class Builder {
    build(formConfig: FormConfig): FormGroup | null {
        if (!formConfig || !formConfig.fields || formConfig.fields.length === 0) {
            return null;
        }

        const form = new FormGroup({})

        formConfig.fields.forEach((field) => {

            const validators = field.validators.map((validator) => {
                return validatorMap[validator]
            })

            const control = new FormControl('', validators)


            form.addControl(field.name, control);
        })
        

        return form;
    }
}