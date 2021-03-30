import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface User {
  email: string;
  anniversary_date: Date;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'connector-user-badge',
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
export class UserBadgeComponent implements OnInit{
  @Input() data!: User;
  @Input() locale!: string;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.translate.use(this.locale);
  }

}
