
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './elements/button/button.component';
import { HeaderComponent } from './elements/header/header.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [
    ButtonComponent,
    HeaderComponent
  ],
  exports:[
    HeaderComponent,
    ButtonComponent
  ]
})
export class CommonSharedModule { }
