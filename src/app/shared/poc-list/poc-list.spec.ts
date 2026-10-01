import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipListboxChange } from '@angular/material/chips';
import { provideRouter } from '@angular/router';
import { POCS } from '../../poc/pocs';
import { PocList } from './poc-list';

async function createList() {
  await TestBed.configureTestingModule({
    imports: [PocList],
    providers: [provideRouter([])],
  }).compileComponents();

  const fixture = TestBed.createComponent(PocList);
  await fixture.whenStable();

  return fixture;
}

function panels(fixture: ComponentFixture<PocList>): HTMLElement[] {
  return Array.from(fixture.nativeElement.querySelectorAll('mat-expansion-panel'));
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

    expect(panels(fixture).length).toBe(POCS.length);
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

    expect(panels(fixture).length).toBe(expected);
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
    expect(panels(fixture).length).toBe(1);

    fixture.componentInstance['completionFilter'].set('todo');
    fixture.detectChanges();
    expect(panels(fixture).length).toBe(POCS.length - 1);
  });

  it('should persist completed poc ids to localStorage', async () => {
    const fixture = await createList();
    doneButtons(fixture)[0].click();
    fixture.detectChanges();

    expect(JSON.parse(localStorage.getItem('poc-completed') ?? '[]')).toEqual([POCS[0].id]);
  });

  it('should not expand a panel when the done toggle is clicked', async () => {
    const fixture = await createList();

    doneButtons(fixture)[0].click();
    fixture.detectChanges();

    expect(panels(fixture)[0].classList).not.toContain('mat-expanded');
  });

  it('should resolve every covered question id from the question bank', async () => {
    const fixture = await createList();
    const entries = fixture.componentInstance['pocs']();

    const covered = entries.flatMap((entry) =>
      entry.coveredQuestions.map((question) => question.id),
    );
    expect(covered.length).toBeGreaterThan(0);
    // an unknown id would silently resolve to nothing, so the rendered total has
    // to match the authored total
    const authored = entries.reduce((total, entry) => total + entry.poc.covers.length, 0);
    expect(covered.length).toBe(authored);
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
    expect(panels(fixture).length).toBe(POCS.length);
  });

  it('should point every poc at the pokéapi', async () => {
    const fixture = await createList();

    expect(fixture.nativeElement.querySelector('a[href^="https://pokeapi.co"]')).toBeTruthy();
    expect(POCS.every((poc) => poc.endpoints.length > 0)).toBe(true);
  });
});
