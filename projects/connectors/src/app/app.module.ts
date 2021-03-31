import {
    Inject,
    Injector,
    LOCALE_ID,
    NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UserBadgeComponent} from './user-badge.component';
import {createCustomElement} from '@angular/elements';
import {ChecklistDetailsTitleComponent} from './checklist-details-title.component';
import {UserProfileFormComponent} from "./user-profile-form/user-profile-form.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {TranslateModule, TranslateService} from "@ngx-translate/core";

const CONNECTORS = [
    UserBadgeComponent,
    ChecklistDetailsTitleComponent,
    UserProfileFormComponent
]

@NgModule({
    declarations: [
        ...CONNECTORS
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule.forRoot()
    ],
    entryComponents: [
        ...CONNECTORS
    ]
})
export class BamzookaCakedayConnectors {
    constructor(
        injector: Injector,
        translate: TranslateService,
        @Inject(LOCALE_ID) private local: string) {
        const elements: any[] = [
            [UserBadgeComponent, 'bamzooka-cakeday-connector-user-badge'],
            [ChecklistDetailsTitleComponent, 'bamzooka-cakeday-connector-checklist-details-title'],
            [UserProfileFormComponent, 'bamzooka-cakeday-connector-user-profile-form']
        ];
        for (const [component, name] of elements) {
            const el = createCustomElement(component, {injector: injector});
            customElements.define(name, el);
        }
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        translate.setTranslation('fr', {
            January: 'Janvier'
        })
    }

    ngDoBootstrap() {
    }
}
