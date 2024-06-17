import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { RoleModule } from './role/role.module';
import { EmployeeModule } from './role/employee/employee.module';
import { CommonSharedModule } from './commonShared/commonShared.module';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    RoleModule,
    EmployeeModule,

    BrowserAnimationsModule,
    CommonSharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
