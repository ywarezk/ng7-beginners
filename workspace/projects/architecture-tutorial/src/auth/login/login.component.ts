import { Component, OnInit } from '@angular/core';
import {LoginStamService} from '../services/login-stam.service';

@Component({
  selector: 'by-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private _login: LoginStamService

  constructor(_login: LoginStamService) { 
    this._login = _login;  
  }

  ngOnInit() {
  }

}
