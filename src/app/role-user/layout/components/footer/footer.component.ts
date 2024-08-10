import { Component } from '@angular/core';
import { LayoutService } from "../../services/layout.service";

@Component({
    selector: 'user-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    constructor(public layoutService: LayoutService) { }
}
