import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatChipListboxChange } from '@angular/material/chips';
import { provideRouter } from '@angular/router';
import { Question } from '../../../types/questions-type';
import { QuestionStore } from '../question-store';
import { QuestionList } from './question-list';

type MarkedFlag = { id: string; isMarked: boolean };

async function createList(category: Question['category'] = 'performance') {
  await TestBed.configureTestingModule({
    imports: [QuestionList],
    providers: [provideRouter([])],
  }).compileComponents();

  const fixture = TestBed.createComponent(QuestionList);
  fixture.componentRef.setInput('category', category);
  await fixture.whenStable();

  return fixture;
}

/** One row per question: the index is a list of links, not a set of panels. */
function rows(fixture: ComponentFixture<QuestionList>): HTMLAnchorElement[] {
  const root = fixture.nativeElement as HTMLElement;
  return Array.from(root.querySelectorAll<HTMLAnchorElement>('li > a'));
}

function markButtons(fixture: ComponentFixture<QuestionList>): HTMLButtonElement[] {
  const root = fixture.nativeElement as HTMLElement;
  return Array.from(root.querySelectorAll<HTMLButtonElement>('button[aria-pressed]'));
}

function selectDifficulties(fixture: ComponentFixture<QuestionList>, value: string[]): void {
  fixture.componentInstance['onDifficultyChange']({ value } as unknown as MatChipListboxChange);
  fixture.detectChanges();
}

function notesButtons(fixture: ComponentFixture<QuestionList>): HTMLButtonElement[] {
  const root = fixture.nativeElement as HTMLElement;
  return Array.from(root.querySelectorAll<HTMLButtonElement>('app-question-notes button'));
}

function chipOptions(fixture: ComponentFixture<QuestionList>): HTMLButtonElement[] {
  const root = fixture.nativeElement as HTMLElement;
  return Array.from(
    root.querySelectorAll<HTMLButtonElement>('mat-chip-option button[matChipAction]'),
  );
}

