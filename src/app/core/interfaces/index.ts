export interface FormConfig {
    fields: {
        name: string;
        field: string;
        validators: {
            type: 'static' | 'dynamic',
            name: string;
            value?: number;
        }[];
    }[]
}