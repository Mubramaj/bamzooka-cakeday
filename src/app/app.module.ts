import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserBadgeComponent } from './user-badge.component';
import { createCustomElement } from '@angular/elements';


@NgModule({
  declarations: [
    UserBadgeComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [UserBadgeComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const element = createCustomElement(UserBadgeComponent, {injector});
    customElements.define('bamzooka-cakeday-connector-userbadge', element);
  }
  ngDoBootstrap() {}
}
