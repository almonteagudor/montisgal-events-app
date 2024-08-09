import { Component } from '@angular/core';
import { SuperAdminLayoutService } from "../services/super-admin.layout.service";

@Component({
    selector: 'super-admin-footer',
    templateUrl: './super-admin.footer.component.html'
})
export class SuperAdminFooterComponent {
    constructor(public layoutService: SuperAdminLayoutService) { }
}
