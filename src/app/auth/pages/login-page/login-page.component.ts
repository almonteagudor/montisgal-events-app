import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PrimeIcons } from 'primeng/api';
import { AuthService } from '../../services/auth.service';
import { LoginCommandInterface } from '../../interfaces/login-command.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  styles: ``,
})
export class LoginPageComponent {
  public errorLogin: string = '';

  public loginForm = new FormGroup({
    username: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  login() {
    this.authService.login(this.loginForm.value as LoginCommandInterface).subscribe(
      {
        next: userToken => {
          this.errorLogin = '';

          if (userToken.isSuperAdmin()) {
            this.router.navigate(['super-admin', 'home']).then();
            return;
          }

          if (userToken.isAdmin()) {
            this.router.navigate(['admin', 'home']).then();
            return;
          }

          this.router.navigate(['home']).then();
        },
        error: error => {
          this.errorLogin = 'Invalid credentials';
        },
      },
    );
  }

  protected readonly PrimeIcons = PrimeIcons;
}
