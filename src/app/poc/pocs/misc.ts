import { Poc } from '../../../types/poc-type';

export const MISC_POCS: Poc[] = [
  {
    id: 'misc-aot-jit',
    category: 'misc',
    title: 'AOT vs JIT: why the build output is different',
    summary: 'See what JIT compiles at runtime and what AOT compiles ahead of time.',
    durationMinutes: 90,
    prompt:
      'Compare the same tiny dex component built in JIT and in AOT, and explain what is compiled when and why it affects startup time.',
    endpoints: [
      { path: '/pokemon/{name}', note: 'Only to show the component actually loads data' },
    ],
    steps: [
      {
        title: 'Define the terms',
        task: 'Explain AOT (Ahead-of-Time) vs JIT (Just-in-Time): what gets compiled, when it runs, and who runs it. Then name the trade-offs: JIT is faster to rebuild in dev, AOT is faster to bootstrap in prod and catches template errors earlier.',
        learn: 'What is AOT vs JIT compilation',
      },
      {
        title: 'Look at the build output',
        task: 'Build the app with development mode (JIT-friendly) and with production mode (AOT) and compare the size and content of the main bundle. Find at least one compiled template instruction in the AOT build that is not just the HTML string. Explain why the Angular compiler is not present in the production AOT bundle.',
        learn: 'What disappears in AOT',
      },
      {
        title: 'Catch a template error before it hits users',
        task: 'Introduce a deliberate template error (a non-existent pipe or a typo in a template reference) and show it fails at build time with AOT, but only fails at runtime with JIT. That is the safety aspect you should never trade away for a slightly faster dev build.',
        learn: 'Template type checking in AOT',
      },
      {
        title: 'Measure startup',
        task: 'Load the same page in a cold window twice: once with the JIT build (dev) and once with the AOT prod build, and compare the time to first interaction using the Performance API. Record the numbers and say why they are different.',
        learn: 'Startup performance difference',
      },
    ],
    stretch: [
      'Show the Ivy compiler output and explain why View Engine was replaced.',
      'Compare the number of requests and the parse time for the main bundle.',
      'Turn on strictTemplates and see how many more checks you get in AOT.',
    ],
    starter: `// ng build --configuration development (JIT-friendly, faster rebuilds)
// ng build --configuration production  (AOT by default, faster bootstrap)

// watch for "Angular compiler" in dev bundles vs its absence in prod
// template error example: {{ pokemon.name | doesNotExist }}`,
    covers: ['misc-2'],
  },
  {
    id: 'misc-standalone',
    category: 'misc',
    title: 'Standalone components: what they are and why they matter',
    summary: 'No NgModule needed, lazy routes are trivial, and the imports array is explicit.',
    durationMinutes: 75,
    prompt:
      'Convert a small feature from the implicit patterns to explicit standalone, and prove that lazy routes with loadComponent only work this cleanly because of it.',
    endpoints: [{ path: '/pokemon/{name}', note: 'The data the component renders' }],
    steps: [
      {
        title: 'Define it',
        task: 'Explain what a standalone component is: it does not belong to an NgModule, declares its own imports, services, pipes and directives directly in its imports array. Since Angular 19 standalone is the default for new apps and makes lazy-loading routes with loadComponent straightforward.',
        learn: 'What is a standalone component',
      },
      {
        title: 'Build one from scratch',
        task: 'Create a PokemonCard as a standalone component: imports [CommonModule, MatButton], selector app-pokemon-card, templateUrl, and no declarations array. Render it in the parent and confirm it works with no module imports besides the ones it declares.',
        learn: 'Standalone component structure',
      },
      {
        title: 'Lazy load it',
        task: "Add a route with loadComponent: () => import('./pokemon-card/pokemon-card').then((m) => m.PokemonCard) and show the chunk in the network panel. Contrast with the old loadChildren approach and explain why loadComponent is the natural pair for standalone.",
        learn: 'Lazy routes with standalone',
      },
      {
        title: 'Imports are explicit',
        task: 'Remove a directive from the imports array and watch the template error at build time (AOT) - the component only gets what it asks for. That is the explicit dependency graph, and it is what makes tree-shaking and testing easier.',
        learn: 'Why explicit imports matter',
      },
      {
        title: 'Standalone is not "no modules ever"',
        task: 'Explain when you might still use a standalone component with a route-scoped provider or when you import a whole library - but you never create an NgModule just to wire up a single component anymore.',
        learn: 'Standalone trade-offs',
      },
      {
        title: 'Structure the app so features keep being added',
        task: 'Lay out a multi-role app by feature, not by type: each feature folder owns its component, service, models and routes, and nothing reaches across into another feature folder except through a public entry point. Add one more feature (an admin section) and show the shared count of files touched versus a flat structure where every new feature edits four shared folders.',
        learn: 'How would you structure a multi-role enterprise Angular app',
      },
    ],
    stretch: [
      'Convert an existing NgModule-based component to standalone and list the steps.',
      'Show a standalone pipe and a standalone directive imported into the same component.',
      'Use provideRouter with standalone bootstrap and no AppModule.',
    ],
    starter: `@Component({
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
{ path: 'card', loadComponent: () => import('./pokemon-card/pokemon-card').then((m) => m.PokemonCard) }`,
    covers: ['misc-6', 'angular-26'],
  },
  {
    id: 'misc-sse-stream',
    category: 'misc',
    title: 'Stream a ChatGPT-style answer with SSE',
    summary:
      'A tiny SSE backend, a fetch stream reader in Angular, and an honest stop and retry state.',
    durationMinutes: 90,
    prompt:
      'A chat UI has to paint a token stream as it arrives, not after the whole response. Put a small local endpoint in front of PokéAPI, stream its data as SSE events, and consume it in Angular with a ReadableStream reader, a working stop button and a real error state.',
    endpoints: [
      { path: '/pokemon?limit=20', note: 'Source data for your local endpoint to stream' },
      { path: '/api/pokedex-stream', note: 'Local endpoint you write; replies with text/event-stream' },
    ],
    steps: [
      {
        title: 'See the wire format before writing any UI',
        task: `Start your local endpoint and run curl -N -X POST against it. Write down the response headers, the data: lines, the blank line that ends each event and the id: values. Add a colon-prefixed heartbeat comment every 15 seconds and watch the connection stay open. Nothing in the UI will make sense until you have seen the stream raw.`,
        learn: 'What are Server-Sent Events (SSE)',
      },
      {
        title: 'Write the endpoint',
        task: `In a small local server, read /pokemon?limit=20 from PokéAPI once, then write one event per name: id: with an increasing counter, event: token, and a JSON data: payload. End with an event: done block. Set Content-Type: text/event-stream and Cache-Control: no-cache, and make sure no proxy buffers the response. Confirm with curl that characters arrive over time rather than all at once.`,
        learn: 'A one-way HTTP stream with named events and resume ids',
      },
      {
        title: 'Consume it in Angular with fetch, not EventSource',
        task: `Create an Angular service that POSTs a prompt with fetch and an AbortController. Take response.body!.getReader(), decode with TextDecoder({ stream: true }), buffer the text, split on blank lines and parse the data: lines into a signal. Render the signal in the template. Explain why EventSource cannot be used here: it is GET-only and cannot send a body or custom headers.`,
        learn: 'EventSource versus fetch streaming',
      },
      {
        title: 'Add a second GET stream with EventSource',
        task: `Add a GET variant of the endpoint and consume it with new EventSource(). Listen for the token and done named events, close on done, and log the browser's automatic reconnect after you kill the server. Explain how Last-Event-ID lets the server resume, and why the browser gives you this for free while fetch does not.`,
        learn: 'Automatic reconnect and Last-Event-ID',
      },
      {
        title: 'Stop, fail and retry honestly',
        task: `Wire a Stop button to AbortController.abort() and show that the reader stops. Force a 500 on the endpoint and put the error into a signal that renders a message with Retry, instead of leaving a half-written answer on screen. Add an empty state for a prompt with no tokens. Check that stopping and retrying never leaves two readers appending to the same signal.`,
        learn: 'Streaming UI states and cancellation',
      },
    ],
    stretch: [
      'Send id: on every event and resume from the Last-Event-ID header after a forced disconnect.',
      'Batch token writes with requestAnimationFrame so 100 tokens do not cause 100 renders.',
      'Compare SSE with a WebSocket for the same stream and name what each one makes you implement yourself.',
    ],
    starter: `// server.js - a small local endpoint, no auth and no API key in the browser
app.post('/api/pokedex-stream', async (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });

  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20').then((r) => r.json());
  const names = data.results.map((item) => item.name);
  let id = 0;

  for (const token of names) {
    res.write(
      'id: ' + ++id + '\\nevent: token\\ndata: ' +
        JSON.stringify({ text: token + ' ' }) + '\\n\\n'
    );
    await new Promise((resolve) => setTimeout(resolve, 120));
  }
  res.write('event: done\\ndata: {}\\n\\n');
  res.end();
});

// chat.service.ts - EventSource cannot POST, so use fetch
async stream(prompt: string, signal: AbortSignal) {
  const response = await fetch('/api/pokedex-stream', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
    signal,
  });
  const reader = response.body!.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const blocks = buffer.split('\\n\\n');
    buffer = blocks.pop() ?? '';
    for (const block of blocks) {
      const line = block.split('\\n').find((part) => part.startsWith('data:'));
      if (line) {
        const chunk = JSON.parse(line.slice(5).trim());
        this.answer.update((text) => text + chunk.text);
      }
    }
  }
}`,
    covers: ['misc-20', 'misc-7', 'angular-55', 'angular-49'],
  },
  {
    id: 'misc-workers',
    category: 'misc',
    title: 'Two workers, two jobs: web worker and service worker',
    summary:
      'Keep a 1000-row filter off the main thread, then make the built app load offline.',
    durationMinutes: 120,
    prompt:
      'Build the same PokéAPI browse page twice: first with a heavy filter that janks the main thread, then with that filter moved into a web worker. After that, add an Angular service worker so the production build loads offline. Measure both changes and explain why the two workers are not alternatives to each other.',
    endpoints: [
      { path: '/pokemon?limit=1000', note: 'A payload big enough to make the main thread stutter' },
    ],
    steps: [
      {
        title: 'Measure the jank first',
        task: `Fetch 1000 Pokémon and filter them in the component on every keystroke. Record long tasks with new PerformanceObserver((list) => ...).observe({ type: 'longtask' }), then type quickly and feel the lag. Write down the longest task before changing anything; an optimisation you cannot measure is a guess.`,
        learn: 'Why long synchronous work blocks the single thread',
      },
      {
        title: 'Move the filter into a web worker',
        task: `Create filter.worker.ts and construct it with new Worker(new URL('./filter.worker.ts', import.meta.url), { type: 'module' }). Send the list and query with postMessage, receive matches in onmessage and write them into a signal. Note that the data is copied by structured clone, so very large payloads have a transfer cost, and that there is no DOM, window or Angular DI inside the worker.`,
        learn: 'What a web worker is and how it talks to the page',
      },
      {
        title: 'Handle stale replies and teardown',
        task: `Add a request id to each postMessage and ignore any reply whose id is not the latest, so slow responses cannot overwrite fresh results. Debounce the input. Terminate the worker in ngOnDestroy (or tie it to DestroyRef) and confirm no message arrives after the component is destroyed.`,
        learn: 'Cancellation and ownership of a worker',
      },
      {
        title: 'Install the Angular service worker',
        task: `Run ng add @angular/pwa on a production build, inspect the generated ngsw-worker.js and ngsw-config.json, and register the service worker. Explain assetGroups with installMode prefetch versus dataGroups with stale-while-revalidate, and why HTTPS (or localhost) is required.`,
        learn: 'What a service worker does for loading performance',
      },
      {
        title: 'Prove offline, then break it on purpose',
        task: `Load the app once, switch DevTools to offline and reload - the shell should still come up. Now deploy a new hashed chunk while keeping an old cached index.html and watch the version mismatch 404. Fix it by versioning cache names and deleting old caches on activate, and explain why hashed chunks should go network-first.`,
        learn: 'Cache versioning and the stale shell failure',
      },
    ],
    stretch: [
      'Try a SharedWorker from two tabs and explain why BroadcastChannel is usually simpler.',
      'Transfer an ArrayBuffer instead of cloning 1000 objects and measure the difference.',
      'Add a push notification and list the permission, HTTPS and user-gesture constraints it brings.',
    ],
    starter: `// filter.worker.ts - its own thread, no DOM
self.onmessage = ({ data }) => {
  const { id, items, query } = data;
  const matches = items.filter((item: { name: string }) => item.name.includes(query));
  self.postMessage({ id, matches });
};

// browse-page.ts
private readonly worker = new Worker(
  new URL('./filter.worker.ts', import.meta.url),
  { type: 'module' },
);
private latest = 0;

constructor() {
  this.worker.onmessage = ({ data }) => {
    if (data.id === this.latest) this.results.set(data.matches);
  };
}

search(items: unknown[], query: string) {
  this.worker.postMessage({ id: ++this.latest, items, query });
}

ngOnDestroy() {
  this.worker.terminate();
}`,
    covers: ['misc-21', 'js-21', 'performance-15', 'performance-7'],
  },
];
