import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  CdkDrag,
  CdkDropList,
  CdkDragDrop,
  moveItemInArray
} from '@angular/cdk/drag-drop';

import { Router } from '@angular/router';

@Component({
  selector:'app-form-builder',
  standalone:true,

  imports:[
    CommonModule,
    FormsModule,
    CdkDrag,
    CdkDropList
  ],

  templateUrl:'./form-builder.component.html',
  styleUrls:[
    './form-builder.component.scss'
  ]
})

export class FormBuilderComponent{

showPreview=false;

availableFields=[

{
type:'text',
label:'Text'
},

{
type:'email',
label:'Email'
},

{
type:'number',
label:'Number'
},

{
type:'date',
label:'Date'
},

{
type:'textarea',
label:'Textarea'
},

{
type:'dropdown',
label:'Dropdown'
},

{
type:'checkbox',
label:'Checkbox'
},

{
type:'radio',
label:'Radio'
}

];


selectedFields:any[]=[];

constructor(
private router:Router
){}


drop(
event:CdkDragDrop<any[]>
){

if(
event.previousContainer
===
event.container
){

moveItemInArray(

this.selectedFields,

event.previousIndex,

event.currentIndex

);

}
else{

const field=
event.previousContainer
.data[event.previousIndex];

const copiedField={

id:Date.now(),

type:field.type,

label:field.label,

placeholder:'',

required:false,

color:'#1976d2',

width:100,

defaultValue:'',

optionText:
field.type==='dropdown'
||
field.type==='radio'
?
'Option1,Option2'
:
''

};

this.selectedFields.push(
copiedField
);

}

}


/* Delete field */

removeField(
index:number
){

this.selectedFields.splice(
index,
1
);

}


/* Dropdown/Radio values */

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


/* Preview popup */

preview(){

this.showPreview=true;

}


/* Close preview */

closePreview(){

this.showPreview=false;

}


/* Save form */

saveForm(){

const formData={

fields:
this.selectedFields

};

localStorage.setItem(

'previewFields',

JSON.stringify(
formData
)

);

alert(
'Form Saved Successfully'
);

this.router.navigate(
['/preview']
);

}

}