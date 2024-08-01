import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';

import { LayoutComponent } from './components/layout/layout.component';


@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    AdminRoutingModule,
    PrimeNGModule,
  ],
})
export class AdminModule {}
