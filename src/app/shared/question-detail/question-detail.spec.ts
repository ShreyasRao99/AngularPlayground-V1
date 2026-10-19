import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewportScroller } from '@angular/common';
import { provideRouter } from '@angular/router';
import { Category, Question } from '../../../types/questions-type';
import questionsData from '../questions.json';
import { parseAnswer } from '../answer-markdown';
import { CATEGORIES } from '../categories';
import { QuestionDetail } from './question-detail';

const BANK = Object.values(questionsData).flat() as Question[];

// The same section-ordered walk the component uses for prev/next, so the
// expectations below describe "the neighbouring question" rather than a
// hard-coded id that has to be edited whenever the bank is.
const SEQUENCE = CATEGORIES.flatMap((category) =>
  BANK.filter((question) => question.category === category),
);

function authored(id: string): Question {
  const question = BANK.find((entry) => entry.id === id)!;
  expect(question).toBeTruthy();
  return question;
}

async function createDetail(category: Category, questionId: string) {
  await TestBed.configureTestingModule({
    imports: [QuestionDetail],
    providers: [provideRouter([])],
  }).compileComponents();

  const fixture = TestBed.createComponent(QuestionDetail);
  fixture.componentRef.setInput('category', category);
  fixture.componentRef.setInput('questionId', questionId);
  await fixture.whenStable();

  return fixture;
}

function root(fixture: ComponentFixture<QuestionDetail>): HTMLElement {
  return fixture.nativeElement as HTMLElement;
}

function links(fixture: ComponentFixture<QuestionDetail>): HTMLAnchorElement[] {
  return Array.from(root(fixture).querySelectorAll('a'));
}

/**
 * The hrefs of one `app-question-nav`, by position: 0 is the copy in the sticky
 * header, 1 is the one at the foot of the answer. Scoping to a single copy is
 * what keeps these assertions honest now there are two of them.
 */
function navHrefs(fixture: ComponentFixture<QuestionDetail>, index: number): (string | null)[] {
  const nav = root(fixture).querySelectorAll('app-question-nav')[index];

  return Array.from(nav.querySelectorAll('a')).map((link) => link.getAttribute('href'));
}

