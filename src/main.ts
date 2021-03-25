import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { BamzookaCakedayConnectors } from './app/app.module';
import { BamzookaCakedayWorkspaceView } from './app/workspace-view/workspace-view.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(BamzookaCakedayConnectors)
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(BamzookaCakedayWorkspaceView)
  .catch(err => console.log(err));
