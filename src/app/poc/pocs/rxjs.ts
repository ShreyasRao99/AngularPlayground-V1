import { Poc } from '../../../types/poc-type';

export const RXJS_POCS: Poc[] = [
  {
    id: 'rxjs-debounced-search',
    category: 'rxjs',
    title: 'Live search that does not jank the page',
    summary: 'The canonical RxJS pipeline: debounce, dedupe, cancel, recover.',
    durationMinutes: 45,
    prompt:
      'Type into a search box and query the PokéAPI as you type. The pipeline has to stop hammering the API, cancel requests that are no longer wanted, and survive a 404 without killing the stream.',
    endpoints: [
      { path: '/pokemon/{name}', note: '404 for unknown names - that is your error case' },
      { path: '/pokemon?limit=', note: 'The fallback list while a search is in flight' },
    ],
    steps: [
      {
        title: 'The raw version, so you can see the problem',
        task: 'Subscribe to the input and hit the API on every keystroke. Type "pikachu" and count seven requests for seven characters. This is the version you are fixing - keep it in a git commit so you can compare.',
        learn: 'The problem debouncing solves',
      },
      {
        title: 'Debounce and dedupe',
        task: 'Add debounceTime(300) so the request happens after the user stops typing, then distinctUntilChanged() so typing "aa" then "a" does not fire twice. Try a longer term like "charmander" and show it fires once, and then again when you delete back to it.',
        learn: 'Give a small example of debouncing a search input with RxJS',
      },
      {
        title: 'Cancel the requests you do not want',
        task: 'Add switchMap. Type quickly through four terms and watch the network panel: only the last request completes, the previous ones are unsubscribed. Then swap switchMap for mergeMap and show all four finish - that is the difference you would be asked about in an interview.',
        learn: 'switchMap vs mergeMap',
      },
      {
        title: 'Keep the stream alive through a 404',
        task: 'Wrap the inner request in catchError(() => of(null)) so a failed search returns "no results" instead of killing the stream forever. Prove it by typing a valid name, an invalid one, then a valid one again - the last one still works.',
        learn: 'Where catchError belongs',
      },
      {
        title: 'Model loading without a boolean soup',
        task: 'Replace the manual loading boolean with startWith and finalize so the flag cannot get stuck on true after an error, or expose a { status, results } object via map. Show the state machine for idle / searching / found / not-found / failed.',
        learn: 'map vs tap vs switchMap in terms of what they return',
      },
      {
        title: 'Do not leak the subscription',
        task: 'Finish with takeUntilDestroyed() in a component, or an async pipe in the template, and confirm no request is still in flight after navigating away. Then remove it deliberately and watch the console log after destroy.',
        learn: 'How do you prevent memory leaks when subscribing',
      },
    ],
    stretch: [
      'Show a minimum query length of 3, and do not request below it.',
      'Switch to concatMap for a queue and explain when ordering matters more than cancelling.',
      'Add a per-request timeout with timeout({ each: 3000 }) and treat a timeout as "no results".',
      'Cancel the in-flight request with AbortController when the user closes the search.',
    ],
    starter: `readonly term = new FormControl('', { nonNullable: true });

readonly results$ = this.term.valueChanges.pipe(
  debounceTime(300), // wait for a pause in typing
  distinctUntilChanged(), // "aa" -> "a" is not a new search
  filter((term) => term.trim().length >= 3),
  switchMap((term) => // cancel the previous search, keep the newest
    this.api.get<Pokemon>(\`\${BASE}/pokemon/\${term.trim().toLowerCase()}\`).pipe(
      map((pokemon) => ({ status: 'found' as const, pokemon })),
      startWith({ status: 'searching' as const, pokemon: null }),
      catchError(() => of({ status: 'not-found' as const, pokemon: null })),
    ),
  ),
  shareReplay({ bufferSize: 1, refCount: true }),
  takeUntilDestroyed(this.destroyRef),
);`,
    covers: ['rxjs-9', 'rxjs-5', 'rxjs-10', 'rxjs-7', 'rxjs-8', 'angular-6'],
  },
  {
    id: 'rxjs-subjects-store',
    category: 'rxjs',
    title: 'A filter store out of Subjects',
    summary: 'Promise vs Observable, cold vs hot, and the four Subject variants.',
    durationMinutes: 60,
    prompt:
      'Build the shared filter state for the dex - sidebar filters and a results table both read it - using RxJS primitives first. Know exactly which Subject variant you chose and why.',
    endpoints: [{ path: '/pokemon?limit=', note: 'Re-queried whenever the filter changes' }],
    steps: [
      {
        title: 'Feel the difference from a Promise',
        task: 'Write one async function that fetches the list and one Observable that does the same. Then subscribe to the Observable twice and count the requests: two. That is the crux - a Promise settles once, an Observable is a stream and every subscription re-runs the work.',
        learn: 'What is an Observable and how is it different from a Promise',
      },
      {
        title: 'Build the cold version, then fix it',
        task: 'Return the http call straight from a method and subscribe twice: two HTTP requests. Then pipe through shareReplay({ bufferSize: 1, refCount: true }) and confirm one request for both subscribers. Explain in one sentence what sharing changes and what it does not (late subscribers).',
        learn: 'Difference between cold and hot Observables',
      },
      {
        title: 'Compare the four Subjects',
        task: 'Hold the filter in each variant in turn and log what a late subscriber receives: Subject gets nothing, BehaviorSubject gets the current value immediately, ReplaySubject(2) gets the last two, AsyncSubject emits nothing until it completes and then only the last value. Use each where it makes sense: plain Subject for search events, BehaviorSubject for the filter, ReplaySubject for a cached request, AsyncSubject for "give me the finished index".',
        learn:
          'Explain Subjects, BehaviorSubject, ReplaySubject and AsyncSubject with a common use case',
      },
      {
        title: 'One writable source of truth',
        task: 'Expose the filter as a private BehaviorSubject and a public filter$ (readonly, so nobody calls next on it from a component). Add setType() as the only write path. This is the single-source-of-truth rule in RxJS form.',
        learn: 'Sharing state between components',
      },
      {
        title: 'Derive, do not store',
        task: 'Build the filtered list, the result count and the loading flag with map / combineLatest / switchMap instead of extra Subjects that someone has to keep in sync. Then justify your choice honestly: if the app is signal-based, say where you would stop and move to a signal store instead.',
        learn: 'When Observables are the right tool',
      },
    ],
    stretch: [
      'Add scan() so the filter can carry a history, and explain why a reducer would not be right here.',
      'Turn the store into a signalStore and note which parts got simpler.',
      'Use a ReplaySubject to survive a route change and re-subscribe on return.',
      'Compare BehaviorSubject with a signal holding the same value, including late-subscriber behaviour.',
    ],
    starter: `@Injectable({ providedIn: 'root' })
export class DexFilterService {
  // private writable, public readonly: one write path
  private readonly filterSubject = new BehaviorSubject<DexFilter>(initialFilter);
  readonly filter$ = this.filterSubject.asObservable();

  // derived, never stored twice
  readonly results$ = this.filter$.pipe(
    distinctUntilChanged(isSameFilter),
    tap(() => this.loadingSubject.next(true)),
    switchMap((filter) =>
      this.http.get<PokemonList>(\`\${BASE}/pokemon\`, { params: toParams(filter) }).pipe(
        finalize(() => this.loadingSubject.next(false)),
      ),
    ),
    shareReplay({ bufferSize: 1, refCount: true }),
    retry({ count: 2, delay: (_, attempt) => timer(attempt * 500) }),
  );

  setType(type: string): void {
    this.filterSubject.next({ ...this.filterSubject.value, type, offset: 0 });
  }
}`,
    covers: ['rxjs-3', 'rxjs-2', 'rxjs-1', 'rxjs-6'],
  },
  {
    id: 'rxjs-combine-forkjoin',
    category: 'rxjs',
    title: 'A dashboard assembled from three endpoints',
    summary: 'forkJoin vs combineLatest vs withLatestFrom vs merge, side by side.',
    durationMinutes: 45,
    prompt:
      'A dashboard shows three panels from three endpoints. The rules are: show the dashboard only when all three have arrived, and refresh it if any one of them changes. Pick the operator and defend the choice.',
    endpoints: [
      { path: '/pokemon?limit=20', note: 'Panel 1: the list' },
      { path: '/type/fire', note: 'Panel 2: type matchup' },
      { path: '/pokemon-species/bulbasaur', note: 'Panel 3: the featured species' },
    ],
    steps: [
      {
        title: 'Get all three, then show the dashboard',
        task: 'Pipe the three requests through forkJoin and confirm nothing renders until all three emit, and the dashboard re-emits whenever any source changes because the whole chain re-subscribes. Then swap one endpoint for a request that never completes and watch the dashboard never appear - that is the difference between forkJoin and combineLatest.',
        learn: 'When should you use combineLatest and forkJoin',
      },
      {
        title: 'Emit as soon as each panel lands',
        task: 'Use combineLatest instead and show the panels filling in one at a time, and that it emits immediately if a source already has a value. Explain the cost: a source that never emits blocks everything forever, so pair it with a timeout when the input can be empty.',
        learn: 'combineLatest and its blocking behaviour',
      },
      {
        title: 'Combine without triggering',
        task: 'For the "featured Pokémon" panel, you want the type data whenever the featured Pokémon changes, but you do not want the type request to re-fire when the type selection changes. Use withLatestFrom (and explain the mirror image, combineLatestWith) and prove which input triggers the request.',
        learn: 'withLatestFrom',
      },
      {
        title: 'Concatenate independent sources',
        task: 'Wire the "recently viewed" log, the live search results and a periodic refresh into one stream with merge, then split by a tag with mergeMap. Show that merge interleaves while concat keeps order, and pick merge for unrelated live sources.',
        learn: 'merge and mergeMap for independent sources',
      },
      {
        title: 'Refresh one panel only',
        task: 'Give each panel its own switchMap trigger (a refresh Subject) combined with the shared filter, so refreshing the type panel does not refetch the species panel. Explain why you did not put all three behind one subject.',
        learn: 'Choosing the scope of a refresh',
      },
    ],
    stretch: [
      'Add a timeout to every panel and render a per-panel error so one failure does not blank the dashboard.',
      'Show what forkJoin({ results: a$, ... }) does with keyed results.',
      'Use combineLatestWith to get the same behaviour with the trigger on the other side.',
      'Render each panel independently as it arrives and mark the dashboard "partial" until it is complete.',
    ],
    starter: `const list$ = this.http.get<PokemonList>(\`\${BASE}/pokemon\`, { params: { limit: 20 } });
const type$ = this.http.get<Type>(\`\${BASE}/type/fire\`);
const featured$ = this.http.get<Pokemon>(\`\${BASE}/pokemon/bulbasaur\`);

// all three must complete, then the dashboard renders
readonly dashboard$ = forkJoin({ list: list$, type: type$, featured: featured$ });

// emits as each arrives; never emits if a source never does
readonly live$ = combineLatest([list$, type$, featured$]);

// type$ re-read on every featured$ emission, but never triggers a request itself
readonly withType$ = featured$.pipe(
  switchMap((featured) => typeFor(featured.types).pipe(withLatestFrom(this.filter$))),
);`,
    covers: ['rxjs-4', 'angular-10', 'rxjs-5'],
  },
  {
    id: 'rxjs-flattening-operators',
    category: 'rxjs',
    title: 'switchMap, mergeMap, concatMap and exhaustMap side by side',
    summary: 'The same source, four operators, four behaviours you can time.',
    durationMinutes: 60,
    prompt:
      'Take one stream of user intent and run it through all four flattening operators. Log the emission order with timestamps so the difference is measured, not remembered.',
    endpoints: [
      { path: '/pokemon/{name}', note: 'Deliberately variable latency: try a rare name' },
      { path: '/pokemon/{name}/encounters', note: 'The slow endpoint for the ordering demos' },
    ],
    steps: [
      {
        title: 'map, tap and the flattening family',
        task: 'Contrast the three on one click stream: map returns a new value 1:1, tap runs for side effects and returns the same value, switchMap turns each value into an inner Observable and flattens it. Log the return of each with tap so you can see which one can produce zero or many values per input.',
        learn: 'Difference between map, tap, switchMap and exhaustMap in terms of what they return',
      },
      {
        title: 'switchMap - newest wins',
        task: 'Map every keystroke to a detail request and confirm only the last one is displayed; earlier responses are unsubscribed and discarded. Use it wherever stale data must never be shown. Then flip a flag that makes responses arrive out of order and show why unsubscribing is the only protection.',
        learn: 'switchMap',
      },
      {
        title: 'mergeMap - everything wins',
        task: 'Switch to mergeMap and show all five requests completing, results interleaving out of order. Use it for independent work (favourite five Pokémon at once). Then add concurrency and show the limit you actually want.',
        learn: 'mergeMap',
      },
      {
        title: 'concatMap - order wins',
        task: 'Switch to concatMap and show requests queued: the second does not start until the first completes. Use it for writes that must be applied in order (rename, move in a list). Note the failure mode: a slow request blocks the queue indefinitely.',
        learn: 'concatMap',
      },
      {
        title: 'exhaustMap - first wins',
        task: 'Put exhaustMap on a Save button stream. While the POST is in flight, further clicks are ignored entirely - no queue, no duplicate. Then swap in mergeMap and press Save four times to produce four POSTs, which is exactly the bug the exhaustMap version prevents.',
        learn: 'exhaustMap and preventing duplicate requests',
      },
      {
        title: 'Summarise with a table you wrote yourself',
        task: 'Write the four-operator table from memory: what happens to in-flight work, what order results arrive in, and the one use case for each. Then answer what you would use for an autocomplete box and defend it.',
        learn: 'Choosing a flattening operator',
      },
    ],
    stretch: [
      'Show a mergeMap with concurrency: 2 and explain the buffer of pending requests.',
      'Combine exhaustMap for the button and switchMap for the search on the same page.',
      'Add cancellation of a queued concatMap item when the user navigates away.',
      'Compare all four on the same click stream with timestamps printed.',
    ],
    starter: `readonly clicks$ = fromEvent(button, 'click');

clicks$.pipe(switchMap((pokemon) => detail$(pokemon))).subscribe(show); // newest wins
clicks$.pipe(mergeMap((pokemon) => detail$(pokemon))).subscribe(show); // all win
clicks$.pipe(concatMap((pokemon) => detail$(pokemon))).subscribe(show); // queue in order
clicks$.pipe(exhaustMap((pokemon) => detail$(pokemon))).subscribe(show); // ignore while busy

// duplicate-request guard for a submit button
readonly save$ = new Subject<Form>();
readonly saving = signal(false);

save$.pipe(exhaustMap((value) => this.save$(value).pipe(finalize(() => this.saving.set(false))))).subscribe();
// with mergeMap, four fast clicks produce four POSTs.`,
    covers: ['rxjs-5', 'rxjs-8', 'angular-9'],
  },
  {
    id: 'rxjs-share-replay',
    category: 'rxjs',
    title: 'Stop asking for the same Pokémon six times',
    summary: 'share vs shareReplay vs refCount, proven with a request counter.',
    durationMinutes: 30,
    prompt:
      'Six places in the app need the same Pokémon detail. Build the cache with Observables and measure the request count for every variation.',
    endpoints: [{ path: '/pokemon/{name}', note: 'The request being shared and cached' }],
    steps: [
      {
        title: 'Count the damage',
        task: 'Subscribe to the same cold HTTP observable from three components and open the page. Count the requests: three. This is the default and it is the bug.',
        learn: 'What sharing is for',
      },
      {
        title: 'share',
        task: 'Add share() so concurrent subscribers share one execution and the result is multicast. Confirm three concurrent subscribers cause one request, then unsubscribe one and confirm the others keep working. Explain that share() replays nothing: a subscriber that arrives after completion gets nothing unless the source is already hot.',
        learn: 'What is the purpose of share()',
      },
      {
        title: 'shareReplay',
        task: 'Switch to shareReplay({ bufferSize: 1 }) and show a late subscriber instantly receiving the cached value with no new request. Then try bufferSize: 0 and confirm the late subscriber gets nothing, and bufferSize: Infinity and note the memory cost of holding every value.',
        learn: 'What is the purpose of shareReplay()',
      },
      {
        title: 'refCount, and the choice nobody makes on purpose',
        task: 'With refCount: true, when the last subscriber leaves, the connection to the source is torn down and the next subscriber re-runs everything - including the HTTP call. With refCount: false, the subscription stays alive forever and the cache survives navigation. Try both, count the requests, and pick one per app and say why.',
        learn: 'What is refCount()',
      },
      {
        title: 'Bound the cache',
        task: 'Add an eviction policy so a long session cannot keep 1000 entries: LRU, TTL, or clear the cache when the route changes. Measure the memory you were retaining with performance.memory (Chromium only) before and after.',
        learn: 'Cache eviction and memory',
      },
    ],
    stretch: [
      'Add a reset() to the cache and call it on logout.',
      'Compare shareReplay with caching in a plain Map inside the service.',
      'Show the resetOnRefCountZero option and when it saves you.',
      'Share a stream of search results across three panels and count the requests.',
    ],
    starter: `private readonly cache$ = new Map<string, Observable<Pokemon>>();

getPokemon(name: string): Observable<Pokemon> {
  const key = name.toLowerCase();
  const cached = this.cache$.get(key);
  if (cached) return cached;

  const shared$ = this.http.get<Pokemon>(\`\${BASE}/pokemon/\${key}\`).pipe(
    catchError((error) => {
      this.cache$.delete(key); // never cache a failure
      return throwError(() => error);
    }),
    shareReplay({
      bufferSize: 1, // keep only the latest value for late subscribers
      refCount: false, // keep it cached even with zero subscribers
    }),
  );

  this.cache$.set(key, shared$);
  return shared$.pipe(finalize(() => {})); // TODO: what happens when everyone leaves?
}`,
    covers: ['rxjs-6', 'performance-14', 'performance-12', 'rxjs-2'],
  },
  {
    id: 'rxjs-error-handling',
    category: 'rxjs',
    title: 'Make a flaky endpoint survivable',
    summary: 'catchError placement, retry with backoff, and per-request isolation.',
    durationMinutes: 60,
    prompt:
      'The PokéAPI rate-limits and occasionally 500s. Your dashboard has four panels. One panel failing must not take down the other three, and a retry storm must not make it worse.',
    endpoints: [
      { path: '/pokemon/{name}', note: '404 - a permanent failure that must not retry' },
      { path: '/pokemon?limit=200', note: 'Intermittent failure - a good retry candidate' },
    ],
    steps: [
      {
        title: 'See the default behaviour',
        task: 'Let an HTTP error propagate with no handler and log it. Explain that the error terminates the whole stream: a later successful response will never arrive, so a component bound to that observable is stuck forever. That is the single most important thing about RxJS errors.',
        learn: 'What happens when an Observable errors',
      },
      {
        title: 'catchError in two positions',
        task: 'Place catchError inside the inner stream (per request) and outside the whole pipeline (per subscription). Show the difference: inside, the stream survives and emits EMPTY for that one failure; outside, only the current subscription dies and a resubscribe starts clean. Use inside for a list item, outside for a long-lived stream you want to restart.',
        learn: 'When would you use catchError',
      },
      {
        title: 'Retry only what is worth retrying',
        task: 'Add retry({ count: 2 }) and confirm two immediate retries. Then retry({ count: 3, delay: (_, attempt) => timer(attempt * 500) }) for exponential backoff. Crucially, skip retry on 404 - retrying a permanent failure is pure waste - and show how to write that condition.',
        learn: 'retry and retry with a delay',
      },
      {
        title: 'Isolate the panels',
        task: 'Build four panels where each has its own error state, using forkJoin plus a per-source catchError returning a fallback value. Then show the naive version where one catchError on the merged stream loses the three healthy panels too.',
        learn: 'Error isolation across a composed dashboard',
      },
      {
        title: 'Finish the lifecycle operators',
        task: 'Add timeout({ each: 5000 }) so a hanging request becomes an error, and takeUntil(destroy$) so navigating away is not an unhandled error. Explain why a never-completing request is a leak even though no error was thrown.',
        learn: 'timeout, takeUntil and completion',
      },
    ],
    stretch: [
      'Build a retry policy that gives up on 4xx but retries 5xx and network errors.',
      'Add jitter to the backoff so 100 users do not retry in lockstep.',
      'Show the difference between retryWhen and the delay form of retry.',
      'Turn an error into a UI state with a discriminated union and render it.',
    ],
    starter: `const list$ = this.http.get<PokemonList>(\`\${BASE}/pokemon\`, { params: { limit: 200 } }).pipe(
  timeout({ each: 5000 }),
  retry({
    count: 3,
    delay: (error, attempt) => {
      if (error.status < 500) throw error; // never retry a permanent failure
      return timer(attempt * 500); // backoff between attempts
    },
  }),
  catchError((error) => {
    console.error('list failed', error.status);
    return of({ count: 0, results: [] }); // keep the dashboard alive
  }),
  takeUntil(this.destroy$),
);

// per-source isolation: one failing panel does not lose the healthy ones
const panel$ = (source: Observable<unknown>, fallback: unknown) =>
  source.pipe(catchError(() => of(fallback)));`,
    covers: ['rxjs-10', 'rxjs-7', 'angular-19', 'rxjs-4'],
  },
  {
    id: 'rxjs-leak-hunt',
    category: 'rxjs',
    title: 'Find the memory leak, then fix it properly',
    summary: 'A subscription that is never torn down, and every correct way to prevent it.',
    durationMinutes: 75,
    prompt:
      'Memory grows steadily as users move around the dex. Find what is holding on to the subscriptions, fix it, and show the number going back down.',
    endpoints: [
      { path: '/pokemon?limit=', note: 'Requests that keep firing after you leave a page' },
      { path: '/pokemon/{name}', note: 'One per card, so the count is easy to watch' },
    ],
    steps: [
      {
        title: 'Make the leak obvious',
        task: 'Subscribe in ngOnInit to a stream that emits every 200ms, navigate to another route and back five times, and log the active subscription count and performance.memory.usedJSHeapSize. Show the count growing by one per visit and the interval never being cleared.',
        learn: 'There is a memory leak in production - how do you track it down',
      },
      {
        title: 'The three fixes',
        task: 'Fix it three separate ways and say what each costs: (1) store the Subscription and unsubscribe in ngOnDestroy, (2) takeUntilDestroyed() with an injected DestroyRef, (3) drop the manual subscription entirely and use the async pipe, which unsubscribes when the view is destroyed. Pick the one you would write by default in this app.',
        learn: 'How do you prevent memory leaks when subscribing to Observables',
      },
      {
        title: 'Close the others too',
        task: 'Audit everything else that opens a long-lived connection: fromEvent on window, a setInterval, a websocket, mergeMap with a concurrency limit that queues forever, a concatMap blocked behind a hung request. Unsubscribe, or clear the interval - not just the http ones.',
        learn: 'What else leaks besides HTTP',
      },
      {
        title: 'Deal with the leak inside RxJS itself',
        task: 'Show takeUntil(destroy$), take(1) for a one-shot, first() when you only need the first value, and the auditTime/throttleTime pattern that reduces the number of in-flight values in the first place. Note that unsubscribe stops delivery but does not cancel the underlying work - pair it with takeUntil for the source too.',
        learn: 'Operator-level leak prevention',
      },
      {
        title: 'Prove it is fixed',
        task: 'Re-run the same navigation loop and show the subscription count flat and the heap plateauing. Write down the number of subscriptions per component before and after - that count is a metric worth keeping.',
        learn: 'Memory grows steadily as users navigate between routes',
      },
    ],
    stretch: [
      'Use Count from @angular/core/rxjs-interop to assert the live subscription count in a test.',
      'Write a test that navigates five times and asserts no pending HTTP requests.',
      'Show that switching to signals and resource() removes most of these subscriptions.',
      'Add a fromEvent(window, "resize") pipeline and clean it up properly.',
    ],
    starter: `export class DexList implements OnInit, OnDestroy {
  private readonly destroyRef = inject(DestroyRef);
  private readonly http = inject(HttpClient);

  private readonly tick$ = interval(200).pipe(map((n) => n));

  ngOnInit(): void {
    // leak: never torn down
    this.tick$.subscribe((n) => console.log('tick', n));
  }

  ngOnDestroy(): void {
    // nothing here - the interval keeps running
  }

  // fix 1: the signal-idiomatic way
  readonly count$ = toSignal(this.tick$, { initialValue: 0 });

  // fix 2: explicit, for streams outside the template
  readonly type$ = new Subject<string>();
  readonly type$Clean = this.type$.pipe(takeUntilDestroyed(this.destroyRef));

  // fix 3: let the template do it
  // readonly pokemon$ = this.http.get<Pokemon>(...);  <div>{{ pokemon$ | async }}</div>`,
    covers: ['rxjs-7', 'angular-11', 'performance-12', 'angular-17'],
  },
];
