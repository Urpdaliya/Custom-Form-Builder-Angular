import { Routes } from '@angular/router';

import { FormSetupComponent }
from './form-setup/form-setup.component';

import { FormBuilderComponent }
from './form-builder/form-builder.component';

import { FormPreviewComponent }
from './form-preview/form-preview.component';

import { DynamicFormComponent }
from './dynamic-form/dynamic-form.component';

export const routes: Routes = [

{
path:'',
redirectTo:'setup',
pathMatch:'full'
},

{
path:'setup',
component:FormSetupComponent
},

{
path:'builder',
component:FormBuilderComponent
},

{
path:'preview',
component:FormPreviewComponent
},

{
path:'dynamic-form/:id',
component:DynamicFormComponent
}

];