import { FormGroup, FormControl, Validators, ValidatorFn } from "@angular/forms";
import { FormConfig } from "./interfaces";

export interface ValidatorsMap {
    [key: string]: ValidatorFn | ((length: number) => ValidatorFn)
}

export const mock: FormConfig = {
    fields: [
        {
            name: 'firstname',
            type: 'input',
            validators: [{
                type: 'static',
                name: 'required'
            }],
        },
        {
            type: 'input',
            validators: [{
                type: 'dynamic',
                name: 'minLength',
                value: 10
            }],
            name: 'lastname'
        }
    ]
}

export const mockValidators: ValidatorsMap = {
    required: Validators.required,
    email: Validators.email,
    maxLength: (length: number) => Validators.maxLength(length),
    minLength: (length: number) => Validators.minLength(length)
}