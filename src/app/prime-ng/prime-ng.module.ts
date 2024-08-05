import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    ChipModule,
    DividerModule,
    InputGroupAddonModule,
    InputGroupModule,
    InputTextModule,
    MenuModule,
    MenubarModule,
    SidebarModule,
  ],
})
export class PrimeNGModule {}
