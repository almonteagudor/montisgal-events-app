import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ConfigModule } from './config/config.module';
import { LayoutRoutingModule } from './layout-routing.module';

import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuitemComponent } from './components/menu-item/menuitem.component';
import { SidebarComponent } from './components/side-bar/sidebar.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [
    FooterComponent,
    LayoutComponent,
    MenuComponent,
    MenuitemComponent,
    SidebarComponent,
    TopBarComponent,
  ],
  imports: [
    CommonModule,
    ConfigModule,
    LayoutRoutingModule,
  ],
})
export class LayoutModule {}
