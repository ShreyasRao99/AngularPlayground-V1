import { Poc } from '../../../types/poc-type';

export const HTML_POCS: Poc[] = [
  {
    id: 'html-semantic-entry',
    category: 'html',
    title: 'Build a semantic Pokédex entry page',
    summary: 'One page for a single Pokémon, built only from meaningful tags.',
    prompt:
      'Take one Pokémon and build its Pokédex entry page using semantic elements instead of a stack of divs. The data comes from the PokéAPI, so every heading, list and figure you render is real.',
    endpoints: [
      { path: '/pokemon/{name or id}', note: 'Types, stats, height, weight, abilities, sprites' },
      {
        path: '/pokemon-species/{name}',
        note: 'Generation, habitat, flavour text, evolution chain',
      },
    ],
    steps: [
      {
        title: 'Draw the outline with landmarks',
        task: 'Build the page outline out of header, nav, main, article, section, aside and footer. Put the Pokémon name in a single h1, then group "Base stats", "Abilities" and "Training" into sections, each with its own h2. Nothing on the page should need a class to be understandable.',
        learn: 'Semantic HTML',
      },
      {
        title: 'Choose div or span deliberately',
        task: 'Start by wrapping everything in div, then go back and fix it: the entry number (#025), the type badges and the weight beside the number are inline, so they are spans or better semantic tags. The stat cards stay block-level divs. Log getComputedStyle(el).display for one of each so you can see block vs inline in the output.',
        learn: 'Difference between a div and a span',
      },
      {
        title: 'Argue article vs section',
        task: 'Wrap the whole entry in an article (it is independently linkable and shareable) and reserve section for themed groupings inside the dex list. Write a two-line comment saying why the Pokémon entry is an article and why "Base stats" is only a section.',
        learn: 'Difference between <article> and <section>',
      },
      {
        title: 'Show the raw payload as code',
        task: 'Fetch the same endpoint yourself and print the response into a pre > code block. pre keeps the newlines and whitespace, code marks the actual snippet. Escape the value before injecting it so a name containing angle brackets cannot close the tag, and trim the payload to a readable handful of fields.',
        learn: 'How to show a block of code on a page',
      },
    ],
    stretch: [
      'Render base stats as dl / dt / dd instead of a table of divs.',
      'Put the extra stats behind details > summary so the page is not a wall of numbers.',
      'Add a skip link as the first focusable element and confirm it appears on Tab.',
      'Wrap the ability names in abbr with a title attribute so the abbreviation is explained.',
    ],
    starter: `<body>
  <header>
    <h1>Pokédex</h1>
    <nav aria-label="Pokédex entries"><!-- generation filter --></nav>
  </header>

  <main>
    <article>
      <h2>Pikachu</h2>
      <figure>
        <img src="..." alt="Front sprite of Pikachu" width="96" height="96" />
        <figcaption>Pikachu, the Electric Mouse Pokémon</figcaption>
      </figure>

      <section>
        <h3>Base stats</h3>
        <!-- dl / dt / dd -->
      </section>

      <section>
        <h3>Raw API response</h3>
        <pre><code>{ /* JSON.stringify(response, null, 2) */ }</code></pre>
      </section>
    </article>
  </main>

  <footer><!-- attribution: data from PokéAPI --></footer>
</body>`,
    covers: ['html-1', 'html-2', 'html-6', 'html-7'],
  },
  {
    id: 'html-filter-form',
    category: 'html',
    title: 'Filter form that works without a single line of JavaScript',
    summary: 'Accessible label association plus native constraint validation.',
    prompt:
      'Build the "find a Pokémon" form on the dex without writing validation yourself: let the browser block the submit and report the first invalid field. Data still comes from the PokéAPI for the results, never for the validation.',
    endpoints: [
      { path: '/pokemon?limit=&offset=', note: 'Submitted as the GET query string' },
      { path: '/type/{type}', note: 'One request per selected type to get the member list' },
    ],
    steps: [
      {
        title: 'Associate every label with its control',
        task: 'Give each input a unique id and point its label at that id with the for attribute. Deliberately break it once (mismatched id) and show that clicking the label no longer focuses the field. Confirm with document.querySelector("label").control that the association is real.',
        learn: 'How you correctly associate a <label> with a form control',
      },
      {
        title: 'Pick the input type before adding validation',
        task: 'Use the right type for each field: search for the name, number with min/max for the Pokédex id, checkbox for "legendary only", select for the type. Note which ones give you a picker for free (date, number, colour) and which you would still need to build yourself.',
        learn: 'Native form controls and input types',
      },
      {
        title: 'Constrain, then read the constraint',
        task: 'Add required, min, max, pattern and step to the fields. On submit, read the validity properties on the invalid element (el.validity.valueMissing, .rangeUnderflow, .patternMismatch) and print them next to the field. Only call reportValidity() after you have read them so the browser bubble does not swallow your message.',
        learn: 'How native browser form validation works',
      },
      {
        title: 'Style hints as emphasis, not decoration',
        task: 'Put "required" and format hints next to the fields. Mark the ones that carry real meaning with strong / em (they matter, they are read by screen readers) and the purely visual ones with b / i (they are only styling). Explain the difference to yourself out loud: one is content, the other is presentation.',
        learn: 'Difference between <strong>/<em> and <b>/<i>',
      },
      {
        title: 'Decide when to switch it off',
        task: 'Add novalidate to the form and re-implement the same three checks by hand, then write down when each version is correct: native first for instant feedback, custom when you need async rules (for example "is that name taken") or a bespoke UI.',
        learn: 'When you would disable native validation',
      },
    ],
    stretch: [
      'Group the type checkboxes in a fieldset with a legend and style the disabled state.',
      'Turn on :user-invalid and show that it only matches after interaction, unlike :invalid.',
      'Keep the values in the URL query string on submit so the filtered view is shareable.',
      'Add a live region that announces the number of results after submit.',
    ],
    starter: `<form action="https://pokeapi.co/api/v2/pokemon" method="get">
  <label for="name">Name or number</label>
  <input id="name" name="name" type="search" required />

  <label for="id">Exact Pokédex id</label>
  <input id="id" name="id" type="number" min="1" max="1025" step="1" />

  <label for="legendary">
    <input id="legendary" name="legendary" type="checkbox" />
    Legendary only
  </label>

  <label for="type">Type</label>
  <select id="type" name="type">
    <option value="">any</option>
  </select>

  <button type="submit">Search</button>
</form>

// read the reason the browser refused to submit
const field = document.querySelector<HTMLInputElement>('#id')!;
console.log(field.validity.rangeUnderflow, field.validationMessage);`,
    covers: ['html-8', 'html-11', 'html-12'],
  },
  {
    id: 'html-responsive-sprites',
    category: 'html',
    title: 'Serve sprites that look right on every screen',
    summary: 'srcset, sizes, alt text and the viewport meta tag working together.',
    prompt:
      'One sprite URL does not fit a 320px phone and a 1440px desktop. Use the sprite URLs the PokéAPI returns to build an image that the browser picks the right source for.',
    endpoints: [
      { path: '/pokemon/{name}', note: 'sprites.front_default plus sprites.other renderings' },
    ],
    steps: [
      {
        title: 'Give the browser more than one source',
        task: 'Build a srcset out of the same sprite at 96px, 192px and 384px, add sizes so the browser knows the layout width before CSS loads, and set the src fallback. Throttle the network to "slow 4G" in DevTools and watch which file is actually fetched as you resize.',
        learn: 'How do I make an image render well on different screen sizes',
      },
      {
        title: 'Write alt text that earns its place',
        task: 'Set alt to what a person needs when the image does not load ("Front sprite of Pikachu"), not to the filename. Then test the decorative case: a background pattern or a type icon next to visible text gets alt="" on purpose, and explain why that is better than leaving alt off.',
        learn: 'Why is the alt attribute important on images',
      },
      {
        title: 'Always declare width and height',
        task: 'Add width and height attributes matching the real sprite, then watch the layout in DevTools with "Render layout shift regions" on: the card no longer jumps when the image arrives because the space was already reserved.',
        learn: 'Preventing layout shift from images',
      },
      {
        title: 'Tie it back to the viewport meta tag',
        task: 'Set <meta name="viewport" content="width=device-width, initial-scale=1"> and explain what it changes for a desktop-sized layout viewport on a phone. Then resize to 320px and confirm the srcset picks the small source - that only happens because the viewport is now the device width.',
        learn: 'Viewport meta tag and why it matters on mobile',
      },
    ],
    stretch: [
      'Wrap the img in picture with avif and webp sources plus the png fallback.',
      'Lazy-load everything below the fold with loading="lazy" and fetchpriority="high" on the first sprite.',
      'Replace the img with a CSS background and log how the alt text problem comes back.',
    ],
    starter: `<figure>
  <img
    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
    srcset="
      https://.../25.png   96w,
      https://.../25.png  192w,
      https://.../25.png  384w
    "
    sizes="(max-width: 640px) 96px, 192px"
    width="192"
    height="192"
    alt="Front sprite of Pikachu"
    loading="lazy"
    decoding="async"
  />
  <figcaption>Pikachu</figcaption>
</figure>`,
    covers: ['html-4', 'html-5', 'html-10'],
  },
  {
    id: 'html-script-strategy',
    category: 'html',
    title: 'Load a second script without blocking the first paint',
    summary: 'See async and defer differ by watching the execution order.',
    prompt:
      'Your dex needs a small script after the first paint. Build the same three script tags (plain, defer, async) and measure exactly when each one executes relative to parsing, DOMContentLoaded and first paint.',
    endpoints: [{ path: '/pokemon?limit=1', note: 'Used as the data the late script fetches' }],
    steps: [
      {
        title: 'Instrument the three loading modes',
        task: 'Load the same tiny script three ways and have it push { mode, time } to window.__order. A plain script blocks the parser, defer waits for parsing and runs in order before DOMContentLoaded, async runs the moment it lands and in no guaranteed order. Print the resulting array.',
        learn: 'Difference between async and defer on a <script> tag',
      },
      {
        title: 'Make the order problem observable',
        task: 'Serve two defer scripts that depend on each other and show that order is preserved, then swap one for async and show it can land after them. Move the script into the head and repeat, so you can see why defer-from-head beats plain-body.',
        learn: 'Execution order of deferred and async scripts',
      },
      {
        title: 'Prefetch the API before the script needs it',
        task: 'Add <link rel="preconnect" href="https://pokeapi.co"> and <link rel="prefetch" href="https://pokeapi.co/api/v2/pokemon?limit=20"> in the head, then measure the fetch with performance.getEntriesByType("resource") and compare against the run without them.',
        learn: 'Prefetching vs preloading resources',
      },
      {
        title: 'Inject a widget script from code',
        task: 'Create the script element in JavaScript instead of in the template, point it at the endpoint you need, set async or defer explicitly (a dynamically inserted script defaults to async), and resolve a promise on its load event. Then show the encapsulation problem: the widget appends its own <div> to document.body, which lands outside your component, so style it from global.css or ::ng-deep-free CSS rather than the component stylesheet.',
        learn:
          'A third-party script needs injecting and global config loaded without breaking encapsulation',
      },
    ],
    stretch: [
      'Do the same measurement for a module script (type="module") and explain why defer is implied.',
      'Add a modulepreload for the bundle you are about to need.',
      'Show what happens when you inject a script from JavaScript - async defaults to true there.',
    ],
    starter: `<!-- head -->
<link rel="preconnect" href="https://pokeapi.co" />
<link rel="prefetch" href="https://pokeapi.co/api/v2/pokemon?limit=20" />

<!-- body, in this order -->
<script src="/blocking.js"></script>
<script src="/deferred-1.js" defer></script>
<script src="/deferred-2.js" defer></script>
<script src="/async-1.js" async></script>

<script>
  // each of the four scripts does the same thing:
  window.__order.push({ mode: 'defer', at: performance.now() });
  document.addEventListener('DOMContentLoaded', () =>
    window.__order.push({ mode: 'defer', event: 'DOMContentLoaded', at: performance.now() }),
  );
</script>`,
    covers: ['html-9', 'performance-14', 'angular-29', 'angular-27'],
  },
];
