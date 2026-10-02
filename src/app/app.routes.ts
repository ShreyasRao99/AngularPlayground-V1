import { Routes } from '@angular/router';
import { CATEGORIES } from './shared/categories';

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
  { path: 'poc', loadComponent: () => import('./poc/poc').then((c) => c.Poc) },
  {
    path: 'behavioural',
    loadComponent: () => import('./behavioural/behavioural').then((c) => c.Behavioural),
  },
  // One question per screen instead of a header that has to be clicked open:
  // `/:category` stays an index of links and `/:category/:questionId` is the
  // answer, which is shareable and gets the platform back gesture for free.
  // Declared last, after every literal route, so `/html` still resolves to the
  // index rather than being read as a category segment.
  {
    path: 'poc/:pocId',
    loadComponent: () => import('./shared/poc-detail/poc-detail').then((c) => c.PocDetail),
  },
  {
    path: ':category/:questionId',
    loadComponent: () =>
      import('./shared/question-detail/question-detail').then((c) => c.QuestionDetail),
  },
  // Last resort for anything unmatched - a typo, or a link to a category that
  // does not exist. Without this the router throws NG04002 and the app renders
  // nothing at all. Redirecting to `''` would stop at `/` without chaining on to
  // the first category, so it goes there directly.
  { path: '**', redirectTo: CATEGORIES[0] },
];
