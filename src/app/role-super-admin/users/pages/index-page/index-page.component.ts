import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { PrimeIcons, SelectItem } from 'primeng/api';
import { DataView } from 'primeng/dataview';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styles: ``,
})
export class IndexPageComponent implements OnInit {
  public users: User[] = [];

  public sortOptions: SelectItem[] = [];
  public sortOrder: number = 0;
  public sortField: string = '';
  public sourceCities: any[] = [];
  public targetCities: any[] = [];
  public orderCities: any[] = [];

  constructor(private usersService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();

    this.sourceCities = [
      { name: 'San Francisco', code: 'SF' },
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Berlin', code: 'BRL' },
      { name: 'Barcelona', code: 'BRC' },
      { name: 'Rome', code: 'RM' }];

    this.targetCities = [];

    this.orderCities = [
      { name: 'San Francisco', code: 'SF' },
      { name: 'London', code: 'LDN' },
      { name: 'Paris', code: 'PRS' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Berlin', code: 'BRL' },
      { name: 'Barcelona', code: 'BRC' },
      { name: 'Rome', code: 'RM' }];

    this.sortOptions = [
      { label: 'Sort A-Z', value: 'userName' },
      { label: 'Sort Z-A', value: '!userName' }
    ];
  }

  deleteUser(id: string) {
    this.usersService.deleteUser(id).subscribe(() => { this.loadUsers(); });
  }

  onSortChange(event: any) {
    const value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  onFilter(dv: DataView, event: Event) {
    dv.filter((event.target as HTMLInputElement).value);
    console.log((event.target as HTMLInputElement).value)
  }

  private loadUsers(): void {
    this.usersService.getUsers().subscribe(users => this.users = users);
  }

  protected readonly PrimeIcons = PrimeIcons;
}
