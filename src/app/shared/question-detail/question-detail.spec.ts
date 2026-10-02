import { ComponentFixture, TestBed } from '@angular/core/testing';
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

  it('should render the authored question and answer, not a teaser', async () => {
    const question = authored('performance-1');
    const fixture = await createDetail('performance', question.id);

    expect(root(fixture).querySelector('h1')?.textContent?.trim()).toBe(question.question);
    expect(root(fixture).querySelector('[data-testid="answer"]')?.textContent?.trim()).toBe(
      question.answer,
    );
  });

  it('should render every code example without expanding anything', async () => {
    const fixture = await createDetail('html', 'html-1');

    // the answer is on the page, not behind a header that has to be clicked
    expect(root(fixture).querySelector('mat-expansion-panel')).toBeNull();
    expect(root(fixture).querySelectorAll('pre code').length).toBeGreaterThan(0);
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

    // misc holds two questions, so the first one can only link forwards
    expect(navHrefs(fixture, 0)).toEqual(['/misc/misc-6']);
    expect(navHrefs(fixture, 1)).toEqual(['/misc/misc-6']);
  });

  it('should toggle read state for the routed question only', async () => {
    const fixture = await createDetail('performance', 'performance-2');

    root(fixture).querySelector<HTMLButtonElement>('button[aria-pressed]')?.click();
    fixture.detectChanges();

    expect(root(fixture).querySelector('button[aria-pressed]')?.getAttribute('aria-pressed')).toBe(
      'true',
    );
    expect(JSON.parse(localStorage.getItem('q-read-flags') ?? '[]')).toEqual([
      { id: 'performance-2', isRead: true },
    ]);
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
