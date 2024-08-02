import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { IndexPageComponent } from './pages/index-page/index-page.component';
import { NewUserPageComponent } from './pages/new-user-page/new-user-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', pathMatch: 'full', component: IndexPageComponent },
      { path: 'new', component: NewUserPageComponent },
      { path: '**', redirectTo: '404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
