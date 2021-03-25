import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { BirthdayBaseComponent } from './birthday-base.component';

@NgModule({
  imports: [BrowserModule],
  entryComponents: [BirthdayBaseComponent],
  declarations: [BirthdayBaseComponent]
})
export class BamzookaCakedayWorkspaceView {
  constructor(injector: Injector) {
    const el = createCustomElement(BirthdayBaseComponent, {injector: injector})
      customElements.define('bamzooka-cakeday-view-workspace', el);
  }
  ngDoBootstrap() {}
}
