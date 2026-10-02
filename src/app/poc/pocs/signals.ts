import { Poc } from '../../../types/poc-type';

export const SIGNALS_POCS: Poc[] = [
  {
    id: 'signals-basic',
    category: 'signals',
    title: 'Signal vs Observable: one Pokémon detail',
    summary: 'The most important difference, shown by the numbers.',
    durationMinutes: 30,
    prompt:
      'Fetch one Pokémon with both approaches and prove to yourself that signals do not push a stream of values in the same way, and why that removes the diamond problem.',
    endpoints: [{ path: '/pokemon/{name}', note: 'The same endpoint used for both approaches' }],
    steps: [
      {
        title: 'Define both',
        task: 'Write a signal for the Pokémon name, a signal for the loaded Pokémon, and the same with an Observable. Explain the difference: a signal holds the current value, an Observable is a sequence of values over time.',
        learn: 'What is a Signal and how is it different from an RxJS Observable',
      },
      {
        title: 'Watch updates',
        task: 'Change the name three times in a row and count the number of renders and the number of HTTP requests for both. With signals you derive what you need; with observables the operator choice (switchMap, shareReplay) is the only thing that stops a request storm.',
        learn: 'The update model',
      },
      {
        title: 'The diamond problem',
        task: 'Build a case where two consumers need the same derived value. Show how the diamond problem appears with Observables (the recomputation / duplicate subscription) and why it does not occur with signals: signals are pulled, not pushed, so a computed is only re-executed when its dependencies change and the result is cached.',
        learn: 'What is the diamond problem, and why does it not occur with signals',
      },
    ],
    stretch: [
      'Compare toSignal for turning an Observable into a signal, and toObservable the other way around.',
      'Show a computed that depends on two signals and does one recomputation per change.',
      'Count the execution of an expensive computed and explain memoisation.',
    ],
    starter: `// signals version
readonly name = signal('pikachu');
readonly pokemon = computed(() => this.service.getPokemon(this.name())); // BUG: getPokemon returns an Observable, not a value

// observable version
readonly pokemon$ = this.name$.pipe(switchMap((name) => this.api.getPokemon(name)));

// now fix the computed three ways - resource(), toSignal(), and an async computed - then compare them`,
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
        task: 'Define the state as the filter, the results array, total and a loading flag. Write the initial state and show a single patchState call that updates two fields at once. That is the unit of work.',
        learn: 'signalStore state and patchState',
      },
      {
        title: 'Derived state',
        task: 'Expose the visible count and any page numbers as computed signals. There is no need for shareReplay - the value is already there. Prove that changing only the offset does not recompute the expensive sort function if you memoise the right pieces.',
        learn: 'withComputed',
      },
      {
        title: 'Methods, not events',
        task: 'Write methods setType, setPage and resetFilters instead of Subjects. The caller does not need to know about streams, only the action. The API is synchronous in its surface and readable.',
        learn: 'withMethods',
      },
      {
        title: 'Side effects with hooks',
        task: 'Use withHooks to load the first page on init, and to persist the filter to localStorage on every change. Note the effect is inside the store, not the component.',
        learn: 'withHooks and effect',
      },
    ],
    stretch: [
      'Compare with the RxJS BehaviorSubject store for the same operations.',
      'Add an entity adapter so the list can be updated by id without re-creating the array.',
      'Turn the HTTP call into a resource() so you do not need a loading flag by hand.',
    ],
    starter: `import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { computed, effect, inject } from '@angular/core';

interface DexState {
  type: string;
  limit: number;
  offset: number;
  results: PokemonList | null;
}

export const DexStore = signalStore(
  { providedIn: 'root' },
  withState<DexState>({ type: 'all', limit: 20, offset: 0, results: null }),
  withComputed((state) => ({
    loading: computed(() => state.results() === null),
    total: computed(() => state.results()?.count ?? 0),
  })),
  withMethods((state) => ({
    setType(type: string) {
      patchState(state, { type, offset: 0 });
    },
    setPage(offset: number) {
      patchState(state, { offset });
    },
  })),
  withHooks((store) => ({
    onInit() {
      // load initial results via effect or resource
      effect(() => {
        // fetch with the current filter
      });
    },
  })),
);`,
    covers: ['signals-1', 'signals-3', 'signals-2'],
  },
  {
    id: 'signals-effects',
    category: 'signals',
    title: 'Effects: when to use them, and when to walk away',
    summary: 'The trap with set() inside an effect, and untracked as the escape hatch.',
    durationMinutes: 45,
    prompt:
      'Build an effect that saves the filter to localStorage, logs a message on filter change, and tracks only what you meant to track. Then reproduce the anti-pattern and fix it.',
    endpoints: [
      { path: '/pokemon?limit=', note: 'The request whose trigger must not be circular' },
    ],
    steps: [
      {
        title: 'Track by reading signals',
        task: 'Write an effect that reads the filter signal and writes to localStorage. Then add a console.log and see when it runs. Effects run synchronously during the reactive context and track every signal that was read while executing.',
        learn: 'What are effects and when do you use them',
      },
      {
        title: 'The circular update',
        task: 'Deliberately call set() on the filter inside the effect that reacts to filter changes. Log the count of executions and show how it spins. This is the classic case for "calling set() inside an effect() is an anti-pattern".',
        learn: 'Why calling set() inside an effect() is an anti-pattern',
      },
      {
        title: 'Escape with untracked',
        task: 'You still need to write to a signal from inside an effect in one rare case: synchronise with a third-party library that fires an event. Use untracked() around the write so you do not create a dependency on what you are setting. Explain the boundary and why you cannot avoid it here.',
        learn: 'When do you need untracked() inside an effect',
      },
      {
        title: 'Do not replace computed',
        task: 'Move a calculation from an effect into a computed and show the test gets simpler. Effects are for side effects (console.log, localStorage, to the DOM outside Angular, sync with external libraries), not for producing values.',
        learn: 'Effects are side effects, not derivations',
      },
    ],
    stretch: [
      'Use allowSignalWrites in a legacy context (if you must), and say why you do not need it with the current API.',
      'Show an effect that reacts to a signal but also needs the current route - use untracked for the non-reactive part.',
      'Destroy an effect with a DestroyRef so it does not outlive a component.',
    ],
    starter: `readonly filter = signal({ type: 'all', offset: 0 });

// save on every filter change
constructor() {
  effect(() => {
    const f = this.filter();
    localStorage.setItem('dex-filter', JSON.stringify(f));
  });

  // anti-pattern
  effect(() => {
    const type = this.type();
    if (type === 'unknown') {
      // this.type.set('all'); // infinite loop: reading + writing the same signal
    }
  });

  // correct: write, but do not track the write
  effect(() => {
    const external = this.thirdParty.value();
    untracked(() => this.filter.set({ ...this.filter(), offset: external.page * 20 }));
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
      'You have an Angular 12 app with heavy RxJS usage. Plan the migration to signals, including what stays, what goes, and how to avoid breaking anything in production.',
    endpoints: [{ path: '/pokemon?limit=', note: 'Used as an example data surface to migrate' }],
    steps: [
      {
        title: 'Map the surface first',
        task: 'Audit inputs/outputs, @ViewChild, forms, guards, interceptors, and all subscriptions. Split components into leafs (easy), containers (hard), and pages. Pick one leaf component with no subscriptions as your first win.',
        learn: 'How would you plan a migration from Angular 12 to Signals',
      },
      {
        title: 'Start at the leaves: inputs',
        task: 'Convert @Input() to input() and input.required(), then switch computed and simple template reads. Do not touch HTTP yet. Measure bundle size and unit tests after each small commit.',
        learn: 'Migrating component APIs',
      },
      {
        title: 'Convert local state to signals',
        task: 'Move flags like loading/expanded from BehaviorSubjects to signals, then replace the template with @if/@for instead of *ngIf/*ngFor (if you are on a version that supports them). Keep the change detection strategy OnPush.',
        learn: 'Local state migration',
      },
      {
        title: 'Async data: choose the bridge',
        task: 'For HTTP, try toSignal first when the source is already hot or comes from a service, or resource() when you need reload/refresh semantics. Keep RxJS for complex streams (debounce + switchMap + retry) until you can justify rewriting them; sometimes RxJS stays.',
        learn:
          'When would you use signals instead of observables, and can signals replace RxJS completely',
      },
      {
        title: 'Forms, lifecycle and the end state',
        task: 'Keep reactive forms as they are (they do not need to become signals for correctness), but move form-derived UI flags to computed. For ngOnInit/ngOnChanges: ngOnInit may disappear for signal initialisation, but ngOnChanges is often replaced by an effect or by computed. Write down when you still need them: Are NgOnInit and ngOnChanges still needed in a fully signal-based application?',
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
    starter: `// phase 1: leaf inputs
// before: @Input() count!: number
// after:  readonly count = input.required<number>();

// phase 2: async data bridge
readonly results = toSignal(this.dex.results$, { initialValue: [] });

// phase 3: resource for reloadable data
readonly pokemonResource = resource({
  request: () => ({ name: this.name() }),
  loader: ({ request }) => fetchPokemon(request.name),
});

// phase 4: keep RxJS where it wins
readonly term$ = this.search.valueChanges.pipe(debounceTime(300), distinctUntilChanged());
readonly results$ = this.term$.pipe(switchMap((t) => searchPokemon(t))); // stays RxJS for now`,
    covers: ['signals-6', 'signals-7', 'signals-2'],
  },
  {
    id: 'signals-resource',
    category: 'signals',
    title: 'Load Pokémon detail with the resource API',
    summary: 'Status, error and reload without re-inventing a loading flag.',
    durationMinutes: 30,
    prompt:
      'Replace your hand-rolled loading/error state with the new resource API for one detail page, and compare the code you delete.',
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
        task: 'Side by side, list the lines: manual had loading, error, data, subscription cleanup, shareReplay cache, catchError, startWith. The resource version collapses most of that into the built-in state machine.',
        learn: 'When to reach for resource()',
      },
    ],
    stretch: [
      'Add a default value so the UI does not flash empty while loading.',
      'Use an AbortSignal inside the loader so a new request cancels the old one.',
      'Show how to transform the loaded value with a computed.',
    ],
    starter: `readonly name = signal('pikachu');
readonly detail = resource({
  request: () => ({ name: this.name() }),
  loader: ({ request, abortSignal }) =>
    fetch(\`https://pokeapi.co/api/v2/pokemon/\${request.name}\`, { signal: abortSignal }).then((r) => {
      if (!r.ok) throw new Error(\`\${r.status}\`);
      return r.json();
    }),
});

// template
@if (detail.isLoading()) { <div>Loading...</div> }
@else if (detail.error()) { <button (click)="detail.reload()">Retry</button> }
@else if (detail.hasValue()) { <pre>{{ detail.value() | json }}</pre> }`,
    covers: ['signals-3', 'signals-2'],
  },
];
