import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  exports: [
    ButtonModule,
    MenuModule,
    MenubarModule,
    SidebarModule,
  ],
})
export class PrimeNGModule {}
