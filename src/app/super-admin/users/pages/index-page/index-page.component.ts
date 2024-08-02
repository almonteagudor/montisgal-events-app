import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styles: ``,
})
export class IndexPageComponent implements OnInit {
  public users: User[] = [];

  constructor(private usersService: UserService) {
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  deleteUser(id: string) {
    this.usersService.deleteUser(id).subscribe(() => { this.loadUsers(); });
  }

  private loadUsers(): void {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }
}
