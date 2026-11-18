import { Poc } from '../../../types/poc-type';

export const CSS_POCS: Poc[] = [
  {
    id: 'css-dex-layout',
    category: 'css',
    title: 'Grid for the dex, Flexbox for the toolbar',
    summary:
      'Build a responsive Pokémon card grid and a filter toolbar using CSS Grid and Flexbox.',
    durationMinutes: 60,
    prompt:
      'Build two layouts on the Pokédex screen: a responsive grid displaying Pokémon cards and a toolbar containing Pokémon type filter chips and a search input. Use CSS Grid for the cards and Flexbox for the toolbar. The toolbar should have chips like All (20), Fire (12), Water (35), Grass (14) and Flying (8), with one chip visually selected at a time. Each type chip displays the total number of Pokémon belonging to that type, not the number of Pokémon currently displayed. Clicking a chip changes the selected state. Understand how Grid and Flexbox handle spacing, alignment and responsiveness.',
    endpoints: [
      {
        path: '/pokemon?limit=20',
        note: 'Use the results array from the API response to render Pokémon names as individual cards inside the CSS Grid. The search input should filter these 20 Pokémon by name on the client side.',
      },
      {
        path: '/type/{type}',
        note: 'Use the pokemon array length from each type API response to display the total Pokémon count on the corresponding filter chip. For example, /type/fire gives the count for Fire, /type/water gives the count for Water and /type/grass gives the count for Grass. The count remains the same when a chip is selected. Only the selected chip styling changes.',
      },
    ],
    steps: [
      {
        title: 'Build a responsive Pokémon card grid',
        task: 'Fetch Pokémon using /pokemon?limit=20. Use the results array to render Pokémon names as individual cards inside a container. Set display: grid and use grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)) with gap: 12px. Resize the browser and verify that the number of columns changes automatically without writing media queries. Then try repeat(3, 1fr) and observe what happens on smaller screens.',
        learn: 'CSS Grid, repeat(), auto-fill, minmax() and responsive layouts',
      },
      {
        title: 'Build the filter toolbar with Flexbox',
        task: 'Create a horizontal toolbar containing type filter chips and a search input. Include chips such as All (20), Fire (12), Water (35), Grass (14) and Flying (8). Fetch the type data using /type/{type} and use the length of its pokemon array to display the count on each corresponding chip. For All, display the total number of Pokémon returned by the list API (results.length). Maintain a selectedType signal so that only one chip appears selected at a time. Clicking another chip should update the selected styling without changing the counts. Set display: flex, flex-wrap: wrap, align-items: center and gap: 8px. Give the search input margin-left: auto so it moves to the right when space is available. Resize the browser and verify that the chips wrap onto another line instead of overflowing.',
        learn: 'Flexbox, flex-wrap, margin-left: auto, gap and selected states',
      },
      {
        title: 'Understand the two alignment axes',
        task: 'On the toolbar, keep flex-direction: row. Change align-items between center, flex-start and stretch. Observe how the children move vertically. Then change justify-content between flex-start, center and space-between. Observe how the children move horizontally. Identify the main axis and cross axis for row and column directions.',
        learn: 'Main axis, cross axis, align-items and justify-content',
      },
      {
        title: 'Use gap for consistent spacing',
        task: 'Use gap: 12px on the card grid and gap: 8px on the toolbar. Remove any margins previously added between individual cards or filter buttons. Then replace gap with row-gap and column-gap separately and observe how horizontal and vertical spacing can be controlled independently.',
        learn: 'CSS gap, row-gap and column-gap',
      },
    ],
    stretch: [
      'Make the first Pokémon card span two columns using grid-column: span 2. Then make it span two rows using grid-row: span 2. Verify that the remaining cards reposition automatically.',
      'Use grid-template-areas to create a layout with a header, filter toolbar and Pokémon grid. Change the layout at a mobile breakpoint using a media query without changing the HTML.',
      'Use CSS Grid auto-fit instead of auto-fill. Compare the two behaviours when there are only two Pokémon cards in a wide container. Explain the difference.',
    ],
    starter: `.dex {
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
}`,
    covers: ['css-11', 'css-4'],
  },

  {
    id: 'css-sticky-filter',
    category: 'css',
    title: 'Pin the filter bar while the list scrolls',
    summary: 'relative, absolute, fixed and sticky, each demonstrated on the same element.',
    durationMinutes: 30,
    prompt:
      'The type filter bar has to stay reachable while you scroll through 151 cards. Take one element and step it through all four position values, watching what each one actually anchors to.',
    endpoints: [{ path: '/type/{type}', note: 'Filter chip state that stays pinned' }],
    steps: [
      {
        title: 'Watch each position value on one element',
        task: 'Apply static, then relative, then absolute, then fixed, then sticky to the filter bar and log getComputedStyle(bar).position plus its boundingClientRect().top at scroll position 0 and after scrolling 500px. Relative keeps its slot but moves visually; absolute leaves the flow and anchors to the nearest positioned ancestor; fixed anchors to the viewport; sticky only sticks once you hit its threshold and stays inside its parent.',
        learn: 'Difference between position: relative, absolute, fixed and sticky',
      },
      {
        title: 'Find the containing block',
        task: 'Give the filter bar position: absolute inside a container that is position: relative, then remove the relative and watch it jump to a different ancestor. That is the containing block rule, and it is the whole reason sticky silently fails in half the layouts people write.',
        learn: 'Containing block and positioned ancestors',
      },
      {
        title: 'Make sticky actually work',
        task: 'Sticky needs three things: position: sticky, a top value, and a scrollable ancestor that is not overflow: hidden or overflow: clip. Reproduce the classic bug by adding overflow: hidden to a wrapper and confirm the bar stops sticking, then remove it.',
        learn: 'Why position: sticky needs overflow visible on ancestors',
      },
      {
        title: 'Keep the sticky header from covering content',
        task: 'Reserve room for the pinned bar with scroll-margin-top on the anchored section and scroll-padding-top on the scrolling container, so a jump-to-card scroll does not hide the card under the header.',
        learn: 'scroll-padding-top vs scroll-margin-top',
      },
    ],
    stretch: [
      'Pin the first column of the table with position: sticky on both axes.',
      'Compare a sticky header with a fixed header in terms of containing-block width and sidebar behaviour.',
      'Use position: sticky for a "back to top" bar that only appears after 400px of scroll.',
    ],
    starter: `.layout {
  overflow-y: auto; /* the scroll container - never overflow: hidden */
  scroll-padding-top: 56px; /* room for the pinned bar */
}

.filter-bar {
  position: sticky;
  top: 0; /* stick once the top edge is reached */
  z-index: 10;
  background: Canvas; /* must be opaque or content shows through */
  padding-block: 8px;
}`,
    covers: ['css-8', 'css-3'],
  },
  {
    id: 'css-theme-tokens',
    category: 'css',
    title: 'Light and dark themes with tokens, and no !important',
    summary: 'Custom properties as the single source of truth, specificity used on purpose.',
    durationMinutes: 60,
    prompt:
      'Ship a light/dark theme for the dex. Every colour and radius comes from one place, switching the theme is one attribute, and you never reach for !important to win an argument with your own stylesheet.',
    endpoints: [{ path: '/type/{type}', note: 'Type colours you expose as themed tokens' }],
    steps: [
      {
        title: 'Define the palette as custom properties',
        task: 'Declare every colour, radius, shadow and spacing step on :root as a custom property, and have the card and chip styles reference var(--surface) and nothing else. Then swap a hex value in one place and confirm the whole screen follows.',
        learn: 'What are CSS custom properties and how are themes built with them',
      },
      {
        title: 'Switch the theme with one attribute',
        task: 'Override the same property names under [data-theme="dark"] and toggle the attribute from a button. Because you only redefined values and never re-wrote rules, there is exactly one dark-theme block to maintain. Show what happens if you forget one property: it falls back to the :root value.',
        learn: 'How a theme swap stays a one-line change',
      },
      {
        title: 'Read the cascade before you override it',
        task: 'Intentionally lose to a stylesheet: write the same rule as .type-chip and as #detail .type-chip and show which wins, then work out why by comparing (a) specificity, (b) source order, (c) where it sits. Print the winning rule from DevTools Styles pane rather than guessing.',
        learn: 'What are specificity and the cascade, and where does !important fit in',
      },
      {
        title: 'Prefer a class over an id for this',
        task: 'Notice that your #id selector forces you to escalate specificity on every override. Move it to classes, confirm the override problem disappears, and state the rule: ids are for uniqueness in the document (fragment targets), classes are for styling.',
        learn: 'When should I use a class instead of an id',
      },
      {
        title: 'Load your overrides last on purpose',
        task: 'Add a small overrides.css loaded after the main sheet so you can win on source order instead of specificity, and then move those rules into @layer base / components / utilities and show the third layer still loses to the first two. Explain why layers beat specificity.',
        learn: 'Cascade layers and where !important actually belongs',
      },
    ],
    stretch: [
      'Derive the dark palette from the light one with color-mix() instead of duplicating every value.',
      'Honour prefers-color-scheme as the default and let the toggle override it.',
      'Expose a --type-color per Pokémon type so a chip is themed automatically from data.',
      'Add a container query so a card inside a narrow panel uses the small radius token.',
    ],
    starter: `:root {
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
}`,
    covers: ['css-7', 'css-6', 'html-3'],
  },
  {
    id: 'css-responsive-units',
    category: 'css',
    title: 'One stylesheet, phone to desktop',
    summary: 'rem vs em vs px vs % vs vw, and mobile-first breakpoints.',
    durationMinutes: 45,
    prompt:
      'Make the dex grid genuinely responsive without a device in your hand: relative units so it respects the user font size, and mobile-first breakpoints so small screens get the base styles for free.',
    endpoints: [{ path: '/pokemon?limit=&offset=', note: 'Same content at every breakpoint' }],
    steps: [
      {
        title: 'Replace every px with a relative unit',
        task: 'Convert the card padding, gap and radius to rem, the icon size inside a card to em, the grid column width to %, and one full-height panel to vh. Then bump the browser font size to 24px and watch which parts scale with the text and which scale with their container. Write down why % on font-size refers to the parent font size, not the viewport.',
        learn: 'Difference between px, rem, em, % and vw/vh',
      },
      {
        title: 'Go mobile-first with min-width',
        task: 'Write the base rules for a 320px screen first (single column, compact padding), then add min-width media queries at 640px and 1024px that only add. Resize down and up and confirm there is never a window where the styles are wrong. Explain why this is less work than max-width plus mobile overrides.',
        learn: 'What are responsive breakpoints and why is mobile-first preferable',
      },
      {
        title: 'Make one property fluid',
        task: 'Replace the card padding and the sprite width with clamp(min, preferred, max) using vw as the fluid part, so the middle value interpolates instead of jumping at a breakpoint.',
        learn: 'Fluid typography and spacing with clamp()',
      },
      {
        title: 'Let the component decide, not the viewport',
        task: 'Move the one narrow-widget rule from a media query to a container query so the card adapts to the width of the panel it lands in, then show the same card in a narrow sidebar and a wide main column without a class change.',
        learn: 'Container queries vs media queries',
      },
    ],
    stretch: [
      'Respect prefers-reduced-motion and prefers-contrast in the transitions.',
      'Use dvh instead of vh so the layout survives mobile browser chrome.',
      'Print the resolved value of a rem and a vw on screen to prove the maths.',
    ],
    starter: `:root {
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
}`,
    covers: ['css-9', 'css-10'],
  },
];
