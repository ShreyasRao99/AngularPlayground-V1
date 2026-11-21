import { Poc } from '../../../types/poc-type';

export const ANGULAR_POCS: Poc[] = [
  {
    id: 'css-theme-tokens-angular',
    category: 'angular',
    title: 'Build a Light and Dark Theme System in Angular',
    summary:
      'Learn CSS custom properties, Angular signals, component styling, specificity and cascade layers by building a complete theme system.',
    durationMinutes: 60,
    prompt:
      'Build a light and dark theme system for the Angular Pokédex application. The user should be able to switch themes using a button. All colours, shadows, borders and border radii must be controlled through CSS custom properties. Angular signals should manage the selected theme, and CSS should handle the actual appearance changes. The theme must apply consistently across all components without duplicating styles or using !important.',
    endpoints: [
      {
        path: '/type/{type}',
        note: 'Use the selected type as a theme key; colours are local CSS tokens.',
      },
    ],
    steps: [
      {
        title: 'Create a central place for theme variables',
        task: 'Open src/styles.scss, which contains the global styles for your Angular application. Inside :root, define CSS custom properties for the following: --surface, --text-color, --accent-color, --border-color, --card-radius and --card-shadow. Give each variable a light-theme value. Next, open the SCSS file of an existing component, such as your Pokémon card, and replace its hardcoded background and text colours with var(--surface) and var(--text-color). Do the same for its border, radius and shadow. Finally, change the value of --surface in styles.scss and verify that the card updates without modifying its component stylesheet.',
        learn:
          'What are CSS custom properties? What does var() do? Why should shared design tokens be declared globally rather than separately in every component?',
      },
      {
        title: 'Add a dark theme using CSS attributes',
        task: 'In src/styles.scss, create a [data-theme="dark"] selector. Inside it, redefine the same custom properties you created in :root, but give them dark-theme values. Do not create new component selectors or duplicate your existing card styles. For example, change --surface from white to a dark colour and --text-color from dark to white. Manually add data-theme="dark" to your applications root container in app.component.html and verify that the existing components automatically adopt the dark theme. Remove the attribute and verify that the light theme returns.',
        learn:
          'How do CSS custom properties inherit? How does an attribute selector work? Why can the same component stylesheet support multiple themes without duplicating CSS rules?',
      },
      {
        title: 'Connect the theme to Angular signals',
        task: 'Open app.component.ts and create a signal named theme with an initial value of light. Create a toggleTheme() method that switches the signal between light and dark. In app.component.html, bind the root container attribute using [attr.data-theme]="theme()". Add a button with (click)="toggleTheme()". Click the button and verify that the data-theme attribute changes in the browser Elements panel and that the entire application switches themes. Make sure the button remains visible and usable in both themes.',
        learn:
          'How do Angular signals work? What is the difference between [attr.data-theme] and [data-theme]? How does Angular event binding work?',
      },
      {
        title: 'Make theme variables available to every component',
        task: 'Open the SCSS files of at least two different components, such as the Pokémon card and Pokémon details components. Use the global variables you created earlier for their backgrounds, text, borders and shadows. Do not redeclare these variables inside either component. Inspect the rendered elements in browser DevTools and understand how Angulars default ViewEncapsulation.Emulated scopes component styles while still allowing inherited CSS custom properties to reach child elements. As a test, change a global token and verify that both components update.',
        learn:
          'What is ViewEncapsulation.Emulated? How does Angular scope component styles? Why can global CSS custom properties be consumed inside component stylesheets?',
      },
      {
        title: 'Understand CSS specificity and fix conflicting styles',
        task: 'In your global styles.scss, create a .type-chip rule that sets the chip background to red. Then create another rule using #pokemon-details .type-chip that sets the background to blue. Add a chip inside an element with the ID pokemon-details and observe which colour wins. Open browser DevTools, inspect the chip and identify the winning declaration in the Styles panel. Now replace #pokemon-details with a class selector and experiment with the order of the rules. Your goal is to understand why the ID selector wins and why avoiding unnecessary IDs makes styles easier to override. Do not solve the conflict using !important.',
        learn:
          'How is CSS specificity calculated? What happens when two selectors have different specificity? What happens when they have equal specificity? Why are classes generally better than IDs for styling?',
      },
      {
        title: 'Organise styles using CSS cascade layers',
        task: 'In src/styles.scss, declare the following layers in this exact order: @layer base, components, utilities. Move your basic application styles into base, reusable component styles into components, and helper classes into utilities. Now create the same .type-chip selector in both base and utilities, but give each a different background colour. Verify that the utilities declaration wins. Next, increase the specificity of the selector in base and verify that the normal declaration in utilities still wins. This demonstrates that normal declarations in later layers take precedence over earlier layers, even when the earlier selector has higher specificity.',
        learn:
          'What are CSS cascade layers? How do layers affect specificity? How does the order of layers differ from the order of selectors?',
      },
    ],
    stretch: [
      'Use prefers-color-scheme to detect whether the users operating system prefers light or dark mode. Apply that preference when the application first loads.',
      'Persist the selected theme in localStorage so refreshing the browser does not reset the users choice.',
      'Create a ThemeService using Angular signals. Move the theme signal and toggleTheme() method into the service, then inject it into AppComponent.',
      'Add a --type-color CSS custom property and dynamically assign Pokémon type colours using Angular [style.--type-color] binding.',
      'Use color-mix() to generate hover and border colours from existing theme tokens instead of defining additional hex values.',
      'Use a CSS container query to change the card radius when a Pokémon card is displayed inside a narrow container.',
    ],
    starter: `/* src/styles.scss */

:root {
  color-scheme: light;

  --surface: #ffffff;
  --text-color: #202020;
  --accent-color: #e53043;
  --border-color: #dddddd;

  --card-radius: 12px;
  --card-shadow: 0 2px 8px rgb(0 0 0 / 10%);
}

/* Add your dark theme here */

/* app.component.ts */

theme = signal<'light' | 'dark'>('light');

toggleTheme() {
  // Switch between light and dark
}

/* app.component.html */

<div [attr.data-theme]="theme()">
  <button (click)="toggleTheme()">
    Toggle theme
  </button>

  <router-outlet />
</div>

/* Example: pokemon-card.component.scss */

.card {
  background: var(--surface);
  color: var(--text-color);
  border: 1px solid var(--border-color);
  border-radius: var(--card-radius);
  box-shadow: var(--card-shadow);
}`,
    covers: ['css-7', 'css-6', 'css-12', 'signals-1', 'angular-2', 'angular-39'],
  },
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
        task: 'Add fallback markup directly inside the matching <ng-content> element (for example, a loading message inside <ng-content select="[card-loading]">). This fallback appears only when no matching content is projected. Separately, create an <ng-template> in the caller and render it with NgTemplateOutlet when you need a caller-controlled template; ng-template is not itself a projection slot. Use ngProjectAs on a projected element when it should match a slot selector without adding that selector attribute.',
        learn: 'ng-template slots, fallback content and ngProjectAs',
      },
      {
        title: 'Be honest about the trade-off',
        task: 'Explain the real boundary: the caller owns the projected markup and can style it, but the shell cannot rearrange the caller’s internal markup. Use contentChild/contentChildren to query projected content and viewChild/viewChildren for elements declared in the shell’s own template. Decide whether the detail header has outgrown a shell with slots and should be its own component.',
        learn: 'When projection is the wrong abstraction',
      },
    ],
    stretch: [
      'Project an <input> into a form-aware slot and wrap it with a label you do not own.',
      'Compare ng-content projection with NgTemplateOutlet and template fragments; Angular content projection itself is still declared with ng-content.',
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
        task: 'Pull your pagination out into a <app-paginator> that any list can use. Use input.required<number>() for totalItems, input(20) for pageSize, output<number>() for pageChange, and a linkedSignal for the current page. Use computed for totalPages and the page-number buttons (1 2 3 ... 10), so the button list is never state you have to keep in sync by hand.',
        learn: 'Components, data binding, and the signal input/output APIs',
      },
      {
        title: 'linkedSignal for the reset',
        task: 'Make the current page reset to 1 whenever pageSize changes. Use linkedSignal with pageSize as its source, and make that linkedSignal the paginator’s page state. Because linkedSignal is a writable signal but is not a model() input/output pair, expose pageChange separately if the parent must be notified, or keep page state in the parent and reset it in the page-size change handler. Choose one ownership model and do not maintain two competing page signals. Explain why an effect is unnecessary for this derived reset.',
        learn: 'linkedSignal, and derived state that resets with its source',
      },
      {
        title: 'Keep the data fetch honest',
        task: 'In the parent, derive offset from the current page and pageSize: offset = (page - 1) * pageSize. Convert the changing request state to an Observable with toObservable(), then use switchMap() to call HttpClient; finally convert the result back to a signal with toSignal(), or bind the Observable with async. Do not call .pipe() directly on a signal or use an effect just to fetch data. Log the offset for three page changes to verify the calculation.',
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
  template: \`
    <button [disabled]="page() === 1" (click)="setPage(page() - 1)">Previous</button>

    @for (p of pageNumbers(); track p) {
      <button [attr.aria-current]="p === page() ? 'page' : null" (click)="setPage(p)">{{ p }}</button>
    } @empty {
      <span>No results</span>
    }

    <button [disabled]="page() === totalPages()" (click)="setPage(page() + 1)">Next</button>
  \`,
})
export class Paginator {
  readonly totalItems = input.required<number>();
  readonly pageSize = input(20);
  readonly pageChange = output<number>();
  readonly page = linkedSignal({
    source: this.pageSize,
    computation: () => 1,
  });

  readonly totalPages = computed(() =>
    Math.max(1, Math.ceil(this.totalItems() / this.pageSize())),
  );
  readonly pageNumbers = computed(() =>
    Array.from({ length: this.totalPages() }, (_, index) => index + 1),
  );

  setPage(nextPage: number): void {
    const clamped = Math.min(this.totalPages(), Math.max(1, nextPage));
    this.page.set(clamped);
    this.pageChange.emit(clamped);
  }
}

// This version keeps page state inside the paginator.
// Parent listens to (pageChange) and combines the emitted page with its
// pageSize input to calculate offset = (page - 1) * pageSize.
// When pageSize changes, the linkedSignal resets the page to 1 but does not
// emit pageChange, so the parent should reset its request state when it
// changes pageSize.`,
    covers: ['angular-5', 'angular-16', 'angular-17', 'angular-1', 'signals-1', 'signals-8'],
  },
  {
    id: 'angular-star-rating',
    category: 'angular',
    title: 'Star rating component that works inside a form',
    summary:
      'Signal inputs for configuration, then ControlValueAccessor for reactive-form integration.',
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
        task: 'A 5-star rating with hover preview, usable in a form. Start with a local signal for the value and transformed input() values for max and readonly. Then implement ControlValueAccessor for reactive forms. Do not combine model() as the public value API with ControlValueAccessor for the same value; choose one integration contract for each usage.',
        learn: '@Input and @Output, and how the signal APIs change them',
      },
      {
        title: 'Local hover state plus one computed',
        task: 'Keep a local signal for the hovered star, and a computed for what to display (hover preview while hovering, actual value otherwise). The computed is what the template reads, so the rule "hover never becomes the value" lives in one readable line instead of scattered ngIfs.',
        learn: 'Data binding and derived state',
      },
      {
        title: 'Make it form-compatible',
        task: 'Wrap it in a form with FormControl and control.valueChanges. Then add NG_VALUE_ACCESSOR to the star component: writeValue, registerOnChange, registerOnTouched, setDisabledState. Push the value from registerOnChange, never by writing to the control directly, and decide whether 0 is valid; add Validators.min(1) if a rating is required, or leave 0 valid for an optional rating.',
        learn: 'Reusable form input that works with ngModel and reactive forms',
      },
    ],
    stretch: [
      'Half stars by splitting each star into two hit areas and storing 0.5 steps.',
      'Keyboard support: arrow keys change the value, Home resets, Space sets it.',
      'Use a labelled radiogroup with an accessible name for each star and aria-checked/aria-pressed state; do not put interactive buttons inside an element with role="slider".',
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
    <div role="group" aria-label="Pokémon rating">

      @for (star of stars(); track star) {
        <button
          type="button"
          [disabled]="readonly() || disabled()"
          [class.on]="star <= display()"
          [attr.aria-pressed]="star === value()"
          [attr.aria-label]="star + ' out of ' + max()"
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
  readonly max = input(5, { transform: numberAttribute });
  readonly readonly = input(false, { transform: booleanAttribute });

  protected readonly value = signal(0);
  protected readonly hovered = signal<number | null>(null);
  protected readonly disabled = signal(false);
  protected readonly stars = computed(() => Array.from({ length: this.max() }, (_, i) => i + 1));
  protected readonly display = computed(() => this.hovered() ?? this.value());

  private onChange: (value: number) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: number | null): void {
    this.value.set(value ?? 0);
  }
  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  protected commit(star: number): void {
    if (this.disabled() || this.readonly()) return;
    const nextValue = this.value() === star ? 0 : star;
    this.value.set(nextValue);
    this.onChange(nextValue);
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
        task: 'Read the stored list before the first save effect can run, validate the parsed data, and then persist changes with effect(). Guard browser-only APIs with isPlatformBrowser (or inject DOCUMENT and check the platform) so the feature also works during server-side rendering. Test a missing key and malformed JSON.',
        learn: 'Signals, computed and effect',
      },
      {
        title: 'Child component with honest IO',
        task: 'Build a TodoItem child with input.required<Todo>() and output() for toggle / delete. Keep it presentational: it receives a Todo through input.required<Todo>() and emits typed outputs for toggle/delete. The parent or store owns the state update; do not rely on DOM event bubbling to communicate between Angular components.',
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
    // Browser-only example. In an SSR app, inject PLATFORM_ID and guard
    // localStorage access with isPlatformBrowser(platformId).
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) this.todos.set(parsed as Todo[]);
      }
    } catch {
      this.todos.set([]);
    }

    effect(() => {
      localStorage.setItem(this.storageKey, JSON.stringify(this.todos()));
    });
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
      { path: '/type/{type}', note: 'Returns Pokémon associated with the selected type' },
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
        task: 'Represent request state as a discriminated union (idle / loading / loaded / error) and expose it to both components. Derive loading, error and total from that state so they cannot contradict one another. Verify that a failed request does not terminate the filter stream: changing the filter afterwards should issue a new request.',
        learn: 'Representing UI state explicitly',
      },
    ],
    stretch: [
      'Sync the filter into the URL query params so the view is shareable and survives a reload.',
      'Persist the filter per user in the service and restore it on login.',
      'Add a second consumer (a footer summary) that reads the same service.',
      'Broadcast filter changes across browser tabs with BroadcastChannel.',
    ],
    starter: `interface PokemonList {
  count: number;
  results: { name: string; url: string }[];
}

interface PokemonTypeResponse {
  pokemon: { pokemon: { name: string; url: string } }[];
}

function normalizePokemonResults(
  response: PokemonList | PokemonTypeResponse,
  filter: DexFilter,
): PokemonList {
  if ('results' in response) return response;

  const allMatches = response.pokemon.map(({ pokemon }) => pokemon);
  const results = allMatches.slice(filter.offset, filter.offset + filter.limit);
  return { count: allMatches.length, results };
}

@Injectable({ providedIn: 'root' })
export class DexFilterStore {
  private readonly api = inject(HttpClient);

  // one writable signal is the only state anyone is allowed to change
  readonly filter = signal<DexFilter>({ type: 'all', limit: 20, offset: 0 });

  private readonly request$ = toObservable(this.filter);

  readonly results = toSignal(
    this.request$.pipe(
      switchMap((filter) => {
        const url = filter.type === 'all'
          ? '/pokemon'
          : \`/type/\${encodeURIComponent(filter.type)}\`;

        return this.api.get<PokemonList | PokemonTypeResponse>(url, {
          params: { limit: filter.type === 'all' ? filter.limit : 10000,
                    offset: filter.type === 'all' ? filter.offset : 0 },
        }).pipe(
          map((response) => normalizePokemonResults(response, filter)),
          map((data) => ({ status: 'loaded' as const, data })),
          startWith({ status: 'loading' as const, data: null }),
          catchError((error) => of({ status: 'error' as const, data: null, error })),
        );
      }),
    ),
    { initialValue: { status: 'loading' as const, data: null } },
  );

  readonly loading = computed(() => this.results().status === 'loading');
  readonly error = computed(() => {
    const state = this.results();
    return state.status === 'error' ? state.error : null;
  });
  readonly total = computed(() => {
    const state = this.results();
    return state.status === 'loaded' ? state.data.count : 0;
  });

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
      'A mock backend endpoint returns a JSON schema and the app builds the filter form from it. PokéAPI does not provide form schemas, so use a local fixture or mock endpoint for this part. Then add a "name already taken" check that runs while the user types.',
    endpoints: [
      {
        path: '/pokemon/{name}',
        note: 'Returns 404 for an unknown name - use it for the async validator',
      },
      {
        path: '/api/filter-schema',
        note: 'Mock/local backend endpoint; PokéAPI does not provide a form schema',
      },
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
        task: 'Add an async validator for "is that name taken" that calls the PokéAPI and returns { taken: true }. Wire it with updateOn: \'change\' so it fires as they type, return null when the value is too short to be meaningful. Use timer(250) to debounce the request; Angular unsubscribes the previous async-validator Observable when the control value changes, so the old result cannot win. Do not add switchMap inside a one-value validator unless you have an actual source stream to switch from.',
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
      http.get(\`/pokemon/\${encodeURIComponent(name)}\`, { observe: 'response' }).pipe(
        map(() => ({ taken: true })),
        catchError((error: HttpErrorResponse) =>
          error.status === 404 ? of(null) : of({ validationUnavailable: true }),
        ),
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
      'Every request to your protected backend needs consistent cross-cutting handling: an auth header, a global spinner counter, a normalised error shape, and a trace ID in the logs. Implement them as interceptors rather than copy-paste. Do not attach an auth header to the public PokéAPI.',
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
        task: 'Register auth, then tracing, then spinner, then error mapping. For outgoing requests the chain runs in registration order; responses and errors travel back through the chain in reverse order. Log each interceptor to verify this. An error interceptor only sees an error if it is downstream of the point where that error is raised or rethrown.',
        learn: 'Functional interceptors and their execution order',
      },
      {
        title: 'Let a call opt out',
        task: 'Add an HttpContextToken named HIDE_SPINNER so a request can opt out of the spinner only. Use HttpContext on the request. Do not use this mechanism to bypass authentication or other security controls.',
        learn: 'Selective interceptor execution',
      },
      {
        title: 'Turn a 404 into something usable',
        task: 'Normalise HttpErrorResponse into { status, message, url } and rethrow so the caller still has to handle it. Show the difference between catching in the interceptor (every caller is saved from nothing) and catching at the call site where the UI actually knows what to render.',
        learn: 'Error handling and why interceptors are not the place to swallow errors',
      },
    ],
    stretch: [
      'Add a trace/correlation ID in a dedicated tracing interceptor and include it in every error log. Keep tracing separate from authentication and spinner state.',
      'Retry idempotent GETs once on 503 inside the interceptor with a delay.',
      'Refresh an expired token on 401 without looping on the refresh call itself.',
      'Record timings with a mark/measure so slow calls show up in the console.',
    ],
    starter: `export const HIDE_SPINNER = new HttpContextToken<boolean>(() => false);

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Attach credentials only to the API origin that requires them.
  if (!req.url.startsWith(environment.apiBaseUrl)) return next(req);
  const accessToken = inject(AuthStore).accessToken();
  if (!accessToken) return next(req);
  return next(req.clone({
    setHeaders: { Authorization: \`Bearer \${accessToken}\` },
  }));
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

// http.get('/pokemon/missingno', {
//   context: new HttpContext().set(HIDE_SPINNER, true),
// })`,
    covers: ['angular-19', 'angular-31', 'angular-30'],
  },
  {
    id: 'angular-route-guards',
    category: 'angular',
    title: 'A lazy admin route only admins can reach',
    summary: 'Lazy loading plus access control, and hiding the UI that guards the route.',
    durationMinutes: 45,
    prompt:
      'Two lazy routes: a public dex and an admin reports route. Simulate the admin role in AuthStore and protect the route and navigation link. Remember that a client-side guard is not backend security: a real reports API must independently authorize every request.',
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
        task: 'Add CanMatch to prevent a non-admin from matching/downloading the lazy route. Important: returning false does not automatically run CanActivate or redirect; Angular tries another matching route. Provide a fallback route or return a UrlTree from CanMatch when you want a redirect. Use CanActivate when you want an explicit navigation decision after route matching.',
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
    canMatch: [() => {
      const auth = inject(AuthStore);
      const router = inject(Router);
      return auth.isAdmin() || router.createUrlTree(['/login']);
    }],
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
    covers: ['angular-15', 'angular-41', 'angular-14'],
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
        task: 'Add output() favourite and emit the current type from a host click handler. Make the host keyboard-operable (for example, add role="button", tabindex="0", and handle Enter/Space) only if the badge truly performs an action; otherwise keep it a non-interactive label. A directive adds behavior to existing markup without owning a template.',
        learn: 'Directives that add behaviour to existing markup',
      },
      {
        title: 'Pure pipe, impure pipe',
        task: 'Write a pokemonWeight pipe that takes the Pokémon weight (PokéAPI weight is in hectograms) and returns a formatted value in kilograms. Confirm it runs once per input and again only when the input changes. Then force impure: true and watch it re-run on every single change detection, which is why impure is the exception, not the default.',
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
    '[attr.role]': '"button"',
    '[attr.tabindex]': '0',
    '(click)': 'favourite.emit(type())',
    '(keydown.enter)': 'favourite.emit(type())',
    '(keydown.space)': '$event.preventDefault(); favourite.emit(type())',
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
    if (hectograms == null) return 'unknown';
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
    covers: ['angular-3', 'angular-35', 'angular-2'],
  },
];
