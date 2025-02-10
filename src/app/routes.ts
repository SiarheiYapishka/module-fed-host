import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'nkv',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5100/remoteEntry.js',
        exposedModule: './Routes'
      }).then((m) => m.routes),
  },
  {
    path: 'alerts',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:5000/remoteEntry.js',
        exposedModule: './OverviewModule',
      }).then((m) => m.OverviewModule),
  },
  {
    path: 'nkv',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://neo-local-dev:4300/remoteEntry.js',
        exposedModule: './OverviewModule',
      }).then((m) => m.OverviewModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
