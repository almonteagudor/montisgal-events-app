import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';

const routes: Routes = [
  {
    path: 'super-admin',
    loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
