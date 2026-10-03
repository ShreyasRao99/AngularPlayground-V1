import{E as Dn,Et as co,Ft as hy,T as Di,Tn as xT,W as Li,Wt as li,it as Tn,v as Ae}from"./main-VCCONGQM.js";import{a as V,i as J,n as B,r as H,t as $}from"./chunk-BlPTEdhk.js";var w=[{id:`html-semantic-entry`,category:`html`,title:`Build a semantic Pokédex entry page`,summary:`One page for a single Pokémon, built only from meaningful tags.`,durationMinutes:45,prompt:`Take one Pokémon and build its Pokédex entry page using semantic elements instead of a stack of divs. The data comes from the PokéAPI, so every heading, list and figure you render is real.`,endpoints:[{path:`/pokemon/{name or id}`,note:`Types, stats, height, weight, abilities, sprites`},{path:`/pokemon-species/{name}`,note:`Generation, habitat, flavour text, evolution chain`}],steps:[{title:`Draw the outline with landmarks`,task:`Build the page outline out of header, nav, main, article, section, aside and footer. Put the Pokémon name in a single h1, then group "Base stats", "Abilities" and "Training" into sections, each with its own h2. Nothing on the page should need a class to be understandable.`,learn:`Semantic HTML`},{title:`Choose div or span deliberately`,task:`Start by wrapping everything in div, then go back and fix it: the entry number (#025), the type badges and the weight beside the number are inline, so they are spans or better semantic tags. The stat cards stay block-level divs. Log getComputedStyle(el).display for one of each so you can see block vs inline in the output.`,learn:`Difference between a div and a span`},{title:`Argue article vs section`,task:`Wrap the whole entry in an article (it is independently linkable and shareable) and reserve section for themed groupings inside the dex list. Write a two-line comment saying why the Pokémon entry is an article and why "Base stats" is only a section.`,learn:`Difference between <article> and <section>`},{title:`Show the raw payload as code`,task:`Fetch the same endpoint yourself and print the response into a pre > code block. pre keeps the newlines and whitespace, code marks the actual snippet. Escape the value before injecting it so a name containing angle brackets cannot close the tag, and trim the payload to a readable handful of fields.`,learn:`How to show a block of code on a page`}],stretch:[`Render base stats as dl / dt / dd instead of a table of divs.`,`Put the extra stats behind details > summary so the page is not a wall of numbers.`,`Add a skip link as the first focusable element and confirm it appears on Tab.`,`Wrap the ability names in abbr with a title attribute so the abbreviation is explained.`],starter:`<body>
  <header>
    <h1>Pok\xE9dex</h1>
    <nav aria-label="Pok\xE9dex entries"><!-- generation filter --></nav>
  </header>

  <main>
    <article>
      <h2>Pikachu</h2>
      <figure>
        <img src="..." alt="Front sprite of Pikachu" width="96" height="96" />
        <figcaption>Pikachu, the Electric Mouse Pok\xE9mon</figcaption>
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

  <footer><!-- attribution: data from Pok\xE9API --></footer>
</body>`,covers:[`html-1`,`html-2`,`html-6`,`html-7`]},{id:`html-filter-form`,category:`html`,title:`Filter form that works without a single line of JavaScript`,summary:`Accessible label association plus native constraint validation.`,durationMinutes:45,prompt:`Build the "find a Pokémon" form on the dex without writing validation yourself: let the browser block the submit and report the first invalid field. Data still comes from the PokéAPI for the results, never for the validation.`,endpoints:[{path:`/pokemon?limit=&offset=`,note:`Submitted as the GET query string`},{path:`/type/{type}`,note:`One request per selected type to get the member list`}],steps:[{title:`Associate every label with its control`,task:`Give each input a unique id and point its label at that id with the for attribute. Deliberately break it once (mismatched id) and show that clicking the label no longer focuses the field. Confirm with document.querySelector("label").control that the association is real.`,learn:`How you correctly associate a <label> with a form control`},{title:`Pick the input type before adding validation`,task:`Use the right type for each field: search for the name, number with min/max for the Pokédex id, checkbox for "legendary only", select for the type. Note which ones give you a picker for free (date, number, colour) and which you would still need to build yourself.`,learn:`Native form controls and input types`},{title:`Constrain, then read the constraint`,task:`Add required, min, max, pattern and step to the fields. On submit, read the validity properties on the invalid element (el.validity.valueMissing, .rangeUnderflow, .patternMismatch) and print them next to the field. Only call reportValidity() after you have read them so the browser bubble does not swallow your message.`,learn:`How native browser form validation works`},{title:`Style hints as emphasis, not decoration`,task:`Put "required" and format hints next to the fields. Mark the ones that carry real meaning with strong / em (they matter, they are read by screen readers) and the purely visual ones with b / i (they are only styling). Explain the difference to yourself out loud: one is content, the other is presentation.`,learn:`Difference between <strong>/<em> and <b>/<i>`},{title:`Decide when to switch it off`,task:`Add novalidate to the form and re-implement the same three checks by hand, then write down when each version is correct: native first for instant feedback, custom when you need async rules (for example "is that name taken") or a bespoke UI.`,learn:`When you would disable native validation`}],stretch:[`Group the type checkboxes in a fieldset with a legend and style the disabled state.`,`Turn on :user-invalid and show that it only matches after interaction, unlike :invalid.`,`Keep the values in the URL query string on submit so the filtered view is shareable.`,`Add a live region that announces the number of results after submit.`],starter:`<form action="https://pokeapi.co/api/v2/pokemon" method="get">
  <label for="name">Name or number</label>
  <input id="name" name="name" type="search" required />

  <label for="id">Exact Pok\xE9dex id</label>
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
console.log(field.validity.rangeUnderflow, field.validationMessage);`,covers:[`html-8`,`html-11`,`html-12`]},{id:`html-responsive-sprites`,category:`html`,title:`Serve sprites that look right on every screen`,summary:`srcset, sizes, alt text and the viewport meta tag working together.`,durationMinutes:30,prompt:`One sprite URL does not fit a 320px phone and a 1440px desktop. Use the sprite URLs the PokéAPI returns to build an image that the browser picks the right source for.`,endpoints:[{path:`/pokemon/{name}`,note:`sprites.front_default plus sprites.other renderings`}],steps:[{title:`Give the browser more than one source`,task:`Build a srcset out of the same sprite at 96px, 192px and 384px, add sizes so the browser knows the layout width before CSS loads, and set the src fallback. Throttle the network to "slow 4G" in DevTools and watch which file is actually fetched as you resize.`,learn:`How do I make an image render well on different screen sizes`},{title:`Write alt text that earns its place`,task:`Set alt to what a person needs when the image does not load ("Front sprite of Pikachu"), not to the filename. Then test the decorative case: a background pattern or a type icon next to visible text gets alt="" on purpose, and explain why that is better than leaving alt off.`,learn:`Why is the alt attribute important on images`},{title:`Always declare width and height`,task:`Add width and height attributes matching the real sprite, then watch the layout in DevTools with "Render layout shift regions" on: the card no longer jumps when the image arrives because the space was already reserved.`,learn:`Preventing layout shift from images`},{title:`Tie it back to the viewport meta tag`,task:`Set <meta name="viewport" content="width=device-width, initial-scale=1"> and explain what it changes for a desktop-sized layout viewport on a phone. Then resize to 320px and confirm the srcset picks the small source - that only happens because the viewport is now the device width.`,learn:`Viewport meta tag and why it matters on mobile`}],stretch:[`Wrap the img in picture with avif and webp sources plus the png fallback.`,`Lazy-load everything below the fold with loading="lazy" and fetchpriority="high" on the first sprite.`,`Replace the img with a CSS background and log how the alt text problem comes back.`],starter:`<figure>
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
</figure>`,covers:[`html-4`,`html-5`,`html-10`]},{id:`html-script-strategy`,category:`html`,title:`Load a second script without blocking the first paint`,summary:`See async and defer differ by watching the execution order.`,durationMinutes:30,prompt:`Your dex needs a small script after the first paint. Build the same three script tags (plain, defer, async) and measure exactly when each one executes relative to parsing, DOMContentLoaded and first paint.`,endpoints:[{path:`/pokemon?limit=1`,note:`Used as the data the late script fetches`}],steps:[{title:`Instrument the three loading modes`,task:`Load the same tiny script three ways and have it push { mode, time } to window.__order. A plain script blocks the parser, defer waits for parsing and runs in order before DOMContentLoaded, async runs the moment it lands and in no guaranteed order. Print the resulting array.`,learn:`Difference between async and defer on a <script> tag`},{title:`Make the order problem observable`,task:`Serve two defer scripts that depend on each other and show that order is preserved, then swap one for async and show it can land after them. Move the script into the head and repeat, so you can see why defer-from-head beats plain-body.`,learn:`Execution order of deferred and async scripts`},{title:`Prefetch the API before the script needs it`,task:`Add <link rel="preconnect" href="https://pokeapi.co"> and <link rel="prefetch" href="https://pokeapi.co/api/v2/pokemon?limit=20"> in the head, then measure the fetch with performance.getEntriesByType("resource") and compare against the run without them.`,learn:`Prefetching vs preloading resources`},{title:`Inject a widget script from code`,task:`Create the script element in JavaScript instead of in the template, point it at the endpoint you need, set async or defer explicitly (a dynamically inserted script defaults to async), and resolve a promise on its load event. Then show the encapsulation problem: the widget appends its own <div> to document.body, which lands outside your component, so style it from global.css or ::ng-deep-free CSS rather than the component stylesheet.`,learn:`A third-party script needs injecting and global config loaded without breaking encapsulation`}],stretch:[`Do the same measurement for a module script (type="module") and explain why defer is implied.`,`Add a modulepreload for the bundle you are about to need.`,`Show what happens when you inject a script from JavaScript - async defaults to true there.`],starter:`<!-- head -->
<link rel="preconnect" href="https://pokeapi.co" />
<link rel="prefetch" href="https://pokeapi.co/api/v2/pokemon?limit=20" />

<!-- body, in this order -->
<script src="/blocking.js"><\/script>
<script src="/deferred-1.js" defer><\/script>
<script src="/deferred-2.js" defer><\/script>
<script src="/async-1.js" async><\/script>

<script>
  // each of the four scripts does the same thing:
  window.__order.push({ mode: 'defer', at: performance.now() });
  document.addEventListener('DOMContentLoaded', () =>
    window.__order.push({ mode: 'defer', event: 'DOMContentLoaded', at: performance.now() }),
  );
<\/script>`,covers:[`html-9`,`performance-14`,`angular-29`,`angular-27`]}];var b=[{id:`css-card-box-model`,category:`css`,title:`The Pokédex card, box model and all`,summary:`Padding vs margin, block vs inline vs inline-block, centring without flex.`,durationMinutes:45,prompt:`Style a Pokédex card from the raw sprite and stats the PokéAPI gives you. Do it with the box model, not with a framework, and be able to say what each declaration is doing.`,endpoints:[{path:`/pokemon/{name}`,note:`Sprite, height, weight, types for the card content`}],steps:[{title:`Draw the box`,task:`Give the card explicit content-box dimensions and open the Computed > Box Model overlay in DevTools. Walk the four layers (content, padding, border, margin) with a real card and say which one belongs to the element and which one is outside it.`,learn:`What is the CSS box model`},{title:`Feel the difference between padding and margin`,task:`Put 12px of padding around the sprite inside the card and 12px of margin outside it, then delete both one at a time. Write one sentence for each: padding is space inside the border, margin is space between boxes and it collapses with neighbours.`,learn:`Difference between padding and margin`},{title:`Switch box-sizing and watch the card change`,task:`Set box-sizing: border-box on the card and set the same width again. With content-box the card gets wider when you add padding and border; with border-box the padding eats into the declared width. Print getComputedStyle(card).width for both so you are not guessing.`,learn:`Why border-box is the sane default`},{title:`Place the sprite beside the text`,task:`The sprite is 96px and must sit next to the type badges without forcing the badges onto a new line. Compare a div (block, takes the full width, pushes everything down), a span (inline, flows with the text) and inline-block (flows with the text but still accepts width and height). Log the computed display of each so the difference is measurable, not vibes.`,learn:`Difference between block, inline and inline-block`},{title:`Centre it three different ways`,task:`Centre the card horizontally with margin: 0 auto, then with a flex parent (justify-content: center), then with grid (place-items: center). Explain why margin auto only works on block-level elements that have a width, and why it cannot centre vertically.`,learn:`How to center a block element horizontally`}],stretch:[`Add a focus ring with outline and show why outline does not affect layout while border does.`,`Use logical properties (padding-inline, margin-block) and flip direction: rtl.`,`Read the box model with getBoxQuads() instead of eyeballing it.`],starter:`.card {
  box-sizing: border-box; /* content-box is the default */
  width: 260px;
  padding: 12px;
  border: 1px solid;
  border-radius: 12px;
  margin-inline: auto; /* centred horizontally */
}

.card__sprite {
  width: 96px;
  height: 96px;
  display: inline-block; /* flows beside the text, still sized */
  vertical-align: middle;
}

.card__name {
  display: inline-block;
}`,covers:[`css-1`,`css-2`,`css-3`,`css-5`]},{id:`css-dex-layout`,category:`css`,title:`Grid for the dex, Flexbox for the toolbar`,summary:`Choosing between Grid and Flexbox, and reading align-items vs justify-content.`,durationMinutes:60,prompt:`Two layouts in one screen: a wrapping grid of Pokémon cards, and a horizontal toolbar of type filters with a search box at the end. Pick the right tool for each and stop reaching for the wrong one.`,endpoints:[{path:`/pokemon?limit=`,note:`Card data for the grid`},{path:`/type/{type}`,note:`Count of members per filter chip`}],steps:[{title:`Build the card grid with Grid`,task:`Use display: grid with grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)) so the number of columns is decided by the container width, not by breakpoints. Then try grid-template-columns: repeat(3, 1fr) and see why that one breaks on a phone. Log the resolved column count with getComputedStyle(grid).gridTemplateColumns.`,learn:`When would you use CSS Grid and when Flexbox`},{title:`Build the toolbar with Flexbox`,task:`The same wrapper as display: flex, with flex-wrap: wrap so the chips wrap instead of overflowing, and margin-left: auto on the search box to push it to the far edge. Explain that Grid lays out in two dimensions and Flexbox lays out in one.`,learn:`Grid vs Flexbox`},{title:`Separate the two axes`,task:`On the flex toolbar, change align-items between center, flex-start and stretch and watch only the cross axis move, then change justify-content between flex-start, center and space-between and watch only the main axis move. Write down which axis is which for row-direction.`,learn:`What do align-items and justify-content do in flexbox`},{title:`Use gap instead of margin hacks`,task:`Space the grid cells and the chips with gap and delete the :nth-child / last-child margin overrides you wrote first. Then add row-gap different from column-gap and explain why margin collapsing never applies inside a grid.`,learn:`Why gap beats margin for spacing`}],stretch:[`Make the first card span two columns and two rows with grid-column / grid-row.`,`Use grid-template-areas to switch the whole layout at a breakpoint with no extra markup.`,`Swap the grid for subgrid so the cards share one row height.`],starter:`.dex {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
}

.toolbar {
  display: flex;
  flex-wrap: wrap; /* chips wrap instead of overflowing */
  align-items: center; /* cross axis */
  gap: 8px;
}

.toolbar__search {
  margin-left: auto; /* pushes the search to the far edge */
}`,covers:[`css-11`,`css-4`]},{id:`css-sticky-filter`,category:`css`,title:`Pin the filter bar while the list scrolls`,summary:`relative, absolute, fixed and sticky, each demonstrated on the same element.`,durationMinutes:30,prompt:`The type filter bar has to stay reachable while you scroll through 151 cards. Take one element and step it through all four position values, watching what each one actually anchors to.`,endpoints:[{path:`/type/{type}`,note:`Filter chip state that stays pinned`}],steps:[{title:`Watch each position value on one element`,task:`Apply static, then relative, then absolute, then fixed, then sticky to the filter bar and log getComputedStyle(bar).position plus its boundingClientRect().top at scroll position 0 and after scrolling 500px. Relative keeps its slot but moves visually; absolute leaves the flow and anchors to the nearest positioned ancestor; fixed anchors to the viewport; sticky only sticks once you hit its threshold and stays inside its parent.`,learn:`Difference between position: relative, absolute, fixed and sticky`},{title:`Find the containing block`,task:`Give the filter bar position: absolute inside a container that is position: relative, then remove the relative and watch it jump to a different ancestor. That is the containing block rule, and it is the whole reason sticky silently fails in half the layouts people write.`,learn:`Containing block and positioned ancestors`},{title:`Make sticky actually work`,task:`Sticky needs three things: position: sticky, a top value, and a scrollable ancestor that is not overflow: hidden or overflow: clip. Reproduce the classic bug by adding overflow: hidden to a wrapper and confirm the bar stops sticking, then remove it.`,learn:`Why position: sticky needs overflow visible on ancestors`},{title:`Keep the sticky header from covering content`,task:`Reserve room for the pinned bar with scroll-margin-top on the anchored section and scroll-padding-top on the scrolling container, so a jump-to-card scroll does not hide the card under the header.`,learn:`scroll-padding-top vs scroll-margin-top`}],stretch:[`Pin the first column of the table with position: sticky on both axes.`,`Compare a sticky header with a fixed header in terms of containing-block width and sidebar behaviour.`,`Use position: sticky for a "back to top" bar that only appears after 400px of scroll.`],starter:`.layout {
  overflow-y: auto; /* the scroll container - never overflow: hidden */
  scroll-padding-top: 56px; /* room for the pinned bar */
}

.filter-bar {
  position: sticky;
  top: 0; /* stick once the top edge is reached */
  z-index: 10;
  background: Canvas; /* must be opaque or content shows through */
  padding-block: 8px;
}`,covers:[`css-8`,`css-3`]},{id:`css-theme-tokens`,category:`css`,title:`Light and dark themes with tokens, and no !important`,summary:`Custom properties as the single source of truth, specificity used on purpose.`,durationMinutes:60,prompt:`Ship a light/dark theme for the dex. Every colour and radius comes from one place, switching the theme is one attribute, and you never reach for !important to win an argument with your own stylesheet.`,endpoints:[{path:`/type/{type}`,note:`Type colours you expose as themed tokens`}],steps:[{title:`Define the palette as custom properties`,task:`Declare every colour, radius, shadow and spacing step on :root as a custom property, and have the card and chip styles reference var(--surface) and nothing else. Then swap a hex value in one place and confirm the whole screen follows.`,learn:`What are CSS custom properties and how are themes built with them`},{title:`Switch the theme with one attribute`,task:`Override the same property names under [data-theme="dark"] and toggle the attribute from a button. Because you only redefined values and never re-wrote rules, there is exactly one dark-theme block to maintain. Show what happens if you forget one property: it falls back to the :root value.`,learn:`How a theme swap stays a one-line change`},{title:`Read the cascade before you override it`,task:`Intentionally lose to a stylesheet: write the same rule as .type-chip and as #detail .type-chip and show which wins, then work out why by comparing (a) specificity, (b) source order, (c) where it sits. Print the winning rule from DevTools Styles pane rather than guessing.`,learn:`What are specificity and the cascade, and where does !important fit in`},{title:`Prefer a class over an id for this`,task:`Notice that your #id selector forces you to escalate specificity on every override. Move it to classes, confirm the override problem disappears, and state the rule: ids are for uniqueness in the document (fragment targets), classes are for styling.`,learn:`When should I use a class instead of an id`},{title:`Load your overrides last on purpose`,task:`Add a small overrides.css loaded after the main sheet so you can win on source order instead of specificity, and then move those rules into @layer base / components / utilities and show the third layer still loses to the first two. Explain why layers beat specificity.`,learn:`Cascade layers and where !important actually belongs`}],stretch:[`Derive the dark palette from the light one with color-mix() instead of duplicating every value.`,`Honour prefers-color-scheme as the default and let the toggle override it.`,`Expose a --type-color per Pokémon type so a chip is themed automatically from data.`,`Add a container query so a card inside a narrow panel uses the small radius token.`],starter:`:root {
  color-scheme: light;
  --surface: oklch(98% 0 0);
  --on-surface: oklch(20% 0 0);
  --accent: oklch(55% 0.18 250);
  --radius-card: 12px;
  --type-color: var(--accent);
}

[data-theme='dark'] {
  color-scheme: dark;
  --surface: oklch(22% 0 0);
  --on-surface: oklch(96% 0 0);
  --accent: oklch(75% 0.14 250);
}

@layer base, components, utilities;

@layer components {
  .card {
    background: var(--surface);
    color: var(--on-surface);
    border-radius: var(--radius-card);
    border-inline-start: 4px solid var(--type-color);
  }
}`,covers:[`css-7`,`css-6`,`html-3`]},{id:`css-responsive-units`,category:`css`,title:`One stylesheet, phone to desktop`,summary:`rem vs em vs px vs % vs vw, and mobile-first breakpoints.`,durationMinutes:45,prompt:`Make the dex grid genuinely responsive without a device in your hand: relative units so it respects the user font size, and mobile-first breakpoints so small screens get the base styles for free.`,endpoints:[{path:`/pokemon?limit=&offset=`,note:`Same content at every breakpoint`}],steps:[{title:`Replace every px with a relative unit`,task:`Convert the card padding, gap and radius to rem, the icon size inside a card to em, the grid column width to %, and one full-height panel to vh. Then bump the browser font size to 24px and watch which parts scale with the text and which scale with their container. Write down why % on font-size refers to the parent font size, not the viewport.`,learn:`Difference between px, rem, em, % and vw/vh`},{title:`Go mobile-first with min-width`,task:`Write the base rules for a 320px screen first (single column, compact padding), then add min-width media queries at 640px and 1024px that only add. Resize down and up and confirm there is never a window where the styles are wrong. Explain why this is less work than max-width plus mobile overrides.`,learn:`What are responsive breakpoints and why is mobile-first preferable`},{title:`Make one property fluid`,task:`Replace the card padding and the sprite width with clamp(min, preferred, max) using vw as the fluid part, so the middle value interpolates instead of jumping at a breakpoint.`,learn:`Fluid typography and spacing with clamp()`},{title:`Let the component decide, not the viewport`,task:`Move the one narrow-widget rule from a media query to a container query so the card adapts to the width of the panel it lands in, then show the same card in a narrow sidebar and a wide main column without a class change.`,learn:`Container queries vs media queries`}],stretch:[`Respect prefers-reduced-motion and prefers-contrast in the transitions.`,`Use dvh instead of vh so the layout survives mobile browser chrome.`,`Print the resolved value of a rem and a vw on screen to prove the maths.`],starter:`:root {
  --gap: 0.75rem; /* scales with the user font size */
  --pad: clamp(0.5rem, 2vw, 1.25rem);
}

/* mobile first: the base rules are the phone */
.dex {
  display: grid;
  grid-template-columns: 1fr; /* 320px screen: one column */
  gap: var(--gap);
  padding: var(--pad);
}

@media (min-width: 640px) {
  .dex {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .dex {
    grid-template-columns: repeat(4, 1fr);
  }
}

.card {
  container-type: inline-size; /* let the card, not the viewport, decide */
}`,covers:[`css-9`,`css-10`]}];var v=[{id:`js-memoised-fetcher`,category:`javascript`,title:`A memoised Pokémon fetcher`,summary:`Closures, hoisting and why let/const are not just style.`,durationMinutes:45,prompt:`Build a fetch wrapper that never asks the PokéAPI for the same Pokémon twice. The cache has to live somewhere, and the interesting part is which language feature gives you that.`,endpoints:[{path:`/pokemon/{name or id}`,note:`The call being cached`}],steps:[{title:`Predict hoisting before you run anything`,task:`Write three tiny scripts: one with a var function declaration called above it, one with a var expression called above it, one with a let declaration called above it. Run each and explain the three different failures from TDZ alone, before you look at any docs.`,learn:`Hoisting, and how var, let and const differ`},{title:`Swap var for let/const and log every assignment`,task:`Convert your fetcher to const for the cache and let for anything reassigned. Then try to reassign a const and to write to an undeclared variable, and explain why one gives you a TypeError at the assignment while the other only throws in use strict mode.`,learn:`What does use strict do`},{title:`Let the closure hold the cache`,task:`Write createPokemonFetcher() that returns a function plus a reset function, with the internal Map captured by both. The cache is invisible outside - prove it by never returning the Map itself. Then break the closure by moving the cache to module scope and show any caller can now clear it.`,learn:`What is a closure`},{title:`Deduplicate in-flight requests, not just results`,task:`The cache only stores finished responses, so two calls in the same tick both hit the network. Store the in-flight promise instead so the second call awaits the first. Verify with a network counter: three rapid calls to the same name produce one request.`,learn:`Closures used for private state and request dedupe`}],stretch:[`Add a TTL so a cached entry expires after 60s, and expose a hit/miss counter.`,`Evict the least recently used entry once the cache is over 20 items.`,`Return a never-resolving promise when a call is deduped and log who is waiting.`],starter:`const CACHE = Symbol('pokemon-cache');

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
}`,covers:[`js-3`,`js-1`,`js-2`,`js-15`]},{id:`js-array-pipeline`,category:`javascript`,title:`Reduce 151 Pokémon into real statistics`,summary:`map/filter/reduce/forEach, ES6+ syntax, and the coercion traps in between.`,durationMinutes:60,prompt:`Pull a full page of Pokémon and produce a summary a designer asked for. You will use every array method at least once, and you will hit at least one coercion bug on the way.`,endpoints:[{path:`/pokemon?limit=151&offset=0`,note:`The 151 original Pokémon`},{path:`/pokemon/{id}`,note:`Per-Pokémon detail for stats and types`}],steps:[{title:`Map to a view model`,task:`Turn each result item (name plus a url) into { id, name, number } by pulling the id out of the URL. Do the same for the detail payload into a flat object. Remember that map returns a new array of the same length and never mutates the source - check the original array is untouched.`,learn:`map, and when to use it`},{title:`Filter, find and some`,task:`Filter to the Pokémon whose names start with a given letter, find the single one with a specific id, and use some to check if any has a legendary type before you request 151 details. Note that each returns a different shape: array, value or boolean.`,learn:`filter and the rest of the array methods`},{title:`Reduce to a single answer`,task:`Use reduce to build an object keyed by primary type with the count of members, and another to find the tallest Pokémon. Compare reduce with a forEach accumulator written out longhand, and with a plain for loop, and write down when each is the right tool.`,learn:`reduce and forEach`},{title:`Find the min and max without sorting`,task:`Find the lightest and heaviest Pokémon in one pass with reduce instead of sorting the whole array, and give the running-extremes version as a second implementation. Then explain where Math.min(...arr) stops working: spreading an array passes one argument per element, so it is safe at 151 items but throws "too many arguments" somewhere around 100,000 - which is why a reduce-based max is the version that holds up.`,learn:`How do you find the minimum and maximum value in an array`},{title:`Get bitten by coercion`,task:`Try filtering on the id straight from the URL string: "25" === 25 is false, "25" == 25 is true, Number("25px") is NaN and parseInt("25px") is 25. Log all four, then fix it once with Number() at the boundary and prove the bug is gone. Also parse a missing optional field with ?. and ?? so you never return "undefined" as a string.`,learn:`Type coercion in JavaScript`},{title:`Use the ES6+ syntax you actually want to use daily`,task:`Rewrite the pipeline with destructuring, default parameters, template literals, shorthand properties and optional chaining, then use at least one Array.from and one Object.entries. Nothing exotic - only what you would defend in review.`,learn:`ES6+ features worth knowing`}],stretch:[`Group the Pokémon by type with a Map instead of an object so numeric keys are safe.`,`Chunk the array into pages of 20 with a single reduce.`,`Make the whole pipeline lazy with a generator so you stop fetching when you have enough.`],starter:`const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
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
);`,covers:[`js-9`,`js-16`,`js-19`,`js-20`]},{id:`js-collections-prototypes`,category:`javascript`,title:`A species registry with Map, Set and a prototype chain`,summary:`The right collection, a real prototype chain, and freezing what must not change.`,durationMinutes:90,prompt:`Build a registry that the dex app can query: every Pokémon it has seen, grouped by type, with the exact detail payload behind each one. It will be handed to code you do not control, so part of it must be immutable.`,endpoints:[{path:`/pokemon?limit=`,note:`Names to register`},{path:`/pokemon/{name}`,note:`The detail object stored per entry`}],steps:[{title:`Pick the right collection for each job`,task:`Use a Map keyed by name for lookup (try a plain object with the name "constructor" as a key and watch what you get back), a Set for the unique type list (push to an array, then compare size to length after dedupe with [...new Set(arr)]), and note that Set preserves insertion order while an array does not.`,learn:`Map, Set and WeakMap vs plain objects and arrays`},{title:`Know when WeakMap is the right one`,task:`Attach per-entry UI state (expanded, scroll offset) to the entry objects in a WeakMap instead of adding fields to them. Then explain why the key can be garbage collected, and why you cannot iterate a WeakMap.`,learn:`WeakMap semantics`},{title:`Build the chain on purpose`,task:`Define class Species with a name and a get slug() method, extend it with class Pokemon extends Species that adds types, and look up an inherited method to show where it resolves. Then print the chain: p -> Pokemon.prototype -> Species.prototype -> Object.prototype -> null, and show that Species.prototype is shared so mutating it affects every Pokémon.`,learn:`What is the prototype chain`},{title:`Separate a method from a function`,task:`Write one behaviour as a prototype method (this.types includes) and the same logic as a standalone function taking the object. Explain why the method gets the object for free, why standalone functions are easier to pass around and test, and why you should never do pokemon.hasOwnProperty for a list check.`,learn:`Difference between a function and a method`},{title:`Borrow a function with call, apply and bind`,task:`Call your standalone Pokemon function with a single pokemon (call), with an array of them (apply), and with a pre-bound pokemon (bind) so every later call keeps that receiver. Show that bind is the only one that is sticky, that arrow functions ignore all three, and that the pokemon argument of a method is just a convention until you use them.`,learn:`What do call, apply and bind do`},{title:`Freeze the parts you do not own`,task:`Apply Object.freeze to a cached detail object and confirm a write silently fails (or throws in strict mode), compare with Object.seal and Object.preventExtensions, and use Object.defineProperty for a read-only computed field. Pick which one you actually need and say why the others are the wrong tool.`,learn:`How do you prevent an object from being modified`}],stretch:[`Clone a frozen entry with structuredClone and show the copy is editable.`,`Implement has(type) with a precomputed Set per instance instead of array includes.`,`Show that JSON.parse(JSON.stringify(x)) drops undefined, Dates and Maps.`],starter:`class Species {
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
uiState.set(pokemon, { expanded: false });`,covers:[`js-11`,`js-13`,`js-18`,`js-6`,`js-14`]},{id:`js-query-builder`,category:`javascript`,title:`A typed query builder for the dex API`,summary:`Spread vs rest, Object.assign vs spread, and null vs undefined.`,durationMinutes:90,prompt:`The dex API takes filters as query parameters. Build a small builder that takes a partial filter object, drops the empty values and produces a clean URL string you can hand to fetch.`,endpoints:[{path:`/pokemon?limit=&offset=`,note:`The URL your builder has to produce`},{path:`/pokemon-species/{name}?limit=`,note:`Second route with different params`}],steps:[{title:`Use spread three different ways`,task:`Spread an options object into fetch(url, { ...defaults, ...overrides }) so a caller can override a header, spread a params object into a new array of [key, value] pairs, and use a rest parameter to collect "everything else". Then explain why the rest parameter has to be last and why object spread is shallow.`,learn:`Spread operator vs rest parameters`},{title:`Spread or Object.assign?`,task:`Merge two filter objects both ways, then pass getters, a Set and a function as values. Explain that spread only copies own enumerable properties while Object.assign also triggers setters on the target. Choose one, say why, and use it consistently.`,learn:`Object.assign vs object spread`},{title:`Distinguish null from undefined`,task:`Log the difference between null and undefined on purpose: == null matches both, === null matches only null, undefined means "never set", null means "explicitly none". Then show what ?? does that || does not for a weight of 0 (a Pokémon can weigh 0.0 in the API), and why you need ?? for numeric data.`,learn:`Difference between null and undefined`},{title:`Drop empty values the right way`,task:`Filter out undefined, null and empty strings from the params, but keep 0 and false, because limit=0 is meaningful. getEntries() plus a filter that tests the value rather than the truthiness is the tool. Show the difference with a one-line filter.`,learn:`Truthiness vs explicit checks`},{title:`Produce a URL and prove it`,task:`Build the query string with URL and URLSearchParams (it handles encoding for you, including a name with a space) and print the final URL for two different filter sets. Then fetch it and confirm the PokéAPI accepts it.`,learn:`Composing URLs safely`}],stretch:[`Support an array value that becomes repeated keys (type=fire&type=water).`,`Freeze the returned params so a caller cannot mutate your defaults.`,`Write a parse function that turns the URL back into the filter object.`],starter:`const DEFAULTS = { limit: 20, offset: 0 };

function buildDexUrl(route, { limit, offset, type, q, ...rest } = {}, base = DEFAULTS) {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries({ ...DEFAULTS, ...base, ...rest, limit, offset, type, q })) {
    if (value === undefined || value === null || value === '') continue; // keep 0 and false
    params.set(key, String(value));
  }

  const query = params.toString();
  return \`https://pokeapi.co/api/v2/\${route}\${query ? '?' + query : ''}\`;
}

console.log(buildDexUrl('pokemon', { limit: 0, type: 'fire' }));`,covers:[`js-10`,`js-17`,`js-4`]},{id:`js-event-delegation`,category:`javascript`,title:`One click handler for a 151-card grid`,summary:`Capture, bubble, preventDefault, stopPropagation, and this in arrow functions.`,durationMinutes:45,prompt:`Attach click handling to a grid that renders a variable number of Pokédex cards. Attaching 151 listeners is the wrong answer, and the reason why is the event path.`,endpoints:[{path:`/pokemon?limit=151`,note:`How many cards you are handling`}],steps:[{title:`Trace the three phases`,task:`Add listeners for capture, target and bubble on the grid and on one card, and log each hit with event.target and event.currentTarget. Watch the order: capture goes root-down, then the target, then bubble goes back up. Note that event.target is the deepest node and currentTarget is the node you attached to.`,learn:`Event propagation, capture and bubble`},{title:`Stop the right thing`,task:`Put an <a> inside a card and click it. preventDefault stops the browser navigating, stopPropagation stops the event travelling further, stopImmediatePropagation also skips the remaining listeners on the same node. Do all three and log which one the ancestor listener sees.`,learn:`preventDefault vs stopPropagation`},{title:`Delegate from the container`,task:`Attach exactly one listener on the grid and resolve the card with event.target.closest("[data-pokemon]"), then read the id from its dataset. Add a second button per card (favourite) and show one handler can cover both by branching on the closest button.`,learn:`Event delegation with closest()`},{title:`Know what this is`,task:`Compare a function declaration handler (this is the element, and changes with .call) with an arrow function handler (this is the surrounding scope, inherited from where it was written). Show that an arrow function cannot be bound with call/apply/bind, and that this is why arrow functions are safe as class fields.`,learn:`Arrow functions vs function declarations`},{title:`Clean up without leaking`,task:`Add and remove the handler repeatedly and show the listener count growing, then remove it with the exact same function reference, then with an AbortController signal. While you are there, log the order of a Promise.then, a queueMicrotask and a setTimeout(0) to show why JavaScript can look concurrent on one thread.`,learn:`Listener cleanup and the task queues`}],stretch:[`Add a { passive: true } wheel or touch listener and note what you can no longer do.`,`Handle the same events by keyboard with the grid as a listbox and roving tabindex.`,`Rewrite the delegated handler as a custom event dispatched from the card instead.`],starter:`const grid = document.querySelector('#dex');
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
});`,covers:[`js-7`,`js-8`,`js-5`,`js-12`]},{id:`js-modules-lazy`,category:`javascript`,title:`Split the dex into ES modules and load the detail view on demand`,summary:`import/export, dynamic import(), and what actually runs when.`,durationMinutes:60,prompt:`Start from one 900-line dex file and end up with the initial load carrying only what the grid needs. The detail view should arrive as a separate file the first time it is used.`,endpoints:[{path:`/pokemon?limit=20`,note:`Loaded eagerly, needed for the grid`},{path:`/pokemon/{name}`,note:`Loaded lazily, needed by the detail view only`}],steps:[{title:`Split by responsibility, not by size`,task:`Create api.js (fetch helpers), format.js (pure display helpers) and ui.js (DOM rendering), then import only what you use in each file with named imports. Prove the split is real by having format.js take a plain object and never import the api.`,learn:`ES modules and named vs default exports`},{title:`Load the detail view lazily`,task:`Put the detail renderer in its own module and import it with await import("./detail.js") the first time a card is opened. Log performance.getEntriesByType("resource") before and after and show the second chunk only exists after the click. Then pre-import it on hover and show the chunk is ready before the click.`,learn:`Dynamic import() and code splitting at module level`},{title:`Let the module graph tell you the truth`,task:`Use top-level await to fetch the first page of Pokémon before the module finishes evaluating, and compare the ordering against putting the same await inside an async function that is called later. Explain why top-level await blocks importers and where you would rather not use it.`,learn:`Module evaluation order and top-level await`},{title:`Show why one thread is enough`,task:`Start three fetches in parallel with Promise.all and log the order of resolution against the order of the calls. Then break it with a blocking loop over 50 items and show the other promises stall. That is the event loop: concurrency comes from I/O, not from threads.`,learn:`Why JavaScript is single-threaded yet concurrent`}],stretch:[`Handle a dynamic import that fails (offline) with a try/catch and a retry affordance.`,`Use an import map so the CDN base URL is not hardcoded in every file.`,`Show the same code as a CommonJS require and explain the interop difference.`],starter:`// api.js
export const BASE = 'https://pokeapi.co/api/v2';

export async function getPokemonList(limit = 20, offset = 0) {
  const res = await fetch(\`\${BASE}/pokemon?limit=\${limit}&offset=\${offset}\`);
  if (!res.ok) throw new Error(\`Pok\xE9API responded \${res.status}\`);
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
});`,covers:[`js-5`,`js-16`,`js-12`]}];var k=[{id:`angular-content-projection`,category:`angular`,title:`Card shell with named projection slots`,summary:`One card layout, four call sites, no duplicated markup.`,durationMinutes:60,prompt:`Four places in the dex need a card: the grid, the search results, the "my favourites" list and the detail header. Build the shell once with content projection and let each caller decide what goes in.`,endpoints:[{path:`/pokemon?limit=20`,note:`Fills the grid call site`},{path:`/pokemon/{name}`,note:`Fills the detail call site`}],steps:[{title:`The naive version`,task:`Copy your existing card markup into the four call sites, then add one field (a "favourite" toggle) to all four and count the edits. That duplication is the argument for projection.`,learn:`Why projection exists`},{title:`One slot, then a named slot`,task:`Build <app-pokemon-card> with a single <ng-content> and pass the sprite, name and types in. Then convert it to named slots: <ng-content select="[card-media]">, <ng-content select="[card-body]"> and <ng-content select="[card-actions]">. Note that any markup that matches no selector is dropped, which is the single most common projection bug.`,learn:`What is content projection (ng-content)`},{title:`Project the same card four ways`,task:`Use the shell in the grid with the sprite projected, in the search results with a highlighted name, in favourites with a delete action in the footer slot, and in the detail header with no media at all. One component, four templates, zero conditionals inside the shell.`,learn:`Content projection`},{title:`Control where content lands`,task:`Add an <ng-template> slot for the loading state and give it a fallback content between the tag and the closing slash, so the shell renders a skeleton instead of nothing when the caller has not projected one. Then set ngProjectAs when the same element should fill a different slot.`,learn:`ng-template slots, fallback content and ngProjectAs`},{title:`Be honest about the trade-off`,task:`List what projection costs: the caller can no longer reorder or restyle the internal structure, and querying the projected nodes needs contentChild rather than viewChild. Decide whether the detail header has outgrown a shell with slots and should just be its own component.`,learn:`When projection is the wrong abstraction`}],stretch:[`Project an <input> into a form-aware slot and wrap it with a label you do not own.`,`Move to the new content projection block syntax and compare it with ng-content.`,`Query projected content with contentChild() and read its value.`,`Make the shell a standalone component and import it four times.`],starter:`@Component({
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
</app-pokemon-card>`,covers:[`angular-21`,`angular-2`,`angular-1`]},{id:`angular-signal-paginator`,category:`angular`,title:`Reusable pagination component`,summary:`Pull your pagination out of the list so any list can use it.`,durationMinutes:90,prompt:`Paginate the PokéAPI list, then pull the pagination out into an <app-paginator> that any list can use. No page index logic is allowed to live inside the list.`,endpoints:[{path:`/pokemon?limit=&offset=`,note:`limit and offset come straight from the component`},{path:`/pokemon/{name}`,note:`Optional detail fetch when the page changes`}],steps:[{title:`Reusable pagination component`,task:`Pull your pagination out into a <app-paginator> that any list can use. Use input.required<number>() for totalItems, model<number>() for page and pageSize, so the parent can write [(page)]="page". Use computed for totalPages and the page-number buttons (1 2 3 ... 10), so the button list is never state you have to keep in sync by hand.`,learn:`Components, data binding, and the signal input/output APIs`},{title:`linkedSignal for the reset`,task:`Make page reset automatically when pageSize changes, instead of calling page.set(1) by hand:

page = linkedSignal({
  source: this.pageSize,
  computation: () => 1
});

The declaration order matters: the parent sets [(pageSize)] from a select, and the paginator owns resetting the page. Explain what would go wrong if you did it in ngOnChanges.`,learn:`linkedSignal, and derived state that resets with its source`},{title:`Keep the data fetch honest`,task:`The parent watches page() and pageSize() and turns them into limit and offset. Read them through toSignal or a computed effect, not through ngOnInit, so a page change always triggers a refetch. Log the offset for three page changes to prove the maths (offset = (page - 1) * pageSize).`,learn:`constructor vs ngOnInit, and async pipe / toSignal for async data`}],stretch:[`Jump-to-page input that clamps to totalPages.`,`Ellipsis logic so 200 pages still render as 1 ... 24 25 26 ... 200.`,`Disable or hide the edges instead of rendering dead buttons.`,`Keyboard support: Home, End, PageUp, PageDown.`],starter:`@Component({
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
// offset = (page() - 1) * pageSize()`,covers:[`angular-5`,`angular-16`,`angular-17`,`angular-1`,`signals-1`,`signals-8`]},{id:`angular-star-rating`,category:`angular`,title:`Star rating component that works inside a form`,summary:`model() for two-way binding, transformed inputs, then a real ControlValueAccessor.`,durationMinutes:75,prompt:`Build a 5-star rating with a hover preview, then make it work inside a reactive form. The hover state must never leak into the saved value.`,endpoints:[{path:`/pokemon/{name}`,note:`Persist the rating per Pokémon`},{path:`/pokemon?limit=`,note:`Show the average rating in a summary row`}],steps:[{title:`Star rating component`,task:`A 5-star rating with hover preview, usable in a form. Use model<number>() for the value, so [(rating)]="rating" works. Use input() with transform: numberAttribute for max, and booleanAttribute for readonly, so <app-star-rating max="10" [readonly]="true"> binds correctly without manual parsing in the template.`,learn:`@Input and @Output, and how the signal APIs change them`},{title:`Local hover state plus one computed`,task:`Keep a local signal for the hovered star, and a computed for what to display (hover preview while hovering, actual value otherwise). The computed is what the template reads, so the rule "hover never becomes the value" lives in one readable line instead of scattered ngIfs.`,learn:`Data binding and derived state`},{title:`Make it form-compatible`,task:`Wrap it in a form with FormControl and control.valueChanges. Then add NG_VALUE_ACCESSOR to the star component: writeValue, registerOnChange, registerOnTouched, setDisabledState. Push the value from registerOnChange, never by writing to the control directly, and confirm the form is valid while the rating is 0.`,learn:`Reusable form input that works with ngModel and reactive forms`}],stretch:[`Half stars by splitting each star into two hit areas and storing 0.5 steps.`,`Keyboard support: arrow keys change the value, Home resets, Space sets it.`,`aria-valuenow / role="slider" so a screen reader announces the rating.`,`Disable the component from the parent form and see setDisabledState fire.`],starter:`@Component({
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
}`,covers:[`angular-5`,`angular-2`,`angular-12`,`angular-22`]},{id:`angular-todo-app`,category:`angular`,title:`Pokémon to-do list with filters and persistence`,summary:`Full CRUD on a signal array, derived filters, and a child component with clean IO.`,durationMinutes:120,prompt:`Add, toggle, delete and edit a "catch list", filter it by All/Active/Completed, show a count of remaining items, and persist to localStorage. Everything in one feature folder.`,endpoints:[{path:`/pokemon?limit=151`,note:`The picker you add items from`},{path:`/pokemon/{name}`,note:`Details for the item being added`}],steps:[{title:`State and immutable updates`,task:`Keep todos in a single signal<Todo[]>() and update it with update() instead of mutating the array. Add, toggle, delete and edit all go through it. Confirm the array reference changes on every update - that is what makes OnPush and computed see the change.`,learn:`What is a component in Angular, and data binding`},{title:`Derived state, never stored state`,task:`Use computed for the filtered list (All/Active/Completed) and for the remaining count. Do not keep filteredTodos as a signal you update in three places: the filter signal is the only input, and the two computeds are derived from it.`,learn:`Change detection and computed state`},{title:`Persistence as a side effect`,task:`Use effect to save to localStorage whenever todos change, and read it back on first load. Note the effect runs at least once, so guard the write or you will clobber stored data with an empty array on boot.`,learn:`Signals, computed and effect`},{title:`Child component with honest IO`,task:`Build a TodoItem child with input.required<Todo>() and output() for toggle / delete. Nothing else: no service injection, no access to the parent signal, no events bubbling through layers. Explain what breaks when you break that rule.`,learn:`Component boundaries and unidirectional data flow`},{title:`Focus management`,task:`Inline edit with viewChild() to focus the input when editing starts and to return focus to the row when it saves. Handle the case where the item is deleted while the input is focused.`,learn:`Template references, view queries and lifecycle`}],stretch:[`Clear completed with a single update and a confirmation.`,`Drag to reorder: hold the index in the update callback, do not track it in state.`,`Undo the last delete by keeping the removed todo and its index for 5 seconds.`,`Route to /todos so the list survives a refresh through the URL.`],starter:`interface Todo {
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
}`,covers:[`angular-1`,`angular-2`,`angular-16`,`signals-3`,`signals-1`]},{id:`angular-filter-store`,category:`angular`,title:`Two unrelated components that must stay in sync`,summary:`A sidebar filter and a results list with no parent to talk to.`,durationMinutes:60,prompt:`Build a filter sidebar and a results table that know nothing about each other, yet must always agree. If one of them can be deleted without breaking the app, the design is wrong.`,endpoints:[{path:`/pokemon?limit=&offset=`,note:`The filtered list request`},{path:`/type/{type}`,note:`Filter chip options and counts`}],steps:[{title:`Find the shared owner`,task:`Before writing code, list what both components need: the filter state, the total count, the loading flag, the results. That list is the service. Write its public surface first, then implement each component against it.`,learn:`What is dependency injection`},{title:`One source of truth, provided once`,task:`Make the filter a single writable signal inside a providedIn: 'root' service, and have both components inject it. Neither component passes anything to the other, and neither calls the API. Move the sidebar and the table to different routes - they still agree.`,learn:`Sharing state between sibling components`},{title:`Decide where the request belongs`,task:`Put the HTTP call in the service, keyed off the filter, so neither component duplicates it. Use a cache or shareReplay so switching between two components does not refetch what is already loaded.`,learn:`Where side effects live in an Angular app`},{title:`Model loading and error per state`,task:`Add idle / loading / loaded / error to the service and expose them as computeds. Both components then render the same state without any coordination code. Verify the error state by pointing the service at a bad URL.`,learn:`Representing UI state explicitly`}],stretch:[`Sync the filter into the URL query params so the view is shareable and survives a reload.`,`Persist the filter per user in the service and restore it on login.`,`Add a second consumer (a footer summary) that reads the same service.`,`Broadcast filter changes across browser tabs with BroadcastChannel.`],starter:`@Injectable({ providedIn: 'root' })
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
// They share state and neither knows the other exists.`,covers:[`angular-8`,`angular-4`,`angular-2`]},{id:`angular-runtime-forms`,category:`angular`,title:`Generate the filter form from a JSON schema`,summary:`Forms built at runtime, shared across a stepper, plus an async validator.`,durationMinutes:90,prompt:`The backend owns the filter definition: it sends a JSON schema and the app has to build the form from it. Then add a "name already taken" check that runs while the user types.`,endpoints:[{path:`/pokemon/{name}`,note:`Returns 404 for an unknown name - use it for the async validator`},{path:`/pokemon?limit=`,note:`Fetch the form schema once at startup`}],steps:[{title:`Schema to FormGroup`,task:`Define a schema type (string, number, boolean, enum, plus required/min/max/options), fetch it, and build the FormGroup in a loop with addControl. Show the control count matching the schema length, and add a control at runtime with addControl and remove one with removeControl.`,learn:`Forms generated at runtime from a JSON schema`},{title:`One form across several components`,task:`Pass a FormGroup down a stepper so each step owns a FormGroup of its own, and combine them into one parent with addControl per step. Submit once at the end and read the nested value. Explain what breaks if each step builds its own unrelated group.`,learn:`A stepper form spread across components that behaves as one form`},{title:`Validate while the user types`,task:`Add an async validator for "is that name taken" that calls the Pok\xE9API and returns { taken: true }. Wire it with updateOn: 'change' so it fires as they type, return null when the field is untouched or too short to be meaningful, and switchMap inside the validator so a slow response for an old value cannot overwrite a newer one.`,learn:`Async validation against a backend while typing`},{title:`Show the error, not just the state`,task:`Render the message from errors, keep the pending state visible, and disable submit while status === PENDING. Prove the race is gone by typing fast and confirming the message matches the last value.`,learn:`Presentation of async validation state`}],stretch:[`Reusable input that works with both ngModel and reactive forms (NG_VALUE_ACCESSOR).`,`valueChanges piped through debounceTime before hitting the API, to show why both halves matter.`,`Persist the partially completed form to sessionStorage across a reload.`,`Unit test the schema-to-group builder with a fixture schema.`],starter:`type FieldSchema = {
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

form = new FormGroup({ name: new FormControl('', { asyncValidators: [nameTaken], updateOn: 'change' }) });`,covers:[`angular-25`,`angular-13`,`angular-22`,`angular-12`]},{id:`angular-interceptors`,category:`angular`,title:`Auth, spinner and error reporting as interceptors`,summary:`One cross-cutting concern per interceptor, and an order that matters.`,durationMinutes:75,prompt:`Every PokéAPI call in the app needs the same four things: an auth header, a global spinner counter, a normalised error shape, and a trace id in the logs. Implement them as interceptors rather than copy-paste.`,endpoints:[{path:`/pokemon/{name}`,note:`Returns 404 - use it to exercise the error interceptor`},{path:`/pokemon?limit=`,note:`The normal path through the chain`}],steps:[{title:`The first functional interceptor`,task:`Write an authFn that clones the request, adds the header, and forwards it with next(req). Then add a spinner interceptor that increments on request and decrements on finalise (not on subscribe) so parallel requests cannot desync the counter. Fire two requests at once and confirm the spinner hides only when both finish.`,learn:`What is an HTTP interceptor and what are typical use cases`},{title:`Order is the whole point`,task:`Register auth, then tracing, then spinner, then error mapping. Predict which runs first for outgoing and for incoming requests, then prove it by logging in each interceptor. Explain why two error interceptors would both see the error.`,learn:`Functional interceptors and their execution order`},{title:`Let a call opt out`,task:`Add withHttpContext and a HIDE_SPINNER token so one request can skip the interceptor entirely. Without it you cannot fetch a small health check without flickering the whole UI, and skipping an interceptor for security reasons is not an option.`,learn:`Selective interceptor execution`},{title:`Turn a 404 into something usable`,task:`Normalise HttpErrorResponse into { status, message, url } and rethrow so the caller still has to handle it. Show the difference between catching in the interceptor (every caller is saved from nothing) and catching at the call site where the UI actually knows what to render.`,learn:`Error handling and why interceptors are not the place to swallow errors`}],stretch:[`Add a correlation id header and log it with every error payload for support tickets.`,`Retry idempotent GETs once on 503 inside the interceptor with a delay.`,`Refresh an expired token on 401 without looping on the refresh call itself.`,`Record timings with a mark/measure so slow calls show up in the console.`],starter:`export const HIDE_SPINNER = new HttpContextToken<boolean>(() => false);

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

// http.get('/pokemon/missingno', { context: new HttpContext().set(HIDE_SPINNER, true) })`,covers:[`angular-19`,`angular-31`,`angular-30`]},{id:`angular-route-guards`,category:`angular`,title:`A lazy admin route only admins can reach`,summary:`Lazy loading plus access control, and hiding the UI that guards the route.`,durationMinutes:45,prompt:`Two lazy routes: a public dex and an admin reports route. The admin route must not be reachable without the admin role, and the UI must not offer a link that leads nowhere.`,endpoints:[{path:`/pokemon?limit=`,note:`The public lazy route payload`},{path:`/pokemon-species/{name}?limit=`,note:`The admin reports data`}],steps:[{title:`Lazy route first`,task:`Add { path: 'reports', loadComponent: () => import('./reports/reports').then((m) => m.Reports) } and confirm the chunk only appears in the network panel after you navigate. Put the component in its own folder with its own service, not next to the dex.`,learn:`Lazy-loaded routes`},{title:`A functional CanActivate guard`,task:`Write canActivate: [() => { const auth = inject(AuthStore); const router = inject(Router); return auth.isAdmin() || router.createUrlTree(['/login'], { queryParams: { returnUrl: router.url } }); }]. Return a boolean or a UrlTree - the UrlTree version redirects for you. Note that guards return Observables too, so a role fetched from the API works without await.`,learn:`Route guards and which ones exist`},{title:`Do not even download it`,task:`Add CanMatch and return false for non-admins so the chunk is never fetched - check the network panel. CanActivate still runs afterwards and handles the redirect; the two guards solve different problems and it is worth saying which is which in an interview.`,learn:`CanMatch vs CanActivate`},{title:`Hide what the user cannot use`,task:`Guard the template with @if (auth.isAdmin()) or a small structural directive, so the Reports link is not rendered for a normal user. Then type the URL by hand as a normal user and confirm you are bounced, which is the case the guard actually exists for.`,learn:`Role-based access control, both halves`}],stretch:[`CanDeactivate with a dirty-form check so a half-written form is not lost.`,`canActivateChild so the whole reports section is protected, not just its shell.`,`Return the returnUrl query param and redirect back after login.`,`Resolve route data before the component renders and show the loading state.`],starter:`export const routes: Routes = [
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
// }`,covers:[`angular-15`,`angular-18`,`angular-14`]},{id:`angular-directive-pipe`,category:`angular`,title:`Type badge directive and a colour pipe`,summary:`Behaviour without a template, and a pure function in a pipe.`,durationMinutes:60,prompt:`Every Pokémon card needs a coloured, clickable type badge. Build it as an attribute directive for the behaviour and a pipe for the colour, so both pieces are independently testable.`,endpoints:[{path:`/type/{type}`,note:`Drives the colour token per badge`},{path:`/pokemon/{name}`,note:`types[] is the directive input`}],steps:[{title:`Attribute directive with host bindings`,task:`Create [appTypeBadge] that reads input.required<string>() for the type and applies host classes, a CSS custom property and a title attribute via host: { '[class.badge]': 'true', '[style.--type-color]': 'color()', '[attr.title]': 'label()' }. Note that host bindings write to the DOM outside Angular's template, which is why the directive needs no component.`,learn:`What is an Angular directive`},{title:`Events and host listeners`,task:`Add output() favourite so the card can react, and a host listener for keydown.enter so the badge is keyboard accessible as well as clickable. Then show the badge doing nothing to the text content, which is what separates a directive from a component.`,learn:`Directives that add behaviour to existing markup`},{title:`Pure pipe, impure pipe`,task:`Write a pokemonWeight pipe that takes the height and returns a formatted string. Confirm it runs once per input and again only when the input changes. Then force impure: true and watch it re-run on every single change detection, which is why impure is the exception, not the default.`,learn:`What is a pipe and the difference between pure and impure`},{title:`Where the boundary is`,task:`Give a one-sentence answer for each: component owns a template, directive does not, pipe transforms a value for the template. Then move the badge into a component and show which parts you duplicated - that duplication is the signal you chose the wrong tool.`,learn:`Choosing between component, directive and pipe`}],stretch:[`Turn the badge into a structural directive *appHasType so you can filter a list in the template.`,`Use signal inputs on the directive so it works with OnPush parents.`,`Write a test that asserts the host class and the custom property are set.`,`Add host: { class: 'is-legacy' } only when the API shape changes, to show the escape hatch.`],starter:`@Directive({
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
}`,covers:[`angular-3`,`angular-20`,`angular-2`]}];var x=[{id:`perf-large-dex-table`,category:`performance`,title:`A 500+ row Pokédex table that stays smooth`,summary:`Change detection, track keys and paging, applied to one real table.`,durationMinutes:90,prompt:`Render a sortable, filterable table of every Pokémon the PokéAPI knows about. Measure it before and after, and be able to name the cost of every change you made.`,endpoints:[{path:`/pokemon?limit=1000&offset=0`,note:`The full list to render`},{path:`/pokemon/{id}`,note:`Per-row detail, if you join it in`}],steps:[{title:`Measure before you touch anything`,task:`Record the time from request start to painted rows with performance.mark/measure around the fetch and the render, and count DOM nodes. Write the number down. Any optimisation you cannot measure is a guess.`,learn:`How do you profile an Angular app and find out what is actually slow`},{title:`Find out how often change detection runs`,task:`Enable the Angular DevTools profiler and watch a single keystroke in the filter box. Count the ticks and how many of them re-render the whole table. Explain why the default strategy checks every component in the tree on every event.`,learn:`How does change detection affect Angular performance`},{title:`OnPush plus a stable track key`,task:`Switch the table to OnPush and make the row data immutable (a new array reference on every change), then give the @for a track expression of the pokemon id rather than $index. Show that re-sorting no longer recreates every row. Note the trap: tracking by $index with mutable data means rows are reused with the wrong identity.`,learn:`The ways to reduce the cost of change detection`},{title:`Keep the template cheap`,task:`Remove the arrow functions from the template ({{ totalWeight() }}) that Angular cannot memoise, replace a method call in the template with a computed, and confirm the pure pipe cache is doing its job by logging inside the pipe. Then do the opposite with impure: true and watch the counter explode.`,learn:`Pure vs impure work in a template`},{title:`Render less instead of rendering faster`,task:`Paginate or window the rows, and defer the off-screen chart or detail panel. Measure again and report the new numbers next to the old ones. Explain why pagination usually beats micro-optimising the row template.`,learn:`Usual causes of a slow app, and how to prioritise which to fix`},{title:`Prove the fix in the numbers`,task:`Re-measure with the same tooling and the same data. Write the summary a stakeholder would read: before, after, what you changed, what you decided not to change.`,learn:`Prioritising performance work`}],stretch:[`Add a virtual scroll viewport so only the visible rows exist in the DOM.`,`Use @defer (on viewport) for a row detail panel and on interaction for the export button.`,`Throttle the sort handler so dragging a column does not thrash the store.`,`Compare zoneless change detection against zone.js for the same interaction.`],starter:`<table mat-table [dataSource]="rows()" class="mat-elevation-z1">
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
// {{ totalWeight(rows()) }}`,covers:[`performance-23`,`performance-9`,`performance-21`,`performance-8`,`performance-22`,`angular-20`]},{id:`perf-sprite-loading`,category:`performance`,title:`Load the sprites without jank or layout shift`,summary:`Image sizing, lazy loading and measuring LCP and CLS for real.`,durationMinutes:60,prompt:`A dex page shows 151 sprites. Make it load fast, never jump, and measure whether you actually improved anything.`,endpoints:[{path:`/pokemon?limit=151`,note:`Every sprite URL in one payload`}],steps:[{title:`Reserve the space before the image exists`,task:`Give every img an explicit width and height that matches the sprite, wrap them in a fixed-aspect container, and watch the layout with DevTools CLS regions enabled. Then remove the dimensions and watch the page jump. That jump is exactly what CLS penalises.`,learn:`How do fonts and images affect performance, and how do you load them well`},{title:`Lazy load everything but the first screen`,task:`Add loading="lazy" and decoding="async" to the sprites, plus fetchpriority="high" on the first one only. Then hand-roll an IntersectionObserver that sets the src when the card is about to enter the viewport, and set a transparent placeholder first so the layout is already correct.`,learn:`Lazy loading images`},{title:`Measure LCP and CLS, do not guess`,task:`Use a PerformanceObserver for largest-contentful-paint and layout-shift (with buffered: true), sum the CLS session windows, and print both. Repeat with the sprite lazy-loaded and see the number change. Explain why the largest element is usually the hero image, not the text.`,learn:`Core Web Vitals and how to measure and diagnose each one`},{title:`Trust your own measurement`,task:`Add a performance.mark before the fetch and a measure after the row is painted, then confirm the mark/measure pair appears in the performance timeline alongside the vitals. Explain why a number without marks is a number you cannot act on.`,learn:`What a Performance API measurement looks like in practice, and how to trust it`},{title:`Fix the font too`,task:`If the app uses a webfont, add font-display: swap, preload the one file that matters above the fold, and subset it. Measure the layout shift the swap causes, then reserve the space with a matching fallback metric.`,learn:`Font loading and the shift it causes`}],stretch:[`Inline the first sprite as a data: URI so LCP needs no network round trip.`,`Use aspect-ratio instead of padding-bottom for the placeholder box.`,`Add a performance budget check in CI that fails when the LCP mark exceeds a number.`],starter:`<img
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
}).observe({ type: 'longtask', buffered: true });`,covers:[`performance-8`,`performance-13`,`performance-7`,`performance-20`,`performance-11`]}];var S=[{id:`rxjs-debounced-search`,category:`rxjs`,title:`Live search that does not jank the page`,summary:`The canonical RxJS pipeline: debounce, dedupe, cancel, recover.`,durationMinutes:45,prompt:`Type into a search box and query the PokéAPI as you type. The pipeline has to stop hammering the API, cancel requests that are no longer wanted, and survive a 404 without killing the stream.`,endpoints:[{path:`/pokemon/{name}`,note:`404 for unknown names - that is your error case`},{path:`/pokemon?limit=`,note:`The fallback list while a search is in flight`}],steps:[{title:`The raw version, so you can see the problem`,task:`Subscribe to the input and hit the API on every keystroke. Type "pikachu" and count seven requests for seven characters. This is the version you are fixing - keep it in a git commit so you can compare.`,learn:`The problem debouncing solves`},{title:`Debounce and dedupe`,task:`Add debounceTime(300) so the request happens after the user stops typing, then distinctUntilChanged() so typing "aa" then "a" does not fire twice. Try a longer term like "charmander" and show it fires once, and then again when you delete back to it.`,learn:`Give a small example of debouncing a search input with RxJS`},{title:`Cancel the requests you do not want`,task:`Add switchMap. Type quickly through four terms and watch the network panel: only the last request completes, the previous ones are unsubscribed. Then swap switchMap for mergeMap and show all four finish - that is the difference you would be asked about in an interview.`,learn:`switchMap vs mergeMap`},{title:`Keep the stream alive through a 404`,task:`Wrap the inner request in catchError(() => of(null)) so a failed search returns "no results" instead of killing the stream forever. Prove it by typing a valid name, an invalid one, then a valid one again - the last one still works.`,learn:`Where catchError belongs`},{title:`Model loading without a boolean soup`,task:`Replace the manual loading boolean with startWith and finalize so the flag cannot get stuck on true after an error, or expose a { status, results } object via map. Show the state machine for idle / searching / found / not-found / failed.`,learn:`map vs tap vs switchMap in terms of what they return`},{title:`Do not leak the subscription`,task:`Finish with takeUntilDestroyed() in a component, or an async pipe in the template, and confirm no request is still in flight after navigating away. Then remove it deliberately and watch the console log after destroy.`,learn:`How do you prevent memory leaks when subscribing`}],stretch:[`Show a minimum query length of 3, and do not request below it.`,`Switch to concatMap for a queue and explain when ordering matters more than cancelling.`,`Add a per-request timeout with timeout({ each: 3000 }) and treat a timeout as "no results".`,`Cancel the in-flight request with AbortController when the user closes the search.`],starter:`readonly term = new FormControl('', { nonNullable: true });

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
);`,covers:[`rxjs-9`,`rxjs-5`,`rxjs-10`,`rxjs-7`,`rxjs-8`,`angular-6`]},{id:`rxjs-subjects-store`,category:`rxjs`,title:`A filter store out of Subjects`,summary:`Promise vs Observable, cold vs hot, and the four Subject variants.`,durationMinutes:60,prompt:`Build the shared filter state for the dex - sidebar filters and a results table both read it - using RxJS primitives first. Know exactly which Subject variant you chose and why.`,endpoints:[{path:`/pokemon?limit=`,note:`Re-queried whenever the filter changes`}],steps:[{title:`Feel the difference from a Promise`,task:`Write one async function that fetches the list and one Observable that does the same. Then subscribe to the Observable twice and count the requests: two. That is the crux - a Promise settles once, an Observable is a stream and every subscription re-runs the work.`,learn:`What is an Observable and how is it different from a Promise`},{title:`Build the cold version, then fix it`,task:`Return the http call straight from a method and subscribe twice: two HTTP requests. Then pipe through shareReplay({ bufferSize: 1, refCount: true }) and confirm one request for both subscribers. Explain in one sentence what sharing changes and what it does not (late subscribers).`,learn:`Difference between cold and hot Observables`},{title:`Compare the four Subjects`,task:`Hold the filter in each variant in turn and log what a late subscriber receives: Subject gets nothing, BehaviorSubject gets the current value immediately, ReplaySubject(2) gets the last two, AsyncSubject emits nothing until it completes and then only the last value. Use each where it makes sense: plain Subject for search events, BehaviorSubject for the filter, ReplaySubject for a cached request, AsyncSubject for "give me the finished index".`,learn:`Explain Subjects, BehaviorSubject, ReplaySubject and AsyncSubject with a common use case`},{title:`One writable source of truth`,task:`Expose the filter as a private BehaviorSubject and a public filter$ (readonly, so nobody calls next on it from a component). Add setType() as the only write path. This is the single-source-of-truth rule in RxJS form.`,learn:`Sharing state between components`},{title:`Derive, do not store`,task:`Build the filtered list, the result count and the loading flag with map / combineLatest / switchMap instead of extra Subjects that someone has to keep in sync. Then justify your choice honestly: if the app is signal-based, say where you would stop and move to a signal store instead.`,learn:`When Observables are the right tool`}],stretch:[`Add scan() so the filter can carry a history, and explain why a reducer would not be right here.`,`Turn the store into a signalStore and note which parts got simpler.`,`Use a ReplaySubject to survive a route change and re-subscribe on return.`,`Compare BehaviorSubject with a signal holding the same value, including late-subscriber behaviour.`],starter:`@Injectable({ providedIn: 'root' })
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
  // readonly pokemon$ = this.http.get<Pokemon>(...);  <div>{{ pokemon$ | async }}</div>`,covers:[`rxjs-7`,`angular-11`,`performance-12`,`angular-17`]}];var P=[{id:`signals-basic`,category:`signals`,title:`Signal vs Observable: one Pokémon detail`,summary:`The most important difference, shown by the numbers.`,durationMinutes:30,prompt:`Fetch one Pokémon with both approaches and prove to yourself that signals do not push a stream of values in the same way, and why that removes the diamond problem.`,endpoints:[{path:`/pokemon/{name}`,note:`The same endpoint used for both approaches`}],steps:[{title:`Define both`,task:`Write a signal for the Pokémon name, a signal for the loaded Pokémon, and the same with an Observable. Explain the difference: a signal holds the current value, an Observable is a sequence of values over time.`,learn:`What is a Signal and how is it different from an RxJS Observable`},{title:`Watch updates`,task:`Change the name three times in a row and count the number of renders and the number of HTTP requests for both. With signals you derive what you need; with observables the operator choice (switchMap, shareReplay) is the only thing that stops a request storm.`,learn:`The update model`},{title:`The diamond problem`,task:`Build a case where two consumers need the same derived value. Show how the diamond problem appears with Observables (the recomputation / duplicate subscription) and why it does not occur with signals: signals are pulled, not pushed, so a computed is only re-executed when its dependencies change and the result is cached.`,learn:`What is the diamond problem, and why does it not occur with signals`}],stretch:[`Compare toSignal for turning an Observable into a signal, and toObservable the other way around.`,`Show a computed that depends on two signals and does one recomputation per change.`,`Count the execution of an expensive computed and explain memoisation.`],starter:`// signals version
readonly name = signal('pikachu');
readonly pokemon = computed(() => this.service.getPokemon(this.name())); // BUG: getPokemon returns an Observable, not a value

// observable version
readonly pokemon$ = this.name$.pipe(switchMap((name) => this.api.getPokemon(name)));

// now fix the computed three ways - resource(), toSignal(), and an async computed - then compare them`,covers:[`signals-1`,`signals-4`]},{id:`signals-dex-store`,category:`signals`,title:`A signalStore for the filtered dex`,summary:`Build the same store twice, see which one reads cleaner.`,durationMinutes:60,prompt:`Re-implement the dex filter store with NgRx signalStore and contrast it with the RxJS service you wrote before.`,endpoints:[{path:`/pokemon?limit=`,note:`Queried whenever the filter changes`},{path:`/type/{type}`,note:`Filter chips`}],steps:[{title:`The shape`,task:`Define the state as the filter, the results array, total and a loading flag. Write the initial state and show a single patchState call that updates two fields at once. That is the unit of work.`,learn:`signalStore state and patchState`},{title:`Derived state`,task:`Expose the visible count and any page numbers as computed signals. There is no need for shareReplay - the value is already there. Prove that changing only the offset does not recompute the expensive sort function if you memoise the right pieces.`,learn:`withComputed`},{title:`Methods, not events`,task:`Write methods setType, setPage and resetFilters instead of Subjects. The caller does not need to know about streams, only the action. The API is synchronous in its surface and readable.`,learn:`withMethods`},{title:`Side effects with hooks`,task:`Use withHooks to load the first page on init, and to persist the filter to localStorage on every change. Note the effect is inside the store, not the component.`,learn:`withHooks and effect`}],stretch:[`Compare with the RxJS BehaviorSubject store for the same operations.`,`Add an entity adapter so the list can be updated by id without re-creating the array.`,`Turn the HTTP call into a resource() so you do not need a loading flag by hand.`],starter:`import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
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
);`,covers:[`signals-1`,`signals-3`,`signals-2`]},{id:`signals-effects`,category:`signals`,title:`Effects: when to use them, and when to walk away`,summary:`The trap with set() inside an effect, and untracked as the escape hatch.`,durationMinutes:45,prompt:`Build an effect that saves the filter to localStorage, logs a message on filter change, and tracks only what you meant to track. Then reproduce the anti-pattern and fix it.`,endpoints:[{path:`/pokemon?limit=`,note:`The request whose trigger must not be circular`}],steps:[{title:`Track by reading signals`,task:`Write an effect that reads the filter signal and writes to localStorage. Then add a console.log and see when it runs. Effects run synchronously during the reactive context and track every signal that was read while executing.`,learn:`What are effects and when do you use them`},{title:`The circular update`,task:`Deliberately call set() on the filter inside the effect that reacts to filter changes. Log the count of executions and show how it spins. This is the classic case for "calling set() inside an effect() is an anti-pattern".`,learn:`Why calling set() inside an effect() is an anti-pattern`},{title:`Escape with untracked`,task:`You still need to write to a signal from inside an effect in one rare case: synchronise with a third-party library that fires an event. Use untracked() around the write so you do not create a dependency on what you are setting. Explain the boundary and why you cannot avoid it here.`,learn:`When do you need untracked() inside an effect`},{title:`Do not replace computed`,task:`Move a calculation from an effect into a computed and show the test gets simpler. Effects are for side effects (console.log, localStorage, to the DOM outside Angular, sync with external libraries), not for producing values.`,learn:`Effects are side effects, not derivations`}],stretch:[`Use allowSignalWrites in a legacy context (if you must), and say why you do not need it with the current API.`,`Show an effect that reacts to a signal but also needs the current route - use untracked for the non-reactive part.`,`Destroy an effect with a DestroyRef so it does not outlive a component.`],starter:`readonly filter = signal({ type: 'all', offset: 0 });

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
}`,covers:[`signals-3`,`signals-5`,`signals-8`]},{id:`signals-migration`,category:`signals`,title:`Plan to move an Angular 12 RxJS app to Signals`,summary:`A real migration plan, not a big bang.`,durationMinutes:120,prompt:`You have an Angular 12 app with heavy RxJS usage. Plan the migration to signals, including what stays, what goes, and how to avoid breaking anything in production.`,endpoints:[{path:`/pokemon?limit=`,note:`Used as an example data surface to migrate`}],steps:[{title:`Map the surface first`,task:`Audit inputs/outputs, @ViewChild, forms, guards, interceptors, and all subscriptions. Split components into leafs (easy), containers (hard), and pages. Pick one leaf component with no subscriptions as your first win.`,learn:`How would you plan a migration from Angular 12 to Signals`},{title:`Start at the leaves: inputs`,task:`Convert @Input() to input() and input.required(), then switch computed and simple template reads. Do not touch HTTP yet. Measure bundle size and unit tests after each small commit.`,learn:`Migrating component APIs`},{title:`Convert local state to signals`,task:`Move flags like loading/expanded from BehaviorSubjects to signals, then replace the template with @if/@for instead of *ngIf/*ngFor (if you are on a version that supports them). Keep the change detection strategy OnPush.`,learn:`Local state migration`},{title:`Async data: choose the bridge`,task:`For HTTP, try toSignal first when the source is already hot or comes from a service, or resource() when you need reload/refresh semantics. Keep RxJS for complex streams (debounce + switchMap + retry) until you can justify rewriting them; sometimes RxJS stays.`,learn:`When would you use signals instead of observables, and can signals replace RxJS completely`},{title:`Forms, lifecycle and the end state`,task:`Keep reactive forms as they are (they do not need to become signals for correctness), but move form-derived UI flags to computed. For ngOnInit/ngOnChanges: ngOnInit may disappear for signal initialisation, but ngOnChanges is often replaced by an effect or by computed. Write down when you still need them: Are NgOnInit and ngOnChanges still needed in a fully signal-based application?`,learn:`NgOnInit/ngOnChanges in a fully signal-based app`},{title:`De-risk the migration`,task:`Feature flag per route, run both implementations behind it, add regression tests for the store, and never do a big-bang merge. Explain why RxJS will not disappear overnight: guards, interceptors, websockets, and complex event composition are still excellent in RxJS.`,learn:`Pragmatic migration strategy`}],stretch:[`Migrate one page end-to-end behind a flag and compare the number of subscriptions.`,`Convert a service from a BehaviorSubject store to a signalStore and keep the public API stable.`,`Show the bridge: toSignal(observable$, { initialValue: ... }) in a component that still depends on an RxJS service.`,`List three cases where you would choose RxJS over signals, and three the other way around.`],starter:`// phase 1: leaf inputs
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
readonly results$ = this.term$.pipe(switchMap((t) => searchPokemon(t))); // stays RxJS for now`,covers:[`signals-6`,`signals-7`,`signals-2`]},{id:`signals-resource`,category:`signals`,title:`Load Pokémon detail with the resource API`,summary:`Status, error and reload without re-inventing a loading flag.`,durationMinutes:30,prompt:`Replace your hand-rolled loading/error state with the new resource API for one detail page, and compare the code you delete.`,endpoints:[{path:`/pokemon/{name}`,note:`The resource request`}],steps:[{title:`The minimal resource`,task:`Define a resource that takes name() as its request and calls the API. Render its status (idle, loading, error, resolved), the value, and the error. Count how many flags you did not have to write.`,learn:`resource() basics`},{title:`Reload and retry`,task:`Call resource.reload() when the user clicks "Retry", and show that the request key changes when name() changes. Note that a resource tracks its request and will refetch automatically when it changes.`,learn:`Reloading a resource`},{title:`Compare to the manual version`,task:`Side by side, list the lines: manual had loading, error, data, subscription cleanup, shareReplay cache, catchError, startWith. The resource version collapses most of that into the built-in state machine.`,learn:`When to reach for resource()`}],stretch:[`Add a default value so the UI does not flash empty while loading.`,`Use an AbortSignal inside the loader so a new request cancels the old one.`,`Show how to transform the loaded value with a computed.`],starter:`readonly name = signal('pikachu');
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
@else if (detail.hasValue()) { <pre>{{ detail.value() | json }}</pre> }`,covers:[`signals-3`,`signals-2`]}];var T=[{id:`misc-aot-jit`,category:`misc`,title:`AOT vs JIT: why the build output is different`,summary:`See what JIT compiles at runtime and what AOT compiles ahead of time.`,durationMinutes:90,prompt:`Compare the same tiny dex component built in JIT and in AOT, and explain what is compiled when and why it affects startup time.`,endpoints:[{path:`/pokemon/{name}`,note:`Only to show the component actually loads data`}],steps:[{title:`Define the terms`,task:`Explain AOT (Ahead-of-Time) vs JIT (Just-in-Time): what gets compiled, when it runs, and who runs it. Then name the trade-offs: JIT is faster to rebuild in dev, AOT is faster to bootstrap in prod and catches template errors earlier.`,learn:`What is AOT vs JIT compilation`},{title:`Look at the build output`,task:`Build the app with development mode (JIT-friendly) and with production mode (AOT) and compare the size and content of the main bundle. Find at least one compiled template instruction in the AOT build that is not just the HTML string. Explain why the Angular compiler is not present in the production AOT bundle.`,learn:`What disappears in AOT`},{title:`Catch a template error before it hits users`,task:`Introduce a deliberate template error (a non-existent pipe or a typo in a template reference) and show it fails at build time with AOT, but only fails at runtime with JIT. That is the safety aspect you should never trade away for a slightly faster dev build.`,learn:`Template type checking in AOT`},{title:`Measure startup`,task:`Load the same page in a cold window twice: once with the JIT build (dev) and once with the AOT prod build, and compare the time to first interaction using the Performance API. Record the numbers and say why they are different.`,learn:`Startup performance difference`}],stretch:[`Show the Ivy compiler output and explain why View Engine was replaced.`,`Compare the number of requests and the parse time for the main bundle.`,`Turn on strictTemplates and see how many more checks you get in AOT.`],starter:`// ng build --configuration development (JIT-friendly, faster rebuilds)
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
{ path: 'card', loadComponent: () => import('./pokemon-card/pokemon-card').then((m) => m.PokemonCard) }`,covers:[`misc-6`,`angular-26`]}];var _=[...w,...b,...v,...k,...x,...S,...P,...T];var C=class a{minutes=co.required();formatted=Li(()=>{let t=this.minutes(),e=Math.floor(t/60),n=t%60;return e?n?`${e} hr ${n} min`:`${e} hr`:`${n} min`});static ɵfac=function(e){return new(e||a)};static ɵcmp=Ae({type:a,selectors:[[`app-poc-duration`]],inputs:{minutes:[1,`minutes`]},decls:7,vars:1,consts:[[1,`poc-duration`,`inline-flex`,`items-center`,`gap-1`,`whitespace-nowrap`,`text-(--mat-sys-primary)`],[1,`sr-only`],[`aria-hidden`,`true`,1,`material-symbols-outlined`],[`data-testid`,`duration`]],template:function(e,n){e&1&&(Dn(0,`span`,0)(1,`span`,1),xT(2,`Takes about`),Tn(),Dn(3,`span`,2),xT(4,`timer`),Tn(),Dn(5,`span`,3),xT(6),Tn()()),e&2&&(Di(6),hy(n.formatted()))},encapsulation:2})};var A=`poc-completed`;var j={completed:[]};function M(){let a=localStorage.getItem(A);if(!a)return[];try{let t=JSON.parse(a);return Array.isArray(t)?t.filter(e=>typeof e==`string`):[]}catch{return[]}}var ae=H({providedIn:`root`},J(j),V(a=>({onInit(){B(a,{completed:M()}),li(()=>localStorage.setItem(A,JSON.stringify(a.completed())))}})),$(a=>({toggleCompleted(t){B(a,e=>({completed:e.completed.includes(t)?e.completed.filter(n=>n!==t):[...e.completed,t]}))}})));export{_ as n,ae as r,C as t};