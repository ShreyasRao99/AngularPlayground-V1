import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'html',
    pathMatch: 'full',
  },
  { path: 'html', loadComponent: () => import('./html/html').then((c) => c.Html) },
  { path: 'css', loadComponent: () => import('./css/css').then((c) => c.Css) },
  { path: 'angular', loadComponent: () => import('./angular/angular').then((c) => c.Angular) },
  {
    path: 'javascript',
    loadComponent: () => import('./javascript/javascript').then((c) => c.Javascript),
  },
  {
    path: 'performance',
    loadComponent: () => import('./performance/performance').then((c) => c.Performance),
  },
  { path: 'rxjs', loadComponent: () => import('./rxjs/rxjs').then((c) => c.RxJS) },
  { path: 'signals', loadComponent: () => import('./signals/signals').then((c) => c.Signals) },
  { path: 'misc', loadComponent: () => import('./misc/misc').then((c) => c.Misc) },
  {
    path: 'behavioural',
    loadComponent: () => import('./behavioural/behavioural').then((c) => c.Behavioural),
  },
];
