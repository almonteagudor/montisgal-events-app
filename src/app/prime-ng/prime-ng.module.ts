import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    ChipModule,
    MenuModule,
    MenubarModule,
    SidebarModule,
  ],
})
export class PrimeNGModule {}
