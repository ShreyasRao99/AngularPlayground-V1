import { Poc } from '../../../types/poc-type';

export const JAVASCRIPT_POCS: Poc[] = [
  {
    id: 'js-memoised-fetcher',
    category: 'javascript',
    title: 'A memoised Pokémon fetcher',
    summary: 'Closures, hoisting and why let/const are not just style.',
    prompt:
      'Build a fetch wrapper that never asks the PokéAPI for the same Pokémon twice. The cache has to live somewhere, and the interesting part is which language feature gives you that.',
    endpoints: [{ path: '/pokemon/{name or id}', note: 'The call being cached' }],
    steps: [
      {
        title: 'Predict hoisting before you run anything',
        task: 'Write three tiny scripts: one with a var function declaration called above it, one with a var expression called above it, one with a let declaration called above it. Run each and explain the three different failures from TDZ alone, before you look at any docs.',
        learn: 'Hoisting, and how var, let and const differ',
      },
      {
        title: 'Swap var for let/const and log every assignment',
        task: 'Convert your fetcher to const for the cache and let for anything reassigned. Then try to reassign a const and to write to an undeclared variable, and explain why one gives you a TypeError at the assignment while the other only throws in use strict mode.',
        learn: 'What does use strict do',
      },
      {
        title: 'Let the closure hold the cache',
        task: 'Write createPokemonFetcher() that returns a function plus a reset function, with the internal Map captured by both. The cache is invisible outside - prove it by never returning the Map itself. Then break the closure by moving the cache to module scope and show any caller can now clear it.',
        learn: 'What is a closure',
      },
      {
        title: 'Deduplicate in-flight requests, not just results',
        task: 'The cache only stores finished responses, so two calls in the same tick both hit the network. Store the in-flight promise instead so the second call awaits the first. Verify with a network counter: three rapid calls to the same name produce one request.',
        learn: 'Closures used for private state and request dedupe',
      },
    ],
    stretch: [
      'Add a TTL so a cached entry expires after 60s, and expose a hit/miss counter.',
      'Evict the least recently used entry once the cache is over 20 items.',
      'Return a never-resolving promise when a call is deduped and log who is waiting.',
    ],
    starter: `const CACHE = Symbol('pokemon-cache');

function createPokemonFetcher() {
  const cache = new Map(); // captured by both returned functions
  let hits = 0;
  let misses = 0;

  async function fetchPokemon(name) {
    const key = String(name).toLowerCase();
    if (cache.has(key)) {
      hits += 1;
      return cache.get(key); // the in-flight promise, not the value
    }

    misses += 1;
    const request = fetch(\`https://pokeapi.co/api/v2/pokemon/\${key}\`).then((res) => {
      if (!res.ok) throw new Error(\`\${res.status} \${key}\`);
      return res.json();
    });

    cache.set(key, request);
    return request;
  }

  return {
    fetchPokemon,
    stats: () => ({ hits, misses, size: cache.size }),
    reset: () => cache.clear(),
    [CACHE]: cache, // still reachable here - can you hide it entirely?
  };
}`,
    covers: ['js-3', 'js-1', 'js-2', 'js-15'],
  },
  {
    id: 'js-array-pipeline',
    category: 'javascript',
    title: 'Reduce 151 Pokémon into real statistics',
    summary: 'map/filter/reduce/forEach, ES6+ syntax, and the coercion traps in between.',
    prompt:
      'Pull a full page of Pokémon and produce a summary a designer asked for. You will use every array method at least once, and you will hit at least one coercion bug on the way.',
    endpoints: [
      { path: '/pokemon?limit=151&offset=0', note: 'The 151 original Pokémon' },
      { path: '/pokemon/{id}', note: 'Per-Pokémon detail for stats and types' },
    ],
    steps: [
      {
        title: 'Map to a view model',
        task: 'Turn each result item (name plus a url) into { id, name, number } by pulling the id out of the URL. Do the same for the detail payload into a flat object. Remember that map returns a new array of the same length and never mutates the source - check the original array is untouched.',
        learn: 'map, and when to use it',
      },
      {
        title: 'Filter, find and some',
        task: 'Filter to the Pokémon whose names start with a given letter, find the single one with a specific id, and use some to check if any has a legendary type before you request 151 details. Note that each returns a different shape: array, value or boolean.',
        learn: 'filter and the rest of the array methods',
      },
      {
        title: 'Reduce to a single answer',
        task: 'Use reduce to build an object keyed by primary type with the count of members, and another to find the tallest Pokémon. Compare reduce with a forEach accumulator written out longhand, and with a plain for loop, and write down when each is the right tool.',
        learn: 'reduce and forEach',
      },
      {
        title: 'Find the min and max without sorting',
        task: 'Find the lightest and heaviest Pokémon in one pass with reduce instead of sorting the whole array, and give the running-extremes version as a second implementation. Then explain why Math.min(...arr) breaks for a 151-item array but works for a 10-item one.',
        learn: 'How do you find the minimum and maximum value in an array',
      },
      {
        title: 'Get bitten by coercion',
        task: 'Try filtering on the id straight from the URL string: "25" === 25 is false, "25" == 25 is true, Number("25px") is NaN and parseInt("25px") is 25. Log all four, then fix it once with Number() at the boundary and prove the bug is gone. Also parse a missing optional field with ?. and ?? so you never return "undefined" as a string.',
        learn: 'Type coercion in JavaScript',
      },
      {
        title: 'Use the ES6+ syntax you actually want to use daily',
        task: 'Rewrite the pipeline with destructuring, default parameters, template literals, shorthand properties and optional chaining, then use at least one Array.from and one Object.entries. Nothing exotic - only what you would defend in review.',
        learn: 'ES6+ features worth knowing',
      },
    ],
    stretch: [
      'Group the Pokémon by type with a Map instead of an object so numeric keys are safe.',
      'Chunk the array into pages of 20 with a single reduce.',
      'Make the whole pipeline lazy with a generator so you stop fetching when you have enough.',
    ],
    starter: `const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
const { results } = await res.json();

const ids = results.map(({ name, url }) => ({
  name,
  id: Number(url.split('/').filter(Boolean).pop()), // string -> number
}));

const electric = ids.filter(({ name }) => name.startsWith('pika'));

const byType = details.reduce((acc, pokemon) => {
  const type = pokemon.types[0]?.type.name ?? 'unknown';
  return { ...acc, [type]: (acc[type] ?? 0) + 1 };
}, {});

const tallest = details.reduce((best, p) => (p.height > best.height ? p : best), details[0]);

const lightest = details.reduce(
  (min, p) => ({ ...min, weight: Math.min(min.weight, p.weight) }),
  { weight: Infinity, name: '' },
);`,
    covers: ['js-9', 'js-16', 'js-19', 'js-20'],
  },
  {
    id: 'js-collections-prototypes',
    category: 'javascript',
    title: 'A species registry with Map, Set and a prototype chain',
    summary: 'The right collection, a real prototype chain, and freezing what must not change.',
    prompt:
      'Build a registry that the dex app can query: every Pokémon it has seen, grouped by type, with the exact detail payload behind each one. It will be handed to code you do not control, so part of it must be immutable.',
    endpoints: [
      { path: '/pokemon?limit=', note: 'Names to register' },
      { path: '/pokemon/{name}', note: 'The detail object stored per entry' },
    ],
    steps: [
      {
        title: 'Pick the right collection for each job',
        task: 'Use a Map keyed by name for lookup (try a plain object with the name "constructor" as a key and watch what you get back), a Set for the unique type list (push to an array, then compare size to length after dedupe with [...new Set(arr)]), and note that Set preserves insertion order while an array does not.',
        learn: 'Map, Set and WeakMap vs plain objects and arrays',
      },
      {
        title: 'Know when WeakMap is the right one',
        task: 'Attach per-entry UI state (expanded, scroll offset) to the entry objects in a WeakMap instead of adding fields to them. Then explain why the key can be garbage collected, and why you cannot iterate a WeakMap.',
        learn: 'WeakMap semantics',
      },
      {
        title: 'Build the chain on purpose',
        task: 'Define class Species with a name and a get slug() method, extend it with class Pokemon extends Species that adds types, and look up an inherited method to show where it resolves. Then print the chain: p -> Pokemon.prototype -> Species.prototype -> Object.prototype -> null, and show that Species.prototype is shared so mutating it affects every Pokémon.',
        learn: 'What is the prototype chain',
      },
      {
        title: 'Separate a method from a function',
        task: 'Write one behaviour as a prototype method (this.types includes) and the same logic as a standalone function taking the object. Explain why the method gets the object for free, why standalone functions are easier to pass around and test, and why you should never do pokemon.hasOwnProperty for a list check.',
        learn: 'Difference between a function and a method',
      },
      {
        title: 'Borrow a function with call, apply and bind',
        task: 'Call your standalone Pokemon function with a single pokemon (call), with an array of them (apply), and with a pre-bound pokemon (bind) so every later call keeps that receiver. Show that bind is the only one that is sticky, that arrow functions ignore all three, and that the pokemon argument of a method is just a convention until you use them.',
        learn: 'What do call, apply and bind do',
      },
      {
        title: 'Freeze the parts you do not own',
        task: 'Apply Object.freeze to a cached detail object and confirm a write silently fails (or throws in strict mode), compare with Object.seal and Object.preventExtensions, and use Object.defineProperty for a read-only computed field. Pick which one you actually need and say why the others are the wrong tool.',
        learn: 'How do you prevent an object from being modified',
      },
    ],
    stretch: [
      'Clone a frozen entry with structuredClone and show the copy is editable.',
      'Implement has(type) with a precomputed Set per instance instead of array includes.',
      'Show that JSON.parse(JSON.stringify(x)) drops undefined, Dates and Maps.',
    ],
    starter: `class Species {
  constructor(name) {
    this.name = name;
  }

  get slug() {
    return this.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  }

  get chain() {
    const names = [];
    let proto = Object.getPrototypeOf(this);
    while (proto && proto !== Object.prototype) {
      names.push(proto.constructor.name);
      proto = Object.getPrototypeOf(proto);
    }
    return [...names, 'Object'];
  }
}

class Pokemon extends Species {
  constructor(name, types, stats) {
    super(name);
    this.types = types; // could be Object.freeze(types)
    this.stats = stats;
  }

  has(type) {
    return this.types.includes(type);
  }
}

const pokemon = new Pokemon('Mr-mime', ['psychic'], { hp: 20 });
console.log(pokemon.slug, pokemon.chain, pokemon.has('ghost'));

const registry = new Map();
const seenTypes = new Set();
const uiState = new WeakMap();

registry.set(pokemon.slug, Object.freeze(pokemon));
seenTypes.add(pokemon.types[0]);
uiState.set(pokemon, { expanded: false });`,
    covers: ['js-11', 'js-13', 'js-18', 'js-6', 'js-14'],
  },
  {
    id: 'js-query-builder',
    category: 'javascript',
    title: 'A typed query builder for the dex API',
    summary: 'Spread vs rest, Object.assign vs spread, and null vs undefined.',
    prompt:
      'The dex API takes filters as query parameters. Build a small builder that takes a partial filter object, drops the empty values and produces a clean URL string you can hand to fetch.',
    endpoints: [
      { path: '/pokemon?limit=&offset=', note: 'The URL your builder has to produce' },
      { path: '/pokemon-species/{name}?limit=', note: 'Second route with different params' },
    ],
    steps: [
      {
        title: 'Use spread three different ways',
        task: 'Spread an options object into fetch(url, { ...defaults, ...overrides }) so a caller can override a header, spread a params object into a new array of [key, value] pairs, and use a rest parameter to collect "everything else". Then explain why the rest parameter has to be last and why object spread is shallow.',
        learn: 'Spread operator vs rest parameters',
      },
      {
        title: 'Spread or Object.assign?',
        task: 'Merge two filter objects both ways, then pass getters, a Set and a function as values. Explain that spread only copies own enumerable properties while Object.assign also triggers setters on the target. Choose one, say why, and use it consistently.',
        learn: 'Object.assign vs object spread',
      },
      {
        title: 'Distinguish null from undefined',
        task: 'Log the difference between null and undefined on purpose: == null matches both, === null matches only null, undefined means "never set", null means "explicitly none". Then show what ?? does that || does not for a weight of 0 (a Pokémon can weigh 0.0 in the API), and why you need ?? for numeric data.',
        learn: 'Difference between null and undefined',
      },
      {
        title: 'Drop empty values the right way',
        task: 'Filter out undefined, null and empty strings from the params, but keep 0 and false, because limit=0 is meaningful. getEntries() plus a filter that tests the value rather than the truthiness is the tool. Show the difference with a one-line filter.',
        learn: 'Truthiness vs explicit checks',
      },
      {
        title: 'Produce a URL and prove it',
        task: 'Build the query string with URL and URLSearchParams (it handles encoding for you, including a name with a space) and print the final URL for two different filter sets. Then fetch it and confirm the PokéAPI accepts it.',
        learn: 'Composing URLs safely',
      },
    ],
    stretch: [
      'Support an array value that becomes repeated keys (type=fire&type=water).',
      'Freeze the returned params so a caller cannot mutate your defaults.',
      'Write a parse function that turns the URL back into the filter object.',
    ],
    starter: `const DEFAULTS = { limit: 20, offset: 0 };

function buildDexUrl(route, { limit, offset, type, q, ...rest } = {}, base = DEFAULTS) {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries({ ...DEFAULTS, ...base, ...rest, limit, offset, type, q })) {
    if (value === undefined || value === null || value === '') continue; // keep 0 and false
    params.set(key, String(value));
  }

  const query = params.toString();
  return \`https://pokeapi.co/api/v2/\${route}\${query ? '?' + query : ''}\`;
}

console.log(buildDexUrl('pokemon', { limit: 0, type: 'fire' }));`,
    covers: ['js-10', 'js-17', 'js-4'],
  },
  {
    id: 'js-event-delegation',
    category: 'javascript',
    title: 'One click handler for a 151-card grid',
    summary: 'Capture, bubble, preventDefault, stopPropagation, and this in arrow functions.',
    prompt:
      'Attach click handling to a grid that renders a variable number of Pokédex cards. Attaching 151 listeners is the wrong answer, and the reason why is the event path.',
    endpoints: [{ path: '/pokemon?limit=151', note: 'How many cards you are handling' }],
    steps: [
      {
        title: 'Trace the three phases',
        task: 'Add listeners for capture, target and bubble on the grid and on one card, and log each hit with event.target and event.currentTarget. Watch the order: capture goes root-down, then the target, then bubble goes back up. Note that event.target is the deepest node and currentTarget is the node you attached to.',
        learn: 'Event propagation, capture and bubble',
      },
      {
        title: 'Stop the right thing',
        task: 'Put an <a> inside a card and click it. preventDefault stops the browser navigating, stopPropagation stops the event travelling further, stopImmediatePropagation also skips the remaining listeners on the same node. Do all three and log which one the ancestor listener sees.',
        learn: 'preventDefault vs stopPropagation',
      },
      {
        title: 'Delegate from the container',
        task: 'Attach exactly one listener on the grid and resolve the card with event.target.closest("[data-pokemon]"), then read the id from its dataset. Add a second button per card (favourite) and show one handler can cover both by branching on the closest button.',
        learn: 'Event delegation with closest()',
      },
      {
        title: 'Know what this is',
        task: 'Compare a function declaration handler (this is the element, and changes with .call) with an arrow function handler (this is the surrounding scope, inherited from where it was written). Show that an arrow function cannot be bound with call/apply/bind, and that this is why arrow functions are safe as class fields.',
        learn: 'Arrow functions vs function declarations',
      },
      {
        title: 'Clean up without leaking',
        task: 'Add and remove the handler repeatedly and show the listener count growing, then remove it with the exact same function reference, then with an AbortController signal. While you are there, log the order of a Promise.then, a queueMicrotask and a setTimeout(0) to show why JavaScript can look concurrent on one thread.',
        learn: 'Listener cleanup and the task queues',
      },
    ],
    stretch: [
      'Add a { passive: true } wheel or touch listener and note what you can no longer do.',
      'Handle the same events by keyboard with the grid as a listbox and roving tabindex.',
      'Rewrite the delegated handler as a custom event dispatched from the card instead.',
    ],
    starter: `const grid = document.querySelector('#dex');
const onCardClick = (event) => {
  const card = event.target.closest('[data-pokemon]');
  if (!card) return; // clicked the gap between cards

  const { pokemon } = card.dataset;
  const favourite = event.target.closest('[data-action="favourite"]');

  console.log({ pokemon, action: favourite ? 'favourite' : 'open' });
};

grid.addEventListener('click', onCardClick, { signal: controller.signal });
// controller.abort() removes every listener registered with that signal

// the same event, three ways to interfere
link.addEventListener('click', (event) => {
  event.preventDefault(); // do not navigate
  event.stopPropagation(); // ancestors never hear about it
  // event.stopImmediatePropagation(); // and other listeners here do not either
});`,
    covers: ['js-7', 'js-8', 'js-5', 'js-12'],
  },
  {
    id: 'js-modules-lazy',
    category: 'javascript',
    title: 'Split the dex into ES modules and load the detail view on demand',
    summary: 'import/export, dynamic import(), and what actually runs when.',
    prompt:
      'Start from one 900-line dex file and end up with the initial load carrying only what the grid needs. The detail view should arrive as a separate file the first time it is used.',
    endpoints: [
      { path: '/pokemon?limit=20', note: 'Loaded eagerly, needed for the grid' },
      { path: '/pokemon/{name}', note: 'Loaded lazily, needed by the detail view only' },
    ],
    steps: [
      {
        title: 'Split by responsibility, not by size',
        task: 'Create api.js (fetch helpers), format.js (pure display helpers) and ui.js (DOM rendering), then import only what you use in each file with named imports. Prove the split is real by having format.js take a plain object and never import the api.',
        learn: 'ES modules and named vs default exports',
      },
      {
        title: 'Load the detail view lazily',
        task: 'Put the detail renderer in its own module and import it with await import("./detail.js") the first time a card is opened. Log performance.getEntriesByType("resource") before and after and show the second chunk only exists after the click. Then pre-import it on hover and show the chunk is ready before the click.',
        learn: 'Dynamic import() and code splitting at module level',
      },
      {
        title: 'Let the module graph tell you the truth',
        task: 'Use top-level await to fetch the first page of Pokémon before the module finishes evaluating, and compare the ordering against putting the same await inside an async function that is called later. Explain why top-level await blocks importers and where you would rather not use it.',
        learn: 'Module evaluation order and top-level await',
      },
      {
        title: 'Show why one thread is enough',
        task: 'Start three fetches in parallel with Promise.all and log the order of resolution against the order of the calls. Then break it with a blocking loop over 50 items and show the other promises stall. That is the event loop: concurrency comes from I/O, not from threads.',
        learn: 'Why JavaScript is single-threaded yet concurrent',
      },
    ],
    stretch: [
      'Handle a dynamic import that fails (offline) with a try/catch and a retry affordance.',
      'Use an import map so the CDN base URL is not hardcoded in every file.',
      'Show the same code as a CommonJS require and explain the interop difference.',
    ],
    starter: `// api.js
export const BASE = 'https://pokeapi.co/api/v2';

export async function getPokemonList(limit = 20, offset = 0) {
  const res = await fetch(\`\${BASE}/pokemon?limit=\${limit}&offset=\${offset}\`);
  if (!res.ok) throw new Error(\`PokéAPI responded \${res.status}\`);
  return res.json();
}

// grid.js
import { getPokemonList } from './api.js';

const { results } = await getPokemonList(20); // top-level await: importers wait

document.querySelector('#dex').addEventListener('click', async (event) => {
  const card = event.target.closest('[data-pokemon]');
  if (!card) return;

  const { renderDetail } = await import('./detail.js'); // second chunk, on demand
  renderDetail(card.dataset.pokemon);
});`,
    covers: ['js-5', 'js-16', 'js-12'],
  },
];
