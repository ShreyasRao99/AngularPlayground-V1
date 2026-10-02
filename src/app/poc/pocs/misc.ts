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
];
