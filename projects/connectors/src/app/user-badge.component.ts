import {Component, Input} from '@angular/core';

interface User {
    email: string;
    anniversary_date: Date;
}

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'connector-user-badge',
    template: `
        <ng-template #notYourBirthday>
            <span class="text-danger" i18n="@@nyb">
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
export class UserBadgeComponent {
    @Input() data!: User;
    @Input() workspace!: any;

    constructor() {
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
