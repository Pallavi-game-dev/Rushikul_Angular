import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { CustomerComponent } from './Pages/Customer/Customer.component';
import { DirectorsComponent } from './Pages/Directors/Directors.component';
import { AgentsComponent } from './Pages/Agents/Agents.component';
import { LoanComponent } from './Pages/Loan/Loan.component';
import { DepositesComponent } from './Pages/Deposites/Deposites.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      // { path: 'home', component: Home },
      { path: 'customer', component: CustomerComponent },
      { path: 'directors', component: DirectorsComponent },
      { path: 'agents', component: AgentsComponent },
      { path: 'loan', component: LoanComponent },
      { path: 'deposite', component: DepositesComponent },
      // { path: 'customer/:holder_id', component: MasterCustomerComponent },
      { path: '', redirectTo: 'customer', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
