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

    {type:'text',label:'Text'},
    {type:'email',label:'Email'},
    {type:'number',label:'Number'},
    {type:'date',label:'Date'},
    {type:'textarea',label:'Textarea'},
    {type:'dropdown',label:'Dropdown'},
    {type:'checkbox',label:'Checkbox'},
    {type:'radio',label:'Radio'}

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

      const copiedField={

        id:Date.now(),

        ...event.previousContainer
        .data[event.previousIndex],

        placeholder:'',

        required:false,

        options:['Option1']

      };

      this.selectedFields.push(
        copiedField
      );

    }

  }


  preview(){

    this.showPreview=true;

  }


  closePreview(){

    this.showPreview=false;

  }


  saveForm(){

    localStorage.setItem(

      'previewFields',

      JSON.stringify(
        this.selectedFields
      )

    );

    this.router.navigate(
      ['/preview']
    );

  }

}