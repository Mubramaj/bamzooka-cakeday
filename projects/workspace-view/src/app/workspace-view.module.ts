import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { BirthdayBaseComponent } from './birthday-base.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule],
  entryComponents: [BirthdayBaseComponent],
  declarations: [BirthdayBaseComponent]
})
export class BamzookaCakedayWorkspaceView {
  constructor(injector: Injector) {
    const el = createCustomElement(BirthdayBaseComponent, { injector: injector });
    customElements.define('bamzooka-cakeday-view-workspace', el);
  }

  ngDoBootstrap() {
  }
}
