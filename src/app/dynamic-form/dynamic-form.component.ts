import {
Component,
OnInit
}
from '@angular/core';

import {
ActivatedRoute
}
from '@angular/router';

import {
CommonModule
}
from '@angular/common';

import {
FormsModule
}
from '@angular/forms';

import {
FormService
}
from '../services/form.service';


@Component({

selector:'app-dynamic-form',

standalone:true,

imports:[
CommonModule,
FormsModule
],

templateUrl:
'./dynamic-form.component.html',

styleUrls:[
'./dynamic-form.component.scss'
]

})

export class DynamicFormComponent
implements OnInit{

form:any;

constructor(

private route:
ActivatedRoute,

private service:
FormService

){}


ngOnInit(){

const id=

Number(

this.route.snapshot
.paramMap
.get('id')

);

this.service
.getFormById(id)
.subscribe(

(res:any)=>{

this.form=res;

}

);

}

getOptions(
field:any
){

return field.optionText
?
field.optionText
.split(',')
:
[];

}

}