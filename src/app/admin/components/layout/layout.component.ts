import { Component } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: ``,
})
export class LayoutComponent {
  public sidebarVisible = false;
  public items: MenuItem[] = [
    {
      label: 'Home',
      icon: PrimeIcons.PLUS,
    },
    {
      label: 'Events',
    },
    {
      label: 'Groups',
    },
    {
      label: 'Users',
    },
  ];
}
