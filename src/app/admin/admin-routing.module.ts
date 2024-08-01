import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'events',
        loadChildren: () => import('./events/events.module').then(m => m.EventsModule),
      },
      { path: '**', redirectTo: '/404' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
