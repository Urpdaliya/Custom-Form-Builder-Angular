import { Injectable } from '@angular/core';

import { HttpClient }
from '@angular/common/http';

import { Observable }
from 'rxjs';

@Injectable({

providedIn:'root'

})

export class FormService{

baseUrl='http://localhost:3000/api/forms';

constructor(

private http:HttpClient

){}


saveForm(
data:any
):Observable<any>{

return this.http.post(

this.baseUrl,
data

);

}


getForms(){

return this.http.get(

this.baseUrl

);

}

getFormById(
id:number
){

return this.http.get(

`${this.baseUrl}/${id}`

);

}

}