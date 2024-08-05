import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../../prime-ng/prime-ng.module';
import { UsersRoutingModule } from './users-routing.module';

import { IndexPageComponent } from './pages/index-page/index-page.component';
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { RolePipe } from './pipes/role.pipe';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexPageComponent,
    NewUserPageComponent,
    UserCardComponent,
    RolePipe,
    UserFormComponent,
  ],
    imports: [
        CommonModule,
        PrimeNGModule,
        UsersRoutingModule,
        ReactiveFormsModule,
    ],
})
export class UsersModule {}
