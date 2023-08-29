import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterAdminComponent} from './register-admin/register-admin.component';
import {AddAdminComponent} from './add-admin/add-admin.component'
const routes: Routes = [

{
  path:'login',
  component: LoginComponent,
},
{
  path:'home',
  component: RegisterAdminComponent,
},

{
  path:'addadmin',
  component: AddAdminComponent,
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
