import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    data: { roles: 'operations' },
    children: [
      // { path: 'home', component: Home },
      // { path: 'customer', component: CustomerComponent },
      // { path: 'customer/:holder_id', component: MasterCustomerComponent },
      // { path: '', redirectTo: 'customer', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
