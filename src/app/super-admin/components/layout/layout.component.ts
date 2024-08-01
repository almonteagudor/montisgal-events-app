import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: ``,
})
export class LayoutComponent implements OnInit {
  public items: MenuItem[] = [];
  public sidebarVisible = false;

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: PrimeIcons.HOME,
      },
      {
        label: 'Users',
        icon: PrimeIcons.USER,
        items: [
          {
            label: 'Users',
            icon: PrimeIcons.USERS,
            routerLink: 'users',
          },{
            label: 'New User',
            icon: PrimeIcons.USER_PLUS,
            routerLink: 'users/new',
          },
        ]
      },
    ];
  }
}
