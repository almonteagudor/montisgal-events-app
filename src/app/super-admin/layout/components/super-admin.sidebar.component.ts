import { Component, ElementRef } from '@angular/core';
import { SuperAdminLayoutService } from "../services/super-admin.layout.service";

@Component({
    selector: 'super-admin-sidebar',
    templateUrl: './super-admin.sidebar.component.html'
})
export class SuperAdminSidebarComponent {
    constructor(public layoutService: SuperAdminLayoutService, public el: ElementRef) { }
}

