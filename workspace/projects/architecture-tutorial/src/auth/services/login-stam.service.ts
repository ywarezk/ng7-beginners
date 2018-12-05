import { Injectable } from '@angular/core';

@Injectable()
export class LoginStamService {

  isLoggedIn = (email: string, password: string): boolean => {
    if (email === 'yariv@nerdeez.com' && password === '12345678') {
      return true;
    }
    return false;
  }

  constructor() { }
}
