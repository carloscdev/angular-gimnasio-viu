import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface UsuarioLogin {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  user: UsuarioLogin = {
    email: '',
    password: '',
  }

  constructor(
    private router: Router,
  ) { }

  onLogin() {
    console.log('Login', this.user);
    this.router.navigate(['/dashboard/home']);
  }
}
