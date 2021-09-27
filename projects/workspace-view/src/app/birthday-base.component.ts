import {Component} from '@angular/core';

@Component({
    selector: 'bamzooka-cakeday-workspace-view-base',
    template: `
        <a class="btn btn-outline" routerLink="./list">list</a>
        <a class="btn btn-outline" routerLink="./today">today</a>
        <a class="btn btn-outline" href="#">new button<a>
        <router-outlet></router-outlet>`
})
export class BirthdayBaseComponent {
}
