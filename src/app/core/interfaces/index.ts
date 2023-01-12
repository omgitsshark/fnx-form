import { ValidatorFn, AsyncValidator, AsyncValidatorFn } from "@angular/forms";

export interface FormConfig {
    fields: {
        name: string;
        type: string;
        validators: {
            type: 'static' | 'dynamic' | 'async',
            name: string;
            value?: number;
        }[];
    }[]
}

export interface ValidatorsMap {
    [id: string]: ((value: number) => ValidatorFn) | ValidatorFn | AsyncValidator | AsyncValidatorFn
}