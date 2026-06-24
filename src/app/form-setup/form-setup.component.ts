import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormService } from '../services/form.service';

@Component({

selector:'app-form-setup',

standalone:true,

imports:[
FormsModule
],

templateUrl:
'./form-setup.component.html',

styleUrls:[
'./form-setup.component.scss'
]

})

export class FormSetupComponent{

form = {

formName:'',

description:'',

category:'',

theme:'#1976d2',

startDate:'',

endDate:'',

multipleSubmit:false,

status:true,

enableQr:false

};

constructor(

private formService:
FormService

){}


saveSetup(){

this.formService
.saveForm(
this.form
)

.subscribe({

next:(res)=>{

console.log(
res
);

alert(
'Form saved successfully'
);

},

error:(err)=>{

console.log(
err
);

alert(
'Save failed'
);

}

});

}

}