import { NgModule } from '@angular/core';
import { RolePipe } from './pipes/role.pipe';

import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';

import { IndexPageComponent } from './pages/index-page/index-page.component';
import { NewUserPage } from './pages/new-user-page/new-user.page';
import { NewUserFormComponent } from './components/new-user-form/new-user-form.component';


@NgModule({
  declarations: [
    IndexPageComponent,
    NewUserPage,
    RolePipe,
    NewUserFormComponent,
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    ReactiveFormsModule,
    UsersRoutingModule,
  ],
})
export class UsersModule {}
