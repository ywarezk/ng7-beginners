import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {LoginStamService} from './services/login-stam.service'

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  exports: [LoginComponent],
  providers: [
    LoginStamService
  ]
})
export class AuthModule { }
