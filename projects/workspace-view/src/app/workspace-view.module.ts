import {Component, Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { BirthdayBaseComponent } from './birthday-base.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BirthdaysListComponent } from './birthdays-list/birthdays-list.component';
import { TodayComponent } from './today/today.component';
import {Router, RouterModule} from "@angular/router";
import {LocationStrategy} from "@angular/common";
import {NoopLocationStrategy, RoutedEntryComponent} from "@bamzooka/bamzooka-plugin-sdk";

@Component({
  selector: 'entry-component',
  template: '<router-outlet></router-outlet>'
})
class EntryComponent extends RoutedEntryComponent {}
@NgModule({
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot([
    {
      path: 'bamzooka-cakeday',
      component: BirthdayBaseComponent,
      children: [
        {
          path: '',
          component: BirthdaysListComponent,
        },
        {
          path: 'list',
          component: BirthdaysListComponent
        },
        {
          path: 'today',
          component: TodayComponent
        }
      ]
    }
  ])],
  declarations: [BirthdayBaseComponent, BirthdaysListComponent, TodayComponent, EntryComponent],
  providers: [
    {provide: LocationStrategy, useClass: NoopLocationStrategy}
  ]
})
export class BamzookaCakedayWorkspaceView {
  constructor(injector: Injector, private router: Router) {
    // @ts-ignore
    const baseHrf = window['plugin-base-href'];
    const config = this.router.config;
    config[0].path = `${baseHrf}/${config[0].path}`;
    this.router.resetConfig(config);
    const el = createCustomElement(EntryComponent, { injector: injector });
    customElements.define('bamzooka-cakeday-view-workspace', el);
  }

  ngDoBootstrap() {
  }
}
