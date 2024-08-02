import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../../prime-ng/prime-ng.module';
import { UsersRoutingModule } from './users-routing.module';

import { IndexPageComponent } from './pages/index-page/index-page.component';
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { RolePipe } from './pipes/role.pipe';


@NgModule({
  declarations: [
    IndexPageComponent,
    NewUserPageComponent,
    UserCardComponent,
    RolePipe,
  ],
  imports: [
    CommonModule,
    PrimeNGModule,
    UsersRoutingModule,
  ],
})
export class UsersModule {}
