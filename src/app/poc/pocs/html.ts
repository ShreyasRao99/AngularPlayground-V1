import { Poc } from '../../../types/poc-type';

export const HTML_POCS: Poc[] = [
  {
    id: 'html-semantic-entry',
    category: 'html',
    title: 'Build a semantic Pokédex entry page',
    summary: 'Build a Pokémon detail page using semantic HTML and real PokéAPI data.',
    durationMinutes: 45,

    prompt: `
Build a Pokédex entry page for Pikachu inside the existing Angular application.

Fetch Pokémon data from the PokéAPI and display its sprite, Pokédex number, name, types, description, height, weight, abilities and base stats.

Use semantic HTML elements to structure the page. Avoid using div elements as generic replacements for semantic elements.

The page must be populated using API responses. Do not hardcode Pokémon information.
  `,

    endpoints: [
      {
        path: '/pokemon/pikachu',
        note: 'Main Pokémon data: name, ID, sprite, types, height, weight, abilities and base stats.',
      },
      {
        path: '/pokemon-species/pikachu',
        note: 'Species data: Pokédex description and generation.',
      },
    ],

    steps: [
      {
        title: 'Build the page structure',
        task: `
Create the following page structure:

1. A header containing the application title "Pokédex".
2. A main element containing the Pokémon entry.
3. An article representing the complete Pikachu entry.
4. Inside the article, display:
   - Pokémon name and Pokédex number.
   - Pokémon sprite with a caption.
   - Pokédex description.
   - Pokémon types.
   - Physical attributes (height and weight).
   - Abilities.
   - Base stats.
5. A footer containing the text "Pokémon data provided by PokéAPI".

Use the appropriate semantic elements:
header, main, article, section, figure, figcaption and footer.

Use one h1 for the Pokémon name and h2 elements for the individual sections.
      `,
        learn: 'Semantic HTML',
      },

      {
        title: 'Display Pokémon information',
        task: `
Fetch data from both API endpoints and display the following properties.

From /pokemon/pikachu:

- id: Display as the Pokédex number (#025).
- name: Display the Pokémon name.
- sprites.front_default: Display the front sprite.
- types[].type.name: Display all Pokémon types.
- height: Convert decimetres to metres (height / 10).
- weight: Convert hectograms to kilograms (weight / 10).
- abilities[].ability.name: Display ability names.
- abilities[].is_hidden: Identify hidden abilities.
- stats[].stat.name: Display stat names.
- stats[].base_stat: Display stat values.

From /pokemon-species/pikachu:

- flavor_text_entries: Find an English entry using language.name === 'en' and display its flavor_text.
- generation.name: Display the Pokémon's generation.

Use Angular template binding to render the data. Do not hardcode the values.
      `,
        learn: 'Working with API responses and Angular data binding',
      },
    ],

    stretch: [
      'Add Previous and Next buttons to navigate between Pokémon using their IDs. Fetch the new Pokémon data and update the existing page without reloading.',
      'Display a loading message while the API requests are in progress. If either request fails, display an error message instead of a blank page.',
    ],

    starter: `
<header>
  <h1>Pokédex</h1>
</header>

<main>
  <article>
    <header>
      <h2>Pikachu</h2>
      <span>#025</span>
    </header>

    <figure>
      <img src="..." alt="Pikachu front sprite" />
      <figcaption>Electric Mouse Pokémon</figcaption>
    </figure>

    <section>
      <h2>Pokédex Description</h2>
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
  <p>Pokémon data provided by PokéAPI.</p>
</footer>
  `,

    covers: ['html-1'],
  },
];
