import{At as WE,B as Iv,Y as LP,bn as ih,dr as xD,kn as kc,lt as Oc,yr as zD}from"./chunk-C3qvLal_.js";var p=[{id:`html-semantic-entry`,category:`html`,title:`Build a semantic Pokédex entry page`,summary:`Build a Pokémon detail page using semantic HTML and real PokéAPI data.`,durationMinutes:45,prompt:`
Build a Pok\xE9dex entry page for Pikachu inside the existing Angular application.

Fetch Pok\xE9mon data from the Pok\xE9API and display its sprite, Pok\xE9dex number, name, types, description, height, weight, abilities and base stats.

Use semantic HTML elements to structure the page. Avoid using div elements as generic replacements for semantic elements.

The page must be populated using API responses. Do not hardcode Pok\xE9mon information.
  `,endpoints:[{path:`/pokemon/pikachu`,note:`Main Pokémon data: name, ID, sprite, types, height, weight, abilities and base stats.`},{path:`/pokemon-species/pikachu`,note:`Species data: Pokédex description and generation.`}],steps:[{title:`Build the page structure`,task:`
Create the following page structure:

1. A header containing the application title "Pok\xE9dex".
2. A main element containing the Pok\xE9mon entry.
3. An article representing the complete Pikachu entry.
4. Inside the article, display:
   - Pok\xE9mon name and Pok\xE9dex number.
   - Pok\xE9mon sprite with a caption.
   - Pok\xE9dex description.
   - Pok\xE9mon types.
   - Physical attributes (height and weight).
   - Abilities.
   - Base stats.
5. A footer containing the text "Pok\xE9mon data provided by Pok\xE9API".

Use the appropriate semantic elements:
header, main, article, section, figure, figcaption and footer.

Use one h1 for the Pok\xE9mon name and h2 elements for the individual sections.
      `,learn:`Semantic HTML`},{title:`Display Pokémon information`,task:`
Fetch data from both API endpoints and display the following properties.

From /pokemon/pikachu:

- id: Display as the Pok\xE9dex number (#025).
- name: Display the Pok\xE9mon name.
- sprites.front_default: Display the front sprite.
- types[].type.name: Display all Pok\xE9mon types.
- height: Convert decimetres to metres (height / 10).
- weight: Convert hectograms to kilograms (weight / 10).
- abilities[].ability.name: Display ability names.
- abilities[].is_hidden: Identify hidden abilities.
- stats[].stat.name: Display stat names.
- stats[].base_stat: Display stat values.

From /pokemon-species/pikachu:

- flavor_text_entries: Find an English entry using language.name === 'en' and display its flavor_text.
- generation.name: Display the Pok\xE9mon's generation.

Use Angular template binding to render the data. Do not hardcode the values.
      `,learn:`Working with API responses and Angular data binding`}],stretch:[`Add Previous and Next buttons to navigate between Pokémon using their IDs. Fetch the new Pokémon data and update the existing page without reloading.`,`Display a loading message while the API requests are in progress. If either request fails, display an error message instead of a blank page.`],starter:`
<header>
  <h1>Pok\xE9dex</h1>
</header>

<main>
  <article>
    <header>
      <h2>Pikachu</h2>
      <span>#025</span>
    </header>

    <figure>
      <img src="..." alt="Pikachu front sprite" />
      <figcaption>Electric Mouse Pok\xE9mon</figcaption>
    </figure>

    <section>
      <h2>Pok\xE9dex Description</h2>
      <p><!-- Description --></p>
    </section>

    <section>
      <h2>Types</h2>
      <!-- Type labels -->
    </section>

    <section>
      <h2>Physical Attributes</h2>
      <!-- Height and weight -->
    </section>

    <section>
      <h2>Abilities</h2>
      <!-- Ability list -->
    </section>

    <section>
      <h2>Base Stats</h2>
      <!-- Stat values -->
    </section>

  </article>
</main>

<footer>
  <p>Pok\xE9mon data provided by Pok\xE9API.</p>
</footer>
  `,covers:[`html-1`]}];var u=[{id:`css-dex-layout`,category:`css`,title:`Grid for the dex, Flexbox for the toolbar`,summary:`Build a responsive Pokémon card grid and a filter toolbar using CSS Grid and Flexbox.`,durationMinutes:60,prompt:`Build two layouts on the Pokédex screen: a responsive grid displaying Pokémon cards and a toolbar containing Pokémon type filter chips and a search input. Use CSS Grid for the cards and Flexbox for the toolbar. The toolbar should have chips like All (20), Fire (12), Water (35), Grass (14) and Flying (8), with one chip visually selected at a time. Each type chip displays the total number of Pokémon belonging to that type, not the number of Pokémon currently displayed. Clicking a chip changes the selected state. Understand how Grid and Flexbox handle spacing, alignment and responsiveness.`,endpoints:[{path:`/pokemon?limit=20`,note:`Use the results array from the API response to render Pokémon names as individual cards inside the CSS Grid. The search input should filter these 20 Pokémon by name on the client side.`},{path:`/type/{type}`,note:`Use the pokemon array length from each type API response to display the total Pokémon count on the corresponding filter chip. For example, /type/fire gives the count for Fire, /type/water gives the count for Water and /type/grass gives the count for Grass. The count remains the same when a chip is selected. Only the selected chip styling changes.`}],steps:[{title:`Build a responsive Pokémon card grid`,task:`Fetch Pokémon using /pokemon?limit=20. Use the results array to render Pokémon names as individual cards inside a container. Set display: grid and use grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)) with gap: 12px. Resize the browser and verify that the number of columns changes automatically without writing media queries. Then try repeat(3, 1fr) and observe what happens on smaller screens.`,learn:`CSS Grid, repeat(), auto-fill, minmax() and responsive layouts`},{title:`Build the filter toolbar with Flexbox`,task:`Create a horizontal toolbar containing type filter chips and a search input. Include chips such as All (20), Fire (12), Water (35), Grass (14) and Flying (8). Fetch the type data using /type/{type} and use the length of its pokemon array to display the count on each corresponding chip. For All, display the total number of Pokémon returned by the list API (results.length). Maintain a selectedType signal so that only one chip appears selected at a time. Clicking another chip should update the selected styling without changing the counts. Set display: flex, flex-wrap: wrap, align-items: center and gap: 8px. Give the search input margin-left: auto so it moves to the right when space is available. Resize the browser and verify that the chips wrap onto another line instead of overflowing.`,learn:`Flexbox, flex-wrap, margin-left: auto, gap and selected states`},{title:`Understand the two alignment axes`,task:`On the toolbar, keep flex-direction: row. Change align-items between center, flex-start and stretch. Observe how the children move vertically. Then change justify-content between flex-start, center and space-between. Observe how the children move horizontally. Identify the main axis and cross axis for row and column directions.`,learn:`Main axis, cross axis, align-items and justify-content`},{title:`Use gap for consistent spacing`,task:`Use gap: 12px on the card grid and gap: 8px on the toolbar. Remove any margins previously added between individual cards or filter buttons. Then replace gap with row-gap and column-gap separately and observe how horizontal and vertical spacing can be controlled independently.`,learn:`CSS gap, row-gap and column-gap`}],stretch:[`Make the first Pokémon card span two columns using grid-column: span 2. Then make it span two rows using grid-row: span 2. Verify that the remaining cards reposition automatically.`,`Use grid-template-areas to create a layout with a header, filter toolbar and Pokémon grid. Change the layout at a mobile breakpoint using a media query without changing the HTML.`,`Use CSS Grid auto-fit instead of auto-fill. Compare the two behaviours when there are only two Pokémon cards in a wide container. Explain the difference.`],starter:`.dex {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
}

.toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
}

.toolbar__search {
  margin-left: auto;
}`,covers:[`css-11`,`css-4`]}];var m=[{id:`js-memoised-fetcher`,category:`javascript`,title:`Build a memoised Pokémon fetcher in an Angular service`,summary:`Closures, hoisting and request deduplication, implemented with Angular HttpClient.`,durationMinutes:45,prompt:`Build a reusable Pokémon fetcher for your Angular Pokédex that does not request the same Pokémon repeatedly. Keep the cache private inside a closure, expose a small API through an Angular service, and make simultaneous requests for the same Pokémon share one HTTP request. Use HttpClient and Observables rather than calling fetch() directly from a component.`,endpoints:[{path:`/pokemon/{name or id}`,note:`The call being cached`}],steps:[{title:`Predict hoisting before you run anything`,task:`Before changing your Angular code, create three tiny JavaScript examples in a scratch TypeScript or JavaScript file: call a function declaration before it appears, call a var function expression before its assignment, and access a let variable before its declaration. Run each separately. Record what happens: the function declaration works, the var expression is undefined when called and causes a TypeError, and the let access throws a ReferenceError because it is in the temporal dead zone. Do not describe all three as TDZ errors.`,learn:`Hoisting, and how var, let and const differ`},{title:`Swap var for let/const and log every assignment`,task:`In the scratch examples, compare var, let and const. Then inspect your fetcher implementation and use const for references that are not reassigned and let only for values that are reassigned. Try reassigning a const and assigning to an undeclared variable in strict mode. Record the actual errors: reassigning a const throws a TypeError, while assigning an undeclared variable in strict mode throws a ReferenceError. Explain what strict mode changes.`,learn:`What does use strict do`},{title:`Let the closure hold the cache`,task:`Create a factory function called createPokemonFetcher(http) in a separate file. Declare a Map inside the factory and return a function that fetches a Pokémon through the injected HttpClient. The returned function should close over the Map, but it must not expose the Map itself. Use the factory from PokemonService or PokemonRegistryService. Add a clearCache() function to the returned API and prove that components can clear the cache without accessing its internal Map.`,learn:`What is a closure`},{title:`Deduplicate in-flight requests, not just results`,task:`First cache only completed responses and trigger two calls for the same Pokémon before either finishes. Observe that this can create duplicate requests. Change the cache to store the in-flight Observable and use shareReplay({ bufferSize: 1, refCount: false }) so both callers receive the same response. Add error handling that removes a failed request from the cache, allowing a later retry. Verify in the Network panel that three rapid calls for the same name result in one HTTP request.`,learn:`Closures used for private state and request dedupe`}],stretch:[`Add a TTL so a cached entry expires after 60s, and expose a hit/miss counter.`,`Evict the least recently used entry once the cache is over 20 items.`,`Expose cache hit, miss and in-flight request counts from the factory without exposing the private Map.`],starter:`// pokemon-fetcher.factory.ts
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
// Do not return the Map itself.`,covers:[`js-3`,`js-1`,`js-2`,`js-15`]},{id:`js-array-pipeline`,category:`javascript`,title:`Build a Pokémon data pipeline with array methods`,summary:`Transform PokéAPI data with map, filter, reduce and modern JavaScript inside Angular.`,durationMinutes:60,prompt:`Build a data summary for your Angular Pokédex using a page of Pokémon from PokéAPI. Fetch data with Angular HttpClient, transform it in a service or pure utility functions, and return view models that a component can render. Use map, filter, find, some, reduce and forEach deliberately, and investigate type coercion rather than hiding it with TypeScript.`,endpoints:[{path:`/pokemon?limit=151&offset=0`,note:`The 151 original Pokémon`},{path:`/pokemon/{id}`,note:`Per-Pokémon detail for stats and types`}],steps:[{title:`Map to a view model`,task:`Use HttpClient to request /pokemon?limit=151&offset=0 from a service. Transform the results array into a new array containing { id, name, number }. Extract the numeric ID from each result URL and convert it with Number(). Then map detail responses into a flat view model containing the fields your component needs. Confirm that map returns a new array with the same number of items and does not mutate the API response array.`,learn:`map, and when to use it`},{title:`Filter, find and some`,task:`Use filter() to return Pokémon whose names start with a chosen letter, find() to retrieve one Pokémon by ID, and some() to check whether at least one Pokémon meets a condition such as having more than one type. Do not use "legendary type": legendary is a Pokémon classification, not a type. Log each result and explain why filter returns an array, find returns one value or undefined, and some returns a boolean.`,learn:`filter and the rest of the array methods`},{title:`Reduce to a single answer`,task:`Use reduce() to build an object that counts Pokémon by primary type, and use another reduce() to find the tallest Pokémon. Implement the same count with forEach() and a plain for...of loop. Compare readability and mutation: reduce returns an accumulated result, while forEach is usually used for side effects. Avoid copying the whole accumulator object on every iteration unless immutability is part of the exercise.`,learn:`reduce and forEach`},{title:`Find the min and max without sorting`,task:`Find the lightest and heaviest Pokémon in one pass using reduce(), without sorting the array. Then write a second version using a for...of loop that keeps running minimum and maximum values. Compare both approaches. Try Math.min(...weights) with the 151-item dataset, then explain why spreading a very large array into function arguments can exceed an engine argument limit.`,learn:`How do you find the minimum and maximum value in an array`},{title:`Get bitten by coercion`,task:`Create a small test using IDs represented as strings and numbers. Log the results of "25" === 25, "25" == 25, Number("25px") and parseInt("25px", 10). Then normalize IDs once when converting API data into your view model, rather than repeatedly coercing values throughout the component. Use optional chaining and nullish coalescing for optional API fields, and verify that a valid value of 0 is not replaced by a fallback.`,learn:`Type coercion in JavaScript`},{title:`Use the ES6+ syntax you actually want to use daily`,task:`Refactor the pipeline using destructuring, default parameters, template literals, object property shorthand and optional chaining. Use Array.from() to create an array from an iterable or array-like value, and Object.entries() to iterate over the type-count object. Keep the transformation logic in pure functions so it can be tested without rendering an Angular component.`,learn:`ES6+ features worth knowing`}],stretch:[`Group the Pokémon by type with a Map instead of an object so numeric keys are safe.`,`Chunk the array into pages of 20 with a single reduce.`,`Make the whole pipeline lazy with a generator so you stop fetching when you have enough.`],starter:`// pokemon-data.service.ts
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
// Fetch detail records separately; the list endpoint does not include stats.`,covers:[`js-9`,`js-16`,`js-19`,`js-20`]},{id:`js-collections-prototypes`,category:`javascript`,title:`Build a Pokémon registry with Map, Set and prototypes in Angular`,summary:`Use JavaScript collections and prototype inheritance inside an Angular service and TypeScript model.`,durationMinutes:90,prompt:`Build a reusable Pokémon registry inside your Angular application. Store Pokémon details for fast lookup, maintain a unique list of discovered types, and keep UI-only state separate from API data. Use an injectable service for the registry and HttpClient for API requests. Learn JavaScript collections and prototype behaviour through the implementation, while keeping the Angular code typed and testable.`,endpoints:[{path:`/pokemon?limit=`,note:`Fetch the list of Pokémon names to register.`},{path:`/pokemon/{name}`,note:`Fetch individual Pokémon details, including types and stats.`}],steps:[{title:`Create a registry using Map and Set`,task:`Create PokemonRegistryService with @Injectable({ providedIn: "root" }). Add a private Map<string, Pokemon> for Pokémon lookup and a private Set<string> for discovered types. Implement registerPokemon() and getPokemonByName(). Register two Pokémon that share a type and verify that both are stored in the Map while the Set contains the shared type once. Compare this with a plain object using "constructor" as a key. Remember that arrays and Sets both preserve insertion order; the Set additionally enforces uniqueness.`,learn:`What is the difference between Map, Set, arrays and plain objects? When should you use each? Why is Map useful for key-based lookups?`},{title:`Connect the registry to an Angular API service`,task:`Use HttpClient in the service to fetch Pokémon details. The API response is a plain object, not automatically an instance of your Pokemon class. Map the response into a Pokemon instance (including converting the API's type and stat arrays into the model shape), then register that instance. Create getAndRegisterPokemon(name) that returns an Observable and emits the registered instance only after the request succeeds. Fetch at least three Pokémon, then retrieve them from the Map. Confirm that a second lookup can use the in-memory registry instead of making another HTTP request.`,learn:`How does HttpClient work in Angular? Why should API calls live in services instead of components? How can Map act as an in-memory cache?`},{title:`Use WeakMap to separate UI state from API data`,task:`Add a WeakMap keyed by Pokémon object references. Store UI state such as expanded and selected in the WeakMap rather than adding those properties to the API model. Implement methods to set and get the UI state. Verify that WeakMap has no size property and cannot be iterated. Explain why its keys must be objects and why the WeakMap does not keep an otherwise unreachable key alive. Do not try to prove garbage collection with a deterministic console test; collection timing is controlled by the runtime.`,learn:`What is WeakMap? How is it different from Map? What is garbage collection? When would WeakMap be useful in an Angular application?`},{title:`Create Pokémon classes and understand inheritance`,task:`Create a Species class in a separate model file with a name property and a slug getter. Create a Pokemon class that extends Species and adds types and stats. Add hasType(type) to the class. Instantiate two Pokémon and inspect Object.getPrototypeOf(pokemon), Pokemon.prototype and Species.prototype. Trace the chain through Object.prototype to null. Add a method to Species.prototype in a controlled experiment and confirm both instances can access it. Avoid modifying built-in prototypes or shared application prototypes in production code.`,learn:`What are classes and inheritance in JavaScript? What is the prototype chain? How does the extends and super keyword work? What is the difference between an instance property and a prototype method?`},{title:`Understand methods, functions and this`,task:`Compare a hasType() instance method with a standalone hasPokemonType(pokemon, type) function. Call both and then pass the instance method as a callback to a function such as setTimeout or Array.map. Observe what happens when the method loses its receiver. Also create an object with its own hasOwnProperty property and use Object.prototype.hasOwnProperty.call(object, "name") to check a property safely.`,learn:`What is the difference between a function and a method? What does this refer to? Why can this lose its context? How do standalone functions differ from object methods?`},{title:`Experiment with call(), apply() and bind()`,task:`Write a normal function that checks whether this Pokémon has a requested type. Invoke it with call(), apply() and bind(): call passes arguments individually, apply passes them as an array, and bind returns a new function with a fixed receiver. Call the bound function more than once. Compare with an arrow function and explain that arrow functions capture this lexically, so call/apply/bind cannot replace their this value.`,learn:`What do call(), apply() and bind() do? How are their arguments different? Why does bind() return a new function? Why do arrow functions behave differently with this?`},{title:`Protect cached Pokémon data from modification`,task:`Take a Pokémon detail object and test Object.freeze(), Object.seal() and Object.preventExtensions() on separate copies. Try changing an existing property, adding a new property and deleting a property. Use Object.defineProperty() to create a non-writable displayName property. Then freeze the outer object and try changing its nested types array and stats object. Explain why Object.freeze() is shallow, and implement a safe deep-freeze helper for this plain data shape or store a defensive copy. Do not assume freezing an HttpClient response automatically makes nested data immutable.`,learn:`What is object immutability? What is the difference between Object.freeze(), Object.seal() and Object.preventExtensions()? What is shallow freezing versus deep freezing? How does Object.defineProperty() work?`}],stretch:[`Use structuredClone() to create an independent copy of a frozen Pokémon object and verify that the copy can be modified without affecting the original.`,`Create a Set of Pokémon types inside each Pokemon instance so hasType() can perform fast membership checks without repeatedly using Array.includes().`,`Add a method to PokemonRegistryService that returns all Pokémon belonging to a particular type. Use the registry Map and filter by the Pokémon type data.`,`Compare structuredClone() with JSON.parse(JSON.stringify()) using objects containing undefined values, Dates, Maps and Sets. Identify what information each approach preserves or loses.`,`Create a shared Species base class and extend it with separate Pokemon and LegendaryPokemon classes. Add a method to the base class and verify that all subclasses inherit it.`,`Add a removePokemon() method to the registry. Remove the Pokémon from the Map and update the Set of discovered types without accidentally removing types that are still used by other Pokémon.`],starter:`// pokemon.model.ts

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
}`,covers:[`js-11`,`js-13`,`js-18`,`js-6`,`js-14`]},{id:`js-query-builder`,category:`javascript`,title:`Build a reusable query-parameter utility for Angular`,summary:`Use spread, rest, nullish checks and URLSearchParams to build safe API requests.`,durationMinutes:90,prompt:`Your Angular Pokédex needs to request filtered pages from PokéAPI. Build a small, typed query-parameter utility that accepts optional filters, omits only values that are genuinely empty, and returns a valid URL or HttpParams object. Keep the utility separate from the component so it can be unit-tested.`,endpoints:[{path:`/pokemon?limit=&offset=`,note:`The URL your builder has to produce`},{path:`/pokemon-species/{name}?limit=`,note:`Second route with different params`}],steps:[{title:`Use spread three different ways`,task:`Create a typed filter interface and a utility function that accepts a filter object. Use object spread to combine default options with caller overrides, and use a rest parameter when collecting additional options. Pass the merged options to HttpParams or URLSearchParams. Test that a caller can override a default limit without changing the original defaults object. Explain why a rest parameter must be last and why object spread makes only a shallow copy.`,learn:`Spread operator vs rest parameters`},{title:`Spread or Object.assign?`,task:`Merge two filter objects once with object spread and once with Object.assign(). Test with ordinary properties, a getter, a Set and a function-valued property. Observe that spread copies own enumerable values into a new object, while Object.assign() writes into its target and can trigger setters on that target. Choose one approach for your utility and explain why.`,learn:`Object.assign vs object spread`},{title:`Distinguish null from undefined`,task:`Pass null, undefined, 0, false and an empty string as filter values. Compare == null, === null, || and ??. Confirm that 0 and false are valid values and should not be replaced by defaults. Use ?? when you want a fallback only for null or undefined, not for every falsy value.`,learn:`Difference between null and undefined`},{title:`Drop empty values the right way`,task:`Build the query parameters from Object.entries(). Exclude only undefined, null and empty strings while retaining 0 and false. Add a test for each value so the rule is explicit. Do not use filter(Boolean), because that would incorrectly remove 0 and false.`,learn:`Truthiness vs explicit checks`},{title:`Produce a URL and prove it`,task:`Use Angular HttpParams or the browser URLSearchParams API to encode the query values safely. Build URLs for two different filter sets, including a value containing a space or special character. Print the resulting URL and make a request through HttpClient to verify that the API accepts it. Keep URL construction in the utility or service, not in the component template.`,learn:`Composing URLs safely`}],stretch:[`Support an array value that becomes repeated keys (type=fire&type=water).`,`Add a helper that merges filter defaults without mutating either input object, and test that HttpParams.set() returns a new instance.`,`Write a parse function that turns the URL back into the filter object.`],starter:`// pokemon-query.util.ts
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
// HttpParams is immutable: set() returns a new instance.`,covers:[`js-10`,`js-17`,`js-4`]},{id:`js-event-delegation`,category:`javascript`,title:`Handle Pokémon card interactions in Angular and understand event delegation`,summary:`Use Angular event binding first, then inspect native event propagation and delegation.`,durationMinutes:45,prompt:`Build interactions for a grid of Pokémon cards in your Angular Pokédex. Use Angular template event bindings for normal application behaviour, then create a small controlled experiment with native DOM listeners to understand capture, bubbling and event delegation. Do not replace Angular event binding with manual DOM manipulation in production components.`,endpoints:[{path:`/pokemon?limit=151`,note:`How many cards you are handling`}],steps:[{title:`Trace the three phases`,task:`In a Pokémon card template, add a click handler to the card and another to a button inside it. Log $event.target and $event.currentTarget from the handlers. Then create a small native DOM experiment with capture and bubble listeners on a parent and child element. Observe the order: capture travels down toward the target, then bubbling travels back up. Explain why target is the originating element while currentTarget is the element whose listener is currently running.`,learn:`Event propagation, capture and bubble`},{title:`Stop the right thing`,task:`Add a link inside a card and test its click behaviour. Use preventDefault() to stop the browser navigation, stopPropagation() to stop the event travelling to ancestor listeners, and stopImmediatePropagation() to also prevent later listeners on the same element from running. Test each separately and record which listeners still execute. In Angular, call these methods on $event only when the interaction genuinely requires them.`,learn:`preventDefault vs stopPropagation`},{title:`Delegate from the container`,task:`Create a native JavaScript experiment with one click listener on a grid container. Use event.target.closest("[data-pokemon]") to identify the clicked card and read its dataset. Add a favourite button and branch based on the closest matching action element. Compare this with Angular template bindings on each card. Explain that Angular event bindings are normally clearer and safer for component interactions; delegation is useful when working with dynamic non-Angular DOM or when deliberately managing a large native DOM surface.`,learn:`Event delegation with closest()`},{title:`Know what this is`,task:`Compare a normal function event listener with an arrow function listener in a standalone DOM experiment. Inspect this, event.target and event.currentTarget. Explain that a normal listener usually receives the element as this, while an arrow function keeps the this value from its surrounding scope. In Angular component methods, use the component instance and template event binding rather than relying on DOM listener this.`,learn:`Arrow functions vs function declarations`},{title:`Clean up without leaking`,task:`In the native experiment, add and remove a listener using the same function reference, then repeat using an AbortController signal. In an Angular component, use a template event binding where possible; if you must register a native listener manually, clean it up with DestroyRef or ngOnDestroy. Finally, log the order of Promise.then(), queueMicrotask() and setTimeout(0) to compare microtasks and macrotasks.`,learn:`Listener cleanup and the task queues`}],stretch:[`Add a { passive: true } wheel or touch listener and note what you can no longer do.`,`Handle the same events by keyboard with the grid as a listbox and roving tabindex.`,`Rewrite the delegated handler as a custom event dispatched from the card instead.`],starter:`// Preferred Angular approach: handle interactions in the template.
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
// remove them with DestroyRef/ngOnDestroy or an AbortController.`,covers:[`js-7`,`js-8`,`js-5`]},{id:`js-modules-lazy`,category:`javascript`,title:`Organise an Angular Pokédex into modules and lazy-loaded routes`,summary:`Separate responsibilities with Angular services and load the Pokémon detail feature on demand.`,durationMinutes:60,prompt:`Refactor the Pokédex so its code is organised by responsibility and the Pokémon detail feature is loaded only when the user navigates to it. Use Angular services and feature files for normal application structure, and use Angular Router lazy loading rather than manually importing and rendering DOM modules.`,endpoints:[{path:`/pokemon?limit=20`,note:`Loaded eagerly, needed for the grid`},{path:`/pokemon/{name}`,note:`Loaded lazily, needed by the detail view only`}],steps:[{title:`Split by responsibility, not by size`,task:`Separate API access, display formatting and UI rendering by responsibility. Keep HTTP calls in an injectable API service, put reusable pure formatting functions in a utility file, and keep rendering in Angular components and templates. Import only what each file needs. Confirm that the formatting utility accepts plain data and does not depend on HttpClient or a component.`,learn:`ES modules and named vs default exports`},{title:`Load the detail view lazily`,task:`Move the Pokémon detail page into a separate standalone component or feature route. Configure the Angular Router with loadComponent() or loadChildren() so the detail feature is loaded only when the user navigates to that route. Open the browser Network panel and inspect the JavaScript chunks before and after navigating to a detail page. Explain the difference between lazy loading a route and manually calling import() inside a click handler.`,learn:`Dynamic import() and code splitting at module level`},{title:`Let the module graph tell you the truth`,task:`Create a small experiment using top-level await in a native ES module and compare it with calling an async function later. Observe that importers wait for a module with top-level await to finish evaluating. Then explain why API requests are usually better initiated by Angular services or route resolvers rather than as top-level module side effects.`,learn:`Module evaluation order and top-level await`},{title:`Show why one thread is enough`,task:`Use forkJoin() or Promise.all() to request several Pokémon details concurrently and log the order in which requests start and responses arrive. Then run a deliberately blocking loop and observe how it delays rendering and promise callbacks. Explain that JavaScript runs application code on the main thread, while browser I/O can progress asynchronously.`,learn:`Why JavaScript is single-threaded yet concurrent`}],stretch:[`Handle a dynamic import that fails (offline) with a try/catch and a retry affordance.`,`Use an import map so the CDN base URL is not hardcoded in every file.`,`Show the same code as a CommonJS require and explain the interop difference.`],starter:`// app.routes.ts (standalone Angular routing)
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
// Angular Router loads the detail component chunk when the route is visited.`,covers:[`js-5`,`js-16`]},{id:`js-broadcast-channel`,category:`javascript`,title:`Synchronise Pokémon favourites across Angular tabs`,summary:`Use BroadcastChannel, an Angular service and lifecycle cleanup to share state between tabs.`,durationMinutes:45,prompt:`Build a favourites feature that stays in sync across multiple open tabs of your Angular Pokédex. Use BroadcastChannel for cross-tab messages and an injectable service to manage the channel. Persist the latest favourite IDs so a newly opened tab can restore the current state.`,endpoints:[{path:`/pokemon?limit=20`,note:`The list whose favourites you sync`},{path:`/pokemon/{name}`,note:`The detail a tab opens from a synced selection`}],steps:[{title:`Open two tabs and prove the message travels`,task:`Create an injectable FavouritesSyncService that opens a BroadcastChannel named "pokemon-favourites". Open the application in two browser tabs and send a test message from one tab. Confirm that the other tab receives it and that the sending tab does not receive its own message. Explain that BroadcastChannel delivers messages to other eligible contexts on the same origin.`,learn:`What is the BroadcastChannel API`},{title:`Structured clone, not JSON`,task:`Send a Set of favourite IDs and a Date through postMessage(), then inspect the received values. Try sending a function and a DOM node and observe the DataCloneError. Send a class instance and inspect whether its prototype and methods are preserved; structured cloning does not preserve custom prototype chains.`,learn:`Structured clone limits`},{title:`Sync a real interaction`,task:`Connect the service to a real favourite action. When a user favourites a Pokémon, update the local state and broadcast a message containing the new full list of favourite IDs or an explicit "set" operation. When another tab receives the message, update its state without broadcasting the same change again. Test two tabs changing different favourites and decide how your service handles simultaneous updates.`,learn:`Idempotent messages and one source of truth`},{title:`Handle the tab that opens late`,task:`Open a third tab after changing favourites in the first two. Confirm that it does not receive earlier BroadcastChannel messages because the channel does not replay history. Restore the initial state from localStorage when the service starts, and persist each update. Optionally add a "hello" message so existing tabs can respond with their latest state. Compare this handshake with simply reading localStorage on startup.`,learn:`No replay: pairing the channel with persistent state`},{title:`Clean up and compare the alternatives`,task:`Close the BroadcastChannel when the service or owning component is destroyed, using ngOnDestroy or DestroyRef as appropriate. If you register native event listeners, remove them during cleanup. Compare BroadcastChannel with the window storage event and window.postMessage(), and describe when each is appropriate. Handle browsers where BroadcastChannel is unavailable.`,learn:`Channel lifecycle and the alternatives`}],stretch:[`Feature-detect "BroadcastChannel" in window and fall back to the storage event.`,`Elect a single writer with the Web Locks API so only the leader persists state.`,`Show a message arriving in an iframe and in a web worker on the same channel.`,`Show a tab frozen in the back/forward cache missing a message, and how you recover.`],starter:`// favourites-sync.service.ts
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
// and handle storage/JSON errors. This service is a learning starter.`,covers:[`js-25`]},{id:`js-polyfill-map`,category:`javascript`,title:`Rebuild array methods and bind as JavaScript practice in Angular`,summary:`Implement map, filter, reduce and bind as standalone utilities, then test their edge cases.`,durationMinutes:60,prompt:`Use your Angular Pokédex project as the test environment, but implement these exercises as standalone JavaScript or TypeScript utility functions. Rebuild selected native methods and compare them with the built-ins. Do not overwrite built-in prototypes in your application; keep your implementations as named utilities and test them independently.`,endpoints:[{path:`/pokemon?limit=151`,note:`The list you transform with your own methods`},{path:`/pokemon/{id}`,note:`Per-Pokémon data for the reduce and bind exercises`}],steps:[{title:`Write the contract before the code`,task:`Before coding, write down the behaviour you intend to support for map, filter and reduce: what happens when the receiver is null or undefined, when the callback is not a function, which arguments the callback receives, how thisArg works, how sparse-array holes are handled, and what happens when reduce receives an empty array without an initial value. Use MDN or the ECMAScript specification to check your list before implementing.`,learn:`What is a polyfill, and which details of the built-in contract matter`},{title:`Implement map against the list`,task:`Implement a named myMap() utility. Validate the receiver and callback, capture the array-like length once, skip indexes that do not exist, call the callback with value, index and the original collection, and return a new array. Test normal arrays, sparse arrays, strings and array-like objects. Keep the function separate from Array.prototype.map so you can compare both implementations.`,learn:`How this, prototypes and sparse arrays behave in practice`},{title:`Implement filter and reduce`,task:`Implement myFilter() so it skips holes and preserves the order of matching values. Implement myReduce() so it throws when the collection is empty and no initial value is supplied, and so it starts with the first present index when the initial value is omitted. Test both functions with your Pokémon data and compare their results with the native methods.`,learn:`The edge cases that separate a working polyfill from a spec-shaped one`},{title:`Rebuild bind, not just call`,task:`Implement myBind() as a separate utility that presets a receiver and optional leading arguments, then returns a function that accepts the remaining arguments. Test multiple calls with different trailing arguments. Then use the returned function with new and investigate why a faithful bind implementation must account for constructor calls and the new.target behaviour. Do not treat a simplified implementation as a complete polyfill.`,learn:`How call, apply and bind work under the hood`},{title:`Install it without polluting the page`,task:`Do not install your methods on Array.prototype in the Angular application. As a separate experiment only, feature-detect a custom method and use Object.defineProperty() to make it non-enumerable. Inspect Object.keys(Array.prototype) and a for...in loop. Explain why production libraries usually prefer ponyfills (standalone functions) over modifying built-in prototypes.`,learn:`Feature detection, defineProperty and when a global patch is unsafe`},{title:`Prove the behaviour with tests`,task:`Write unit tests for normal input, empty input, sparse input, invalid callbacks, thisArg and array-like receivers. Run each test against both the native method and your implementation. Compare array length, missing indexes, returned values and thrown errors; JSON.stringify alone is not sufficient to detect sparse-array differences. Use the test runner configured in your Angular project.`,learn:`How to test a polyfill against the behaviour it is replacing`}],stretch:[`Polyfill Promise.all, keeping results in input order and rejecting on the first failure.`,`Write debounce and throttle with a cancel method, and test them with fake timers.`,`Implement a deep clone that handles cycles, arrays and Date, and explain what structuredClone still does better.`,`Write Object.create and explain how its prototype argument differs from a class constructor.`],starter:`// Start with a named ponyfill so the native method stays available.
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

// Next: myFilter, myReduce, myBind, then the feature-detected install.`,covers:[`js-26`,`js-9`,`js-14`]}];var g=[{id:`css-theme-tokens-angular`,category:`angular`,title:`Build a Light and Dark Theme System in Angular`,summary:`Learn CSS custom properties, Angular signals, component styling, specificity and cascade layers by building a complete theme system.`,durationMinutes:60,prompt:`Build a light and dark theme system for the Angular Pokédex application. The user should be able to switch themes using a button. All colours, shadows, borders and border radii must be controlled through CSS custom properties. Angular signals should manage the selected theme, and CSS should handle the actual appearance changes. The theme must apply consistently across all components without duplicating styles or using !important.`,endpoints:[{path:`/type/{type}`,note:`Use the selected type as a theme key; colours are local CSS tokens.`}],steps:[{title:`Create a central place for theme variables`,task:`Open src/styles.scss, which contains the global styles for your Angular application. Inside :root, define CSS custom properties for the following: --surface, --text-color, --accent-color, --border-color, --card-radius and --card-shadow. Give each variable a light-theme value. Next, open the SCSS file of an existing component, such as your Pokémon card, and replace its hardcoded background and text colours with var(--surface) and var(--text-color). Do the same for its border, radius and shadow. Finally, change the value of --surface in styles.scss and verify that the card updates without modifying its component stylesheet.`,learn:`What are CSS custom properties? What does var() do? Why should shared design tokens be declared globally rather than separately in every component?`},{title:`Add a dark theme using CSS attributes`,task:`In src/styles.scss, create a [data-theme="dark"] selector. Inside it, redefine the same custom properties you created in :root, but give them dark-theme values. Do not create new component selectors or duplicate your existing card styles. For example, change --surface from white to a dark colour and --text-color from dark to white. Manually add data-theme="dark" to your applications root container in app.component.html and verify that the existing components automatically adopt the dark theme. Remove the attribute and verify that the light theme returns.`,learn:`How do CSS custom properties inherit? How does an attribute selector work? Why can the same component stylesheet support multiple themes without duplicating CSS rules?`},{title:`Connect the theme to Angular signals`,task:`Open app.component.ts and create a signal named theme with an initial value of light. Create a toggleTheme() method that switches the signal between light and dark. In app.component.html, bind the root container attribute using [attr.data-theme]="theme()". Add a button with (click)="toggleTheme()". Click the button and verify that the data-theme attribute changes in the browser Elements panel and that the entire application switches themes. Make sure the button remains visible and usable in both themes.`,learn:`How do Angular signals work? What is the difference between [attr.data-theme] and [data-theme]? How does Angular event binding work?`},{title:`Make theme variables available to every component`,task:`Open the SCSS files of at least two different components, such as the Pokémon card and Pokémon details components. Use the global variables you created earlier for their backgrounds, text, borders and shadows. Do not redeclare these variables inside either component. Inspect the rendered elements in browser DevTools and understand how Angulars default ViewEncapsulation.Emulated scopes component styles while still allowing inherited CSS custom properties to reach child elements. As a test, change a global token and verify that both components update.`,learn:`What is ViewEncapsulation.Emulated? How does Angular scope component styles? Why can global CSS custom properties be consumed inside component stylesheets?`},{title:`Understand CSS specificity and fix conflicting styles`,task:`In your global styles.scss, create a .type-chip rule that sets the chip background to red. Then create another rule using #pokemon-details .type-chip that sets the background to blue. Add a chip inside an element with the ID pokemon-details and observe which colour wins. Open browser DevTools, inspect the chip and identify the winning declaration in the Styles panel. Now replace #pokemon-details with a class selector and experiment with the order of the rules. Your goal is to understand why the ID selector wins and why avoiding unnecessary IDs makes styles easier to override. Do not solve the conflict using !important.`,learn:`How is CSS specificity calculated? What happens when two selectors have different specificity? What happens when they have equal specificity? Why are classes generally better than IDs for styling?`},{title:`Organise styles using CSS cascade layers`,task:`In src/styles.scss, declare the following layers in this exact order: @layer base, components, utilities. Move your basic application styles into base, reusable component styles into components, and helper classes into utilities. Now create the same .type-chip selector in both base and utilities, but give each a different background colour. Verify that the utilities declaration wins. Next, increase the specificity of the selector in base and verify that the normal declaration in utilities still wins. This demonstrates that normal declarations in later layers take precedence over earlier layers, even when the earlier selector has higher specificity.`,learn:`What are CSS cascade layers? How do layers affect specificity? How does the order of layers differ from the order of selectors?`}],stretch:[`Use prefers-color-scheme to detect whether the users operating system prefers light or dark mode. Apply that preference when the application first loads.`,`Persist the selected theme in localStorage so refreshing the browser does not reset the users choice.`,`Create a ThemeService using Angular signals. Move the theme signal and toggleTheme() method into the service, then inject it into AppComponent.`,`Add a --type-color CSS custom property and dynamically assign Pokémon type colours using Angular [style.--type-color] binding.`,`Use color-mix() to generate hover and border colours from existing theme tokens instead of defining additional hex values.`,`Use a CSS container query to change the card radius when a Pokémon card is displayed inside a narrow container.`],starter:`/* src/styles.scss */

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
}`,covers:[`css-7`,`css-6`,`css-12`,`signals-1`,`angular-2`,`angular-39`]},{id:`angular-content-projection`,category:`angular`,title:`Card shell with named projection slots`,summary:`One card layout, four call sites, no duplicated markup.`,durationMinutes:60,prompt:`Four places in the dex need a card: the grid, the search results, the "my favourites" list and the detail header. Build the shell once with content projection and let each caller decide what goes in.`,endpoints:[{path:`/pokemon?limit=20`,note:`Fills the grid call site`},{path:`/pokemon/{name}`,note:`Fills the detail call site`}],steps:[{title:`The naive version`,task:`Copy your existing card markup into the four call sites, then add one field (a "favourite" toggle) to all four and count the edits. That duplication is the argument for projection.`,learn:`Why projection exists`},{title:`One slot, then a named slot`,task:`Build <app-pokemon-card> with a single <ng-content> and pass the sprite, name and types in. Then convert it to named slots: <ng-content select="[card-media]">, <ng-content select="[card-body]"> and <ng-content select="[card-actions]">. Note that any markup that matches no selector is dropped, which is the single most common projection bug.`,learn:`What is content projection (ng-content)`},{title:`Project the same card four ways`,task:`Use the shell in the grid with the sprite projected, in the search results with a highlighted name, in favourites with a delete action in the footer slot, and in the detail header with no media at all. One component, four templates, zero conditionals inside the shell.`,learn:`Content projection`},{title:`Control where content lands`,task:`Add fallback markup directly inside the matching <ng-content> element (for example, a loading message inside <ng-content select="[card-loading]">). This fallback appears only when no matching content is projected. Separately, create an <ng-template> in the caller and render it with NgTemplateOutlet when you need a caller-controlled template; ng-template is not itself a projection slot. Use ngProjectAs on a projected element when it should match a slot selector without adding that selector attribute.`,learn:`ng-template slots, fallback content and ngProjectAs`},{title:`Be honest about the trade-off`,task:`Explain the real boundary: the caller owns the projected markup and can style it, but the shell cannot rearrange the caller’s internal markup. Use contentChild/contentChildren to query projected content and viewChild/viewChildren for elements declared in the shell’s own template. Decide whether the detail header has outgrown a shell with slots and should be its own component.`,learn:`When projection is the wrong abstraction`}],stretch:[`Project an <input> into a form-aware slot and wrap it with a label you do not own.`,`Compare ng-content projection with NgTemplateOutlet and template fragments; Angular content projection itself is still declared with ng-content.`,`Query projected content with contentChild() and read its value.`,`Make the shell a standalone component and import it four times.`],starter:`@Component({
  selector: 'app-pokemon-card',
  imports: [MatCard],
  template: \`
    <mat-card>
      <ng-content select="[card-media]" />

      <mat-card-content>
        <ng-content select="[card-body]" />

        <ng-content select="[card-loading]">
          <p>Loading\u2026</p> <!-- fallback: rendered when nothing is projected here -->
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
</app-pokemon-card>`,covers:[`angular-21`,`angular-2`,`angular-1`]},{id:`angular-signal-paginator`,category:`angular`,title:`Reusable pagination component`,summary:`Pull your pagination out of the list so any list can use it.`,durationMinutes:90,prompt:`Paginate the PokéAPI list, then pull the pagination out into an <app-paginator> that any list can use. No page index logic is allowed to live inside the list.`,endpoints:[{path:`/pokemon?limit=&offset=`,note:`limit and offset come straight from the component`},{path:`/pokemon/{name}`,note:`Optional detail fetch when the page changes`}],steps:[{title:`Reusable pagination component`,task:`Pull your pagination out into a <app-paginator> that any list can use. Use input.required<number>() for totalItems, input(20) for pageSize, output<number>() for pageChange, and a linkedSignal for the current page. Use computed for totalPages and the page-number buttons (1 2 3 ... 10), so the button list is never state you have to keep in sync by hand.`,learn:`Components, data binding, and the signal input/output APIs`},{title:`linkedSignal for the reset`,task:`Make the current page reset to 1 whenever pageSize changes. Use linkedSignal with pageSize as its source, and make that linkedSignal the paginator’s page state. Because linkedSignal is a writable signal but is not a model() input/output pair, expose pageChange separately if the parent must be notified, or keep page state in the parent and reset it in the page-size change handler. Choose one ownership model and do not maintain two competing page signals. Explain why an effect is unnecessary for this derived reset.`,learn:`linkedSignal, and derived state that resets with its source`},{title:`Keep the data fetch honest`,task:`In the parent, derive offset from the current page and pageSize: offset = (page - 1) * pageSize. Convert the changing request state to an Observable with toObservable(), then use switchMap() to call HttpClient; finally convert the result back to a signal with toSignal(), or bind the Observable with async. Do not call .pipe() directly on a signal or use an effect just to fetch data. Log the offset for three page changes to verify the calculation.`,learn:`constructor vs ngOnInit, and async pipe / toSignal for async data`}],stretch:[`Jump-to-page input that clamps to totalPages.`,`Ellipsis logic so 200 pages still render as 1 ... 24 25 26 ... 200.`,`Disable or hide the edges instead of rendering dead buttons.`,`Keyboard support: Home, End, PageUp, PageDown.`],starter:`@Component({
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
// changes pageSize.`,covers:[`angular-5`,`angular-16`,`angular-17`,`angular-1`,`signals-1`,`signals-8`]},{id:`angular-star-rating`,category:`angular`,title:`Star rating component that works inside a form`,summary:`Signal inputs for configuration, then ControlValueAccessor for reactive-form integration.`,durationMinutes:75,prompt:`Build a 5-star rating with a hover preview, then make it work inside a reactive form. The hover state must never leak into the saved value.`,endpoints:[{path:`/pokemon/{name}`,note:`Persist the rating per Pokémon`},{path:`/pokemon?limit=`,note:`Show the average rating in a summary row`}],steps:[{title:`Star rating component`,task:`A 5-star rating with hover preview, usable in a form. Start with a local signal for the value and transformed input() values for max and readonly. Then implement ControlValueAccessor for reactive forms. Do not combine model() as the public value API with ControlValueAccessor for the same value; choose one integration contract for each usage.`,learn:`@Input and @Output, and how the signal APIs change them`},{title:`Local hover state plus one computed`,task:`Keep a local signal for the hovered star, and a computed for what to display (hover preview while hovering, actual value otherwise). The computed is what the template reads, so the rule "hover never becomes the value" lives in one readable line instead of scattered ngIfs.`,learn:`Data binding and derived state`},{title:`Make it form-compatible`,task:`Wrap it in a form with FormControl and control.valueChanges. Then add NG_VALUE_ACCESSOR to the star component: writeValue, registerOnChange, registerOnTouched, setDisabledState. Push the value from registerOnChange, never by writing to the control directly, and decide whether 0 is valid; add Validators.min(1) if a rating is required, or leave 0 valid for an optional rating.`,learn:`Reusable form input that works with ngModel and reactive forms`}],stretch:[`Half stars by splitting each star into two hit areas and storing 0.5 steps.`,`Keyboard support: arrow keys change the value, Home resets, Space sets it.`,`Use a labelled radiogroup with an accessible name for each star and aria-checked/aria-pressed state; do not put interactive buttons inside an element with role="slider".`,`Disable the component from the parent form and see setDisabledState fire.`],starter:`@Component({
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
    <div role="group" aria-label="Pok\xE9mon rating">

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
}`,covers:[`angular-5`,`angular-2`,`angular-12`,`angular-22`]},{id:`angular-todo-app`,category:`angular`,title:`Pokémon to-do list with filters and persistence`,summary:`Full CRUD on a signal array, derived filters, and a child component with clean IO.`,durationMinutes:120,prompt:`Add, toggle, delete and edit a "catch list", filter it by All/Active/Completed, show a count of remaining items, and persist to localStorage. Everything in one feature folder.`,endpoints:[{path:`/pokemon?limit=151`,note:`The picker you add items from`},{path:`/pokemon/{name}`,note:`Details for the item being added`}],steps:[{title:`State and immutable updates`,task:`Keep todos in a single signal<Todo[]>() and update it with update() instead of mutating the array. Add, toggle, delete and edit all go through it. Confirm the array reference changes on every update - that is what makes OnPush and computed see the change.`,learn:`What is a component in Angular, and data binding`},{title:`Derived state, never stored state`,task:`Use computed for the filtered list (All/Active/Completed) and for the remaining count. Do not keep filteredTodos as a signal you update in three places: the filter signal is the only input, and the two computeds are derived from it.`,learn:`Change detection and computed state`},{title:`Persistence as a side effect`,task:`Read the stored list before the first save effect can run, validate the parsed data, and then persist changes with effect(). Guard browser-only APIs with isPlatformBrowser (or inject DOCUMENT and check the platform) so the feature also works during server-side rendering. Test a missing key and malformed JSON.`,learn:`Signals, computed and effect`},{title:`Child component with honest IO`,task:`Build a TodoItem child with input.required<Todo>() and output() for toggle / delete. Keep it presentational: it receives a Todo through input.required<Todo>() and emits typed outputs for toggle/delete. The parent or store owns the state update; do not rely on DOM event bubbling to communicate between Angular components.`,learn:`Component boundaries and unidirectional data flow`},{title:`Focus management`,task:`Inline edit with viewChild() to focus the input when editing starts and to return focus to the row when it saves. Handle the case where the item is deleted while the input is focused.`,learn:`Template references, view queries and lifecycle`}],stretch:[`Clear completed with a single update and a confirmation.`,`Drag to reorder: hold the index in the update callback, do not track it in state.`,`Undo the last delete by keeping the removed todo and its index for 5 seconds.`,`Route to /todos so the list survives a refresh through the URL.`],starter:`interface Todo {
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
}`,covers:[`angular-1`,`angular-2`,`angular-16`,`signals-3`,`signals-1`]},{id:`angular-filter-store`,category:`angular`,title:`Two unrelated components that must stay in sync`,summary:`A sidebar filter and a results list with no parent to talk to.`,durationMinutes:60,prompt:`Build a filter sidebar and a results table that know nothing about each other, yet must always agree. If one of them can be deleted without breaking the app, the design is wrong.`,endpoints:[{path:`/pokemon?limit=&offset=`,note:`The filtered list request`},{path:`/type/{type}`,note:`Returns Pokémon associated with the selected type`}],steps:[{title:`Find the shared owner`,task:`Before writing code, list what both components need: the filter state, the total count, the loading flag, the results. That list is the service. Write its public surface first, then implement each component against it.`,learn:`What is dependency injection`},{title:`One source of truth, provided once`,task:`Make the filter a single writable signal inside a providedIn: 'root' service, and have both components inject it. Neither component passes anything to the other, and neither calls the API. Move the sidebar and the table to different routes - they still agree.`,learn:`Sharing state between sibling components`},{title:`Decide where the request belongs`,task:`Put the HTTP call in the service, keyed off the filter, so neither component duplicates it. Use a cache or shareReplay so switching between two components does not refetch what is already loaded.`,learn:`Where side effects live in an Angular app`},{title:`Model loading and error per state`,task:`Represent request state as a discriminated union (idle / loading / loaded / error) and expose it to both components. Derive loading, error and total from that state so they cannot contradict one another. Verify that a failed request does not terminate the filter stream: changing the filter afterwards should issue a new request.`,learn:`Representing UI state explicitly`}],stretch:[`Sync the filter into the URL query params so the view is shareable and survives a reload.`,`Persist the filter per user in the service and restore it on login.`,`Add a second consumer (a footer summary) that reads the same service.`,`Broadcast filter changes across browser tabs with BroadcastChannel.`],starter:`interface PokemonList {
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
// They share state and neither knows the other exists.`,covers:[`angular-8`,`angular-4`,`angular-2`]},{id:`angular-runtime-forms`,category:`angular`,title:`Generate the filter form from a JSON schema`,summary:`Forms built at runtime, shared across a stepper, plus an async validator.`,durationMinutes:90,prompt:`A mock backend endpoint returns a JSON schema and the app builds the filter form from it. PokéAPI does not provide form schemas, so use a local fixture or mock endpoint for this part. Then add a "name already taken" check that runs while the user types.`,endpoints:[{path:`/pokemon/{name}`,note:`Returns 404 for an unknown name - use it for the async validator`},{path:`/api/filter-schema`,note:`Mock/local backend endpoint; PokéAPI does not provide a form schema`}],steps:[{title:`Schema to FormGroup`,task:`Define a schema type (string, number, boolean, enum, plus required/min/max/options), fetch it, and build the FormGroup in a loop with addControl. Show the control count matching the schema length, and add a control at runtime with addControl and remove one with removeControl.`,learn:`Forms generated at runtime from a JSON schema`},{title:`One form across several components`,task:`Pass a FormGroup down a stepper so each step owns a FormGroup of its own, and combine them into one parent with addControl per step. Submit once at the end and read the nested value. Explain what breaks if each step builds its own unrelated group.`,learn:`A stepper form spread across components that behaves as one form`},{title:`Validate while the user types`,task:`Add an async validator for "is that name taken" that calls the Pok\xE9API and returns { taken: true }. Wire it with updateOn: 'change' so it fires as they type, return null when the value is too short to be meaningful. Use timer(250) to debounce the request; Angular unsubscribes the previous async-validator Observable when the control value changes, so the old result cannot win. Do not add switchMap inside a one-value validator unless you have an actual source stream to switch from.`,learn:`Async validation against a backend while typing`},{title:`Show the error, not just the state`,task:`Render the message from errors, keep the pending state visible, and disable submit while status === PENDING. Prove the race is gone by typing fast and confirming the message matches the last value.`,learn:`Presentation of async validation state`}],stretch:[`Reusable input that works with both ngModel and reactive forms (NG_VALUE_ACCESSOR).`,`valueChanges piped through debounceTime before hitting the API, to show why both halves matter.`,`Persist the partially completed form to sessionStorage across a reload.`,`Unit test the schema-to-group builder with a fixture schema.`],starter:`type FieldSchema = {
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

form = new FormGroup({ name: new FormControl('', { asyncValidators: [nameTaken], updateOn: 'change' }) });`,covers:[`angular-25`,`angular-13`,`angular-22`,`angular-12`]},{id:`angular-interceptors`,category:`angular`,title:`Auth, spinner and error reporting as interceptors`,summary:`One cross-cutting concern per interceptor, and an order that matters.`,durationMinutes:75,prompt:`Every request to your protected backend needs consistent cross-cutting handling: an auth header, a global spinner counter, a normalised error shape, and a trace ID in the logs. Implement them as interceptors rather than copy-paste. Do not attach an auth header to the public PokéAPI.`,endpoints:[{path:`/pokemon/{name}`,note:`Returns 404 - use it to exercise the error interceptor`},{path:`/pokemon?limit=`,note:`The normal path through the chain`}],steps:[{title:`The first functional interceptor`,task:`Write an authFn that clones the request, adds the header, and forwards it with next(req). Then add a spinner interceptor that increments on request and decrements on finalise (not on subscribe) so parallel requests cannot desync the counter. Fire two requests at once and confirm the spinner hides only when both finish.`,learn:`What is an HTTP interceptor and what are typical use cases`},{title:`Order is the whole point`,task:`Register auth, then tracing, then spinner, then error mapping. For outgoing requests the chain runs in registration order; responses and errors travel back through the chain in reverse order. Log each interceptor to verify this. An error interceptor only sees an error if it is downstream of the point where that error is raised or rethrown.`,learn:`Functional interceptors and their execution order`},{title:`Let a call opt out`,task:`Add an HttpContextToken named HIDE_SPINNER so a request can opt out of the spinner only. Use HttpContext on the request. Do not use this mechanism to bypass authentication or other security controls.`,learn:`Selective interceptor execution`},{title:`Turn a 404 into something usable`,task:`Normalise HttpErrorResponse into { status, message, url } and rethrow so the caller still has to handle it. Show the difference between catching in the interceptor (every caller is saved from nothing) and catching at the call site where the UI actually knows what to render.`,learn:`Error handling and why interceptors are not the place to swallow errors`}],stretch:[`Add a trace/correlation ID in a dedicated tracing interceptor and include it in every error log. Keep tracing separate from authentication and spinner state.`,`Retry idempotent GETs once on 503 inside the interceptor with a delay.`,`Refresh an expired token on 401 without looping on the refresh call itself.`,`Record timings with a mark/measure so slow calls show up in the console.`],starter:`export const HIDE_SPINNER = new HttpContextToken<boolean>(() => false);

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
// })`,covers:[`angular-19`,`angular-31`,`angular-30`]},{id:`angular-route-guards`,category:`angular`,title:`A lazy admin route only admins can reach`,summary:`Lazy loading plus access control, and hiding the UI that guards the route.`,durationMinutes:45,prompt:`Two lazy routes: a public dex and an admin reports route. Simulate the admin role in AuthStore and protect the route and navigation link. Remember that a client-side guard is not backend security: a real reports API must independently authorize every request.`,endpoints:[{path:`/pokemon?limit=`,note:`The public lazy route payload`},{path:`/pokemon-species/{name}?limit=`,note:`The admin reports data`}],steps:[{title:`Lazy route first`,task:`Add { path: 'reports', loadComponent: () => import('./reports/reports').then((m) => m.Reports) } and confirm the chunk only appears in the network panel after you navigate. Put the component in its own folder with its own service, not next to the dex.`,learn:`Lazy-loaded routes`},{title:`A functional CanActivate guard`,task:`Write canActivate: [() => { const auth = inject(AuthStore); const router = inject(Router); return auth.isAdmin() || router.createUrlTree(['/login'], { queryParams: { returnUrl: router.url } }); }]. Return a boolean or a UrlTree - the UrlTree version redirects for you. Note that guards return Observables too, so a role fetched from the API works without await.`,learn:`Route guards and which ones exist`},{title:`Do not even download it`,task:`Add CanMatch to prevent a non-admin from matching/downloading the lazy route. Important: returning false does not automatically run CanActivate or redirect; Angular tries another matching route. Provide a fallback route or return a UrlTree from CanMatch when you want a redirect. Use CanActivate when you want an explicit navigation decision after route matching.`,learn:`CanMatch vs CanActivate`},{title:`Hide what the user cannot use`,task:`Guard the template with @if (auth.isAdmin()) or a small structural directive, so the Reports link is not rendered for a normal user. Then type the URL by hand as a normal user and confirm you are bounced, which is the case the guard actually exists for.`,learn:`Role-based access control, both halves`}],stretch:[`CanDeactivate with a dirty-form check so a half-written form is not lost.`,`canActivateChild so the whole reports section is protected, not just its shell.`,`Return the returnUrl query param and redirect back after login.`,`Resolve route data before the component renders and show the loading state.`],starter:`export const routes: Routes = [
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
// }`,covers:[`angular-15`,`angular-41`,`angular-14`]},{id:`angular-directive-pipe`,category:`angular`,title:`Type badge directive and a colour pipe`,summary:`Behaviour without a template, and a pure function in a pipe.`,durationMinutes:60,prompt:`Every Pokémon card needs a coloured, clickable type badge. Build it as an attribute directive for the behaviour and a pipe for the colour, so both pieces are independently testable.`,endpoints:[{path:`/type/{type}`,note:`Drives the colour token per badge`},{path:`/pokemon/{name}`,note:`types[] is the directive input`}],steps:[{title:`Attribute directive with host bindings`,task:`Create [appTypeBadge] that reads input.required<string>() for the type and applies host classes, a CSS custom property and a title attribute via host: { '[class.badge]': 'true', '[style.--type-color]': 'color()', '[attr.title]': 'label()' }. Note that host bindings write to the DOM outside Angular's template, which is why the directive needs no component.`,learn:`What is an Angular directive`},{title:`Events and host listeners`,task:`Add output() favourite and emit the current type from a host click handler. Make the host keyboard-operable (for example, add role="button", tabindex="0", and handle Enter/Space) only if the badge truly performs an action; otherwise keep it a non-interactive label. A directive adds behavior to existing markup without owning a template.`,learn:`Directives that add behaviour to existing markup`},{title:`Pure pipe, impure pipe`,task:`Write a pokemonWeight pipe that takes the Pokémon weight (PokéAPI weight is in hectograms) and returns a formatted value in kilograms. Confirm it runs once per input and again only when the input changes. Then force impure: true and watch it re-run on every single change detection, which is why impure is the exception, not the default.`,learn:`What is a pipe and the difference between pure and impure`},{title:`Where the boundary is`,task:`Give a one-sentence answer for each: component owns a template, directive does not, pipe transforms a value for the template. Then move the badge into a component and show which parts you duplicated - that duplication is the signal you chose the wrong tool.`,learn:`Choosing between component, directive and pipe`}],stretch:[`Turn the badge into a structural directive *appHasType so you can filter a list in the template.`,`Use signal inputs on the directive so it works with OnPush parents.`,`Write a test that asserts the host class and the custom property are set.`,`Add host: { class: 'is-legacy' } only when the API shape changes, to show the escape hatch.`],starter:`@Directive({
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
}`,covers:[`angular-3`,`angular-35`,`angular-2`]}];var f=[{id:`perf-large-dex-table`,category:`performance`,title:`A 500+ row Pokédex table that stays smooth`,summary:`Change detection, track keys and paging, applied to one real table.`,durationMinutes:90,prompt:`Render a sortable, filterable table of every Pokémon the PokéAPI knows about. Measure it before and after, and be able to name the cost of every change you made.`,endpoints:[{path:`/pokemon?limit=1000&offset=0`,note:`The full list to render`},{path:`/pokemon/{id}`,note:`Per-row detail, if you join it in`}],steps:[{title:`Measure before you touch anything`,task:`Record the time from request start to painted rows with performance.mark/measure around the fetch and the render, and count DOM nodes. Write the number down. Any optimisation you cannot measure is a guess.`,learn:`How do you profile an Angular app and find out what is actually slow`},{title:`Find out how often change detection runs`,task:`Enable the Angular DevTools profiler and watch a single keystroke in the filter box. Count the ticks and how many of them re-render the whole table. Explain why the default strategy checks every component in the tree on every event.`,learn:`How does change detection affect Angular performance`},{title:`OnPush plus a stable track key`,task:`Switch the table to OnPush and make the row data immutable (a new array reference on every change), then give the @for a track expression of the pokemon id rather than $index. Show that re-sorting no longer recreates every row. Note the trap: tracking by $index with mutable data means rows are reused with the wrong identity.`,learn:`The ways to reduce the cost of change detection`},{title:`Keep the template cheap`,task:`Remove the arrow functions from the template ({{ totalWeight() }}) that Angular cannot memoise, replace a method call in the template with a computed, and confirm the pure pipe cache is doing its job by logging inside the pipe. Then do the opposite with impure: true and watch the counter explode.`,learn:`Pure vs impure work in a template`},{title:`Render less instead of rendering faster`,task:`Paginate or window the rows, and defer the off-screen chart or detail panel. Measure again and report the new numbers next to the old ones. Explain why pagination usually beats micro-optimising the row template.`,learn:`Usual causes of a slow app, and how to prioritise which to fix`},{title:`Prove the fix in the numbers`,task:`Re-measure with the same tooling and the same data. Write the summary a stakeholder would read: before, after, what you changed, what you decided not to change.`,learn:`Prioritising performance work`}],stretch:[`Add a virtual scroll viewport so only the visible rows exist in the DOM.`,`Use @defer (on viewport) for a row detail panel and on interaction for the export button.`,`Throttle the sort handler so dragging a column does not thrash the store.`,`Compare zoneless change detection against zone.js for the same interaction.`],starter:`<table mat-table [dataSource]="rows()" class="mat-elevation-z1">
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
// {{ totalWeight(rows()) }}`,covers:[`performance-23`,`performance-9`,`performance-21`,`performance-8`,`performance-22`,`angular-35`]},{id:`perf-sprite-loading`,category:`performance`,title:`Load the sprites without jank or layout shift`,summary:`Image sizing, lazy loading and measuring LCP and CLS for real.`,durationMinutes:60,prompt:`A dex page shows 151 sprites. Make it load fast, never jump, and measure whether you actually improved anything.`,endpoints:[{path:`/pokemon?limit=151`,note:`Every sprite URL in one payload`}],steps:[{title:`Reserve the space before the image exists`,task:`Give every img an explicit width and height that matches the sprite, wrap them in a fixed-aspect container, and watch the layout with DevTools CLS regions enabled. Then remove the dimensions and watch the page jump. That jump is exactly what CLS penalises.`,learn:`How do fonts and images affect performance, and how do you load them well`},{title:`Lazy load everything but the first screen`,task:`Add loading="lazy" and decoding="async" to the sprites, plus fetchpriority="high" on the first one only. Then hand-roll an IntersectionObserver that sets the src when the card is about to enter the viewport, and set a transparent placeholder first so the layout is already correct.`,learn:`Lazy loading images`},{title:`Measure LCP and CLS, do not guess`,task:`Use a PerformanceObserver for largest-contentful-paint and layout-shift (with buffered: true), sum the CLS session windows, and print both. Repeat with the sprite lazy-loaded and see the number change. Explain why the largest element is usually the hero image, not the text.`,learn:`Core Web Vitals and how to measure and diagnose each one`},{title:`Trust your own measurement`,task:`Add a performance.mark before the fetch and a measure after the row is painted, then confirm the mark/measure pair appears in the performance timeline alongside the vitals. Explain why a number without marks is a number you cannot act on.`,learn:`What a Performance API measurement looks like in practice, and how to trust it`},{title:`Fix the font too`,task:`If the app uses a webfont, add font-display: swap, preload the one file that matters above the fold, and subset it. Measure the layout shift the swap causes, then reserve the space with a matching fallback metric.`,learn:`Font loading and the shift it causes`}],stretch:[`Inline the first sprite as a data: URI so LCP needs no network round trip.`,`Use aspect-ratio instead of padding-bottom for the placeholder box.`,`Add a performance budget check in CI that fails when the LCP mark exceeds a number.`],starter:`<img
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
}).observe({ type: 'layout-shift', buffered: true });`,covers:[`performance-16`,`performance-6`,`performance-20`,`performance-13`]},{id:`perf-cache-prefetch`,category:`performance`,title:`Cache PokéAPI responses and prefetch on intent`,summary:`Stop asking for the same Pokémon twice, and warm the cache before the click.`,durationMinutes:60,prompt:`Users open cards, go back, open them again. Make the second open instant, and make the first one feel instant too, without breaking correctness.`,endpoints:[{path:`/pokemon/{name}`,note:`The response you cache`},{path:`/pokemon/{name}/encounters`,note:`A slow endpoint that shows cache TTL`}],steps:[{title:`Count the requests first`,task:`Open three cards, go back, open the first one again. Count the network requests for that URL. Now add a cache layer and repeat until it drops to one, and log the cache hit/miss ratio so the improvement is visible.`,learn:`Usual causes of a slow app, and how to prioritise`},{title:`Share the request, not just the result`,task:`Put the detail request behind a shared observable so three components asking for the same Pokémon produce one HTTP call - including while the first is still in flight. Explain why caching only completed responses is not enough.`,learn:`What is the purpose of share() and shareReplay()`},{title:`Prefetch on intent`,task:`Trigger the same fetch on pointerenter / focus for a card, with a short delay so a fast mouse sweep across the grid does not fetch everything. Measure with the network throttled: the card opens with no spinner because the response is already cached.`,learn:`How prefetching works and when it is worth it`},{title:`Decide what "fresh" means`,task:`Add a TTL (PokéAPI data basically never changes, but a real API would) and a way to force a refetch for the detail view. Then show a stale-while-revalidate pattern: serve the cached value immediately, refresh in the background, and only notify the UI if the value actually changed.`,learn:`Prefetching vs preloading, and cache freshness`},{title:`Never cache the wrong thing`,task:`Cache keyed by name AND by every parameter that changes the response. Show the bug of caching by name only when the query changes, and confirm the fix with two different requests for the same key.`,learn:`Correct cache keys`}],stretch:[`Add an LRU eviction so the cache cannot grow without bound.`,`Prefetch the next page when the user reaches the bottom of the list.`,`Share one request between three sibling components and count the HTTP calls.`,`Compare the win against the cost: what happens to memory with 151 cached detail objects.`],starter:`private readonly cache = new Map<string, Observable<Pokemon>>();

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
prefetch$.subscribe();`,covers:[`performance-14`,`performance-11`,`rxjs-6`,`performance-12`]},{id:`perf-profile-first`,category:`performance`,title:`Prove where the time goes before you optimise`,summary:`Marks, measures, long tasks and the three different things you can be measuring.`,durationMinutes:60,prompt:`A page is slow and nobody agrees why. Build the instrumentation that settles the argument: where the time is actually spent, and whether it is initial load, a reload or a route transition.`,endpoints:[{path:`/pokemon?limit=20`,note:`The request you will time`},{path:`/pokemon?limit=200`,note:`The same request with a bigger payload`}],steps:[{title:`Name what you are measuring`,task:`Decide, in writing, whether you mean the initial load (empty cache, cold navigation), a reload (warm cache, full boot) or a route transition (app already running). Measure all three separately - they have different numbers and different fixes, and mixing them is how a "10 second load" gets misdiagnosed.`,learn:`Initial load vs reload vs route transition`},{title:`Bracket the work with marks`,task:`Wrap the fetch in performance.mark/measure, another around the render, and print the measures with performance.getEntriesByType("measure"). Then take a DevTools performance recording of the same interaction and find your own marks in the flame chart. If you cannot find your code in the recording, the view is too narrow.`,learn:`How do you profile an Angular app`},{title:`Catch the long tasks`,task:`Use a PerformanceObserver for longtask and print the duration and attribution of each one over a slow interaction. Explain what a 200ms+ task feels like to a user mid-typing: the input lags behind the keystroke even though the browser has not crashed.`,learn:`What is a long task and how blocking the main thread shows up`},{title:`Break the task up`,task:`Find the longest task, then split it: chunk the parsing of the 200-item payload, yield between chunks, and confirm the long task disappears and input stays responsive. Note that this improves responsiveness, not total time - say both out loud.`,learn:`What is a long task`},{title:`Send the numbers somewhere`,task:`Report the marks to your monitoring endpoint per page load with a build id, so you can compare a release against the previous one. Explain why a single user measurement is noise and you want a percentile.`,learn:`What a Performance API measurement looks like in practice, and how to trust it`}],stretch:[`Use PerformanceObserver for event timing and find the slow input handler.`,`Compare user timing marks across two builds with the same data.`,`Add a budget check to CI using the same measure names.`,`Use the Angular DevTools profiler to attribute change detection time per component.`],starter:`performance.mark('dex:fetch-start');
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
}).observe({ type: 'longtask', buffered: true });`,covers:[`performance-8`,`performance-13`,`performance-7`,`performance-20`,`performance-11`]},{id:`perf-devtools-lighthouse`,category:`performance`,title:`Diagnose a slow page with Lighthouse and the Angular DevTools`,summary:`A guided run through both tools: audit, profile, fix, then re-measure to prove it.`,durationMinutes:75,prompt:`A Pokédex team-builder page feels laggy while you type and scores badly on a mobile Lighthouse run. Use Lighthouse and the Angular DevTools to find what is wrong, fix it, and show the improvement with the same two tools before and after. The live demo reproduces the scenario with seeded local data - open it, watch the counters while you type, then flip the switches.`,endpoints:[{path:`/pokemon?limit=151`,note:`The list rendered on the page`},{path:`/pokemon/{name}`,note:`Detail opened from a row`}],steps:[{title:`Take a baseline Lighthouse audit`,task:`Open Chrome DevTools, switch to the Lighthouse panel, tick Performance, choose Mobile with simulated throttling, and run it in an incognito window with an empty cache. Write down LCP, TBT (or INP), CLS and total bytes before you change a line - every later claim is measured against these numbers.`,learn:`What are Core Web Vitals and how do you measure and diagnose each one`},{title:`Read the report as a diagnosis, not a score`,task:`Expand Reduce unused JavaScript and Avoid enormous network payloads. Note the transfer size and which bundle owns each one - here a charting library loads eagerly but is only used below the fold. Rank the opportunities by estimated savings instead of working top to bottom.`,learn:`How would you set up bundle budgets, and what happens when one is exceeded`},{title:`Record the Angular DevTools profiler`,task:"Install the Angular DevTools extension and open its Profiler tab. Angular DevTools only attaches to a development build, so do this against `ng serve` or your own project, not a production site. Record, type a single character in the search box, and stop. Count the change detection cycles for that one keystroke, read the per-component time in the flame graph, then pick the hottest component in the Component explorer and inspect the expression that keeps changing.",learn:`How does change detection affect Angular performance`},{title:`Attribute the long task in the Performance panel`,task:`Record the same keystroke in the Chrome Performance panel. Find the long task over 200ms and use the Bottom-Up and Call Tree views to see whether it is scripting, style recalculation or layout, drilling until you reach the template expression. The panel works on any build, but the Angular-specific track (enableProfiling) is development-only, like Angular DevTools. A long task is what turns a slow render into an input that lags behind the keystroke.`,learn:`What is a long task, and how does blocking the main thread show up to a user`},{title:`Fix it and re-measure with both tools`,task:`Replace the template method with a computed, move the list to OnPush with a stable track key, and defer the chart with @defer (on viewport) plus a dynamic import. Re-run Lighthouse with the exact same settings and re-record the DevTools profile for the same keystroke, then write the before/after table: LCP, TBT, bytes and cycles per keystroke.`,learn:`What do you actually change to make an Angular application faster`}],stretch:[`Run Lighthouse from the CLI (npx lighthouse) and diff two JSON reports in CI.`,`Repeat the Performance recording at 4x and 6x CPU throttling and compare.`,`Profile a zoneless build and a zone.js build side by side for the same keystroke.`,`Add a bundle budget so a regression fails the build instead of the audit.`],starter:`// the page before the diagnosis: a method in the template runs
// on every change detection cycle and can never be memoised
<p>{{ visibleCount() }} shown</p>
<app-chart [data]="chartData()"></app-chart>   // heavy library, eager

// what you will end up with
readonly filter = signal('');
readonly visible = computed(() =>
  this.all().filter((p) => p.name.includes(this.filter().toLowerCase())),
);

<p>{{ visible().length }} shown</p>

@defer (on viewport) {
  <app-chart [data]="visible()" />
} @placeholder {
  <div class="chart-skeleton"></div>
}`,covers:[`performance-27`,`performance-8`,`performance-26`],demoRoute:`/performance/devtools-demo`}];var y=[{id:`rxjs-debounced-search`,category:`rxjs`,title:`Live search that does not jank the page`,summary:`The canonical RxJS pipeline: debounce, dedupe, cancel, recover.`,durationMinutes:45,prompt:`Type into a search box and query the PokéAPI as you type. The pipeline has to stop hammering the API, cancel requests that are no longer wanted, and survive a 404 without killing the stream.`,endpoints:[{path:`/pokemon/{name}`,note:`404 for unknown names - that is your error case`},{path:`/pokemon?limit=`,note:`The fallback list while a search is in flight`}],steps:[{title:`The raw version, so you can see the problem`,task:`Subscribe to the input and hit the API on every keystroke. Type "pikachu" and count seven requests for seven characters. This is the version you are fixing - keep it in a git commit so you can compare.`,learn:`The problem debouncing solves`},{title:`Debounce and dedupe`,task:`Add debounceTime(300) so the request happens after the user stops typing, then distinctUntilChanged() so typing "aa" then "a" does not fire twice. Try a longer term like "charmander" and show it fires once, and then again when you delete back to it.`,learn:`Give a small example of debouncing a search input with RxJS`},{title:`Cancel the requests you do not want`,task:`Add switchMap. Type quickly through four terms and watch the network panel: only the last request completes, the previous ones are unsubscribed. Then swap switchMap for mergeMap and show all four finish - that is the difference you would be asked about in an interview.`,learn:`switchMap vs mergeMap`},{title:`Keep the stream alive through a 404`,task:`Wrap the inner request in catchError(() => of(null)) so a failed search returns "no results" instead of killing the stream forever. Prove it by typing a valid name, an invalid one, then a valid one again - the last one still works.`,learn:`Where catchError belongs`},{title:`Model loading without a boolean soup`,task:`Replace the manual loading boolean with startWith and finalize so the flag cannot get stuck on true after an error, or expose a { status, results } object via map. Show the state machine for idle / searching / found / not-found / failed.`,learn:`map vs tap vs switchMap in terms of what they return`},{title:`Do not leak the subscription`,task:`Finish with takeUntilDestroyed() in a component, or an async pipe in the template, and confirm no request is still in flight after navigating away. Then remove it deliberately and watch the console log after destroy.`,learn:`How do you prevent memory leaks when subscribing`}],stretch:[`Show a minimum query length of 3, and do not request below it.`,`Switch to concatMap for a queue and explain when ordering matters more than cancelling.`,`Add a per-request timeout with timeout({ each: 3000 }) and treat a timeout as "no results".`,`Cancel the in-flight request with AbortController when the user closes the search.`],starter:`readonly term = new FormControl('', { nonNullable: true });

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
);`,covers:[`rxjs-9`,`rxjs-5`,`rxjs-10`,`rxjs-7`,`rxjs-8`,`performance-25`]},{id:`rxjs-subjects-store`,category:`rxjs`,title:`A filter store out of Subjects`,summary:`Promise vs Observable, cold vs hot, and the four Subject variants.`,durationMinutes:60,prompt:`Build the shared filter state for the dex - sidebar filters and a results table both read it - using RxJS primitives first. Know exactly which Subject variant you chose and why.`,endpoints:[{path:`/pokemon?limit=`,note:`Re-queried whenever the filter changes`}],steps:[{title:`Feel the difference from a Promise`,task:`Write one async function that fetches the list and one Observable that does the same. Then subscribe to the Observable twice and count the requests: two. That is the crux - a Promise settles once, an Observable is a stream and every subscription re-runs the work.`,learn:`What is an Observable and how is it different from a Promise`},{title:`Build the cold version, then fix it`,task:`Return the http call straight from a method and subscribe twice: two HTTP requests. Then pipe through shareReplay({ bufferSize: 1, refCount: true }) and confirm one request for both subscribers. Explain in one sentence what sharing changes and what it does not (late subscribers).`,learn:`Difference between cold and hot Observables`},{title:`Compare the four Subjects`,task:`Hold the filter in each variant in turn and log what a late subscriber receives: Subject gets nothing, BehaviorSubject gets the current value immediately, ReplaySubject(2) gets the last two, AsyncSubject emits nothing until it completes and then only the last value. Use each where it makes sense: plain Subject for search events, BehaviorSubject for the filter, ReplaySubject for a cached request, AsyncSubject for "give me the finished index".`,learn:`Explain Subjects, BehaviorSubject, ReplaySubject and AsyncSubject with a common use case`},{title:`One writable source of truth`,task:`Expose the filter as a private BehaviorSubject and a public filter$ (readonly, so nobody calls next on it from a component). Add setType() as the only write path. This is the single-source-of-truth rule in RxJS form.`,learn:`Sharing state between components`},{title:`Derive, do not store`,task:`Build the filtered list, the result count and the loading flag with map / combineLatest / switchMap instead of extra Subjects that someone has to keep in sync. Then justify your choice honestly: if the app is signal-based, say where you would stop and move to a signal store instead.`,learn:`When Observables are the right tool`}],stretch:[`Add scan() so the filter can carry a history, and explain why a reducer would not be right here.`,`Turn the store into a signalStore and note which parts got simpler.`,`Use a ReplaySubject to survive a route change and re-subscribe on return.`,`Compare BehaviorSubject with a signal holding the same value, including late-subscriber behaviour.`],starter:`@Injectable({ providedIn: 'root' })
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
}`,covers:[`rxjs-3`,`rxjs-2`,`rxjs-1`,`rxjs-6`]},{id:`rxjs-combine-forkjoin`,category:`rxjs`,title:`A dashboard assembled from three endpoints`,summary:`forkJoin vs combineLatest vs withLatestFrom vs merge, side by side.`,durationMinutes:45,prompt:`A dashboard shows three panels from three endpoints. The rules are: show the dashboard only when all three have arrived, and refresh it if any one of them changes. Pick the operator and defend the choice.`,endpoints:[{path:`/pokemon?limit=20`,note:`Panel 1: the list`},{path:`/type/fire`,note:`Panel 2: type matchup`},{path:`/pokemon-species/bulbasaur`,note:`Panel 3: the featured species`}],steps:[{title:`Get all three, then show the dashboard`,task:`Pipe the three requests through forkJoin and confirm nothing renders until all three emit, and the dashboard re-emits whenever any source changes because the whole chain re-subscribes. Then swap one endpoint for a request that never completes and watch the dashboard never appear - that is the difference between forkJoin and combineLatest.`,learn:`When should you use combineLatest and forkJoin`},{title:`Emit as soon as each panel lands`,task:`Use combineLatest instead and show the panels filling in one at a time, and that it emits immediately if a source already has a value. Explain the cost: a source that never emits blocks everything forever, so pair it with a timeout when the input can be empty.`,learn:`combineLatest and its blocking behaviour`},{title:`Combine without triggering`,task:`For the "featured Pokémon" panel, you want the type data whenever the featured Pokémon changes, but you do not want the type request to re-fire when the type selection changes. Use withLatestFrom (and explain the mirror image, combineLatestWith) and prove which input triggers the request.`,learn:`withLatestFrom`},{title:`Concatenate independent sources`,task:`Wire the "recently viewed" log, the live search results and a periodic refresh into one stream with merge, then split by a tag with mergeMap. Show that merge interleaves while concat keeps order, and pick merge for unrelated live sources.`,learn:`merge and mergeMap for independent sources`},{title:`Refresh one panel only`,task:`Give each panel its own switchMap trigger (a refresh Subject) combined with the shared filter, so refreshing the type panel does not refetch the species panel. Explain why you did not put all three behind one subject.`,learn:`Choosing the scope of a refresh`}],stretch:[`Add a timeout to every panel and render a per-panel error so one failure does not blank the dashboard.`,`Show what forkJoin({ results: a$, ... }) does with keyed results.`,`Use combineLatestWith to get the same behaviour with the trigger on the other side.`,`Render each panel independently as it arrives and mark the dashboard "partial" until it is complete.`],starter:`const list$ = this.http.get<PokemonList>(\`\${BASE}/pokemon\`, { params: { limit: 20 } });
const type$ = this.http.get<Type>(\`\${BASE}/type/fire\`);
const featured$ = this.http.get<Pokemon>(\`\${BASE}/pokemon/bulbasaur\`);

// all three must complete, then the dashboard renders
readonly dashboard$ = forkJoin({ list: list$, type: type$, featured: featured$ });

// emits as each arrives; never emits if a source never does
readonly live$ = combineLatest([list$, type$, featured$]);

// type$ re-read on every featured$ emission, but never triggers a request itself
readonly withType$ = featured$.pipe(
  switchMap((featured) => typeFor(featured.types).pipe(withLatestFrom(this.filter$))),
);`,covers:[`rxjs-4`,`angular-10`,`rxjs-5`]},{id:`rxjs-flattening-operators`,category:`rxjs`,title:`switchMap, mergeMap, concatMap and exhaustMap side by side`,summary:`The same source, four operators, four behaviours you can time.`,durationMinutes:60,prompt:`Take one stream of user intent and run it through all four flattening operators. Log the emission order with timestamps so the difference is measured, not remembered.`,endpoints:[{path:`/pokemon/{name}`,note:`Deliberately variable latency: try a rare name`},{path:`/pokemon/{name}/encounters`,note:`The slow endpoint for the ordering demos`}],steps:[{title:`map, tap and the flattening family`,task:`Contrast the three on one click stream: map returns a new value 1:1, tap runs for side effects and returns the same value, switchMap turns each value into an inner Observable and flattens it. Log the return of each with tap so you can see which one can produce zero or many values per input.`,learn:`Difference between map, tap, switchMap and exhaustMap in terms of what they return`},{title:`switchMap - newest wins`,task:`Map every keystroke to a detail request and confirm only the last one is displayed; earlier responses are unsubscribed and discarded. Use it wherever stale data must never be shown. Then flip a flag that makes responses arrive out of order and show why unsubscribing is the only protection.`,learn:`switchMap`},{title:`mergeMap - everything wins`,task:`Switch to mergeMap and show all five requests completing, results interleaving out of order. Use it for independent work (favourite five Pokémon at once). Then add concurrency and show the limit you actually want.`,learn:`mergeMap`},{title:`concatMap - order wins`,task:`Switch to concatMap and show requests queued: the second does not start until the first completes. Use it for writes that must be applied in order (rename, move in a list). Note the failure mode: a slow request blocks the queue indefinitely.`,learn:`concatMap`},{title:`exhaustMap - first wins`,task:`Put exhaustMap on a Save button stream. While the POST is in flight, further clicks are ignored entirely - no queue, no duplicate. Then swap in mergeMap and press Save four times to produce four POSTs, which is exactly the bug the exhaustMap version prevents.`,learn:`exhaustMap and preventing duplicate requests`},{title:`Summarise with a table you wrote yourself`,task:`Write the four-operator table from memory: what happens to in-flight work, what order results arrive in, and the one use case for each. Then answer what you would use for an autocomplete box and defend it.`,learn:`Choosing a flattening operator`}],stretch:[`Show a mergeMap with concurrency: 2 and explain the buffer of pending requests.`,`Combine exhaustMap for the button and switchMap for the search on the same page.`,`Add cancellation of a queued concatMap item when the user navigates away.`,`Compare all four on the same click stream with timestamps printed.`],starter:`readonly clicks$ = fromEvent(button, 'click');

clicks$.pipe(switchMap((pokemon) => detail$(pokemon))).subscribe(show); // newest wins
clicks$.pipe(mergeMap((pokemon) => detail$(pokemon))).subscribe(show); // all win
clicks$.pipe(concatMap((pokemon) => detail$(pokemon))).subscribe(show); // queue in order
clicks$.pipe(exhaustMap((pokemon) => detail$(pokemon))).subscribe(show); // ignore while busy

// duplicate-request guard for a submit button
readonly save$ = new Subject<Form>();
readonly saving = signal(false);

save$.pipe(exhaustMap((value) => this.save$(value).pipe(finalize(() => this.saving.set(false))))).subscribe();
// with mergeMap, four fast clicks produce four POSTs.`,covers:[`rxjs-5`,`rxjs-8`,`angular-9`]},{id:`rxjs-share-replay`,category:`rxjs`,title:`Stop asking for the same Pokémon six times`,summary:`share vs shareReplay vs refCount, proven with a request counter.`,durationMinutes:30,prompt:`Six places in the app need the same Pokémon detail. Build the cache with Observables and measure the request count for every variation.`,endpoints:[{path:`/pokemon/{name}`,note:`The request being shared and cached`}],steps:[{title:`Count the damage`,task:`Subscribe to the same cold HTTP observable from three components and open the page. Count the requests: three. This is the default and it is the bug.`,learn:`What sharing is for`},{title:`share`,task:`Add share() so concurrent subscribers share one execution and the result is multicast. Confirm three concurrent subscribers cause one request, then unsubscribe one and confirm the others keep working. Explain that share() replays nothing: a subscriber that arrives after completion gets nothing unless the source is already hot.`,learn:`What is the purpose of share()`},{title:`shareReplay`,task:`Switch to shareReplay({ bufferSize: 1 }) and show a late subscriber instantly receiving the cached value with no new request. Then try bufferSize: 0 and confirm the late subscriber gets nothing, and bufferSize: Infinity and note the memory cost of holding every value.`,learn:`What is the purpose of shareReplay()`},{title:`refCount, and the choice nobody makes on purpose`,task:`With refCount: true, when the last subscriber leaves, the connection to the source is torn down and the next subscriber re-runs everything - including the HTTP call. With refCount: false, the subscription stays alive forever and the cache survives navigation. Try both, count the requests, and pick one per app and say why.`,learn:`What is refCount()`},{title:`Bound the cache`,task:`Add an eviction policy so a long session cannot keep 1000 entries: LRU, TTL, or clear the cache when the route changes. Measure the memory you were retaining with performance.memory (Chromium only) before and after.`,learn:`Cache eviction and memory`}],stretch:[`Add a reset() to the cache and call it on logout.`,`Compare shareReplay with caching in a plain Map inside the service.`,`Show the resetOnRefCountZero option and when it saves you.`,`Share a stream of search results across three panels and count the requests.`],starter:`private readonly cache$ = new Map<string, Observable<Pokemon>>();

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
}`,covers:[`rxjs-6`,`performance-14`,`performance-12`,`rxjs-2`]},{id:`rxjs-error-handling`,category:`rxjs`,title:`Make a flaky endpoint survivable`,summary:`catchError placement, retry with backoff, and per-request isolation.`,durationMinutes:60,prompt:`The PokéAPI rate-limits and occasionally 500s. Your dashboard has four panels. One panel failing must not take down the other three, and a retry storm must not make it worse.`,endpoints:[{path:`/pokemon/{name}`,note:`404 - a permanent failure that must not retry`},{path:`/pokemon?limit=200`,note:`Intermittent failure - a good retry candidate`}],steps:[{title:`See the default behaviour`,task:`Let an HTTP error propagate with no handler and log it. Explain that the error terminates the whole stream: a later successful response will never arrive, so a component bound to that observable is stuck forever. That is the single most important thing about RxJS errors.`,learn:`What happens when an Observable errors`},{title:`catchError in two positions`,task:`Place catchError inside the inner stream (per request) and outside the whole pipeline (per subscription). Show the difference: inside, the stream survives and emits EMPTY for that one failure; outside, only the current subscription dies and a resubscribe starts clean. Use inside for a list item, outside for a long-lived stream you want to restart.`,learn:`When would you use catchError`},{title:`Retry only what is worth retrying`,task:`Add retry({ count: 2 }) and confirm two immediate retries. Then retry({ count: 3, delay: (_, attempt) => timer(attempt * 500) }) for exponential backoff. Crucially, skip retry on 404 - retrying a permanent failure is pure waste - and show how to write that condition.`,learn:`retry and retry with a delay`},{title:`Isolate the panels`,task:`Build four panels where each has its own error state, using forkJoin plus a per-source catchError returning a fallback value. Then show the naive version where one catchError on the merged stream loses the three healthy panels too.`,learn:`Error isolation across a composed dashboard`},{title:`Finish the lifecycle operators`,task:`Add timeout({ each: 5000 }) so a hanging request becomes an error, and takeUntil(destroy$) so navigating away is not an unhandled error. Explain why a never-completing request is a leak even though no error was thrown.`,learn:`timeout, takeUntil and completion`}],stretch:[`Build a retry policy that gives up on 4xx but retries 5xx and network errors.`,`Add jitter to the backoff so 100 users do not retry in lockstep.`,`Show the difference between retryWhen and the delay form of retry.`,`Turn an error into a UI state with a discriminated union and render it.`],starter:`const list$ = this.http.get<PokemonList>(\`\${BASE}/pokemon\`, { params: { limit: 200 } }).pipe(
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
  source.pipe(catchError(() => of(fallback)));`,covers:[`rxjs-10`,`rxjs-7`,`angular-19`,`rxjs-4`]},{id:`rxjs-leak-hunt`,category:`rxjs`,title:`Find the memory leak, then fix it properly`,summary:`A subscription that is never torn down, and every correct way to prevent it.`,durationMinutes:75,prompt:`Memory grows steadily as users move around the dex. Find what is holding on to the subscriptions, fix it, and show the number going back down.`,endpoints:[{path:`/pokemon?limit=`,note:`Requests that keep firing after you leave a page`},{path:`/pokemon/{name}`,note:`One per card, so the count is easy to watch`}],steps:[{title:`Make the leak obvious`,task:`Subscribe in ngOnInit to a stream that emits every 200ms, navigate to another route and back five times, and log the active subscription count and performance.memory.usedJSHeapSize. Show the count growing by one per visit and the interval never being cleared.`,learn:`There is a memory leak in production - how do you track it down`},{title:`The three fixes`,task:`Fix it three separate ways and say what each costs: (1) store the Subscription and unsubscribe in ngOnDestroy, (2) takeUntilDestroyed() with an injected DestroyRef, (3) drop the manual subscription entirely and use the async pipe, which unsubscribes when the view is destroyed. Pick the one you would write by default in this app.`,learn:`How do you prevent memory leaks when subscribing to Observables`},{title:`Close the others too`,task:`Audit everything else that opens a long-lived connection: fromEvent on window, a setInterval, a websocket, mergeMap with a concurrency limit that queues forever, a concatMap blocked behind a hung request. Unsubscribe, or clear the interval - not just the http ones.`,learn:`What else leaks besides HTTP`},{title:`Deal with the leak inside RxJS itself`,task:`Show takeUntil(destroy$), take(1) for a one-shot, first() when you only need the first value, and the auditTime/throttleTime pattern that reduces the number of in-flight values in the first place. Note that unsubscribe stops delivery but does not cancel the underlying work - pair it with takeUntil for the source too.`,learn:`Operator-level leak prevention`},{title:`Prove it is fixed`,task:`Re-run the same navigation loop and show the subscription count flat and the heap plateauing. Write down the number of subscriptions per component before and after - that count is a metric worth keeping.`,learn:`Memory grows steadily as users navigate between routes`}],stretch:[`Use Count from @angular/core/rxjs-interop to assert the live subscription count in a test.`,`Write a test that navigates five times and asserts no pending HTTP requests.`,`Show that switching to signals and resource() removes most of these subscriptions.`,`Add a fromEvent(window, "resize") pipeline and clean it up properly.`],starter:`export class DexList implements OnInit, OnDestroy {
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
  // readonly pokemon$ = this.http.get<Pokemon>(...);  <div>{{ pokemon$ | async }}</div>`,covers:[`rxjs-7`,`performance-12`,`angular-17`]}];var w=[{id:`signals-basic`,category:`signals`,title:`Signal vs Observable: one Pokémon detail`,summary:`The most important difference, shown by the numbers.`,durationMinutes:30,prompt:`Fetch one Pokémon with both approaches. Compare what each abstraction represents: a signal exposes a current value, while an Observable represents values over time. Then investigate duplicate derived work with two consumers; do not assume signals automatically prevent duplicate HTTP requests.`,endpoints:[{path:`/pokemon/{name}`,note:`The same endpoint used for both approaches`}],steps:[{title:`Define both`,task:`Write a signal for the Pokémon name, a signal for the loaded Pokémon, and the same with an Observable. Explain the difference: a signal holds the current value, an Observable is a sequence of values over time.`,learn:`What is a Signal and how is it different from an RxJS Observable`},{title:`Watch updates`,task:`Change the name three times quickly. For the signal version, bridge the name to the request with resource() or toObservable() + switchMap; for the Observable version, use switchMap. Count requests and UI updates. Signals alone do not cancel or deduplicate HTTP requests.`,learn:`The update model`},{title:`The diamond problem`,task:`Build a case where two consumers use the same derived value. First create two independent Observable pipelines and observe repeated work/subscriptions; then share the source or derived stream with shareReplay. Repeat with one shared computed signal read by both consumers. Explain that computed signals are lazy and memoized, but separate computed instances and separate HTTP calls are not automatically shared. This is a useful comparison, not proof that Observables inherently have a diamond problem.`,learn:`How memoized computed values compare with shared Observable pipelines`}],stretch:[`Compare toSignal() for exposing an Observable's latest value as a signal, and toObservable() for exposing signal changes as an Observable.`,`Show a computed that depends on two signals and does one recomputation per change.`,`Count the execution of an expensive computed and explain memoisation.`],starter:`// signals: current input value
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
// Compare resource(), toSignal(), and the RxJS pipeline instead.`,covers:[`signals-1`,`signals-4`]},{id:`signals-dex-store`,category:`signals`,title:`A signalStore for the filtered dex`,summary:`Build the same store twice, see which one reads cleaner.`,durationMinutes:60,prompt:`Re-implement the dex filter store with NgRx signalStore and contrast it with the RxJS service you wrote before.`,endpoints:[{path:`/pokemon?limit=`,note:`Queried whenever the filter changes`},{path:`/type/{type}`,note:`Filter chips`}],steps:[{title:`The shape`,task:`Define state for the filter, results, and request status (or loading/error fields). Write the initial state and show one patchState() call that updates two related fields atomically.`,learn:`signalStore state and patchState`},{title:`Derived state`,task:`Expose visible count and page numbers as computed signals. Do not claim this replaces shareReplay: computed memoizes derived synchronous values, while shareReplay shares an Observable execution. Separate the expensive sort into a computed that depends only on the inputs it needs, then verify which changes cause it to recalculate.`,learn:`withComputed`},{title:`Methods, not events`,task:`Write methods setType, setPage and resetFilters instead of Subjects. The caller does not need to know about streams, only the action. The API is synchronous in its surface and readable.`,learn:`withMethods`},{title:`Side effects with hooks`,task:`Use withHooks to set up store initialization and an effect for persistence where appropriate. For HTTP loading, use a clear RxJS-based method (for example rxMethod with switchMap) or a resource integration; do not leave an empty effect as the request implementation. Guard browser-only localStorage access if the app uses SSR.`,learn:`withHooks and effect`}],stretch:[`Compare with the RxJS BehaviorSubject store for the same operations.`,`Add an entity adapter so the list can be updated by id without re-creating the array.`,`Turn the HTTP call into a resource() so you do not need a loading flag by hand.`],starter:`import { computed, inject } from '@angular/core';
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
);`,covers:[`signals-1`,`signals-3`,`signals-2`]},{id:`signals-effects`,category:`signals`,title:`Effects: when to use them, and when to walk away`,summary:`The risk of circular side effects, and how untracked() controls dependency tracking.`,durationMinutes:45,prompt:`Build an effect that saves the filter to localStorage, logs a message on filter change, and tracks only what you meant to track. Then reproduce the anti-pattern and fix it.`,endpoints:[{path:`/pokemon?limit=`,note:`The request whose trigger must not be circular`}],steps:[{title:`Track by reading signals`,task:`Write an effect that reads the filter signal and writes to localStorage. Then add a console.log and see when it runs. Effects run asynchronously as part of Angular's change-detection process, and track signals read during the effect's synchronous execution. Reads performed inside untracked() are not tracked.`,learn:`What are effects and when do you use them`},{title:`The circular update`,task:`Create an effect that reads a signal and writes to that same signal under a condition. Observe whether it re-runs and explain why this is usually a design smell. Do not assume every set() causes an infinite loop: writing the same value may not notify dependents, and a condition may stop further updates. Prefer computed() for derived state.`,learn:`Why calling set() inside an effect() is an anti-pattern`},{title:`Escape with untracked`,task:`When synchronizing with an external library, use untracked() around signal reads that should not become dependencies. untracked() is about preventing dependency tracking for reads; it is not a special permission needed to write to a signal. Explain why the external event must be synchronized imperatively.`,learn:`When do you need untracked() inside an effect`},{title:`Do not replace computed`,task:`Move a calculation from an effect into a computed and show the test gets simpler. Effects are for side effects (console.log, localStorage, to the DOM outside Angular, sync with external libraries), not for producing values.`,learn:`Effects are side effects, not derivations`}],stretch:[`Check the Angular version's effect write rules. In current Angular versions, allowSignalWrites is deprecated/unnecessary; do not add it to new code.`,`Show an effect that reacts to a filter signal but reads the current route only as incidental context; use untracked() for route reads that should not trigger the effect.`,`Destroy an effect with a DestroyRef so it does not outlive a component.`],starter:`readonly filter = signal({ type: 'all', offset: 0 });

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
}`,covers:[`signals-3`,`signals-5`,`signals-8`]},{id:`signals-migration`,category:`signals`,title:`Plan to move an Angular 12 RxJS app to Signals`,summary:`A real migration plan, not a big bang.`,durationMinutes:120,prompt:`You have an Angular 12 app with heavy RxJS usage. Plan a staged upgrade to a modern Angular version that supports Signals, then migrate suitable state gradually. Keep RxJS where it remains the better fit and avoid a risky big-bang rewrite.`,endpoints:[{path:`/pokemon?limit=`,note:`Used as an example data surface to migrate`}],steps:[{title:`Map the surface first`,task:`Audit inputs/outputs, @ViewChild, forms, guards, interceptors, and all subscriptions. Split components into leafs (easy), containers (hard), and pages. Pick one leaf component with no subscriptions as your first win.`,learn:`How would you plan a migration from Angular 12 to Signals`},{title:`Start at the leaves: inputs`,task:`After upgrading to an Angular version that supports signal inputs (input() is available in modern Angular; it is not available in Angular 12), convert a small leaf component's @Input() properties to input() / input.required(). Keep the change isolated and run its tests.`,learn:`Migrating component APIs`},{title:`Convert local state to signals`,task:`Move flags like loading/expanded from BehaviorSubjects to signals, then replace the template with @if/@for instead of *ngIf/*ngFor (if you are on a version that supports them). Keep the change detection strategy OnPush.`,learn:`Local state migration`},{title:`Async data: choose the bridge`,task:`For HTTP, use toSignal() when a component needs the latest value from an existing Observable. Use resource() for request-driven async data with loading/error/reload state. Keep RxJS for composed streams such as debounce + switchMap + retry; signals do not replace RxJS.`,learn:`When would you use signals instead of observables, and can signals replace RxJS completely`},{title:`Forms, lifecycle and the end state`,task:`Keep reactive forms as they are (they do not need to become signals for correctness), but derive display-only form flags with computed where practical. Signal inputs do not remove lifecycle hooks: use ngOnInit for genuine initialization, ngOnChanges when you need its imperative change semantics, and computed for pure derivation. Explain when each is still useful in a signal-based app.`,learn:`NgOnInit/ngOnChanges in a fully signal-based app`},{title:`De-risk the migration`,task:`Feature flag per route, run both implementations behind it, add regression tests for the store, and never do a big-bang merge. Explain why RxJS will not disappear overnight: guards, interceptors, websockets, and complex event composition are still excellent in RxJS.`,learn:`Pragmatic migration strategy`}],stretch:[`Migrate one page end-to-end behind a flag and compare the number of subscriptions.`,`Convert a service from a BehaviorSubject store to a signalStore and keep the public API stable.`,`Show the bridge: toSignal(observable$, { initialValue: ... }) in a component that still depends on an RxJS service.`,`List three cases where you would choose RxJS over signals, and three the other way around.`],starter:`// Phase 0: upgrade Angular 12 first.
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
);`,covers:[`signals-6`,`signals-7`,`signals-2`]},{id:`signals-resource`,category:`signals`,title:`Load Pokémon detail with the resource API`,summary:`Status, error and reload without re-inventing a loading flag.`,durationMinutes:30,prompt:`Replace the hand-written request/loading/error state for one Pokémon detail page with Angular's resource API, then compare the responsibilities that resource takes over and the ones it does not (such as cross-instance caching).`,endpoints:[{path:`/pokemon/{name}`,note:`The resource request`}],steps:[{title:`The minimal resource`,task:`Define a resource that takes name() as its request and calls the API. Render its status (idle, loading, error, resolved), the value, and the error. Count how many flags you did not have to write.`,learn:`resource() basics`},{title:`Reload and retry`,task:`Call resource.reload() when the user clicks "Retry", and show that the request key changes when name() changes. Note that a resource tracks its request and will refetch automatically when it changes.`,learn:`Reloading a resource`},{title:`Compare to the manual version`,task:`Compare the manual and resource versions. A resource provides request status, value, error, reload, and cancellation of an outdated request. It does not automatically provide a shared cache across resource instances, and it does not make every RxJS operator unnecessary.`,learn:`When to reach for resource()`}],stretch:[`Add a default value so the UI does not flash empty while loading.`,`Compare with rxResource when the data source is already an Observable.`,`Show how to transform the loaded value with a computed.`],starter:`readonly name = signal('pikachu');

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
}`,covers:[`signals-3`,`signals-2`]}];var b=[{id:`misc-aot-jit`,category:`misc`,title:`AOT vs JIT: why the build output is different`,summary:`See what JIT compiles at runtime and what AOT compiles ahead of time.`,durationMinutes:90,prompt:`Compare the same tiny dex component built in JIT and in AOT, and explain what is compiled when and why it affects startup time.`,endpoints:[{path:`/pokemon/{name}`,note:`Only to show the component actually loads data`}],steps:[{title:`Define the terms`,task:`Explain AOT (Ahead-of-Time) vs JIT (Just-in-Time): what gets compiled, when it runs, and who runs it. Then name the trade-offs: JIT is faster to rebuild in dev, AOT is faster to bootstrap in prod and catches template errors earlier.`,learn:`What is AOT vs JIT compilation`},{title:`Look at the build output`,task:`Build the app with development mode (JIT-friendly) and with production mode (AOT) and compare the size and content of the main bundle. Find at least one compiled template instruction in the AOT build that is not just the HTML string. Explain why the Angular compiler is not present in the production AOT bundle.`,learn:`What disappears in AOT`},{title:`Catch a template error before it hits users`,task:`Introduce a deliberate template error (a non-existent pipe or a typo in a template reference) and show it fails at build time with AOT, but only fails at runtime with JIT. That is the safety aspect you should never trade away for a slightly faster dev build.`,learn:`Template type checking in AOT`},{title:`Measure startup`,task:`Load the same page in a cold window twice: once with the JIT build (dev) and once with the AOT prod build, and compare the time to first interaction using the Performance API. Record the numbers and say why they are different.`,learn:`Startup performance difference`}],stretch:[`Show the Ivy compiler output and explain why View Engine was replaced.`,`Compare the number of requests and the parse time for the main bundle.`,`Turn on strictTemplates and see how many more checks you get in AOT.`],starter:`// ng build --configuration development (JIT-friendly, faster rebuilds)
// ng build --configuration production  (AOT by default, faster bootstrap)

// watch for "Angular compiler" in dev bundles vs its absence in prod
// template error example: {{ pokemon.name | doesNotExist }}`,covers:[`misc-2`]},{id:`misc-standalone`,category:`misc`,title:`Standalone components: what they are and why they matter`,summary:`No NgModule needed, lazy routes are trivial, and the imports array is explicit.`,durationMinutes:75,prompt:`Convert a small feature from the implicit patterns to explicit standalone, and prove that lazy routes with loadComponent only work this cleanly because of it.`,endpoints:[{path:`/pokemon/{name}`,note:`The data the component renders`}],steps:[{title:`Define it`,task:`Explain what a standalone component is: it does not belong to an NgModule, declares its own imports, services, pipes and directives directly in its imports array. Since Angular 19 standalone is the default for new apps and makes lazy-loading routes with loadComponent straightforward.`,learn:`What is a standalone component`},{title:`Build one from scratch`,task:`Create a PokemonCard as a standalone component: imports [CommonModule, MatButton], selector app-pokemon-card, templateUrl, and no declarations array. Render it in the parent and confirm it works with no module imports besides the ones it declares.`,learn:`Standalone component structure`},{title:`Lazy load it`,task:`Add a route with loadComponent: () => import('./pokemon-card/pokemon-card').then((m) => m.PokemonCard) and show the chunk in the network panel. Contrast with the old loadChildren approach and explain why loadComponent is the natural pair for standalone.`,learn:`Lazy routes with standalone`},{title:`Imports are explicit`,task:`Remove a directive from the imports array and watch the template error at build time (AOT) - the component only gets what it asks for. That is the explicit dependency graph, and it is what makes tree-shaking and testing easier.`,learn:`Why explicit imports matter`},{title:`Standalone is not "no modules ever"`,task:`Explain when you might still use a standalone component with a route-scoped provider or when you import a whole library - but you never create an NgModule just to wire up a single component anymore.`,learn:`Standalone trade-offs`},{title:`Structure the app so features keep being added`,task:`Lay out a multi-role app by feature, not by type: each feature folder owns its component, service, models and routes, and nothing reaches across into another feature folder except through a public entry point. Add one more feature (an admin section) and show the shared count of files touched versus a flat structure where every new feature edits four shared folders.`,learn:`How would you structure a multi-role enterprise Angular app`}],stretch:[`Convert an existing NgModule-based component to standalone and list the steps.`,`Show a standalone pipe and a standalone directive imported into the same component.`,`Use provideRouter with standalone bootstrap and no AppModule.`],starter:`@Component({
  selector: 'app-pokemon-card',
  standalone: true, // default since v19 - shown explicitly for clarity
  imports: [MatButtonModule, DatePipe],
  template: \`
    <h2>{{ name }}</h2>
    <button matButton>{{ date | date }}</button>
  \`,
})
export class PokemonCard {
  @Input() name = '';
  readonly date = new Date();
}

// route
{ path: 'card', loadComponent: () => import('./pokemon-card/pokemon-card').then((m) => m.PokemonCard) }`,covers:[`misc-6`,`angular-26`]}];var L=[...p,...u,...m,...g,...f,...y,...w,...b];var v=class s{minutes=LP.required();formatted=zD(()=>{let a=this.minutes(),e=Math.floor(a/60),t=a%60;return e?t?`${e} hr ${t} min`:`${e} hr`:`${t} min`});static ɵfac=function(e){return new(e||s)};static ɵcmp=WE({type:s,selectors:[[`app-poc-duration`]],inputs:{minutes:[1,`minutes`]},decls:7,vars:1,consts:[[1,`poc-duration`,`inline-flex`,`items-center`,`gap-1`,`whitespace-nowrap`,`text-(--mat-sys-primary)`],[1,`sr-only`],[`aria-hidden`,`true`,1,`material-symbols-outlined`],[`data-testid`,`duration`]],template:function(e,t){e&1&&(Oc(0,`span`,0)(1,`span`,1),xD(2,`Takes about`),kc(),Oc(3,`span`,2),xD(4,`timer`),kc(),Oc(5,`span`,3),xD(6),kc()()),e&2&&(Iv(6),ih(t.formatted()))},encapsulation:2})};export{v as n,L as t};