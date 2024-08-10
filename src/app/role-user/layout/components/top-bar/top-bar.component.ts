import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "../../services/layout.service";

@Component({
    selector: 'user-top-bar',
    templateUrl: './top-bar.component.html'
})
export class TopBarComponent {

    items!: MenuItem[];

    @ViewChild('menuButton') menuButton!: ElementRef;

    @ViewChild('topBarMenuButton') topBarMenuButton!: ElementRef;

    @ViewChild('topBarMenu') menu!: ElementRef;

    constructor(public layoutService: LayoutService) { }
}
