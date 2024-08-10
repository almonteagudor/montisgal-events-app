import { Component, ElementRef } from '@angular/core';
import { LayoutService } from "../../services/layout.service";

@Component({
    selector: 'super-admin-side-bar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
    constructor(public layoutService: LayoutService, public el: ElementRef) { }
}

