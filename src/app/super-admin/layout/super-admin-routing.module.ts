import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SuperAdminLayoutComponent } from './components/super-admin.layout.component';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminLayoutComponent,
    children: [
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'events',
        loadChildren: () => import('../events/events.module').then(m => m.EventsModule),
      },
      { path: '**', redirectTo: '404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperAdminRoutingModule {}
