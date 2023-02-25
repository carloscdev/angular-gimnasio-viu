import { Component } from '@angular/core';

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

  onLogin() {
    console.log('Login', this.user);
  }
}
