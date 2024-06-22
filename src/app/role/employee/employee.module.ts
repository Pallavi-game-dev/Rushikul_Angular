import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { CustomerComponent } from './Pages/Customer/Customer.component';
import { DirectorsComponent } from './Pages/Directors/Directors.component';
import { AgentsComponent } from './Pages/Agents/Agents.component';
import { DepositesComponent } from './Pages/Deposites/Deposites.component';
import { LoanComponent } from './Pages/Loan/Loan.component';
import { CommonSharedModule } from 'src/app/commonShared/commonShared.module';



@NgModule({
  declarations: [
    EmployeeComponent,
    CustomerComponent,
    DirectorsComponent,
    AgentsComponent,
    DepositesComponent,
    LoanComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    CommonSharedModule
  ]
})
export class EmployeeModule { }
