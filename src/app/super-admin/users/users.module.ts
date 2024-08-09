import { NgModule } from '@angular/core';
import { RolePipe } from './pipes/role.pipe';

import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../../prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';

import { IndexPageComponent } from './pages/index-page/index-page.component';
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';
import { DogCardComponent } from './components/user-card/dog-card.component';
import { UserFormComponent } from './components/user-form/user-form.component';


@NgModule({
  declarations: [
    IndexPageComponent,
    NewUserPageComponent,
    RolePipe,
    DogCardComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    ReactiveFormsModule,
    UsersRoutingModule,
  ],
})
export class UsersModule {}
