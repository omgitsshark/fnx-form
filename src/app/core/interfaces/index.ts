export interface FormConfig {
    fields: {
        name: string;
        type: string;
        validators: {
            type: 'static' | 'dynamic',
            name: string;
            value?: number;
        }[];
    }[]
}