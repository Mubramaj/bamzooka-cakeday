import {Component, Input} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
interface User {
  username: string;
  email: string;
  anniversary_date: Date;
}
@Component({
  selector: 'bamzooka-cakeday-workspace-view-base',
  templateUrl: './birthday-base.component.html'
})
export class BirthdayBaseComponent {
  @Input() workspace?: any;
  users: User[] = [];
  isFetchingBirthdays = false;
  selectedMonth = 1;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getBirthdaysForMonth(this.selectedMonth);
  }

  onChange(): void {
    this.getBirthdaysForMonth(this.selectedMonth);
  }

  getSettingValue(): string {
    return this.workspace?.getConfig('bamzooka-cakeday')?.get('display_text')?.value;
  }

  private getBirthdaysForMonth(month_param: number): void {
    const url = `/bamzooka-cakeday/birthdays`;

    let params = new HttpParams()
    params = params.set('month', (+month_param + 1).toString());
    this.isFetchingBirthdays = true;
    this.http.get(url, {params: params}).subscribe((users) => {
      this.isFetchingBirthdays = false;
      this.users = users as User[];
    }, (err) => {
      this.isFetchingBirthdays = false;
    })
  }
}
