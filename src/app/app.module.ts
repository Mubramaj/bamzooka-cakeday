import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserBadgeComponent } from './user-badge.component';
import { createCustomElement } from '@angular/elements';
import { ChecklistDetailsTitleComponent } from './checklist-details-title.component';

const CONNECTORS = [
  UserBadgeComponent,
  ChecklistDetailsTitleComponent
]
@NgModule({
  declarations: [
    ...CONNECTORS
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [
    ...CONNECTORS
  ]
})
export class BamzookaCakedayConnectors {
  constructor(injector: Injector) {
    const elements: any[] = [
      [UserBadgeComponent, 'bamzooka-cakeday-connector-user-badge'],
      [ChecklistDetailsTitleComponent, 'bamzooka-cakeday-connector-checklist-details-title'],
    ];
    // const elements: any[] = CONNECTORS.map(c => {
    //   return [c, ``]
    // });

    for (const [component, name] of elements) {
      const el = createCustomElement(component, { injector: injector });
      customElements.define(name, el);
    }
  }
  ngDoBootstrap() {}
}
