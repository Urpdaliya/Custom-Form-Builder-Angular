export interface FormField{

    id:string;

    type:string;

    label:string;

    placeholder?:string;

    required:boolean;

    options?:string[];

}

export interface DynamicForm{

    id?:string;

    formName:string;

    description:string;

    fields:FormField[];

}