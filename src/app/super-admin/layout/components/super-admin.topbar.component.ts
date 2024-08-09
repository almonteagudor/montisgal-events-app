import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SuperAdminLayoutService } from "../services/super-admin.layout.service";

@Component({
    selector: 'super-admin-topbar',
    templateUrl: './super-admin.topbar.component.html'
})
export class SuperAdminTopbarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(public layoutService: SuperAdminLayoutService) { }
}
