import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './web/pages/about-page/about-page.component';
import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { IndexPageComponent } from './web/pages/index-page/index-page.component';
import { LayoutComponent } from './role-user/layout/components/layout/layout.component';
import { LoginPageComponent } from './auth/pages/login-page/login-page.component';
import { RegisterPageComponent } from './auth/pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: 'super-admin',
    loadChildren: () => import('./role-super-admin/layout/layout.module').then(m => m.LayoutModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./role-admin/layout/layout.module').then(m => m.LayoutModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: IndexPageComponent,
      },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'login',
        component: LoginPageComponent,
      },
      {
        path: 'register',
        component: RegisterPageComponent,
      },
      {
        path: '404',
        component: Error404PageComponent,
      },
      {
        path: '',
        loadChildren: () => import('./role-user/layout/layout.module').then(m => m.LayoutModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
