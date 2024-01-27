import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    if (this.email.length === 0) {
      this.error = 'Please enter email';
    } else if (this.password.length === 0) {
      this.error = 'please enter password';
    } else {
      this.error = '';
      let res = this.auth.login(this.email, this.password);

      if (res === 200) {
        this.router.navigate(['home']);
      }
      if (res === 403) {
        this.error = 'Invalid credentials';
      }
    }
  }
}
