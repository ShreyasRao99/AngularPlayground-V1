import { Category } from '../../types/questions-type';

// Every category gets a page of its own at `/:category`, plus a detail route at
// `/:category/:questionId`. Keeping the list here means the routes, the tab bar
// and the labels can never drift apart.
export const CATEGORIES: readonly Category[] = [
  'html',
  'css',
  'javascript',
  'angular',
  'performance',
  'rxjs',
  'signals',
  'misc',
  'behavioural',
];

// `satisfies` keeps the exhaustiveness check - adding a Category without a label
// is a compile error - while the lookup below can accept an untrusted string.
const CATEGORY_LABELS = {
  html: 'HTML',
  css: 'CSS',
  javascript: 'JavaScript',
  angular: 'Angular',
  performance: 'Performance',
  rxjs: 'RxJS',
  signals: 'Signals',
  misc: 'Misc',
  behavioural: 'Behavioural',
} satisfies Record<Category, string>;

// Takes a string rather than a Category because the category usually comes
// straight from the URL. Falls back to the raw segment so an unknown category
// reads back sensibly in the not-found state instead of rendering a blank label.
export function categoryLabel(category: string): string {
  return (CATEGORY_LABELS as Record<string, string>)[category] ?? category;
}

// No POC is behavioural - those are conversation, not something you can build.
export type PocCategory = Exclude<Category, 'behavioural'>;

export const POC_CATEGORIES: readonly PocCategory[] = CATEGORIES.filter(
  (category): category is PocCategory => category !== 'behavioural',
);
