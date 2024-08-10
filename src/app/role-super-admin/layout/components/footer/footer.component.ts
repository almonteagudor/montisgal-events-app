import { Component } from '@angular/core';
import { LayoutService } from "../../services/layout.service";

@Component({
    selector: 'super-admin-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    constructor(public layoutService: LayoutService) { }
}
