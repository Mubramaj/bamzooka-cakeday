import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { BamzookaCakedayWorkspaceView } from './app/workspace-view.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BamzookaCakedayWorkspaceView)
  .catch(err => console.error(err));
