import { Poc } from '../../../types/poc-type';

export const PERFORMANCE_POCS: Poc[] = [
  {
    id: 'perf-large-dex-table',
    category: 'performance',
    title: 'A 500+ row Pokédex table that stays smooth',
    summary: 'Change detection, track keys and paging, applied to one real table.',
    prompt:
      'Render a sortable, filterable table of every Pokémon the PokéAPI knows about. Measure it before and after, and be able to name the cost of every change you made.',
    endpoints: [
      { path: '/pokemon?limit=1000&offset=0', note: 'The full list to render' },
      { path: '/pokemon/{id}', note: 'Per-row detail, if you join it in' },
    ],
    steps: [
      {
        title: 'Measure before you touch anything',
        task: 'Record the time from request start to painted rows with performance.mark/measure around the fetch and the render, and count DOM nodes. Write the number down. Any optimisation you cannot measure is a guess.',
        learn: 'How do you profile an Angular app and find out what is actually slow',
      },
      {
        title: 'Find out how often change detection runs',
        task: 'Enable the Angular DevTools profiler and watch a single keystroke in the filter box. Count the ticks and how many of them re-render the whole table. Explain why the default strategy checks every component in the tree on every event.',
        learn: 'How does change detection affect Angular performance',
      },
      {
        title: 'OnPush plus a stable track key',
        task: 'Switch the table to OnPush and make the row data immutable (a new array reference on every change), then give the @for a track expression of the pokemon id rather than $index. Show that re-sorting no longer recreates every row. Note the trap: tracking by $index with mutable data means rows are reused with the wrong identity.',
        learn: 'The ways to reduce the cost of change detection',
      },
      {
        title: 'Keep the template cheap',
        task: 'Remove the arrow functions from the template ({{ totalWeight() }}) that Angular cannot memoise, replace a method call in the template with a computed, and confirm the pure pipe cache is doing its job by logging inside the pipe. Then do the opposite with impure: true and watch the counter explode.',
        learn: 'Pure vs impure work in a template',
      },
      {
        title: 'Render less instead of rendering faster',
        task: 'Paginate or window the rows, and defer the off-screen chart or detail panel. Measure again and report the new numbers next to the old ones. Explain why pagination usually beats micro-optimising the row template.',
        learn: 'Usual causes of a slow app, and how to prioritise which to fix',
      },
      {
        title: 'Prove the fix in the numbers',
        task: 'Re-measure with the same tooling and the same data. Write the summary a stakeholder would read: before, after, what you changed, what you decided not to change.',
        learn: 'Prioritising performance work',
      },
    ],
    stretch: [
      'Add a virtual scroll viewport so only the visible rows exist in the DOM.',
      'Use @defer (on viewport) for a row detail panel and on interaction for the export button.',
      'Throttle the sort handler so dragging a column does not thrash the store.',
      'Compare zoneless change detection against zone.js for the same interaction.',
    ],
    starter: `<table mat-table [dataSource]="rows()" class="mat-elevation-z1">
  <ng-container matColumnDef="id">
    <th mat-header-cell *matHeaderCellDef>#idHeader (click)="sort('id')">#</th>
    <td mat-cell *matCellDef="let row">{{ row.id }}</td>
  </ng-container>

  <tr mat-header-row *matHeaderRowDef="columns"></tr>
  <tr mat-row *matRowDef="let row; columns: columns; trackBy: trackById"></tr>
</table>

// cheaper: precompute outside the template, and keep the row identity stable
readonly sorted = computed(() => {
  const direction = this.sortDirection();
  return [...this.rows()].sort((a, b) =>
    direction === 'asc' ? a.id - b.id : b.id - a.id,
  );
});

// do NOT do this in a template: a new function identity every CD cycle
// {{ totalWeight(rows()) }}`,
    covers: [
      'performance-23',
      'performance-9',
      'performance-21',
      'performance-8',
      'performance-22',
      'angular-20',
    ],
  },
  {
    id: 'perf-sprite-loading',
    category: 'performance',
    title: 'Load the sprites without jank or layout shift',
    summary: 'Image sizing, lazy loading and measuring LCP and CLS for real.',
    prompt:
      'A dex page shows 151 sprites. Make it load fast, never jump, and measure whether you actually improved anything.',
    endpoints: [{ path: '/pokemon?limit=151', note: 'Every sprite URL in one payload' }],
    steps: [
      {
        title: 'Reserve the space before the image exists',
        task: 'Give every img an explicit width and height that matches the sprite, wrap them in a fixed-aspect container, and watch the layout with DevTools CLS regions enabled. Then remove the dimensions and watch the page jump. That jump is exactly what CLS penalises.',
        learn: 'How do fonts and images affect performance, and how do you load them well',
      },
      {
        title: 'Lazy load everything but the first screen',
        task: 'Add loading="lazy" and decoding="async" to the sprites, plus fetchpriority="high" on the first one only. Then hand-roll an IntersectionObserver that sets the src when the card is about to enter the viewport, and set a transparent placeholder first so the layout is already correct.',
        learn: 'Lazy loading images',
      },
      {
        title: 'Measure LCP and CLS, do not guess',
        task: 'Use a PerformanceObserver for largest-contentful-paint and layout-shift (with buffered: true), sum the CLS session windows, and print both. Repeat with the sprite lazy-loaded and see the number change. Explain why the largest element is usually the hero image, not the text.',
        learn: 'Core Web Vitals and how to measure and diagnose each one',
      },
      {
        title: 'Trust your own measurement',
        task: 'Add a performance.mark before the fetch and a measure after the row is painted, then confirm the mark/measure pair appears in the performance timeline alongside the vitals. Explain why a number without marks is a number you cannot act on.',
        learn: 'What a Performance API measurement looks like in practice, and how to trust it',
      },
      {
        title: 'Fix the font too',
        task: 'If the app uses a webfont, add font-display: swap, preload the one file that matters above the fold, and subset it. Measure the layout shift the swap causes, then reserve the space with a matching fallback metric.',
        learn: 'Font loading and the shift it causes',
      },
    ],
    stretch: [
      'Inline the first sprite as a data: URI so LCP needs no network round trip.',
      'Use aspect-ratio instead of padding-bottom for the placeholder box.',
      'Add a performance budget check in CI that fails when the LCP mark exceeds a number.',
    ],
    starter: `<img
  [src]="pokemon.sprites.front_default"
  [attr.width]="96"
  [attr.height]="96"
  alt="{{ pokemon.name }}, front sprite"
  loading="lazy"
  decoding="async"
/>

// manual lazy load, so the placeholder is already the right size
const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const img = entry.target as HTMLImageElement;
      img.src = img.dataset.src!;
      observer.unobserve(img);
    }
  },
  { rootMargin: '200px' },
);

new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'largest-contentful-paint') {
      console.log('LCP candidate', (entry as any).startTime, (entry as any).element?.tagName);
    }
    if (!(entry as any).hadRecentInput) {
      cls += (entry as any).value;
      console.log('layout shift', cls);
    }
  }
}).observe({ type: 'layout-shift', buffered: true });`,
    covers: ['performance-16', 'performance-6', 'performance-20', 'performance-13'],
  },
  {
    id: 'perf-cache-prefetch',
    category: 'performance',
    title: 'Cache PokéAPI responses and prefetch on intent',
    summary: 'Stop asking for the same Pokémon twice, and warm the cache before the click.',
    prompt:
      'Users open cards, go back, open them again. Make the second open instant, and make the first one feel instant too, without breaking correctness.',
    endpoints: [
      { path: '/pokemon/{name}', note: 'The response you cache' },
      { path: '/pokemon/{name}/encounters', note: 'A slow endpoint that shows cache TTL' },
    ],
    steps: [
      {
        title: 'Count the requests first',
        task: 'Open three cards, go back, open the first one again. Count the network requests for that URL. Now add a cache layer and repeat until it drops to one, and log the cache hit/miss ratio so the improvement is visible.',
        learn: 'Usual causes of a slow app, and how to prioritise',
      },
      {
        title: 'Share the request, not just the result',
        task: 'Put the detail request behind a shared observable so three components asking for the same Pokémon produce one HTTP call - including while the first is still in flight. Explain why caching only completed responses is not enough.',
        learn: 'What is the purpose of share() and shareReplay()',
      },
      {
        title: 'Prefetch on intent',
        task: 'Trigger the same fetch on pointerenter / focus for a card, with a short delay so a fast mouse sweep across the grid does not fetch everything. Measure with the network throttled: the card opens with no spinner because the response is already cached.',
        learn: 'How prefetching works and when it is worth it',
      },
      {
        title: 'Decide what "fresh" means',
        task: 'Add a TTL (PokéAPI data basically never changes, but a real API would) and a way to force a refetch for the detail view. Then show a stale-while-revalidate pattern: serve the cached value immediately, refresh in the background, and only notify the UI if the value actually changed.',
        learn: 'Prefetching vs preloading, and cache freshness',
      },
      {
        title: 'Never cache the wrong thing',
        task: 'Cache keyed by name AND by every parameter that changes the response. Show the bug of caching by name only when the query changes, and confirm the fix with two different requests for the same key.',
        learn: 'Correct cache keys',
      },
    ],
    stretch: [
      'Add an LRU eviction so the cache cannot grow without bound.',
      'Prefetch the next page when the user reaches the bottom of the list.',
      'Share one request between three sibling components and count the HTTP calls.',
      'Compare the win against the cost: what happens to memory with 151 cached detail objects.',
    ],
    starter: `private readonly cache = new Map<string, Observable<Pokemon>>();

getPokemon(name: string): Observable<Pokemon> {
  const key = name.toLowerCase();

  if (!this.cache.has(key)) {
    const request$ = this.http.get<Pokemon>(\`\${BASE}/pokemon/\${key}\`).pipe(
      // dropped on error so a failed request is not cached forever
      catchError((error) => {
        this.cache.delete(key);
        return throwError(() => error);
      }),
      shareReplay({ bufferSize: 1, refCount: false }),
    );

    this.cache.set(key, request$);
  }

  return this.cache.get(key)!;
}

// prefetch on intent, with a delay so a mouse sweep does not fetch the grid
card.addEventListener('pointerenter', () => prefetch$.next(card.dataset.pokemon!));
const prefetch$ = new Subject<string>().pipe(
  debounceTime(120),
  switchMap((name) => this.getPokemon(name).pipe(catchError(() => EMPTY))),
  takeUntilDestroyed(destroyRef),
);
prefetch$.subscribe();`,
    covers: ['performance-14', 'performance-11', 'rxjs-6', 'performance-12'],
  },
  {
    id: 'perf-profile-first',
    category: 'performance',
    title: 'Prove where the time goes before you optimise',
    summary: 'Marks, measures, long tasks and the three different things you can be measuring.',
    prompt:
      'A page is slow and nobody agrees why. Build the instrumentation that settles the argument: where the time is actually spent, and whether it is initial load, a reload or a route transition.',
    endpoints: [
      { path: '/pokemon?limit=20', note: 'The request you will time' },
      { path: '/pokemon?limit=200', note: 'The same request with a bigger payload' },
    ],
    steps: [
      {
        title: 'Name what you are measuring',
        task: 'Decide, in writing, whether you mean the initial load (empty cache, cold navigation), a reload (warm cache, full boot) or a route transition (app already running). Measure all three separately - they have different numbers and different fixes, and mixing them is how a "10 second load" gets misdiagnosed.',
        learn: 'Initial load vs reload vs route transition',
      },
      {
        title: 'Bracket the work with marks',
        task: 'Wrap the fetch in performance.mark/measure, another around the render, and print the measures with performance.getEntriesByType("measure"). Then take a DevTools performance recording of the same interaction and find your own marks in the flame chart. If you cannot find your code in the recording, the view is too narrow.',
        learn: 'How do you profile an Angular app',
      },
      {
        title: 'Catch the long tasks',
        task: 'Use a PerformanceObserver for longtask and print the duration and attribution of each one over a slow interaction. Explain what a 200ms+ task feels like to a user mid-typing: the input lags behind the keystroke even though the browser has not crashed.',
        learn: 'What is a long task and how blocking the main thread shows up',
      },
      {
        title: 'Break the task up',
        task: 'Find the longest task, then split it: chunk the parsing of the 200-item payload, yield between chunks, and confirm the long task disappears and input stays responsive. Note that this improves responsiveness, not total time - say both out loud.',
        learn: 'What is a long task',
      },
      {
        title: 'Send the numbers somewhere',
        task: 'Report the marks to your monitoring endpoint per page load with a build id, so you can compare a release against the previous one. Explain why a single user measurement is noise and you want a percentile.',
        learn: 'What a Performance API measurement looks like in practice, and how to trust it',
      },
    ],
    stretch: [
      'Use PerformanceObserver for event timing and find the slow input handler.',
      'Compare user timing marks across two builds with the same data.',
      'Add a budget check to CI using the same measure names.',
      'Use the Angular DevTools profiler to attribute change detection time per component.',
    ],
    starter: `performance.mark('dex:fetch-start');
http.get<PokemonList>(\`\${BASE}/pokemon\`, { params: { limit: 200 } }).subscribe({
  next: (list) => {
    performance.mark('dex:fetch-end');
    performance.measure('dex:fetch', 'dex:fetch-start', 'dex:fetch-end');

    performance.mark('dex:render-start');
    this.rows.set(rowsFrom(list));
    afterNextRender(() => {
      performance.mark('dex:render-end');
      performance.measure('dex:render', 'dex:render-start', 'dex:render-end');
      report(performance.getEntriesByType('measure'));
    });
  },
});

new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.warn('long task', entry.duration, entry.attribution);
  }
}).observe({ type: 'longtask', buffered: true });`,
    covers: [
      'performance-8',
      'performance-13',
      'performance-7',
      'performance-20',
      'performance-11',
    ],
  },
];
