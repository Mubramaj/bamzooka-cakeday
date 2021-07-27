import {Component, Input, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

interface User {
    email: string;
    anniversary_date: Date;
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'connector-user-badge',
    template: `
        <ng-template #notYourBirthday>
            <span class="text-danger">
             NYB   
            </span>
        </ng-template>
        <span class='text-warning font-weight-bolder'
              *ngIf="shouldDisplayBirthdayMessage() else notYourBirthday"
        >{{getDisplayText()}}</span>`,
    styles: [`
        span {
            position: absolute;
            top: -10px;
            right: -5px;
            font-size: 20px;
        }
    `],
})
export class UserBadgeComponent implements OnInit {
    @Input() data!: User;
    @Input() locale!: string;
    @Input() workspace!: any;

    constructor(private translate: TranslateService) {
    }

    ngOnInit() {
        this.translate.use(this.locale);
    }

    shouldDisplayBirthdayMessage(): boolean {
        if(!this?.data?.anniversary_date) {
            return false;
        }
        const now = new Date(Date.now());
        return this.data.anniversary_date.getDate() === now.getDate()
            && this.data.anniversary_date.getDay() === now.getDay();
    }

    getDisplayText(): string {
        const settingValue = this.workspace?.getConfig('bamzooka-cakeday')?.get('birthday_text')?.value;
        if (settingValue === 'hb') {
            return 'HB'
        } else {
            return 'youpi'
        }
    }

}
