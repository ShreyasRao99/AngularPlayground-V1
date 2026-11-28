import { Category } from '../../types/questions-type';

// Every category gets a page of its own at `/:category`, plus a detail route at
// `/:category/:questionId`. Keeping the list here means the routes, the tab bar
// and the labels can never drift apart.
export const CATEGORIES: readonly Category[] = [
  'html',
  'system-design',
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
  'system-design': 'System Design',
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

// No POC is behavioural or system-design - those are conversations and design
// prompts, not something you can build in this app.
export type PocCategory = Exclude<Category, 'behavioural' | 'system-design'>;

export const POC_CATEGORIES: readonly PocCategory[] = CATEGORIES.filter(
  (category): category is PocCategory =>
    category !== 'behavioural' && category !== 'system-design',
);
