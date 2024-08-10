import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { IndexPageComponent } from './pages/index-page/index-page.component';
import { NewUserPage } from './pages/new-user-page/new-user.page';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', component: IndexPageComponent },
      { path: 'new', component: NewUserPage },
      { path: '**', redirectTo: '404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
