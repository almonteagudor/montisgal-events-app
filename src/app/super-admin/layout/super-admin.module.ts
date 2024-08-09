import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SuperAdminConfigModule } from './config/super-admin.config.module';
import { SuperAdminRoutingModule } from './super-admin-routing.module';

import { SuperAdminFooterComponent } from './components/super-admin.footer.component';
import { SuperAdminLayoutComponent } from './components/super-admin.layout.component';
import { SuperAdminMenuComponent } from './components/super-admin.menu.component';
import { SuperAdminMenuitemComponent } from './components/super-admin.menuitem.component';
import { SuperAdminSidebarComponent } from './components/super-admin.sidebar.component';
import { SuperAdminTopbarComponent } from './components/super-admin.topbar.component';

@NgModule({
  declarations: [
    SuperAdminFooterComponent,
    SuperAdminLayoutComponent,
    SuperAdminMenuComponent,
    SuperAdminMenuitemComponent,
    SuperAdminSidebarComponent,
    SuperAdminTopbarComponent,
  ],
  imports: [
    CommonModule,
    SuperAdminConfigModule,
    SuperAdminRoutingModule,
  ],
})
export class SuperAdminModule {}
