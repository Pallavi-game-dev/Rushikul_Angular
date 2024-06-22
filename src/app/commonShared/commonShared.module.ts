
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './elements/button/button.component';
import { HeaderComponent } from './elements/header/header.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-community';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    AgGridModule

  ],
  declarations: [
    ButtonComponent,
    HeaderComponent
  ],
  exports:[
    HeaderComponent,
    ButtonComponent,
    AgGridModule
  ]
})
export class CommonSharedModule { }
