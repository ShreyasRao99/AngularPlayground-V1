import { Poc } from '../../../types/poc-type';

export const SIGNALS_POCS: Poc[] = [
  {
    id: 'signals-basic',
    category: 'signals',
    title: 'Signal vs Observable: one Pokémon detail',
    summary: 'The most important difference, shown by the numbers.',
    durationMinutes: 30,
    prompt:
      'Fetch one Pokémon with both approaches. Compare what each abstraction represents: a signal exposes a current value, while an Observable represents values over time. Then investigate duplicate derived work with two consumers; do not assume signals automatically prevent duplicate HTTP requests.',
    endpoints: [{ path: '/pokemon/{name}', note: 'The same endpoint used for both approaches' }],
    steps: [
      {
        title: 'Define both',
        task: 'Write a signal for the Pokémon name, a signal for the loaded Pokémon, and the same with an Observable. Explain the difference: a signal holds the current value, an Observable is a sequence of values over time.',
        learn: 'What is a Signal and how is it different from an RxJS Observable',
      },
      {
        title: 'Watch updates',
        task: 'Change the name three times quickly. For the signal version, bridge the name to the request with resource() or toObservable() + switchMap; for the Observable version, use switchMap. Count requests and UI updates. Signals alone do not cancel or deduplicate HTTP requests.',
        learn: 'The update model',
      },
      {
        title: 'The diamond problem',
        task: 'Build a case where two consumers use the same derived value. First create two independent Observable pipelines and observe repeated work/subscriptions; then share the source or derived stream with shareReplay. Repeat with one shared computed signal read by both consumers. Explain that computed signals are lazy and memoized, but separate computed instances and separate HTTP calls are not automatically shared. This is a useful comparison, not proof that Observables inherently have a diamond problem.',
        learn: 'How memoized computed values compare with shared Observable pipelines',
      },
    ],
    stretch: [
      "Compare toSignal() for exposing an Observable's latest value as a signal, and toObservable() for exposing signal changes as an Observable.",
      'Show a computed that depends on two signals and does one recomputation per change.',
      'Count the execution of an expensive computed and explain memoisation.',
    ],
    starter: `// signals: current input value
readonly name = signal('pikachu');

// Option 1: resource() owns the request lifecycle
readonly pokemonResource = resource({
  request: () => ({ name: this.name() }),
  loader: ({ request, abortSignal }) =>
    fetch(\`https://pokeapi.co/api/v2/pokemon/\${request.name}\`, { signal: abortSignal })
      .then((response) => {
        if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
        return response.json() as Promise<Pokemon>;
      }),
});

// Option 2: keep the HTTP Observable and expose its latest value
readonly pokemon = toSignal(
  toObservable(this.name).pipe(
    distinctUntilChanged(),
    switchMap((name) => this.api.getPokemon(name)),
  ),
  { initialValue: null },
);

// Observable-only version
readonly name$ = new BehaviorSubject('pikachu');
readonly pokemon$ = this.name$.pipe(
  distinctUntilChanged(),
  switchMap((name) => this.api.getPokemon(name)),
);

// There is no general-purpose async computed() API.
// Compare resource(), toSignal(), and the RxJS pipeline instead.`,
    covers: ['signals-1', 'signals-4'],
  },
  {
    id: 'signals-dex-store',
    category: 'signals',
    title: 'A signalStore for the filtered dex',
    summary: 'Build the same store twice, see which one reads cleaner.',
    durationMinutes: 60,
    prompt:
      'Re-implement the dex filter store with NgRx signalStore and contrast it with the RxJS service you wrote before.',
    endpoints: [
      { path: '/pokemon?limit=', note: 'Queried whenever the filter changes' },
      { path: '/type/{type}', note: 'Filter chips' },
    ],
    steps: [
      {
        title: 'The shape',
        task: 'Define state for the filter, results, and request status (or loading/error fields). Write the initial state and show one patchState() call that updates two related fields atomically.',
        learn: 'signalStore state and patchState',
      },
      {
        title: 'Derived state',
        task: 'Expose visible count and page numbers as computed signals. Do not claim this replaces shareReplay: computed memoizes derived synchronous values, while shareReplay shares an Observable execution. Separate the expensive sort into a computed that depends only on the inputs it needs, then verify which changes cause it to recalculate.',
        learn: 'withComputed',
      },
      {
        title: 'Methods, not events',
        task: 'Write methods setType, setPage and resetFilters instead of Subjects. The caller does not need to know about streams, only the action. The API is synchronous in its surface and readable.',
        learn: 'withMethods',
      },
      {
        title: 'Side effects with hooks',
        task: 'Use withHooks to set up store initialization and an effect for persistence where appropriate. For HTTP loading, use a clear RxJS-based method (for example rxMethod with switchMap) or a resource integration; do not leave an empty effect as the request implementation. Guard browser-only localStorage access if the app uses SSR.',
        learn: 'withHooks and effect',
      },
    ],
    stretch: [
      'Compare with the RxJS BehaviorSubject store for the same operations.',
      'Add an entity adapter so the list can be updated by id without re-creating the array.',
      'Turn the HTTP call into a resource() so you do not need a loading flag by hand.',
    ],
    starter: `import { computed, inject } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { EMPTY, catchError, pipe, switchMap, tap } from 'rxjs';

interface DexState {
  type: string;
  limit: number;
  offset: number;
  results: PokemonList | null;
  loading: boolean;
  error: string | null;
}

export const DexStore = signalStore(
  { providedIn: 'root' },
  withState<DexState>({
    type: 'all', limit: 20, offset: 0,
    results: null, loading: false, error: null,
  }),
  withComputed((state) => ({
    total: computed(() => state.results()?.count ?? 0),
    pokemon: computed(() => state.results()?.results ?? []),
  })),
  withMethods((state, api = inject(PokemonApi)) => {
    const load = rxMethod<{ type: string; limit: number; offset: number }>(
      pipe(
        tap(() => patchState(state, { loading: true, error: null })),
        switchMap((filter) =>
          api.getPokemonList(filter).pipe(
            tap((results) => patchState(state, { results, loading: false })),
            catchError((error: unknown) => {
              patchState(state, {
                loading: false,
                error: error instanceof Error ? error.message : 'Request failed',
              });
              return EMPTY;
            }),
          ),
        ),
      ),
    );

    return {
      load,
      setType(type: string) {
        patchState(state, { type, offset: 0 });
        load({ type, limit: state.limit(), offset: 0 });
      },
      setPage(offset: number) {
        patchState(state, { offset });
        load({ type: state.type(), limit: state.limit(), offset });
      },
    };
  }),
);`,
    covers: ['signals-1', 'signals-3', 'signals-2'],
  },
  {
    id: 'signals-effects',
    category: 'signals',
    title: 'Effects: when to use them, and when to walk away',
    summary: 'The risk of circular side effects, and how untracked() controls dependency tracking.',
    durationMinutes: 45,
    prompt:
      'Build an effect that saves the filter to localStorage, logs a message on filter change, and tracks only what you meant to track. Then reproduce the anti-pattern and fix it.',
    endpoints: [
      { path: '/pokemon?limit=', note: 'The request whose trigger must not be circular' },
    ],
    steps: [
      {
        title: 'Track by reading signals',
        task: "Write an effect that reads the filter signal and writes to localStorage. Then add a console.log and see when it runs. Effects run asynchronously as part of Angular's change-detection process, and track signals read during the effect's synchronous execution. Reads performed inside untracked() are not tracked.",
        learn: 'What are effects and when do you use them',
      },
      {
        title: 'The circular update',
        task: 'Create an effect that reads a signal and writes to that same signal under a condition. Observe whether it re-runs and explain why this is usually a design smell. Do not assume every set() causes an infinite loop: writing the same value may not notify dependents, and a condition may stop further updates. Prefer computed() for derived state.',
        learn: 'Why calling set() inside an effect() is an anti-pattern',
      },
      {
        title: 'Escape with untracked',
        task: 'When synchronizing with an external library, use untracked() around signal reads that should not become dependencies. untracked() is about preventing dependency tracking for reads; it is not a special permission needed to write to a signal. Explain why the external event must be synchronized imperatively.',
        learn: 'When do you need untracked() inside an effect',
      },
      {
        title: 'Do not replace computed',
        task: 'Move a calculation from an effect into a computed and show the test gets simpler. Effects are for side effects (console.log, localStorage, to the DOM outside Angular, sync with external libraries), not for producing values.',
        learn: 'Effects are side effects, not derivations',
      },
    ],
    stretch: [
      "Check the Angular version's effect write rules. In current Angular versions, allowSignalWrites is deprecated/unnecessary; do not add it to new code.",
      'Show an effect that reacts to a filter signal but reads the current route only as incidental context; use untracked() for route reads that should not trigger the effect.',
      'Destroy an effect with a DestroyRef so it does not outlive a component.',
    ],
    starter: `readonly filter = signal({ type: 'all', offset: 0 });

constructor() {
  effect(() => {
    const currentFilter = this.filter();
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('dex-filter', JSON.stringify(currentFilter));
    }
  });

  // Avoid this pattern: effects should not be used to derive state.
  effect(() => {
    const type = this.filter().type;
    if (type === 'unknown') {
      // Prefer normalizing the value in the event/method that changes it,
      // or derive a display value with computed().
    }
  });

  // Example: only the external value should trigger this effect.
  effect(() => {
    const externalPage = this.thirdParty.currentPage();
    untracked(() => {
      const current = this.filter();
      this.filter.set({ ...current, offset: externalPage * 20 });
    });
  });
}`,
    covers: ['signals-3', 'signals-5', 'signals-8'],
  },
  {
    id: 'signals-migration',
    category: 'signals',
    title: 'Plan to move an Angular 12 RxJS app to Signals',
    summary: 'A real migration plan, not a big bang.',
    durationMinutes: 120,
    prompt:
      'You have an Angular 12 app with heavy RxJS usage. Plan a staged upgrade to a modern Angular version that supports Signals, then migrate suitable state gradually. Keep RxJS where it remains the better fit and avoid a risky big-bang rewrite.',
    endpoints: [{ path: '/pokemon?limit=', note: 'Used as an example data surface to migrate' }],
    steps: [
      {
        title: 'Map the surface first',
        task: 'Audit inputs/outputs, @ViewChild, forms, guards, interceptors, and all subscriptions. Split components into leafs (easy), containers (hard), and pages. Pick one leaf component with no subscriptions as your first win.',
        learn: 'How would you plan a migration from Angular 12 to Signals',
      },
      {
        title: 'Start at the leaves: inputs',
        task: "After upgrading to an Angular version that supports signal inputs (input() is available in modern Angular; it is not available in Angular 12), convert a small leaf component's @Input() properties to input() / input.required(). Keep the change isolated and run its tests.",
        learn: 'Migrating component APIs',
      },
      {
        title: 'Convert local state to signals',
        task: 'Move flags like loading/expanded from BehaviorSubjects to signals, then replace the template with @if/@for instead of *ngIf/*ngFor (if you are on a version that supports them). Keep the change detection strategy OnPush.',
        learn: 'Local state migration',
      },
      {
        title: 'Async data: choose the bridge',
        task: 'For HTTP, use toSignal() when a component needs the latest value from an existing Observable. Use resource() for request-driven async data with loading/error/reload state. Keep RxJS for composed streams such as debounce + switchMap + retry; signals do not replace RxJS.',
        learn:
          'When would you use signals instead of observables, and can signals replace RxJS completely',
      },
      {
        title: 'Forms, lifecycle and the end state',
        task: 'Keep reactive forms as they are (they do not need to become signals for correctness), but derive display-only form flags with computed where practical. Signal inputs do not remove lifecycle hooks: use ngOnInit for genuine initialization, ngOnChanges when you need its imperative change semantics, and computed for pure derivation. Explain when each is still useful in a signal-based app.',
        learn: 'NgOnInit/ngOnChanges in a fully signal-based app',
      },
      {
        title: 'De-risk the migration',
        task: 'Feature flag per route, run both implementations behind it, add regression tests for the store, and never do a big-bang merge. Explain why RxJS will not disappear overnight: guards, interceptors, websockets, and complex event composition are still excellent in RxJS.',
        learn: 'Pragmatic migration strategy',
      },
    ],
    stretch: [
      'Migrate one page end-to-end behind a flag and compare the number of subscriptions.',
      'Convert a service from a BehaviorSubject store to a signalStore and keep the public API stable.',
      'Show the bridge: toSignal(observable$, { initialValue: ... }) in a component that still depends on an RxJS service.',
      'List three cases where you would choose RxJS over signals, and three the other way around.',
    ],
    starter: `// Phase 0: upgrade Angular 12 first.
// Signals and signal inputs are not available in Angular 12.

// Phase 1: signal input in a modern Angular version
readonly count = input.required<number>();

// Phase 2: bridge an existing RxJS service into the template
readonly results = toSignal(this.dex.results$, { initialValue: [] });

// Phase 3: request-driven resource
readonly pokemonResource = resource({
  request: () => ({ name: this.name() }),
  loader: ({ request, abortSignal }) =>
    fetchPokemon(request.name, abortSignal),
});

// Phase 4: keep RxJS for stream composition
readonly term$ = this.search.valueChanges.pipe(
  debounceTime(300),
  distinctUntilChanged(),
);
readonly results$ = this.term$.pipe(
  switchMap((term) => searchPokemon(term)),
);`,
    covers: ['signals-6', 'signals-7', 'signals-2'],
  },
  {
    id: 'signals-resource',
    category: 'signals',
    title: 'Load Pokémon detail with the resource API',
    summary: 'Status, error and reload without re-inventing a loading flag.',
    durationMinutes: 30,
    prompt:
      "Replace the hand-written request/loading/error state for one Pokémon detail page with Angular's resource API, then compare the responsibilities that resource takes over and the ones it does not (such as cross-instance caching).",
    endpoints: [{ path: '/pokemon/{name}', note: 'The resource request' }],
    steps: [
      {
        title: 'The minimal resource',
        task: 'Define a resource that takes name() as its request and calls the API. Render its status (idle, loading, error, resolved), the value, and the error. Count how many flags you did not have to write.',
        learn: 'resource() basics',
      },
      {
        title: 'Reload and retry',
        task: 'Call resource.reload() when the user clicks "Retry", and show that the request key changes when name() changes. Note that a resource tracks its request and will refetch automatically when it changes.',
        learn: 'Reloading a resource',
      },
      {
        title: 'Compare to the manual version',
        task: 'Compare the manual and resource versions. A resource provides request status, value, error, reload, and cancellation of an outdated request. It does not automatically provide a shared cache across resource instances, and it does not make every RxJS operator unnecessary.',
        learn: 'When to reach for resource()',
      },
    ],
    stretch: [
      'Add a default value so the UI does not flash empty while loading.',
      'Compare with rxResource when the data source is already an Observable.',
      'Show how to transform the loaded value with a computed.',
    ],
    starter: `readonly name = signal('pikachu');

readonly detail = resource({
  request: () => ({ name: this.name() }),
  loader: ({ request, abortSignal }) =>
    fetch(\`https://pokeapi.co/api/v2/pokemon/\${request.name}\`, {
      signal: abortSignal,
    }).then((response) => {
      if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
      return response.json() as Promise<Pokemon>;
    }),
});

// template
@if (detail.isLoading()) {
  <p>Loading...</p>
} @else if (detail.error()) {
  <p>{{ detail.error() }}</p>
  <button (click)="detail.reload()">Retry</button>
} @else if (detail.hasValue()) {
  <pre>{{ detail.value() | json }}</pre>
}`,
    covers: ['signals-3', 'signals-2'],
  },
];
