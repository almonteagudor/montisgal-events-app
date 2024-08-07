import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateUserCommand } from '../../interfaces/create-user-command.interface';
import { Router } from '@angular/router';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'user-user-form',
  templateUrl: './user-form.component.html',
  styles: ``,
})
export class UserFormComponent {
  constructor(
    private usersService: UserService,
    private router: Router,
  ) {}

  public errorUserName: string = '';
  public errorEmail: string = '';
  public errorPassword: string = '';
  public errorRole: string = '';

  public createUserForm = new FormGroup({
    userName: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
    rol: new FormControl('', { nonNullable: true }),
  });

  createUser() {
    this.usersService.createUser(this.createUserForm.value as CreateUserCommand).subscribe({
      next: data => {
        this.errorUserName = '';
        this.errorEmail = '';
        this.errorPassword = '';
        this.errorRole = '';
        this.router.navigate(['super-admin', 'users']).then();
      },
      error: error => {
        console.log('error', error.error);
        if(error.error.userName != undefined) {
          this.errorUserName = error.error.userName;
          this.errorEmail = error.error.errorEmail;
          this.errorPassword = error.error.errorPassword;
          this.errorRole = error.error.errorRole;
        }
      },
    });
  }

  protected readonly PrimeIcons = PrimeIcons;
}
