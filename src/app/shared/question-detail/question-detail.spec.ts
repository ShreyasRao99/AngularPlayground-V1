import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewportScroller } from '@angular/common';
import { provideRouter } from '@angular/router';
import { Category, Question } from '../../../types/questions-type';
import questionsData from '../questions.json';
import { QuestionDetail } from './question-detail';

const BANK = Object.values(questionsData).flat() as Question[];

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
    expect(root(fixture).querySelector('[data-testid="answer"]')?.textContent?.trim()).toBe(
      question.answer,
    );
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

  it('should not link past the start of the category', async () => {
    const first = authored('misc-2');
    const fixture = await createDetail('misc', first.id);

    // misc-2 is the first of three, so the first question can only link forwards
    expect(navHrefs(fixture, 0)).toEqual(['/misc/misc-6']);
    expect(navHrefs(fixture, 1)).toEqual(['/misc/misc-6']);
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
