import { NgModule } from '@angular/core';

import { PrimeNGModule } from '../prime-ng/prime-ng.module';
import { SuperAdminRoutingModule } from './super-admin-routing.module';

import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    PrimeNGModule,
    SuperAdminRoutingModule,
  ],
})
export class SuperAdminModule {}
