import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

interface User {
  anniversary_date: Date;
}

@Component({
  selector: 'connector-user-profile-form',
  templateUrl: './user-profile-form.component.html'
})
export class UserProfileFormComponent implements OnInit {
  @Input() data!: User;
  form: FormGroup | null = null;
  days = Array.from(Array(31).keys()).map((x) => (x + 1).toString());
  isUpdatingUser = false;
  backupMonth?: number;
  backupDay?: number;

  constructor(private fb: FormBuilder, private http: HttpClient,
              private translate: TranslateService) {
  }

  ngOnInit(): void {
    this.createForm();
    // this.translate.use(this.locale);
  }

  onUpdateBirthday(): void {
    const formValue = this.form?.value;
    const month = +formValue.month + 1;
    const day = formValue.day;
    const birthDate = new Date(`1904-${month}-${day}`);
    this.isUpdatingUser = true;
    this.http.patch(this.getMeUrl(), { anniversary_date: birthDate }).subscribe(() => {
      this.isUpdatingUser = false;
      this.doBackup();
      this.form?.markAsPristine();
    }, () => {
      this.isUpdatingUser = false;
      this.form?.reset();
    });
  }

  onResetForm(): void {
    this.form?.get('month')?.patchValue(this.backupMonth);
    this.form?.get('day')?.patchValue(this.backupDay);
  }

  private createForm(): void {
    const date = new Date(this.data.anniversary_date);
    this.form = this.fb.group({
      month: [this.data.anniversary_date ? new Date(this.data.anniversary_date).getMonth() : null],
      day: [this.data.anniversary_date ? new Date(this.data.anniversary_date).getDate() : null]
    });
    this.doBackup();
  }

  private doBackup(): void {
    this.backupDay = this.form?.value.day;
    this.backupMonth = this.form?.value.month;
  }

  private getMeUrl(): string {
    return `/api/v1/me`;
  }


}
