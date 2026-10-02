import { Poc } from '../../../types/poc-type';

export const ANGULAR_POCS: Poc[] = [
  {
    id: 'angular-content-projection',
    category: 'angular',
    title: 'Card shell with named projection slots',
    summary: 'One card layout, four call sites, no duplicated markup.',
    durationMinutes: 60,
    prompt:
      'Four places in the dex need a card: the grid, the search results, the "my favourites" list and the detail header. Build the shell once with content projection and let each caller decide what goes in.',
    endpoints: [
      { path: '/pokemon?limit=20', note: 'Fills the grid call site' },
      { path: '/pokemon/{name}', note: 'Fills the detail call site' },
    ],
    steps: [
      {
        title: 'The naive version',
        task: 'Copy your existing card markup into the four call sites, then add one field (a "favourite" toggle) to all four and count the edits. That duplication is the argument for projection.',
        learn: 'Why projection exists',
      },
      {
        title: 'One slot, then a named slot',
        task: 'Build <app-pokemon-card> with a single <ng-content> and pass the sprite, name and types in. Then convert it to named slots: <ng-content select="[card-media]">, <ng-content select="[card-body]"> and <ng-content select="[card-actions]">. Note that any markup that matches no selector is dropped, which is the single most common projection bug.',
        learn: 'What is content projection (ng-content)',
      },
      {
        title: 'Project the same card four ways',
        task: 'Use the shell in the grid with the sprite projected, in the search results with a highlighted name, in favourites with a delete action in the footer slot, and in the detail header with no media at all. One component, four templates, zero conditionals inside the shell.',
        learn: 'Content projection',
      },
      {
        title: 'Control where content lands',
        task: 'Add an <ng-template> slot for the loading state and give it a fallback content between the tag and the closing slash, so the shell renders a skeleton instead of nothing when the caller has not projected one. Then set ngProjectAs when the same element should fill a different slot.',
        learn: 'ng-template slots, fallback content and ngProjectAs',
      },
      {
        title: 'Be honest about the trade-off',
        task: 'List what projection costs: the caller can no longer reorder or restyle the internal structure, and querying the projected nodes needs contentChild rather than viewChild. Decide whether the detail header has outgrown a shell with slots and should just be its own component.',
        learn: 'When projection is the wrong abstraction',
      },
    ],
    stretch: [
      'Project an <input> into a form-aware slot and wrap it with a label you do not own.',
      'Move to the new content projection block syntax and compare it with ng-content.',
      'Query projected content with contentChild() and read its value.',
      'Make the shell a standalone component and import it four times.',
    ],
    starter: `@Component({
  selector: 'app-pokemon-card',
  imports: [MatCard],
  template: \`
    <mat-card>
      <ng-content select="[card-media]" />

      <mat-card-content>
        <ng-content select="[card-body]" />

        <ng-content select="[card-loading]">
          <p>Loading…</p> <!-- fallback: rendered when nothing is projected here -->
        </ng-content>
      </mat-card-content>

      <mat-card-actions>
        <ng-content select="[card-actions]" />
      </mat-card-actions>
    </mat-card>
  \`,
})
export class PokemonCard {}

// caller
<app-pokemon-card>
  <img card-media [src]="pokemon.sprites.front_default" [alt]="pokemon.name" />
  <h3 card-body>{{ pokemon.name }}</h3>
  <button card-actions (click)="remove(pokemon)">Remove</button>
</app-pokemon-card>`,
    covers: ['angular-21', 'angular-2', 'angular-1'],
  },
  {
    id: 'angular-signal-paginator',
    category: 'angular',
    title: 'Reusable pagination component',
    summary: 'Pull your pagination out of the list so any list can use it.',
    durationMinutes: 90,
    prompt:
      'Paginate the PokéAPI list, then pull the pagination out into an <app-paginator> that any list can use. No page index logic is allowed to live inside the list.',
    endpoints: [
      {
        path: '/pokemon?limit=&offset=',
        note: 'limit and offset come straight from the component',
      },
      { path: '/pokemon/{name}', note: 'Optional detail fetch when the page changes' },
    ],
    steps: [
      {
        title: 'Reusable pagination component',
        task: 'Pull your pagination out into a <app-paginator> that any list can use. Use input.required<number>() for totalItems, model<number>() for page and pageSize, so the parent can write [(page)]="page". Use computed for totalPages and the page-number buttons (1 2 3 ... 10), so the button list is never state you have to keep in sync by hand.',
        learn: 'Components, data binding, and the signal input/output APIs',
      },
      {
        title: 'linkedSignal for the reset',
        task: 'Make page reset automatically when pageSize changes, instead of calling page.set(1) by hand:\n\npage = linkedSignal({\n  source: this.pageSize,\n  computation: () => 1\n});\n\nThe declaration order matters: the parent sets [(pageSize)] from a select, and the paginator owns resetting the page. Explain what would go wrong if you did it in ngOnChanges.',
        learn: 'linkedSignal, and derived state that resets with its source',
      },
      {
        title: 'Keep the data fetch honest',
        task: 'The parent watches page() and pageSize() and turns them into limit and offset. Read them through toSignal or a computed effect, not through ngOnInit, so a page change always triggers a refetch. Log the offset for three page changes to prove the maths (offset = (page - 1) * pageSize).',
        learn: 'constructor vs ngOnInit, and async pipe / toSignal for async data',
      },
    ],
    stretch: [
      'Jump-to-page input that clamps to totalPages.',
      'Ellipsis logic so 200 pages still render as 1 ... 24 25 26 ... 200.',
      'Disable or hide the edges instead of rendering dead buttons.',
      'Keyboard support: Home, End, PageUp, PageDown.',
    ],
    starter: `@Component({
  selector: 'app-paginator',
  imports: [Button, Icon],
  template: \`
    <button [disabled]="page() === 1" (click)="page.set(page() - 1)">Previous</button>

    @for (p of pageNumbers(); track p) {
      <button [attr.aria-current]="p === page() ? 'page' : null" (click)="page.set(p)">{{ p }}</button>
    } @empty {
      <span>No results</span>
    }

    <button [disabled]="page() === totalPages()" (click)="page.set(page() + 1)">Next</button>
  \`,
})
export class Paginator {
  readonly totalItems = input.required<number>();
  readonly page = model(1);
  readonly pageSize = model(20);

  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.totalItems() / this.pageSize())));
  readonly pageNumbers = computed(() =>
    Array.from({ length: this.totalPages() }, (_, index) => index + 1),
  );

  // resets to page 1 whenever pageSize changes, with no ngOnChanges
  readonly currentPage = linkedSignal({
    source: this.pageSize,
    computation: () => 1,
  });
}

// parent
// <app-paginator [totalItems]="total()" [(page)]="page" [(pageSize)]="pageSize" />
// offset = (page() - 1) * pageSize()`,
    covers: ['angular-5', 'angular-16', 'angular-17', 'angular-1', 'signals-1', 'signals-8'],
  },
  {
    id: 'angular-star-rating',
    category: 'angular',
    title: 'Star rating component that works inside a form',
    summary: 'model() for two-way binding, transformed inputs, then a real ControlValueAccessor.',
    durationMinutes: 75,
    prompt:
      'Build a 5-star rating with a hover preview, then make it work inside a reactive form. The hover state must never leak into the saved value.',
    endpoints: [
      { path: '/pokemon/{name}', note: 'Persist the rating per Pokémon' },
      { path: '/pokemon?limit=', note: 'Show the average rating in a summary row' },
    ],
    steps: [
      {
        title: 'Star rating component',
        task: 'A 5-star rating with hover preview, usable in a form. Use model<number>() for the value, so [(rating)]="rating" works. Use input() with transform: numberAttribute for max, and booleanAttribute for readonly, so <app-star-rating max="10" [readonly]="true"> binds correctly without manual parsing in the template.',
        learn: '@Input and @Output, and how the signal APIs change them',
      },
      {
        title: 'Local hover state plus one computed',
        task: 'Keep a local signal for the hovered star, and a computed for what to display (hover preview while hovering, actual value otherwise). The computed is what the template reads, so the rule "hover never becomes the value" lives in one readable line instead of scattered ngIfs.',
        learn: 'Data binding and derived state',
      },
      {
        title: 'Make it form-compatible',
        task: 'Wrap it in a form with FormControl and control.valueChanges. Then add NG_VALUE_ACCESSOR to the star component: writeValue, registerOnChange, registerOnTouched, setDisabledState. Push the value from registerOnChange, never by writing to the control directly, and confirm the form is valid while the rating is 0.',
        learn: 'Reusable form input that works with ngModel and reactive forms',
      },
    ],
    stretch: [
      'Half stars by splitting each star into two hit areas and storing 0.5 steps.',
      'Keyboard support: arrow keys change the value, Home resets, Space sets it.',
      'aria-valuenow / role="slider" so a screen reader announces the rating.',
      'Disable the component from the parent form and see setDisabledState fire.',
    ],
    starter: `@Component({
  selector: 'app-star-rating',
  imports: [Icon],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRating),
      multi: true,
    },
  ],
  template: \`
    <div role="slider" [attr.aria-valuenow]="display()" [attr.aria-valuemax]="max()">
      @for (star of stars(); track star) {
        <button
          type="button"
          [disabled]="readonly()"
          [class.on]="star <= display()"
          (mouseenter)="hovered.set(star)"
          (mouseleave)="hovered.set(null)"
          (click)="commit(star)"
        >
          {{ star <= display() ? 'star' : 'star_outline' }}
        </button>
      }
    </div>
  \`,
})
export class StarRating implements ControlValueAccessor {
  readonly rating = model(0);
  readonly max = input(5, { transform: numberAttribute });
  readonly readonly = input(false, { transform: booleanAttribute });

  protected readonly hovered = signal<number | null>(null);
  protected readonly stars = computed(() => Array.from({ length: this.max() }, (_, i) => i + 1));
  protected readonly display = computed(() => this.hovered() ?? this.rating());

  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: number | null): void {
    this.rating.set(value ?? 0);
  }
  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    // reflect back to the disabled input so the buttons stop being clickable
  }

  protected commit(star: number): void {
    this.rating.set(this.rating() === star ? 0 : star);
    this.onChange(this.rating());
    this.onTouched();
  }
}`,
    covers: ['angular-5', 'angular-2', 'angular-12', 'angular-22'],
  },
  {
    id: 'angular-todo-app',
    category: 'angular',
    title: 'Pokémon to-do list with filters and persistence',
    summary: 'Full CRUD on a signal array, derived filters, and a child component with clean IO.',
    durationMinutes: 120,
    prompt:
      'Add, toggle, delete and edit a "catch list", filter it by All/Active/Completed, show a count of remaining items, and persist to localStorage. Everything in one feature folder.',
    endpoints: [
      { path: '/pokemon?limit=151', note: 'The picker you add items from' },
      { path: '/pokemon/{name}', note: 'Details for the item being added' },
    ],
    steps: [
      {
        title: 'State and immutable updates',
        task: 'Keep todos in a single signal<Todo[]>() and update it with update() instead of mutating the array. Add, toggle, delete and edit all go through it. Confirm the array reference changes on every update - that is what makes OnPush and computed see the change.',
        learn: 'What is a component in Angular, and data binding',
      },
      {
        title: 'Derived state, never stored state',
        task: 'Use computed for the filtered list (All/Active/Completed) and for the remaining count. Do not keep filteredTodos as a signal you update in three places: the filter signal is the only input, and the two computeds are derived from it.',
        learn: 'Change detection and computed state',
      },
      {
        title: 'Persistence as a side effect',
        task: 'Use effect to save to localStorage whenever todos change, and read it back on first load. Note the effect runs at least once, so guard the write or you will clobber stored data with an empty array on boot.',
        learn: 'Signals, computed and effect',
      },
      {
        title: 'Child component with honest IO',
        task: 'Build a TodoItem child with input.required<Todo>() and output() for toggle / delete. Nothing else: no service injection, no access to the parent signal, no events bubbling through layers. Explain what breaks when you break that rule.',
        learn: 'Component boundaries and unidirectional data flow',
      },
      {
        title: 'Focus management',
        task: 'Inline edit with viewChild() to focus the input when editing starts and to return focus to the row when it saves. Handle the case where the item is deleted while the input is focused.',
        learn: 'Template references, view queries and lifecycle',
      },
    ],
    stretch: [
      'Clear completed with a single update and a confirmation.',
      'Drag to reorder: hold the index in the update callback, do not track it in state.',
      'Undo the last delete by keeping the removed todo and its index for 5 seconds.',
      'Route to /todos so the list survives a refresh through the URL.',
    ],
    starter: `interface Todo {
  id: string;
  name: string;
  done: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoStore {
  private readonly storageKey = 'catch-list';

  readonly todos = signal<Todo[]>([]);
  readonly filter = signal<'all' | 'active' | 'completed'>('all');

  readonly visible = computed(() => {
    const filter = this.filter();
    const todos = this.todos();
    if (filter === 'active') return todos.filter((todo) => !todo.done);
    if (filter === 'completed') return todos.filter((todo) => todo.done);
    return todos;
  });

  readonly remaining = computed(() => this.todos().filter((todo) => !todo.done).length);

  constructor() {
    const raw = localStorage.getItem(this.storageKey);
    if (raw) this.todos.set(JSON.parse(raw));

    effect(() => localStorage.setItem(this.storageKey, JSON.stringify(this.todos())));
  }

  toggle(id: string): void {
    this.todos.update((todos) =>
      todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    );
  }
}`,
    covers: ['angular-1', 'angular-2', 'angular-16', 'signals-3', 'signals-1'],
  },
  {
    id: 'angular-filter-store',
    category: 'angular',
    title: 'Two unrelated components that must stay in sync',
    summary: 'A sidebar filter and a results list with no parent to talk to.',
    durationMinutes: 60,
    prompt:
      'Build a filter sidebar and a results table that know nothing about each other, yet must always agree. If one of them can be deleted without breaking the app, the design is wrong.',
    endpoints: [
      { path: '/pokemon?limit=&offset=', note: 'The filtered list request' },
      { path: '/type/{type}', note: 'Filter chip options and counts' },
    ],
    steps: [
      {
        title: 'Find the shared owner',
        task: 'Before writing code, list what both components need: the filter state, the total count, the loading flag, the results. That list is the service. Write its public surface first, then implement each component against it.',
        learn: 'What is dependency injection',
      },
      {
        title: 'One source of truth, provided once',
        task: "Make the filter a single writable signal inside a providedIn: 'root' service, and have both components inject it. Neither component passes anything to the other, and neither calls the API. Move the sidebar and the table to different routes - they still agree.",
        learn: 'Sharing state between sibling components',
      },
      {
        title: 'Decide where the request belongs',
        task: 'Put the HTTP call in the service, keyed off the filter, so neither component duplicates it. Use a cache or shareReplay so switching between two components does not refetch what is already loaded.',
        learn: 'Where side effects live in an Angular app',
      },
      {
        title: 'Model loading and error per state',
        task: 'Add idle / loading / loaded / error to the service and expose them as computeds. Both components then render the same state without any coordination code. Verify the error state by pointing the service at a bad URL.',
        learn: 'Representing UI state explicitly',
      },
    ],
    stretch: [
      'Sync the filter into the URL query params so the view is shareable and survives a reload.',
      'Persist the filter per user in the service and restore it on login.',
      'Add a second consumer (a footer summary) that reads the same service.',
      'Broadcast filter changes across browser tabs with BroadcastChannel.',
    ],
    starter: `@Injectable({ providedIn: 'root' })
export class DexFilterStore {
  private readonly api = inject(HttpClient);

  // one writable signal is the only state anyone is allowed to change
  readonly filter = signal<DexFilter>({ type: 'all', limit: 20, offset: 0 });

  readonly request = computed(() => this.filter());
  readonly results = toSignal(
    this.request.pipe(
      switchMap((filter) =>
        this.api.get<PokemonList>('/pokemon', { params: { limit: filter.limit, offset: filter.offset } }),
      ),
      startWith(null),
    ),
    { initialValue: null },
  );

  readonly loading = computed(() => this.results() === null);
  readonly total = computed(() => this.results()?.count ?? 0);

  setType(type: string): void {
    // reset the page when the result set changes, in one place
    this.filter.update((filter) => ({ ...filter, type, offset: 0 }));
  }
}

// sidebar.component.ts          -> injects the store, writes via setType()
// results-table.component.ts     -> injects the store, reads total()/results()
// They share state and neither knows the other exists.`,
    covers: ['angular-8', 'angular-4', 'angular-2'],
  },
  {
    id: 'angular-runtime-forms',
    category: 'angular',
    title: 'Generate the filter form from a JSON schema',
    summary: 'Forms built at runtime, shared across a stepper, plus an async validator.',
    durationMinutes: 90,
    prompt:
      'The backend owns the filter definition: it sends a JSON schema and the app has to build the form from it. Then add a "name already taken" check that runs while the user types.',
    endpoints: [
      {
        path: '/pokemon/{name}',
        note: 'Returns 404 for an unknown name - use it for the async validator',
      },
      { path: '/pokemon?limit=', note: 'Fetch the form schema once at startup' },
    ],
    steps: [
      {
        title: 'Schema to FormGroup',
        task: 'Define a schema type (string, number, boolean, enum, plus required/min/max/options), fetch it, and build the FormGroup in a loop with addControl. Show the control count matching the schema length, and add a control at runtime with addControl and remove one with removeControl.',
        learn: 'Forms generated at runtime from a JSON schema',
      },
      {
        title: 'One form across several components',
        task: 'Pass a FormGroup down a stepper so each step owns a FormGroup of its own, and combine them into one parent with addControl per step. Submit once at the end and read the nested value. Explain what breaks if each step builds its own unrelated group.',
        learn: 'A stepper form spread across components that behaves as one form',
      },
      {
        title: 'Validate while the user types',
        task: 'Add an async validator for "is that name taken" that calls the PokéAPI and returns { taken: true }. Wire it with updateOn: \'change\' so it fires as they type, return null when the field is untouched or too short to be meaningful, and switchMap inside the validator so a slow response for an old value cannot overwrite a newer one.',
        learn: 'Async validation against a backend while typing',
      },
      {
        title: 'Show the error, not just the state',
        task: 'Render the message from errors, keep the pending state visible, and disable submit while status === PENDING. Prove the race is gone by typing fast and confirming the message matches the last value.',
        learn: 'Presentation of async validation state',
      },
    ],
    stretch: [
      'Reusable input that works with both ngModel and reactive forms (NG_VALUE_ACCESSOR).',
      'valueChanges piped through debounceTime before hitting the API, to show why both halves matter.',
      'Persist the partially completed form to sessionStorage across a reload.',
      'Unit test the schema-to-group builder with a fixture schema.',
    ],
    starter: `type FieldSchema = {
  key: string;
  label: string;
  kind: 'text' | 'number' | 'boolean' | 'select';
  required?: boolean;
  min?: number;
  max?: number;
  options?: string[];
};

function buildForm(schema: FieldSchema[]): FormGroup {
  const form = new FormGroup({});
  for (const field of schema) {
    form.addControl(field.key, new FormControl(initialValueFor(field), validatorsFor(field)));
  }
  return form;
}

// async uniqueness check, cancel the previous one
const nameTaken: AsyncValidatorFn = (control) => {
  const name = String(control.value ?? '').trim();
  if (name.length < 3) return of(null);

  return timer(250).pipe(
    switchMap(() =>
      http.get(\`/pokemon/\${name}\`, { observe: 'response' }).pipe(
        map((res) => (res.status === 200 ? { taken: true } : null)),
        catchError(() => of(null)),
      ),
    ),
  );
};

form = new FormGroup({ name: new FormControl('', { asyncValidators: [nameTaken], updateOn: 'change' }) });`,
    covers: ['angular-25', 'angular-13', 'angular-22', 'angular-12'],
  },
  {
    id: 'angular-interceptors',
    category: 'angular',
    title: 'Auth, spinner and error reporting as interceptors',
    summary: 'One cross-cutting concern per interceptor, and an order that matters.',
    durationMinutes: 75,
    prompt:
      'Every PokéAPI call in the app needs the same four things: an auth header, a global spinner counter, a normalised error shape, and a trace id in the logs. Implement them as interceptors rather than copy-paste.',
    endpoints: [
      { path: '/pokemon/{name}', note: 'Returns 404 - use it to exercise the error interceptor' },
      { path: '/pokemon?limit=', note: 'The normal path through the chain' },
    ],
    steps: [
      {
        title: 'The first functional interceptor',
        task: 'Write an authFn that clones the request, adds the header, and forwards it with next(req). Then add a spinner interceptor that increments on request and decrements on finalise (not on subscribe) so parallel requests cannot desync the counter. Fire two requests at once and confirm the spinner hides only when both finish.',
        learn: 'What is an HTTP interceptor and what are typical use cases',
      },
      {
        title: 'Order is the whole point',
        task: 'Register auth, then tracing, then spinner, then error mapping. Predict which runs first for outgoing and for incoming requests, then prove it by logging in each interceptor. Explain why two error interceptors would both see the error.',
        learn: 'Functional interceptors and their execution order',
      },
      {
        title: 'Let a call opt out',
        task: 'Add withHttpContext and a HIDE_SPINNER token so one request can skip the interceptor entirely. Without it you cannot fetch a small health check without flickering the whole UI, and skipping an interceptor for security reasons is not an option.',
        learn: 'Selective interceptor execution',
      },
      {
        title: 'Turn a 404 into something usable',
        task: 'Normalise HttpErrorResponse into { status, message, url } and rethrow so the caller still has to handle it. Show the difference between catching in the interceptor (every caller is saved from nothing) and catching at the call site where the UI actually knows what to render.',
        learn: 'Error handling and why interceptors are not the place to swallow errors',
      },
    ],
    stretch: [
      'Add a correlation id header and log it with every error payload for support tickets.',
      'Retry idempotent GETs once on 503 inside the interceptor with a delay.',
      'Refresh an expired token on 401 without looping on the refresh call itself.',
      'Record timings with a mark/measure so slow calls show up in the console.',
    ],
    starter: `export const HIDE_SPINNER = new HttpContextToken<boolean>(() => false);

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.includes('/auth/refresh')) return next(req); // never retry the refresh itself
  return next(req.clone({ setHeaders: { Authorization: \`Bearer \${token()}\` } }));
};

export const spinnerInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.context.get(HIDE_SPINNER)) return next(req);

  pending.update((count) => count + 1);
  return next(req).pipe(finalize(() => pending.update((count) => count - 1)));
};

export const errorInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      reportToMonitoring({ status: error.status, url: error.url, traceId: req.headers.get('x-trace-id') });
      return throwError(() => new ApiError(error.status, friendlyMessage(error), error.url)); // still throws
    }),
  );

// http.get('/pokemon/missingno', { context: new HttpContext().set(HIDE_SPINNER, true) })`,
    covers: ['angular-19', 'angular-31', 'angular-30'],
  },
  {
    id: 'angular-route-guards',
    category: 'angular',
    title: 'A lazy admin route only admins can reach',
    summary: 'Lazy loading plus access control, and hiding the UI that guards the route.',
    durationMinutes: 45,
    prompt:
      'Two lazy routes: a public dex and an admin reports route. The admin route must not be reachable without the admin role, and the UI must not offer a link that leads nowhere.',
    endpoints: [
      { path: '/pokemon?limit=', note: 'The public lazy route payload' },
      { path: '/pokemon-species/{name}?limit=', note: 'The admin reports data' },
    ],
    steps: [
      {
        title: 'Lazy route first',
        task: "Add { path: 'reports', loadComponent: () => import('./reports/reports').then((m) => m.Reports) } and confirm the chunk only appears in the network panel after you navigate. Put the component in its own folder with its own service, not next to the dex.",
        learn: 'Lazy-loaded routes',
      },
      {
        title: 'A functional CanActivate guard',
        task: "Write canActivate: [() => { const auth = inject(AuthStore); const router = inject(Router); return auth.isAdmin() || router.createUrlTree(['/login'], { queryParams: { returnUrl: router.url } }); }]. Return a boolean or a UrlTree - the UrlTree version redirects for you. Note that guards return Observables too, so a role fetched from the API works without await.",
        learn: 'Route guards and which ones exist',
      },
      {
        title: 'Do not even download it',
        task: 'Add CanMatch and return false for non-admins so the chunk is never fetched - check the network panel. CanActivate still runs afterwards and handles the redirect; the two guards solve different problems and it is worth saying which is which in an interview.',
        learn: 'CanMatch vs CanActivate',
      },
      {
        title: 'Hide what the user cannot use',
        task: 'Guard the template with @if (auth.isAdmin()) or a small structural directive, so the Reports link is not rendered for a normal user. Then type the URL by hand as a normal user and confirm you are bounced, which is the case the guard actually exists for.',
        learn: 'Role-based access control, both halves',
      },
    ],
    stretch: [
      'CanDeactivate with a dirty-form check so a half-written form is not lost.',
      'canActivateChild so the whole reports section is protected, not just its shell.',
      'Return the returnUrl query param and redirect back after login.',
      'Resolve route data before the component renders and show the loading state.',
    ],
    starter: `export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dex/dex').then((m) => m.Dex),
    providers: [providePokemonApi()], // route-scoped providers
  },
  {
    path: 'reports',
    canMatch: [() => inject(AuthStore).isAdmin()], // chunk is never downloaded
    loadComponent: () => import('./reports/reports').then((m) => m.Reports),
    canActivate: [
      () => {
        const auth = inject(AuthStore);
        const router = inject(Router);
        return auth.isAdmin() || router.createUrlTree(['/login'], {
          queryParams: { returnUrl: router.url }, // send them back afterwards
        });
      },
    ],
  },
];

// template
// @if (auth.isAdmin()) {
//   <a routerLink="/reports">Reports</a>
// }`,
    covers: ['angular-15', 'angular-18', 'angular-14'],
  },
  {
    id: 'angular-directive-pipe',
    category: 'angular',
    title: 'Type badge directive and a colour pipe',
    summary: 'Behaviour without a template, and a pure function in a pipe.',
    durationMinutes: 60,
    prompt:
      'Every Pokémon card needs a coloured, clickable type badge. Build it as an attribute directive for the behaviour and a pipe for the colour, so both pieces are independently testable.',
    endpoints: [
      { path: '/type/{type}', note: 'Drives the colour token per badge' },
      { path: '/pokemon/{name}', note: 'types[] is the directive input' },
    ],
    steps: [
      {
        title: 'Attribute directive with host bindings',
        task: "Create [appTypeBadge] that reads input.required<string>() for the type and applies host classes, a CSS custom property and a title attribute via host: { '[class.badge]': 'true', '[style.--type-color]': 'color()', '[attr.title]': 'label()' }. Note that host bindings write to the DOM outside Angular's template, which is why the directive needs no component.",
        learn: 'What is an Angular directive',
      },
      {
        title: 'Events and host listeners',
        task: 'Add output() favourite so the card can react, and a host listener for keydown.enter so the badge is keyboard accessible as well as clickable. Then show the badge doing nothing to the text content, which is what separates a directive from a component.',
        learn: 'Directives that add behaviour to existing markup',
      },
      {
        title: 'Pure pipe, impure pipe',
        task: 'Write a pokemonWeight pipe that takes the height and returns a formatted string. Confirm it runs once per input and again only when the input changes. Then force impure: true and watch it re-run on every single change detection, which is why impure is the exception, not the default.',
        learn: 'What is a pipe and the difference between pure and impure',
      },
      {
        title: 'Where the boundary is',
        task: 'Give a one-sentence answer for each: component owns a template, directive does not, pipe transforms a value for the template. Then move the badge into a component and show which parts you duplicated - that duplication is the signal you chose the wrong tool.',
        learn: 'Choosing between component, directive and pipe',
      },
    ],
    stretch: [
      'Turn the badge into a structural directive *appHasType so you can filter a list in the template.',
      'Use signal inputs on the directive so it works with OnPush parents.',
      'Write a test that asserts the host class and the custom property are set.',
      "Add host: { class: 'is-legacy' } only when the API shape changes, to show the escape hatch.",
    ],
    starter: `@Directive({
  selector: '[appTypeBadge]',
  host: {
    class: 'badge',
    '[style.--type-color]': 'color()',
    '[attr.title]': 'label()',
    '(keydown.enter)': 'favourite.emit()',
  },
})
export class TypeBadge {
  readonly type = input.required<string>();
  readonly favourite = output<string>();

  protected label(): string {
    return \`\${this.type()} type\`;
  }

  protected color(): string {
    return \`var(--type-\${this.type()}, var(--accent))\`;
  }
}

@Pipe({ name: 'pokemonWeight' }) // pure by default
export class PokemonWeight implements PipeTransform {
  transform(hectograms: number | null, unit = 'kg'): string {
    if (hectograms === null) return 'unknown';
    return \`\${(hectograms / 10).toFixed(1)} \${unit}\`;
  }
}

@Pipe({ name: 'pokemonWeightEager', pure: false }) // runs on every CD cycle
export class PokemonWeightEager implements PipeTransform {
  transform(hectograms: number | null): string {
    console.count('impure pipe'); // watch this climb
    return \`\${hectograms ?? 0} hg\`;
  }
}`,
    covers: ['angular-3', 'angular-20', 'angular-2'],
  },
];
