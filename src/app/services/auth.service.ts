import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(email: any, password: any) {
    if (email === 'hello' && password === '123') {
      return 200;
    } else {
      return 403;
    }
  }
}
