import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { RoleComponent } from './role.component';

const routes: Routes = [
 {
  path:'',
  component:RoleComponent,
  canActivate:[AuthGuard],
  children:[
    {
      path:'customer',
      loadChildren:()=>import('./employee/employee.module').then((m)=>m.EmployeeModule)
    }
  ]
 }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
