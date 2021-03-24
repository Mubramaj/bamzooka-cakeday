import {Component,  Input } from '@angular/core';


interface User {
  email: string;
  anniversary_date: Date;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'bam-plugin-connector-user-badge',
  template: `
    <span class='text-warning font-weight-bolder'
    >HB</span>`,
  styles: [`
    span {
      position: absolute;
      top: -10px;
      right: -5px;
      font-size: 20px;
    }
  `],
})
export class UserBadgeComponent {
  @Input() data!: User;

}
