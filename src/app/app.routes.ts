import { Routes } from '@angular/router';
import { Html } from './html/html';

export const routes: Routes = [
  {
    path: '',
    component: Html,
  },
  { path: 'html', loadComponent: () => import('./html/html').then((c) => c.Html) },
  { path: 'css', loadComponent: () => import('./css/css').then((c) => c.Css) },
  { path: 'angular', loadComponent: () => import('./angular/angular').then((c) => c.Angular) },
  { path: 'misc', loadComponent: () => import('./misc/misc').then((c) => c.Misc) },
];
