import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'remote-widget',
    loadComponent: () => import('./remote.widget'),
  },
];