describe('QuestionDetail', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should create', async () => {
    const fixture = await createDetail('performance', 'performance-1');
    expect(fixture.componentInstance).toBeTruthy();
  });

  // Prev/next only changes the route parameter, so the component is reused and
  // the router never scrolls. The detail view resets the offset itself, and this
  // pins that it does so again once the id changes.
  it('should scroll back to the top when the question changes', async () => {
    const calls: [number, number][] = [];
    await TestBed.configureTestingModule({
      imports: [QuestionDetail],
      providers: [
        provideRouter([]),
        {
          provide: ViewportScroller,
          useValue: { scrollToPosition: (position: [number, number]) => calls.push(position) },
        },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(QuestionDetail);
    fixture.componentRef.setInput('category', 'performance');
    fixture.componentRef.setInput('questionId', 'performance-1');
    await fixture.whenStable();
    calls.length = 0;

    fixture.componentRef.setInput('questionId', 'performance-2');
    await fixture.whenStable();

    expect(calls).toContainEqual([0, 0]);
  });

  it('should render the authored question and answer, not a teaser', async () => {
    const question = authored('performance-1');
    const fixture = await createDetail('performance', question.id);

    expect(root(fixture).querySelector('h1')?.textContent?.trim()).toBe(question.question);

    // answers are Markdown-ish, so compare the rendered blocks rather than the
    // raw source string: every run has to survive into the DOM
    const normalize = (text: string) => text.replace(/\s+/g, ' ').trim();
    const rendered = Array.from(
      root(fixture).querySelectorAll('[data-testid="answer"] p, [data-testid="answer"] li'),
    )
      .map((node) => node.textContent?.trim())
      .join(' ');
    const expected = parseAnswer(question.answer)
      .map((block) =>
        block.kind === 'p'
          ? block.runs.map((run) => run.text).join('')
          : block.items.map((item) => item.map((run) => run.text).join('')).join(' '),
      )
      .join(' ');

    // inline <strong>/<em> sit on their own template lines, so the DOM carries a
    // little extra whitespace at the run boundaries; compare the words, not the gaps
    expect(normalize(rendered)).toBe(normalize(expected));
  });

  it('should show the whole question, never clamped behind an ellipsis', async () => {
    const fixture = await createDetail('performance', 'performance-1');
    const heading = root(fixture).querySelector('h1')!;

    // a clamp hid the rest of a long question on a phone with no way to expand it
    expect(heading.className).not.toContain('line-clamp');
  });

  it('should render every code example without expanding anything', async () => {
    const fixture = await createDetail('html', 'html-1');

    // the answer is on the page, not behind a header that has to be clicked
    expect(root(fixture).querySelector('mat-expansion-panel')).toBeNull();
    expect(root(fixture).querySelectorAll('pre code').length).toBeGreaterThan(0);
  });

  it('should embed a YouTube url example as an iframe', async () => {
    const fixture = await createDetail('misc', 'misc-7');
    const frame = root(fixture).querySelector('iframe');

    expect(frame?.getAttribute('src')).toContain('youtube.com/embed/');
    expect(frame?.getAttribute('allowfullscreen')).not.toBeNull();
  });

  it('should keep a non-YouTube url example as a plain link', async () => {
    const fixture = await createDetail('rxjs', 'rxjs-5');

    expect(root(fixture).querySelector('iframe')).toBeNull();

    const link = links(fixture).find((anchor) =>
      anchor.textContent?.includes('angular-university.io'),
    );
    expect(link?.getAttribute('href')).toBe(
      'https://blog.angular-university.io/rxjs-higher-order-mapping/',
    );
    expect(link?.getAttribute('target')).toBe('_blank');
  });

  it('should link back to the category index', async () => {
    const fixture = await createDetail('rxjs', 'rxjs-1');
    const back = links(fixture).find((link) => link.textContent?.includes('All RxJS questions'));

    expect(back?.getAttribute('href')).toBe('/rxjs');
  });

  it('should walk to the previous and next question in the category', async () => {
    const fixture = await createDetail('performance', 'performance-2');

    expect(navHrefs(fixture, 1)).toEqual([
      '/performance/performance-1',
      '/performance/performance-3',
    ]);
  });

  it('should offer the same pair in the sticky header as at the end', async () => {
    const fixture = await createDetail('performance', 'performance-2');

    // a reader part way down the answer should not have to scroll to reach it
    expect(navHrefs(fixture, 0)).toEqual(navHrefs(fixture, 1));
    expect(root(fixture).querySelector('header')?.querySelectorAll('app-question-nav').length).toBe(
      1,
    );
  });

  it('should name the two navigation landmarks differently', async () => {
    const fixture = await createDetail('performance', 'performance-2');
    const names = Array.from(root(fixture).querySelectorAll('nav')).map((nav) =>
      nav.getAttribute('aria-label'),
    );

    // two landmarks with one name are announced as a single ambiguous region
    expect(names).toHaveLength(2);
    expect(new Set(names).size).toBe(2);
  });

  it('should link back into the previous section at a section\u2019s first question', async () => {
    // misc-2 is the first of its section, so an empty left slot would strand the
    // reader; it points at the last question of the section before it instead
    const index = SEQUENCE.findIndex((question) => question.id === 'misc-2');
    const previous = SEQUENCE[index - 1];

    const fixture = await createDetail('misc', 'misc-2');

    expect(navHrefs(fixture, 0)).toEqual([
      `/${previous.category}/${previous.id}`,
      '/misc/misc-6',
    ]);
    expect(navHrefs(fixture, 1)).toEqual(navHrefs(fixture, 0));
  });

  it('should link forward into the next section at a section\u2019s last question', async () => {
    const last = SEQUENCE.filter((question) => question.category === 'signals').at(-1)!;
    const index = SEQUENCE.findIndex((question) => question.id === last.id);
    const previous = SEQUENCE[index - 1];
    const next = SEQUENCE[index + 1];

    expect(next.category).not.toBe('signals');

    const fixture = await createDetail('signals', last.id);

    expect(navHrefs(fixture, 0)).toEqual([
      `/${previous.category}/${previous.id}`,
      `/${next.category}/${next.id}`,
    ]);
  });

  it('should leave no previous link at the very first question in the bank', async () => {
    const first = SEQUENCE[0];
    const fixture = await createDetail(first.category, first.id);

    // only the next link: there is nothing before the first question
    expect(navHrefs(fixture, 0)).toEqual([`/${SEQUENCE[1].category}/${SEQUENCE[1].id}`]);
  });

  it('should leave no next link at the very last question in the bank', async () => {
    const last = SEQUENCE[SEQUENCE.length - 1];
    const previous = SEQUENCE[SEQUENCE.length - 2];
    const fixture = await createDetail(last.category, last.id);

    // only the previous link: there is nothing after the last question
    expect(navHrefs(fixture, 0)).toEqual([`/${previous.category}/${previous.id}`]);
  });

  it('should toggle review state for the routed question only', async () => {
    const fixture = await createDetail('performance', 'performance-2');

    root(fixture).querySelector<HTMLButtonElement>('button[aria-pressed]')?.click();
    fixture.detectChanges();

    expect(root(fixture).querySelector('button[aria-pressed]')?.getAttribute('aria-pressed')).toBe(
      'true',
    );
    expect(JSON.parse(localStorage.getItem('q-marked-flags') ?? '[]')).toEqual([
      { id: 'performance-2', isMarked: true },
    ]);
  });

  it('should offer notes for the routed question, in the sticky header', async () => {
    const question = authored('performance-1');
    const fixture = await createDetail('performance', question.id);

    // a note is written after reading the answer, which is when the sticky header
    // is still the thing on screen
    const header = root(fixture).querySelector('header');
    const notes = header?.querySelector<HTMLButtonElement>('app-question-notes button');

    expect(notes?.getAttribute('aria-label')).toBe(`Add notes for: ${question.question}`);
  });

  it('should show a not found state for an unknown id', async () => {
    const fixture = await createDetail('performance', 'performance-999');

    expect(root(fixture).querySelector('h1')?.textContent).toContain('Question not found');
    expect(root(fixture).querySelector('[data-testid="answer"]')).toBeNull();
  });

  it('should set the document title so a shared link is identifiable', async () => {
    const fixture = await createDetail('css', 'css-1');
    await fixture.whenStable();

    expect(document.title).toContain('· CSS');
  });
});