describe('QuestionList', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    // the overlay container outlives the dialog's exit animation
    document.querySelectorAll('app-notes-dialog, .cdk-overlay-container').forEach((node) => {
      node.remove();
    });
  });

  it('should create', async () => {
    const fixture = await createList();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show every question in the category by default', async () => {
    const fixture = await createList();
    expect(rows(fixture).length).toBe(27);
    expect(fixture.componentInstance['hasActiveFilters']()).toBe(false);
  });

  it('should filter by difficulty', async () => {
    const fixture = await createList();

    selectDifficulties(fixture, ['basic']);
    expect(rows(fixture).length).toBe(5);

    selectDifficulties(fixture, ['medium']);
    expect(rows(fixture).length).toBe(15);

    selectDifficulties(fixture, ['basic', 'advanced']);
    expect(rows(fixture).length).toBe(12);
  });

  it('should not offer the most-asked triage outside behavioural', async () => {
    const fixture = await createList('performance');
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('mat-button-toggle-group[aria-label*="how often"]')).toBeNull();
  });

  it('should filter behavioural down to the curated most-asked core', async () => {
    const fixture = await createList('behavioural');
    const root = fixture.nativeElement as HTMLElement;

    expect(root.querySelector('mat-button-toggle-group[aria-label*="how often"]')).toBeTruthy();

    const expected = TestBed.inject(QuestionStore)
      .questionData()
      .filter((question) => question.category === 'behavioural' && question.mostAsked).length;
    expect(expected).toBeGreaterThan(0);
    expect(expected).toBeLessThan(50);

    fixture.componentInstance['onMostAskedFilterChange']({
      value: 'most',
    } as unknown as MatButtonToggleChange);
    fixture.detectChanges();

    expect(rows(fixture).length).toBe(expected);
  });

  it('should toggle review state and filter on it', async () => {
    const fixture = await createList();
    const buttons = markButtons(fixture);
    expect(buttons.length).toBe(27);

    buttons[0].click();
    fixture.detectChanges();

    expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
    expect(fixture.componentInstance['markedCount']()).toBe(1);

    fixture.componentInstance['markedFilter'].set('unmarked');
    fixture.detectChanges();
    expect(rows(fixture).length).toBe(26);

    fixture.componentInstance['markedFilter'].set('marked');
    fixture.detectChanges();
    expect(rows(fixture).length).toBe(1);
  });

  it('should link every question to its own detail page', async () => {
    const fixture = await createList();
    const [first] = rows(fixture);

    expect(first.getAttribute('href')).toBe('/performance/performance-1');
  });

  it('should give a row exactly one colour class, whichever review state it is in', async () => {
    const fixture = await createList();
    const colourClasses = (element: Element | null) =>
      Array.from(element?.classList ?? []).filter((name) => name.startsWith('text-('));

    const linkColours = (index: number) => colourClasses(rows(fixture)[index]);
    const numberColours = (index: number) =>
      colourClasses((fixture.nativeElement as HTMLElement).querySelectorAll('li > span')[index]);

    // Two of these both set `color`, so whichever Tailwind happens to emit last
    // wins - the review state has to come from a single class, not a static one
    // plus a conditional one.
    expect(linkColours(0)).toEqual(['text-(--mat-sys-on-surface-variant)']);
    expect(numberColours(0)).toEqual(['text-(--mat-sys-on-surface-variant)']);

    fixture.componentInstance['toggleMarked']('performance-1');
    fixture.detectChanges();

    expect(linkColours(0)).toEqual(['text-(--mat-sys-on-surface)']);
    expect(numberColours(0)).toEqual(['text-(--mat-sys-primary)']);
  });

  it('should keep the row layout classes when the review state swaps the colour', async () => {
    const fixture = await createList();
    const [link] = rows(fixture);

    const layout = ['min-w-0', 'flex-1', 'no-underline', 'after:absolute'];

    for (const name of layout) {
      expect(link.classList.contains(name)).toBe(true);
    }

    fixture.componentInstance['toggleMarked']('performance-1');
    fixture.detectChanges();

    for (const name of layout) {
      expect(link.classList.contains(name)).toBe(true);
    }
  });

  it('should keep the review toggle outside the row link', async () => {
    const fixture = await createList();
    const row = rows(fixture)[0];

    // nesting the button inside the anchor would make the toggle navigate as
    // well as mark, and is invalid markup
    expect(row.contains(markButtons(fixture)[0])).toBe(false);
    expect(row.textContent?.trim()).not.toBe('');
  });

  it('should show difficulty and scenario badges on each row', async () => {
    const fixture = await createList();

    const badges = Array.from(fixture.nativeElement.querySelectorAll('li span.rounded-full')).map(
      (badge) => (badge as HTMLElement).textContent?.trim(),
    );

    expect(badges).toContain('basic');
    expect(badges).toContain('advanced');
    expect(badges).toContain('scenario');
  });

  it('should show an empty state and clear filters when nothing matches', async () => {
    const fixture = await createList('html');

    selectDifficulties(fixture, ['advanced']);
    expect(rows(fixture).length).toBe(0);
    expect(fixture.nativeElement.textContent).toContain('No questions match these filters');

    fixture.componentInstance['clearFilters']();
    fixture.detectChanges();
    expect(rows(fixture).length).toBe(16);
  });

  it('should persist only review state to localStorage', async () => {
    const fixture = await createList();

    markButtons(fixture)[0].click();
    fixture.detectChanges();

    const saved = JSON.parse(localStorage.getItem('q-marked-flags') ?? '[]') as MarkedFlag[];
    expect(saved).toEqual([{ id: 'performance-1', isMarked: true }]);
  });

  it('should filter by review status using the segmented control', async () => {
    const fixture = await createList();
    const root = fixture.nativeElement as HTMLElement;
    const group = root.querySelector('mat-button-toggle-group');
    const toggles = Array.from(
      root.querySelectorAll<HTMLButtonElement>('mat-button-toggle button'),
    );
    expect(toggles.length).toBe(3);
    expect(toggles.map((toggle) => toggle.textContent?.trim())).toEqual([
      'All',
      'For review',
      'Not marked',
    ]);
    // height is driven by a Material token, not a hard-coded pixel rule
    expect(group?.classList).toContain('[--mat-button-toggle-height:32px]');

    markButtons(fixture)[0].click();
    fixture.detectChanges();

    toggles[1].click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.componentInstance['markedFilter']()).toBe('marked');
    expect(rows(fixture).length).toBe(1);

    // the token override is scoped to `.marked-filter .mat-button-toggle-checked`,
    // so the checked class has to sit on a descendant of the group
    const checked = group?.querySelector('.mat-button-toggle-checked');
    expect(checked?.querySelector('button')?.textContent?.trim()).toBe('For review');
  });

  it('should not resurrect legacy review state once the new key exists but is empty', async () => {
    // unmarking the last question stores an empty list, which must not be
    // mistaken for "no saved state" and re-imported from an older key
    localStorage.setItem('q-marked-flags', '[]');
    localStorage.setItem('q-read-flags', JSON.stringify([{ id: 'performance-1', isRead: true }]));

    const fixture = await createList();
    const first = fixture.componentInstance['faqs']()[0];

    expect(first.id).toBe('performance-1');
    expect(first.isMarked).toBe(false);
  });

  it('should not let stale localStorage shadow curated difficulty and scenario labels', async () => {
    localStorage.setItem(
      'q-marked-flags',
      JSON.stringify([
        { id: 'performance-12', isMarked: true, difficulty: 'basic', scenarioBased: false },
      ]),
    );

    const fixture = await createList();
    const question = fixture.componentInstance['faqs']().find(
      (item) => item.id === 'performance-12',
    );

    expect(question?.isMarked).toBe(true);
    expect(question?.difficulty).toBe('medium');
    expect(question?.scenarioBased).toBe(true);
  });

  it('should bridge read flags saved under the previous feature name', async () => {
    localStorage.setItem('q-read-flags', JSON.stringify([{ id: 'performance-1', isRead: true }]));

    const fixture = await createList();
    const first = fixture.componentInstance['faqs']()[0];

    expect(first.id).toBe('performance-1');
    expect(first.isMarked).toBe(true);
  });

  it('should migrate flags saved under the legacy shape', async () => {
    localStorage.setItem(
      'q-flags',
      JSON.stringify([{ id: 'performance-1', importance: 'high', forLater: true }]),
    );

    const fixture = await createList();
    const first = fixture.componentInstance['faqs']()[0];

    expect(first.id).toBe('performance-1');
    expect(first.isMarked).toBe(true);
    expect(first.difficulty).toBe('advanced');
  });

  it("should offer notes on every row, for that row's own question", async () => {
    const fixture = await createList();

    const labels = notesButtons(fixture).map((button) => button.getAttribute('aria-label'));
    const questions = rows(fixture).map((link) => link.textContent?.trim());

    // the icon is the same everywhere, so only the label says which row it opens
    expect(labels.length).toBe(questions.length);
    questions.forEach((question, index) => {
      expect(labels[index]).toContain(question);
    });
  });

  it('should keep the notes icon outside the row link, above its overlay', async () => {
    const fixture = await createList();
    const row = rows(fixture)[0];
    const notes = (fixture.nativeElement as HTMLElement).querySelector(
      'app-question-notes button',
    ) as HTMLButtonElement;

    // nesting it inside the anchor would make the tap navigate as well as open
    expect(row.contains(notes)).toBe(false);
    // and the row link is stretched over the whole row, so it has to win on paint
    expect(notes.classList).toContain('z-10');
  });

  it("should save a note written from a row against that row's question", async () => {
    const fixture = await createList();
    const second = fixture.componentInstance['faqs']()[1];

    notesButtons(fixture)[1].click();
    await fixture.whenStable();

    const dialog = document.querySelector<HTMLElement>('app-notes-dialog');
    const field = dialog?.querySelector<HTMLTextAreaElement>('[data-testid="notes-input"]');
    field!.value = 'Worth another pass before the next round.';
    field!.dispatchEvent(new Event('input'));

    Array.from(dialog!.querySelectorAll<HTMLButtonElement>('button'))
      .find((button) => button.textContent?.trim() === 'Save')!
      .click();
    await fixture.whenStable();

    // the id has to travel from the row, or every row writes over the same note
    expect(JSON.parse(localStorage.getItem('q-notes') ?? '{}')).toEqual({
      [second.id]: 'Worth another pass before the next round.',
    });
  });

  it('should filter when difficulty chips are clicked', async () => {
    const fixture = await createList();
    const chips = chipOptions(fixture);
    expect(chips.length).toBe(3);

    chips[2].click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.componentInstance['difficultyFilter']()).toEqual(['advanced']);
    expect(rows(fixture).length).toBe(7);
  });
});
