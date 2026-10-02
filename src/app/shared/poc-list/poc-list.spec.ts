import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipListboxChange } from '@angular/material/chips';
import { provideRouter } from '@angular/router';
import { POCS } from '../../poc/pocs';
import { PocList } from './poc-list';
import { QuestionStore } from '../question-store';

async function createList() {
  await TestBed.configureTestingModule({
    imports: [PocList],
    providers: [provideRouter([])],
  }).compileComponents();

  const fixture = TestBed.createComponent(PocList);
  await fixture.whenStable();

  return fixture;
}

/** One row per proof of concept: the index is a list of links, not panels. */
function rows(fixture: ComponentFixture<PocList>): HTMLAnchorElement[] {
  const root = fixture.nativeElement as HTMLElement;
  return Array.from(root.querySelectorAll<HTMLAnchorElement>('li > a'));
}

function doneButtons(fixture: ComponentFixture<PocList>): HTMLButtonElement[] {
  const root = fixture.nativeElement as HTMLElement;
  return Array.from(root.querySelectorAll<HTMLButtonElement>('button[aria-pressed]'));
}

function selectCategories(fixture: ComponentFixture<PocList>, value: string[]): void {
  fixture.componentInstance['onCategoryChange']({ value } as unknown as MatChipListboxChange);
  fixture.detectChanges();
}

describe('PocList', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should create', async () => {
    const fixture = await createList();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show every poc by default', async () => {
    const fixture = await createList();

    expect(rows(fixture).length).toBe(POCS.length);
    expect(fixture.componentInstance['hasActiveFilters']()).toBe(false);
  });

  it('should never include a behavioural poc', async () => {
    await createList();

    expect(POCS.some((poc) => poc.category === 'behavioural')).toBe(false);
  });

  it('should filter by topic', async () => {
    const fixture = await createList();
    const expected = POCS.filter((poc) => poc.category === 'rxjs').length;

    selectCategories(fixture, ['rxjs']);

    expect(rows(fixture).length).toBe(expected);
  });

  it('should toggle done state and filter on it', async () => {
    const fixture = await createList();
    const buttons = doneButtons(fixture);
    expect(buttons.length).toBe(POCS.length);

    buttons[0].click();
    fixture.detectChanges();

    expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
    expect(fixture.componentInstance['completedCount']()).toBe(1);

    fixture.componentInstance['completionFilter'].set('done');
    fixture.detectChanges();
    expect(rows(fixture).length).toBe(1);

    fixture.componentInstance['completionFilter'].set('todo');
    fixture.detectChanges();
    expect(rows(fixture).length).toBe(POCS.length - 1);
  });

  it('should persist completed poc ids to localStorage', async () => {
    const fixture = await createList();
    doneButtons(fixture)[0].click();
    fixture.detectChanges();

    expect(JSON.parse(localStorage.getItem('poc-completed') ?? '[]')).toEqual([POCS[0].id]);
  });

  it('should link every poc to its own page and keep the toggle outside the link', async () => {
    const fixture = await createList();
    const [first] = rows(fixture);

    expect(first.getAttribute('href')).toBe(`/poc/${POCS[0].id}`);
    // nesting the button inside the anchor would make the toggle navigate too
    expect(first.contains(doneButtons(fixture)[0])).toBe(false);
  });

  it('should never point a poc at a question that is missing from the bank', async () => {
    await createList();
    const bank = new Set(
      TestBed.inject(QuestionStore)
        .questionData()
        .map((question) => question.id),
    );
    const covers = POCS.flatMap((poc) => poc.covers);

    expect(covers.length).toBeGreaterThan(0);
    for (const id of covers) {
      expect(bank.has(id)).toBe(true);
    }
  });

  it('should show an empty state and clear filters when nothing matches', async () => {
    const fixture = await createList();

    selectCategories(fixture, ['misc']);
    fixture.componentInstance['completionFilter'].set('todo');
    // mark every misc poc done so nothing is left to show
    for (const poc of POCS.filter((item) => item.category === 'misc')) {
      fixture.componentInstance['toggleCompleted'](poc.id);
    }
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('No POCs match these filters');

    fixture.componentInstance['clearFilters']();
    fixture.detectChanges();
    expect(rows(fixture).length).toBe(POCS.length);
  });

  it('should point every poc at the pokéapi', async () => {
    const fixture = await createList();

    expect(fixture.nativeElement.querySelector('a[href^="https://pokeapi.co"]')).toBeTruthy();
    expect(POCS.every((poc) => poc.endpoints.length > 0)).toBe(true);
  });
});
