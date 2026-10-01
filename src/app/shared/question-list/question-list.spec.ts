import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatChipListboxChange } from '@angular/material/chips';
import { Question } from '../../../types/questions-type';
import { QuestionList } from './question-list';

type ReadFlag = { id: string; isRead: boolean };

async function createList(category: Question['category'] = 'performance') {
  await TestBed.configureTestingModule({ imports: [QuestionList] }).compileComponents();

  const fixture = TestBed.createComponent(QuestionList);
  fixture.componentRef.setInput('category', category);
  await fixture.whenStable();

  return fixture;
}

function panels(fixture: ComponentFixture<QuestionList>): HTMLElement[] {
  return Array.from(fixture.nativeElement.querySelectorAll('mat-expansion-panel'));
}

function readButtons(fixture: ComponentFixture<QuestionList>): HTMLButtonElement[] {
  const root = fixture.nativeElement as HTMLElement;
  return Array.from(root.querySelectorAll<HTMLButtonElement>('button[aria-pressed]'));
}

function selectDifficulties(fixture: ComponentFixture<QuestionList>, value: string[]): void {
  fixture.componentInstance['onDifficultyChange']({ value } as unknown as MatChipListboxChange);
  fixture.detectChanges();
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

  it('should create', async () => {
    const fixture = await createList();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show every question in the category by default', async () => {
    const fixture = await createList();
    expect(panels(fixture).length).toBe(23);
    expect(fixture.componentInstance['hasActiveFilters']()).toBe(false);
  });

  it('should filter by difficulty', async () => {
    const fixture = await createList();

    selectDifficulties(fixture, ['basic']);
    expect(panels(fixture).length).toBe(5);

    selectDifficulties(fixture, ['medium']);
    expect(panels(fixture).length).toBe(12);

    selectDifficulties(fixture, ['basic', 'advanced']);
    expect(panels(fixture).length).toBe(11);
  });

  it('should filter to scenario based questions only', async () => {
    const fixture = await createList();

    fixture.componentInstance['scenarioFilter'].set(true);
    fixture.detectChanges();

    expect(panels(fixture).length).toBe(4);
  });

  it('should toggle read state and filter on it', async () => {
    const fixture = await createList();
    const buttons = readButtons(fixture);
    expect(buttons.length).toBe(23);

    buttons[0].click();
    fixture.detectChanges();

    expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
    expect(fixture.componentInstance['readCount']()).toBe(1);

    fixture.componentInstance['readFilter'].set('unread');
    fixture.detectChanges();
    expect(panels(fixture).length).toBe(22);

    fixture.componentInstance['readFilter'].set('read');
    fixture.detectChanges();
    expect(panels(fixture).length).toBe(1);
  });

  it('should not expand a panel when the read toggle is clicked', async () => {
    const fixture = await createList();

    readButtons(fixture)[0].click();
    fixture.detectChanges();

    const panel = panels(fixture)[0];
    expect(panel.classList).not.toContain('mat-expanded');
  });

  it('should show difficulty and scenario badges on each panel', async () => {
    const fixture = await createList();

    const badges = Array.from(
      fixture.nativeElement.querySelectorAll('mat-expansion-panel-header span.rounded-full'),
    ).map((badge) => (badge as HTMLElement).textContent?.trim());

    expect(badges).toContain('basic');
    expect(badges).toContain('advanced');
    expect(badges).toContain('scenario');
  });

  it('should show an empty state and clear filters when nothing matches', async () => {
    const fixture = await createList('html');

    selectDifficulties(fixture, ['advanced']);
    expect(panels(fixture).length).toBe(0);
    expect(fixture.nativeElement.textContent).toContain('No questions match these filters');

    fixture.componentInstance['clearFilters']();
    fixture.detectChanges();
    expect(panels(fixture).length).toBe(12);
  });

  it('should persist only read state to localStorage', async () => {
    const fixture = await createList();
    readButtons(fixture)[0].click();
    fixture.detectChanges();

    const saved = JSON.parse(localStorage.getItem('q-read-flags') ?? '[]') as ReadFlag[];
    expect(saved).toEqual([{ id: 'performance-1', isRead: true }]);
  });

  it('should filter by read status using the segmented control', async () => {
    const fixture = await createList();
    const root = fixture.nativeElement as HTMLElement;
    const group = root.querySelector('mat-button-toggle-group');
    const toggles = Array.from(
      root.querySelectorAll<HTMLButtonElement>('mat-button-toggle button'),
    );
    expect(toggles.length).toBe(3);
    expect(toggles.map((toggle) => toggle.textContent?.trim())).toEqual(['All', 'Unread', 'Read']);
    // height is driven by a Material token, not a hard-coded pixel rule
    expect(group?.classList).toContain('[--mat-button-toggle-height:32px]');

    readButtons(fixture)[0].click();
    fixture.detectChanges();

    toggles[1].click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.componentInstance['readFilter']()).toBe('unread');
    expect(panels(fixture).length).toBe(22);

    // the token override is scoped to `.read-filter .mat-button-toggle-checked`,
    // so the checked class has to sit on a descendant of the group
    const checked = group?.querySelector('.mat-button-toggle-checked');
    expect(checked?.querySelector('button')?.textContent?.trim()).toBe('Unread');
  });

  it('should not let stale localStorage shadow curated difficulty and scenario labels', async () => {
    localStorage.setItem(
      'q-read-flags',
      JSON.stringify([
        { id: 'performance-12', isRead: true, difficulty: 'basic', scenarioBased: false },
      ]),
    );

    const fixture = await createList();
    const question = fixture.componentInstance['faqs']().find(
      (item) => item.id === 'performance-12',
    );

    expect(question?.isRead).toBe(true);
    expect(question?.difficulty).toBe('medium');
    expect(question?.scenarioBased).toBe(true);
  });

  it('should migrate flags saved under the legacy shape', async () => {
    localStorage.setItem(
      'q-flags',
      JSON.stringify([{ id: 'performance-1', importance: 'high', forLater: true }]),
    );

    const fixture = await createList();
    const first = fixture.componentInstance['faqs']()[0];

    expect(first.id).toBe('performance-1');
    expect(first.isRead).toBe(true);
    expect(first.difficulty).toBe('advanced');
  });

  it('should filter when difficulty chips are clicked', async () => {
    const fixture = await createList();
    const chips = chipOptions(fixture);
    expect(chips.length).toBe(3);

    chips[2].click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.componentInstance['difficultyFilter']()).toEqual(['advanced']);
    expect(panels(fixture).length).toBe(6);
  });

  it('should filter when the scenario checkbox is clicked', async () => {
    const fixture = await createList();
    const root = fixture.nativeElement as HTMLElement;
    const checkbox = root.querySelector<HTMLInputElement>('mat-checkbox input');

    checkbox?.click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(fixture.componentInstance['scenarioFilter']()).toBe(true);
    expect(panels(fixture).length).toBe(4);
  });
});
