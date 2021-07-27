import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {BamzookaDataStateService} from '@metadot/bamzooka-plugin-sdk'
import {map} from "rxjs/operators";

interface User {
    username: string;
    email: string;
    anniversary_date: Date;
}

@Component({
    selector: 'app-birthdays-list',
    templateUrl: './birthdays-list.component.html',
    styles: []
})
export class BirthdaysListComponent implements OnInit {

    users: User[] = [];
    isFetchingBirthdays = false;
    selectedMonth = 1;

    constructor(private http: HttpClient,
                private state: BamzookaDataStateService) {
    }

    ngOnInit(): void {
        this.getBirthdaysForMonth(this.selectedMonth);
    }

    onChange(): void {
        this.getBirthdaysForMonth(this.selectedMonth);
    }

    getSettingValue(): Observable<string> {
        // @ts-ignore
        return this.state.workspace$.pipe(map((workspace: any) => {
            return workspace?.getConfig('bamzooka-cakeday')?.get('display_text')?.value as string;
        }));
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
