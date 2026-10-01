import { Poc } from '../../../types/poc-type';

export const CSS_POCS: Poc[] = [
  {
    id: 'css-card-box-model',
    category: 'css',
    title: 'The Pokédex card, box model and all',
    summary: 'Padding vs margin, block vs inline vs inline-block, centring without flex.',
    prompt:
      'Style a Pokédex card from the raw sprite and stats the PokéAPI gives you. Do it with the box model, not with a framework, and be able to say what each declaration is doing.',
    endpoints: [
      { path: '/pokemon/{name}', note: 'Sprite, height, weight, types for the card content' },
    ],
    steps: [
      {
        title: 'Draw the box',
        task: 'Give the card explicit content-box dimensions and open the Computed > Box Model overlay in DevTools. Walk the four layers (content, padding, border, margin) with a real card and say which one belongs to the element and which one is outside it.',
        learn: 'What is the CSS box model',
      },
      {
        title: 'Feel the difference between padding and margin',
        task: 'Put 12px of padding around the sprite inside the card and 12px of margin outside it, then delete both one at a time. Write one sentence for each: padding is space inside the border, margin is space between boxes and it collapses with neighbours.',
        learn: 'Difference between padding and margin',
      },
      {
        title: 'Switch box-sizing and watch the card change',
        task: 'Set box-sizing: border-box on the card and set the same width again. With content-box the card gets wider when you add padding and border; with border-box the padding eats into the declared width. Print getComputedStyle(card).width for both so you are not guessing.',
        learn: 'Why border-box is the sane default',
      },
      {
        title: 'Place the sprite beside the text',
        task: 'The sprite is 96px and must sit next to the type badges without forcing the badges onto a new line. Compare a div (block, takes the full width, pushes everything down), a span (inline, flows with the text) and inline-block (flows with the text but still accepts width and height). Log the computed display of each so the difference is measurable, not vibes.',
        learn: 'Difference between block, inline and inline-block',
      },
      {
        title: 'Centre it three different ways',
        task: 'Centre the card horizontally with margin: 0 auto, then with a flex parent (justify-content: center), then with grid (place-items: center). Explain why margin auto only works on block-level elements that have a width, and why it cannot centre vertically.',
        learn: 'How to center a block element horizontally',
      },
    ],
    stretch: [
      'Add a focus ring with outline and show why outline does not affect layout while border does.',
      'Use logical properties (padding-inline, margin-block) and flip direction: rtl.',
      'Read the box model with getBoxQuads() instead of eyeballing it.',
    ],
    starter: `.card {
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
}`,
    covers: ['css-1', 'css-2', 'css-3', 'css-5'],
  },
  {
    id: 'css-dex-layout',
    category: 'css',
    title: 'Grid for the dex, Flexbox for the toolbar',
    summary: 'Choosing between Grid and Flexbox, and reading align-items vs justify-content.',
    prompt:
      'Two layouts in one screen: a wrapping grid of Pokémon cards, and a horizontal toolbar of type filters with a search box at the end. Pick the right tool for each and stop reaching for the wrong one.',
    endpoints: [
      { path: '/pokemon?limit=', note: 'Card data for the grid' },
      { path: '/type/{type}', note: 'Count of members per filter chip' },
    ],
    steps: [
      {
        title: 'Build the card grid with Grid',
        task: 'Use display: grid with grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)) so the number of columns is decided by the container width, not by breakpoints. Then try grid-template-columns: repeat(3, 1fr) and see why that one breaks on a phone. Log the resolved column count with getComputedStyle(grid).gridTemplateColumns.',
        learn: 'When would you use CSS Grid and when Flexbox',
      },
      {
        title: 'Build the toolbar with Flexbox',
        task: 'The same wrapper as display: flex, with flex-wrap: wrap so the chips wrap instead of overflowing, and margin-left: auto on the search box to push it to the far edge. Explain that Grid lays out in two dimensions and Flexbox lays out in one.',
        learn: 'Grid vs Flexbox',
      },
      {
        title: 'Separate the two axes',
        task: 'On the flex toolbar, change align-items between center, flex-start and stretch and watch only the cross axis move, then change justify-content between flex-start, center and space-between and watch only the main axis move. Write down which axis is which for row-direction.',
        learn: 'What do align-items and justify-content do in flexbox',
      },
      {
        title: 'Use gap instead of margin hacks',
        task: 'Space the grid cells and the chips with gap and delete the :nth-child / last-child margin overrides you wrote first. Then add row-gap different from column-gap and explain why margin collapsing never applies inside a grid.',
        learn: 'Why gap beats margin for spacing',
      },
    ],
    stretch: [
      'Make the first card span two columns and two rows with grid-column / grid-row.',
      'Use grid-template-areas to switch the whole layout at a breakpoint with no extra markup.',
      'Swap the grid for subgrid so the cards share one row height.',
    ],
    starter: `.dex {
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
}`,
    covers: ['css-11', 'css-4'],
  },
  {
    id: 'css-sticky-filter',
    category: 'css',
    title: 'Pin the filter bar while the list scrolls',
    summary: 'relative, absolute, fixed and sticky, each demonstrated on the same element.',
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
