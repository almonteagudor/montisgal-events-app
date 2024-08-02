import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role',
})
export class RolePipe implements PipeTransform {

  transform(role: string): string {
    switch (role) {
      case 'ROLE_SUPER_ADMIN':
        return 'Super Admin';
      case 'ROLE_ADMIN':
        return 'Admin';
      default:
        return 'User';
    }
  }
}
