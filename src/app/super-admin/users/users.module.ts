import { NgModule } from '@angular/core';

import { UsersRoutingModule } from './users-routing.module';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { NewUserPageComponent } from './components/new-user-page/new-user-page.component';


@NgModule({
  declarations: [
    IndexPageComponent,
    NewUserPageComponent
  ],
  imports: [
    UsersRoutingModule
  ]
})
export class UsersModule { }
