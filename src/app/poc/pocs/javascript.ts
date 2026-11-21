import { Poc } from '../../../types/poc-type';

// These exercises run inside the Angular Pokédex project.
// JavaScript language features remain native JavaScript; Angular services,
// HttpClient, Router and lifecycle hooks are used where they fit the exercise.

export const JAVASCRIPT_POCS: Poc[] = [
  {
    id: 'js-memoised-fetcher',
    category: 'javascript',
    title: 'Build a memoised Pokémon fetcher in an Angular service',
    summary: 'Closures, hoisting and request deduplication, implemented with Angular HttpClient.',
    durationMinutes: 45,
    prompt:
      'Build a reusable Pokémon fetcher for your Angular Pokédex that does not request the same Pokémon repeatedly. Keep the cache private inside a closure, expose a small API through an Angular service, and make simultaneous requests for the same Pokémon share one HTTP request. Use HttpClient and Observables rather than calling fetch() directly from a component.',
    endpoints: [{ path: '/pokemon/{name or id}', note: 'The call being cached' }],
    steps: [
      {
        title: 'Predict hoisting before you run anything',
        task: `Before changing your Angular code, create three tiny JavaScript examples in a scratch TypeScript or JavaScript file: call a function declaration before it appears, call a var function expression before its assignment, and access a let variable before its declaration. Run each separately. Record what happens: the function declaration works, the var expression is undefined when called and causes a TypeError, and the let access throws a ReferenceError because it is in the temporal dead zone. Do not describe all three as TDZ errors.`,
        learn: 'Hoisting, and how var, let and const differ',
      },
      {
        title: 'Swap var for let/const and log every assignment',
        task: `In the scratch examples, compare var, let and const. Then inspect your fetcher implementation and use const for references that are not reassigned and let only for values that are reassigned. Try reassigning a const and assigning to an undeclared variable in strict mode. Record the actual errors: reassigning a const throws a TypeError, while assigning an undeclared variable in strict mode throws a ReferenceError. Explain what strict mode changes.`,
        learn: 'What does use strict do',
      },
      {
        title: 'Let the closure hold the cache',
        task: `Create a factory function called createPokemonFetcher(http) in a separate file. Declare a Map inside the factory and return a function that fetches a Pokémon through the injected HttpClient. The returned function should close over the Map, but it must not expose the Map itself. Use the factory from PokemonService or PokemonRegistryService. Add a clearCache() function to the returned API and prove that components can clear the cache without accessing its internal Map.`,
        learn: 'What is a closure',
      },
      {
        title: 'Deduplicate in-flight requests, not just results',
        task: `First cache only completed responses and trigger two calls for the same Pokémon before either finishes. Observe that this can create duplicate requests. Change the cache to store the in-flight Observable and use shareReplay({ bufferSize: 1, refCount: false }) so both callers receive the same response. Add error handling that removes a failed request from the cache, allowing a later retry. Verify in the Network panel that three rapid calls for the same name result in one HTTP request.`,
        learn: 'Closures used for private state and request dedupe',
      },
    ],
    stretch: [
      'Add a TTL so a cached entry expires after 60s, and expose a hit/miss counter.',
      'Evict the least recently used entry once the cache is over 20 items.',
      'Expose cache hit, miss and in-flight request counts from the factory without exposing the private Map.',
    ],
    starter: `// pokemon-fetcher.factory.ts
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay, catchError, throwError } from 'rxjs';

export function createPokemonFetcher(http: HttpClient) {
  // Private because this Map is captured by the returned functions.
  const cache = new Map<string, Observable<unknown>>();

  function getPokemon(name: string): Observable<unknown> {
    const key = name.trim().toLowerCase();
    const cached = cache.get(key);

    if (cached) return cached;

    const request = http
      .get('https://pokeapi.co/api/v2/pokemon/' + key)
      .pipe(
        shareReplay({ bufferSize: 1, refCount: false }),
        catchError(error => {
          cache.delete(key); // allow a later retry
          return throwError(() => error);
        })
      );

    cache.set(key, request);
    return request;
  }

  return {
    getPokemon,
    clearCache: () => cache.clear(),
    has: (name: string) => cache.has(name.trim().toLowerCase())
  };
}

// Inject HttpClient in an Angular service and create the fetcher there.
// Do not return the Map itself.`,
    covers: ['js-3', 'js-1', 'js-2', 'js-15'],
  },
  {
    id: 'js-array-pipeline',
    category: 'javascript',
    title: 'Build a Pokémon data pipeline with array methods',
    summary:
      'Transform PokéAPI data with map, filter, reduce and modern JavaScript inside Angular.',
    durationMinutes: 60,
    prompt:
      'Build a data summary for your Angular Pokédex using a page of Pokémon from PokéAPI. Fetch data with Angular HttpClient, transform it in a service or pure utility functions, and return view models that a component can render. Use map, filter, find, some, reduce and forEach deliberately, and investigate type coercion rather than hiding it with TypeScript.',
    endpoints: [
      { path: '/pokemon?limit=151&offset=0', note: 'The 151 original Pokémon' },
      { path: '/pokemon/{id}', note: 'Per-Pokémon detail for stats and types' },
    ],
    steps: [
      {
        title: 'Map to a view model',
        task: `Use HttpClient to request /pokemon?limit=151&offset=0 from a service. Transform the results array into a new array containing { id, name, number }. Extract the numeric ID from each result URL and convert it with Number(). Then map detail responses into a flat view model containing the fields your component needs. Confirm that map returns a new array with the same number of items and does not mutate the API response array.`,
        learn: 'map, and when to use it',
      },
      {
        title: 'Filter, find and some',
        task: `Use filter() to return Pokémon whose names start with a chosen letter, find() to retrieve one Pokémon by ID, and some() to check whether at least one Pokémon meets a condition such as having more than one type. Do not use "legendary type": legendary is a Pokémon classification, not a type. Log each result and explain why filter returns an array, find returns one value or undefined, and some returns a boolean.`,
        learn: 'filter and the rest of the array methods',
      },
      {
        title: 'Reduce to a single answer',
        task: `Use reduce() to build an object that counts Pokémon by primary type, and use another reduce() to find the tallest Pokémon. Implement the same count with forEach() and a plain for...of loop. Compare readability and mutation: reduce returns an accumulated result, while forEach is usually used for side effects. Avoid copying the whole accumulator object on every iteration unless immutability is part of the exercise.`,
        learn: 'reduce and forEach',
      },
      {
        title: 'Find the min and max without sorting',
        task: `Find the lightest and heaviest Pokémon in one pass using reduce(), without sorting the array. Then write a second version using a for...of loop that keeps running minimum and maximum values. Compare both approaches. Try Math.min(...weights) with the 151-item dataset, then explain why spreading a very large array into function arguments can exceed an engine argument limit.`,
        learn: 'How do you find the minimum and maximum value in an array',
      },
      {
        title: 'Get bitten by coercion',
        task: `Create a small test using IDs represented as strings and numbers. Log the results of "25" === 25, "25" == 25, Number("25px") and parseInt("25px", 10). Then normalize IDs once when converting API data into your view model, rather than repeatedly coercing values throughout the component. Use optional chaining and nullish coalescing for optional API fields, and verify that a valid value of 0 is not replaced by a fallback.`,
        learn: 'Type coercion in JavaScript',
      },
      {
        title: 'Use the ES6+ syntax you actually want to use daily',
        task: `Refactor the pipeline using destructuring, default parameters, template literals, object property shorthand and optional chaining. Use Array.from() to create an array from an iterable or array-like value, and Object.entries() to iterate over the type-count object. Keep the transformation logic in pure functions so it can be tested without rendering an Angular component.`,
        learn: 'ES6+ features worth knowing',
      },
    ],
    stretch: [
      'Group the Pokémon by type with a Map instead of an object so numeric keys are safe.',
      'Chunk the array into pages of 20 with a single reduce.',
      'Make the whole pipeline lazy with a generator so you stop fetching when you have enough.',
    ],
    starter: `// pokemon-data.service.ts
@Injectable({ providedIn: 'root' })
export class PokemonDataService {
  private http = inject(HttpClient);

  getPokemonList() {
    return this.http.get<PokemonListResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
    );
  }

  // Keep transformations in pure functions so they are easy to test.
  toPokemonSummary(results: PokemonListItem[]) {
    return results.map(({ name, url }) => {
      const id = Number(url.split('/').filter(Boolean).pop());
      return { name, id, number: id };
    });
  }

  countByType(details: PokemonDetail[]) {
    return details.reduce<Record<string, number>>((counts, pokemon) => {
      const type = pokemon.types[0]?.type.name ?? 'unknown';
      counts[type] = (counts[type] ?? 0) + 1;
      return counts;
    }, {});
  }

  findTallest(details: PokemonDetail[]) {
    return details.reduce((tallest, pokemon) =>
      pokemon.height > tallest.height ? pokemon : tallest
    );
  }
}

// In a component, subscribe using the async pipe or signals.
// Fetch detail records separately; the list endpoint does not include stats.`,
    covers: ['js-9', 'js-16', 'js-19', 'js-20'],
  },

  {
    id: 'js-collections-prototypes',
    category: 'javascript',
    title: 'Build a Pokémon registry with Map, Set and prototypes in Angular',
    summary:
      'Use JavaScript collections and prototype inheritance inside an Angular service and TypeScript model.',
    durationMinutes: 90,

    prompt:
      'Build a reusable Pokémon registry inside your Angular application. Store Pokémon details for fast lookup, maintain a unique list of discovered types, and keep UI-only state separate from API data. Use an injectable service for the registry and HttpClient for API requests. Learn JavaScript collections and prototype behaviour through the implementation, while keeping the Angular code typed and testable.',

    endpoints: [
      {
        path: '/pokemon?limit=',
        note: 'Fetch the list of Pokémon names to register.',
      },
      {
        path: '/pokemon/{name}',
        note: 'Fetch individual Pokémon details, including types and stats.',
      },
    ],

    steps: [
      {
        title: 'Create a registry using Map and Set',

        task: `Create PokemonRegistryService with @Injectable({ providedIn: "root" }). Add a private Map<string, Pokemon> for Pokémon lookup and a private Set<string> for discovered types. Implement registerPokemon() and getPokemonByName(). Register two Pokémon that share a type and verify that both are stored in the Map while the Set contains the shared type once. Compare this with a plain object using "constructor" as a key. Remember that arrays and Sets both preserve insertion order; the Set additionally enforces uniqueness.`,

        learn:
          'What is the difference between Map, Set, arrays and plain objects? When should you use each? Why is Map useful for key-based lookups?',
      },

      {
        title: 'Connect the registry to an Angular API service',

        task: `Use HttpClient in the service to fetch Pokémon details. The API response is a plain object, not automatically an instance of your Pokemon class. Map the response into a Pokemon instance (including converting the API's type and stat arrays into the model shape), then register that instance. Create getAndRegisterPokemon(name) that returns an Observable and emits the registered instance only after the request succeeds. Fetch at least three Pokémon, then retrieve them from the Map. Confirm that a second lookup can use the in-memory registry instead of making another HTTP request.`,

        learn:
          'How does HttpClient work in Angular? Why should API calls live in services instead of components? How can Map act as an in-memory cache?',
      },

      {
        title: 'Use WeakMap to separate UI state from API data',

        task: `Add a WeakMap keyed by Pokémon object references. Store UI state such as expanded and selected in the WeakMap rather than adding those properties to the API model. Implement methods to set and get the UI state. Verify that WeakMap has no size property and cannot be iterated. Explain why its keys must be objects and why the WeakMap does not keep an otherwise unreachable key alive. Do not try to prove garbage collection with a deterministic console test; collection timing is controlled by the runtime.`,

        learn:
          'What is WeakMap? How is it different from Map? What is garbage collection? When would WeakMap be useful in an Angular application?',
      },

      {
        title: 'Create Pokémon classes and understand inheritance',

        task: `Create a Species class in a separate model file with a name property and a slug getter. Create a Pokemon class that extends Species and adds types and stats. Add hasType(type) to the class. Instantiate two Pokémon and inspect Object.getPrototypeOf(pokemon), Pokemon.prototype and Species.prototype. Trace the chain through Object.prototype to null. Add a method to Species.prototype in a controlled experiment and confirm both instances can access it. Avoid modifying built-in prototypes or shared application prototypes in production code.`,

        learn:
          'What are classes and inheritance in JavaScript? What is the prototype chain? How does the extends and super keyword work? What is the difference between an instance property and a prototype method?',
      },

      {
        title: 'Understand methods, functions and this',

        task: `Compare a hasType() instance method with a standalone hasPokemonType(pokemon, type) function. Call both and then pass the instance method as a callback to a function such as setTimeout or Array.map. Observe what happens when the method loses its receiver. Also create an object with its own hasOwnProperty property and use Object.prototype.hasOwnProperty.call(object, "name") to check a property safely.`,

        learn:
          'What is the difference between a function and a method? What does this refer to? Why can this lose its context? How do standalone functions differ from object methods?',
      },

      {
        title: 'Experiment with call(), apply() and bind()',

        task: `Write a normal function that checks whether this Pokémon has a requested type. Invoke it with call(), apply() and bind(): call passes arguments individually, apply passes them as an array, and bind returns a new function with a fixed receiver. Call the bound function more than once. Compare with an arrow function and explain that arrow functions capture this lexically, so call/apply/bind cannot replace their this value.`,

        learn:
          'What do call(), apply() and bind() do? How are their arguments different? Why does bind() return a new function? Why do arrow functions behave differently with this?',
      },

      {
        title: 'Protect cached Pokémon data from modification',

        task: `Take a Pokémon detail object and test Object.freeze(), Object.seal() and Object.preventExtensions() on separate copies. Try changing an existing property, adding a new property and deleting a property. Use Object.defineProperty() to create a non-writable displayName property. Then freeze the outer object and try changing its nested types array and stats object. Explain why Object.freeze() is shallow, and implement a safe deep-freeze helper for this plain data shape or store a defensive copy. Do not assume freezing an HttpClient response automatically makes nested data immutable.`,

        learn:
          'What is object immutability? What is the difference between Object.freeze(), Object.seal() and Object.preventExtensions()? What is shallow freezing versus deep freezing? How does Object.defineProperty() work?',
      },
    ],

    stretch: [
      'Use structuredClone() to create an independent copy of a frozen Pokémon object and verify that the copy can be modified without affecting the original.',

      'Create a Set of Pokémon types inside each Pokemon instance so hasType() can perform fast membership checks without repeatedly using Array.includes().',

      'Add a method to PokemonRegistryService that returns all Pokémon belonging to a particular type. Use the registry Map and filter by the Pokémon type data.',

      'Compare structuredClone() with JSON.parse(JSON.stringify()) using objects containing undefined values, Dates, Maps and Sets. Identify what information each approach preserves or loses.',

      'Create a shared Species base class and extend it with separate Pokemon and LegendaryPokemon classes. Add a method to the base class and verify that all subclasses inherit it.',

      'Add a removePokemon() method to the registry. Remove the Pokémon from the Map and update the Set of discovered types without accidentally removing types that are still used by other Pokémon.',
    ],

    starter: `// pokemon.model.ts

export interface PokemonStats {
  hp: number;
  attack: number;
  defense: number;
}

export interface PokemonData {
  name: string;
  types: string[];
  stats: PokemonStats;
}

// species.model.ts

export class Species {
  constructor(public name: string) {}

  get slug(): string {
    return this.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }
}

// pokemon.model.ts

export class Pokemon extends Species {
  constructor(
    name: string,
    public types: string[],
    public stats: PokemonStats
  ) {
    super(name);
  }

  hasType(type: string): boolean {
    return this.types.includes(type);
  }
}

// pokemon-registry.service.ts

@Injectable({
  providedIn: 'root'
})
export class PokemonRegistryService {

  private registry = new Map<string, Pokemon>();

  private discoveredTypes = new Set<string>();

  private uiState = new WeakMap<Pokemon, {
    expanded: boolean;
    selected: boolean;
  }>();

  registerPokemon(pokemon: Pokemon): void {
    this.registry.set(pokemon.name, pokemon);

    pokemon.types.forEach(type => {
      this.discoveredTypes.add(type);
    });
  }

  getPokemonByName(name: string): Pokemon | undefined {
    return this.registry.get(name);
  }
}`,

    covers: ['js-11', 'js-13', 'js-18', 'js-6', 'js-14'],
  },
  {
    id: 'js-query-builder',
    category: 'javascript',
    title: 'Build a reusable query-parameter utility for Angular',
    summary: 'Use spread, rest, nullish checks and URLSearchParams to build safe API requests.',
    durationMinutes: 90,
    prompt:
      'Your Angular Pokédex needs to request filtered pages from PokéAPI. Build a small, typed query-parameter utility that accepts optional filters, omits only values that are genuinely empty, and returns a valid URL or HttpParams object. Keep the utility separate from the component so it can be unit-tested.',
    endpoints: [
      { path: '/pokemon?limit=&offset=', note: 'The URL your builder has to produce' },
      { path: '/pokemon-species/{name}?limit=', note: 'Second route with different params' },
    ],
    steps: [
      {
        title: 'Use spread three different ways',
        task: `Create a typed filter interface and a utility function that accepts a filter object. Use object spread to combine default options with caller overrides, and use a rest parameter when collecting additional options. Pass the merged options to HttpParams or URLSearchParams. Test that a caller can override a default limit without changing the original defaults object. Explain why a rest parameter must be last and why object spread makes only a shallow copy.`,
        learn: 'Spread operator vs rest parameters',
      },
      {
        title: 'Spread or Object.assign?',
        task: `Merge two filter objects once with object spread and once with Object.assign(). Test with ordinary properties, a getter, a Set and a function-valued property. Observe that spread copies own enumerable values into a new object, while Object.assign() writes into its target and can trigger setters on that target. Choose one approach for your utility and explain why.`,
        learn: 'Object.assign vs object spread',
      },
      {
        title: 'Distinguish null from undefined',
        task: `Pass null, undefined, 0, false and an empty string as filter values. Compare == null, === null, || and ??. Confirm that 0 and false are valid values and should not be replaced by defaults. Use ?? when you want a fallback only for null or undefined, not for every falsy value.`,
        learn: 'Difference between null and undefined',
      },
      {
        title: 'Drop empty values the right way',
        task: `Build the query parameters from Object.entries(). Exclude only undefined, null and empty strings while retaining 0 and false. Add a test for each value so the rule is explicit. Do not use filter(Boolean), because that would incorrectly remove 0 and false.`,
        learn: 'Truthiness vs explicit checks',
      },
      {
        title: 'Produce a URL and prove it',
        task: `Use Angular HttpParams or the browser URLSearchParams API to encode the query values safely. Build URLs for two different filter sets, including a value containing a space or special character. Print the resulting URL and make a request through HttpClient to verify that the API accepts it. Keep URL construction in the utility or service, not in the component template.`,
        learn: 'Composing URLs safely',
      },
    ],
    stretch: [
      'Support an array value that becomes repeated keys (type=fire&type=water).',
      'Add a helper that merges filter defaults without mutating either input object, and test that HttpParams.set() returns a new instance.',
      'Write a parse function that turns the URL back into the filter object.',
    ],
    starter: `// pokemon-query.util.ts
export interface PokemonFilters {
  limit?: number;
  offset?: number;
  type?: string;
  q?: string;
  [key: string]: string | number | boolean | null | undefined;
}

export function buildPokemonParams(filters: PokemonFilters = {}): HttpParams {
  const defaults = { limit: 20, offset: 0 };
  const merged = { ...defaults, ...filters };

  let params = new HttpParams();

  for (const [key, value] of Object.entries(merged)) {
    // Keep 0 and false; omit only values that are genuinely empty.
    if (value === undefined || value === null || value === '') continue;
    params = params.set(key, String(value));
  }

  return params;
}

// Usage in an Angular service:
// return this.http.get(url, { params: buildPokemonParams(filters) });
//
// HttpParams is immutable: set() returns a new instance.`,
    covers: ['js-10', 'js-17', 'js-4'],
  },
  {
    id: 'js-event-delegation',
    category: 'javascript',
    title: 'Handle Pokémon card interactions in Angular and understand event delegation',
    summary:
      'Use Angular event binding first, then inspect native event propagation and delegation.',
    durationMinutes: 45,
    prompt:
      'Build interactions for a grid of Pokémon cards in your Angular Pokédex. Use Angular template event bindings for normal application behaviour, then create a small controlled experiment with native DOM listeners to understand capture, bubbling and event delegation. Do not replace Angular event binding with manual DOM manipulation in production components.',
    endpoints: [{ path: '/pokemon?limit=151', note: 'How many cards you are handling' }],
    steps: [
      {
        title: 'Trace the three phases',
        task: `In a Pokémon card template, add a click handler to the card and another to a button inside it. Log $event.target and $event.currentTarget from the handlers. Then create a small native DOM experiment with capture and bubble listeners on a parent and child element. Observe the order: capture travels down toward the target, then bubbling travels back up. Explain why target is the originating element while currentTarget is the element whose listener is currently running.`,
        learn: 'Event propagation, capture and bubble',
      },
      {
        title: 'Stop the right thing',
        task: `Add a link inside a card and test its click behaviour. Use preventDefault() to stop the browser navigation, stopPropagation() to stop the event travelling to ancestor listeners, and stopImmediatePropagation() to also prevent later listeners on the same element from running. Test each separately and record which listeners still execute. In Angular, call these methods on $event only when the interaction genuinely requires them.`,
        learn: 'preventDefault vs stopPropagation',
      },
      {
        title: 'Delegate from the container',
        task: `Create a native JavaScript experiment with one click listener on a grid container. Use event.target.closest("[data-pokemon]") to identify the clicked card and read its dataset. Add a favourite button and branch based on the closest matching action element. Compare this with Angular template bindings on each card. Explain that Angular event bindings are normally clearer and safer for component interactions; delegation is useful when working with dynamic non-Angular DOM or when deliberately managing a large native DOM surface.`,
        learn: 'Event delegation with closest()',
      },
      {
        title: 'Know what this is',
        task: `Compare a normal function event listener with an arrow function listener in a standalone DOM experiment. Inspect this, event.target and event.currentTarget. Explain that a normal listener usually receives the element as this, while an arrow function keeps the this value from its surrounding scope. In Angular component methods, use the component instance and template event binding rather than relying on DOM listener this.`,
        learn: 'Arrow functions vs function declarations',
      },
      {
        title: 'Clean up without leaking',
        task: `In the native experiment, add and remove a listener using the same function reference, then repeat using an AbortController signal. In an Angular component, use a template event binding where possible; if you must register a native listener manually, clean it up with DestroyRef or ngOnDestroy. Finally, log the order of Promise.then(), queueMicrotask() and setTimeout(0) to compare microtasks and macrotasks.`,
        learn: 'Listener cleanup and the task queues',
      },
    ],
    stretch: [
      'Add a { passive: true } wheel or touch listener and note what you can no longer do.',
      'Handle the same events by keyboard with the grid as a listbox and roving tabindex.',
      'Rewrite the delegated handler as a custom event dispatched from the card instead.',
    ],
    starter: `// Preferred Angular approach: handle interactions in the template.
// <article class="pokemon-card" (click)="openPokemon(pokemon)">
//   <button type="button"
//           (click)="toggleFavourite(pokemon); $event.stopPropagation()">
//     Favourite
//   </button>
// </article>

// Native DOM experiment only: one delegated listener on the grid.
const grid = document.querySelector('#dex');

function onCardClick(event: Event) {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const card = target.closest<HTMLElement>('[data-pokemon]');
  if (!card || !grid?.contains(card)) return;

  const favouriteButton = target.closest('[data-action="favourite"]');
  console.log({
    pokemon: card.dataset['pokemon'],
    action: favouriteButton ? 'favourite' : 'open'
  });
}

grid?.addEventListener('click', onCardClick);

// If you register native listeners in an Angular component,
// remove them with DestroyRef/ngOnDestroy or an AbortController.`,
    covers: ['js-7', 'js-8', 'js-5'],
  },
  {
    id: 'js-modules-lazy',
    category: 'javascript',
    title: 'Organise an Angular Pokédex into modules and lazy-loaded routes',
    summary:
      'Separate responsibilities with Angular services and load the Pokémon detail feature on demand.',
    durationMinutes: 60,
    prompt:
      'Refactor the Pokédex so its code is organised by responsibility and the Pokémon detail feature is loaded only when the user navigates to it. Use Angular services and feature files for normal application structure, and use Angular Router lazy loading rather than manually importing and rendering DOM modules.',
    endpoints: [
      { path: '/pokemon?limit=20', note: 'Loaded eagerly, needed for the grid' },
      { path: '/pokemon/{name}', note: 'Loaded lazily, needed by the detail view only' },
    ],
    steps: [
      {
        title: 'Split by responsibility, not by size',
        task: `Separate API access, display formatting and UI rendering by responsibility. Keep HTTP calls in an injectable API service, put reusable pure formatting functions in a utility file, and keep rendering in Angular components and templates. Import only what each file needs. Confirm that the formatting utility accepts plain data and does not depend on HttpClient or a component.`,
        learn: 'ES modules and named vs default exports',
      },
      {
        title: 'Load the detail view lazily',
        task: `Move the Pokémon detail page into a separate standalone component or feature route. Configure the Angular Router with loadComponent() or loadChildren() so the detail feature is loaded only when the user navigates to that route. Open the browser Network panel and inspect the JavaScript chunks before and after navigating to a detail page. Explain the difference between lazy loading a route and manually calling import() inside a click handler.`,
        learn: 'Dynamic import() and code splitting at module level',
      },
      {
        title: 'Let the module graph tell you the truth',
        task: `Create a small experiment using top-level await in a native ES module and compare it with calling an async function later. Observe that importers wait for a module with top-level await to finish evaluating. Then explain why API requests are usually better initiated by Angular services or route resolvers rather than as top-level module side effects.`,
        learn: 'Module evaluation order and top-level await',
      },
      {
        title: 'Show why one thread is enough',
        task: `Use forkJoin() or Promise.all() to request several Pokémon details concurrently and log the order in which requests start and responses arrive. Then run a deliberately blocking loop and observe how it delays rendering and promise callbacks. Explain that JavaScript runs application code on the main thread, while browser I/O can progress asynchronously.`,
        learn: 'Why JavaScript is single-threaded yet concurrent',
      },
    ],
    stretch: [
      'Handle a dynamic import that fails (offline) with a try/catch and a retry affordance.',
      'Use an import map so the CDN base URL is not hardcoded in every file.',
      'Show the same code as a CommonJS require and explain the interop difference.',
    ],
    starter: `// app.routes.ts (standalone Angular routing)
export const routes: Routes = [
  {
    path: 'pokemon/:name',
    loadComponent: () =>
      import('./pokemon-detail/pokemon-detail.component')
        .then(m => m.PokemonDetailComponent)
  }
];

// pokemon-api.service.ts
@Injectable({ providedIn: 'root' })
export class PokemonApiService {
  private http = inject(HttpClient);

  getPokemon(name: string) {
    return this.http.get<Pokemon>(
      'https://pokeapi.co/api/v2/pokemon/' + name
    );
  }
}

// Keep pure formatting helpers in a separate utility module.
// Angular Router loads the detail component chunk when the route is visited.`,
    covers: ['js-5', 'js-16'],
  },
  {
    id: 'js-broadcast-channel',
    category: 'javascript',
    title: 'Synchronise Pokémon favourites across Angular tabs',
    summary:
      'Use BroadcastChannel, an Angular service and lifecycle cleanup to share state between tabs.',
    durationMinutes: 45,
    prompt:
      'Build a favourites feature that stays in sync across multiple open tabs of your Angular Pokédex. Use BroadcastChannel for cross-tab messages and an injectable service to manage the channel. Persist the latest favourite IDs so a newly opened tab can restore the current state.',
    endpoints: [
      { path: '/pokemon?limit=20', note: 'The list whose favourites you sync' },
      { path: '/pokemon/{name}', note: 'The detail a tab opens from a synced selection' },
    ],
    steps: [
      {
        title: 'Open two tabs and prove the message travels',
        task: `Create an injectable FavouritesSyncService that opens a BroadcastChannel named "pokemon-favourites". Open the application in two browser tabs and send a test message from one tab. Confirm that the other tab receives it and that the sending tab does not receive its own message. Explain that BroadcastChannel delivers messages to other eligible contexts on the same origin.`,
        learn: 'What is the BroadcastChannel API',
      },
      {
        title: 'Structured clone, not JSON',
        task: `Send a Set of favourite IDs and a Date through postMessage(), then inspect the received values. Try sending a function and a DOM node and observe the DataCloneError. Send a class instance and inspect whether its prototype and methods are preserved; structured cloning does not preserve custom prototype chains.`,
        learn: 'Structured clone limits',
      },
      {
        title: 'Sync a real interaction',
        task: `Connect the service to a real favourite action. When a user favourites a Pokémon, update the local state and broadcast a message containing the new full list of favourite IDs or an explicit "set" operation. When another tab receives the message, update its state without broadcasting the same change again. Test two tabs changing different favourites and decide how your service handles simultaneous updates.`,
        learn: 'Idempotent messages and one source of truth',
      },
      {
        title: 'Handle the tab that opens late',
        task: `Open a third tab after changing favourites in the first two. Confirm that it does not receive earlier BroadcastChannel messages because the channel does not replay history. Restore the initial state from localStorage when the service starts, and persist each update. Optionally add a "hello" message so existing tabs can respond with their latest state. Compare this handshake with simply reading localStorage on startup.`,
        learn: 'No replay: pairing the channel with persistent state',
      },
      {
        title: 'Clean up and compare the alternatives',
        task: `Close the BroadcastChannel when the service or owning component is destroyed, using ngOnDestroy or DestroyRef as appropriate. If you register native event listeners, remove them during cleanup. Compare BroadcastChannel with the window storage event and window.postMessage(), and describe when each is appropriate. Handle browsers where BroadcastChannel is unavailable.`,
        learn: 'Channel lifecycle and the alternatives',
      },
    ],
    stretch: [
      'Feature-detect "BroadcastChannel" in window and fall back to the storage event.',
      'Elect a single writer with the Web Locks API so only the leader persists state.',
      'Show a message arriving in an iframe and in a web worker on the same channel.',
      'Show a tab frozen in the back/forward cache missing a message, and how you recover.',
    ],
    starter: `// favourites-sync.service.ts
@Injectable({ providedIn: 'root' })
export class FavouritesSyncService implements OnDestroy {
  private readonly channel =
    typeof BroadcastChannel !== 'undefined'
      ? new BroadcastChannel('pokemon-favourites')
      : null;

  private favourites = signal<string[]>([]);

  readonly favouriteIds = this.favourites.asReadonly();

  constructor() {
    const saved = localStorage.getItem('pokemon-favourites');
    if (saved) this.favourites.set(JSON.parse(saved));

    this.channel?.addEventListener('message', event => {
      if (event.data?.type !== 'favourites') return;
      this.applyRemoteState(event.data.ids);
    });
  }

  setFavourites(ids: string[]) {
    this.favourites.set(ids);
    localStorage.setItem('pokemon-favourites', JSON.stringify(ids));
    this.channel?.postMessage({ type: 'favourites', ids });
  }

  private applyRemoteState(ids: string[]) {
    this.favourites.set(ids);
    localStorage.setItem('pokemon-favourites', JSON.stringify(ids));
    // Do not broadcast received messages again.
  }

  ngOnDestroy() {
    this.channel?.close();
  }
}

// Production code should also validate incoming message data
// and handle storage/JSON errors. This service is a learning starter.`,
    covers: ['js-25'],
  },
  {
    id: 'js-polyfill-map',
    category: 'javascript',
    title: 'Rebuild array methods and bind as JavaScript practice in Angular',
    summary:
      'Implement map, filter, reduce and bind as standalone utilities, then test their edge cases.',
    durationMinutes: 60,
    prompt:
      'Use your Angular Pokédex project as the test environment, but implement these exercises as standalone JavaScript or TypeScript utility functions. Rebuild selected native methods and compare them with the built-ins. Do not overwrite built-in prototypes in your application; keep your implementations as named utilities and test them independently.',
    endpoints: [
      { path: '/pokemon?limit=151', note: 'The list you transform with your own methods' },
      { path: '/pokemon/{id}', note: 'Per-Pokémon data for the reduce and bind exercises' },
    ],
    steps: [
      {
        title: 'Write the contract before the code',
        task: `Before coding, write down the behaviour you intend to support for map, filter and reduce: what happens when the receiver is null or undefined, when the callback is not a function, which arguments the callback receives, how thisArg works, how sparse-array holes are handled, and what happens when reduce receives an empty array without an initial value. Use MDN or the ECMAScript specification to check your list before implementing.`,
        learn: 'What is a polyfill, and which details of the built-in contract matter',
      },
      {
        title: 'Implement map against the list',
        task: `Implement a named myMap() utility. Validate the receiver and callback, capture the array-like length once, skip indexes that do not exist, call the callback with value, index and the original collection, and return a new array. Test normal arrays, sparse arrays, strings and array-like objects. Keep the function separate from Array.prototype.map so you can compare both implementations.`,
        learn: 'How this, prototypes and sparse arrays behave in practice',
      },
      {
        title: 'Implement filter and reduce',
        task: `Implement myFilter() so it skips holes and preserves the order of matching values. Implement myReduce() so it throws when the collection is empty and no initial value is supplied, and so it starts with the first present index when the initial value is omitted. Test both functions with your Pokémon data and compare their results with the native methods.`,
        learn: 'The edge cases that separate a working polyfill from a spec-shaped one',
      },
      {
        title: 'Rebuild bind, not just call',
        task: `Implement myBind() as a separate utility that presets a receiver and optional leading arguments, then returns a function that accepts the remaining arguments. Test multiple calls with different trailing arguments. Then use the returned function with new and investigate why a faithful bind implementation must account for constructor calls and the new.target behaviour. Do not treat a simplified implementation as a complete polyfill.`,
        learn: 'How call, apply and bind work under the hood',
      },
      {
        title: 'Install it without polluting the page',
        task: `Do not install your methods on Array.prototype in the Angular application. As a separate experiment only, feature-detect a custom method and use Object.defineProperty() to make it non-enumerable. Inspect Object.keys(Array.prototype) and a for...in loop. Explain why production libraries usually prefer ponyfills (standalone functions) over modifying built-in prototypes.`,
        learn: 'Feature detection, defineProperty and when a global patch is unsafe',
      },
      {
        title: 'Prove the behaviour with tests',
        task: `Write unit tests for normal input, empty input, sparse input, invalid callbacks, thisArg and array-like receivers. Run each test against both the native method and your implementation. Compare array length, missing indexes, returned values and thrown errors; JSON.stringify alone is not sufficient to detect sparse-array differences. Use the test runner configured in your Angular project.`,
        learn: 'How to test a polyfill against the behaviour it is replacing',
      },
    ],
    stretch: [
      'Polyfill Promise.all, keeping results in input order and rejecting on the first failure.',
      'Write debounce and throttle with a cancel method, and test them with fake timers.',
      'Implement a deep clone that handles cycles, arrays and Date, and explain what structuredClone still does better.',
      'Write Object.create and explain how its prototype argument differs from a class constructor.',
    ],
    starter: `// Start with a named ponyfill so the native method stays available.
function myMap(callback, thisArg) {
  if (this == null) throw new TypeError('myMap called on null or undefined');
  if (typeof callback !== 'function') throw new TypeError('callback is not a function');

  const O = Object(this);
  const len = Math.min(Math.max(Math.trunc(Number(O.length)) || 0, 0), Number.MAX_SAFE_INTEGER);
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    if (i in O) {
      result[i] = callback.call(thisArg, O[i], i, O);
    }
  }
  return result;
}

// The table you have to make pass:
const cases = [
  [1, 2, 3],
  [],
  [, 1, , 3],
  'abc',
  { length: 2, 0: 'a', 1: 'b' },
];

for (const input of cases) {
  const native = Array.prototype.map.call(input, (value, index) => ({ value, index }));
  const mine = myMap.call(input, (value, index) => ({ value, index }));
  // TODO: compare length, holes and values, not just JSON.stringify
  console.log({ input, native, mine });
}

// Next: myFilter, myReduce, myBind, then the feature-detected install.`,
    covers: ['js-26', 'js-9', 'js-14'],
  },
];
