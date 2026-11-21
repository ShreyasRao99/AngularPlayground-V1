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
];
