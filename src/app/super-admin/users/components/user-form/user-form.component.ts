import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { CreateUserCommand } from '../../interfaces/create-user-command.interface';

@Component({
  selector: 'user-user-form',
  templateUrl: './user-form.component.html',
  styles: ``,
})
export class UserFormComponent {
  constructor(private usersService: UserService) {}

  public createUserForm = new FormGroup({
    userName: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
    rol: new FormControl('', { nonNullable: true }),
  });

  createUser() {
    this.usersService.createUser(this.createUserForm.value as CreateUserCommand).subscribe(console.log);
  }
}
