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