import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { QuestionNotes } from './question-notes';

const QUESTION = 'Why does change detection run twice in development mode?';

async function createNotes(questionId = 'angular-1') {
  await TestBed.configureTestingModule({ imports: [QuestionNotes] }).compileComponents();

  const fixture = TestBed.createComponent(QuestionNotes);
  fixture.componentRef.setInput('questionId', questionId);
  fixture.componentRef.setInput('question', QUESTION);
  await fixture.whenStable();

  return fixture;
}

function trigger(fixture: ComponentFixture<QuestionNotes>): HTMLButtonElement {
  return (fixture.nativeElement as HTMLElement).querySelector('button')!;
}

/** The dialog renders into the overlay container, not into the button's own view. */
function openDialog(): HTMLElement {
  const dialog = document.querySelector<HTMLElement>('app-notes-dialog');
  expect(dialog).not.toBeNull();
  return dialog!;
}

function action(dialog: HTMLElement, label: string): HTMLButtonElement {
  const button = Array.from(dialog.querySelectorAll<HTMLButtonElement>('button')).find(
    (candidate) => candidate.textContent?.trim() === label,
  );

  if (!button) {
    throw new Error(`no "${label}" button in the dialog`);
  }

  return button;
}

function textarea(dialog: HTMLElement): HTMLTextAreaElement {
  return dialog.querySelector<HTMLTextAreaElement>('[data-testid="notes-input"]')!;
}

async function type(dialog: HTMLElement, text: string): Promise<void> {
  const field = textarea(dialog);
  field.value = text;
  field.dispatchEvent(new Event('input'));
}

describe('QuestionNotes', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    TestBed.inject(MatDialog).closeAll();
    // the overlay container is left in the document by whatever was still open
    document.querySelectorAll('app-notes-dialog, .cdk-overlay-container').forEach((node) => {
      node.remove();
    });
  });

  it('should render the notes ligature inside an icon button', async () => {
    const fixture = await createNotes();

    const glyph = (fixture.nativeElement as HTMLElement).querySelector(
      '.material-symbols-outlined',
    );
    expect(glyph?.textContent?.trim()).toBe('add_notes');
    expect(glyph?.getAttribute('aria-hidden')).toBe('true');
  });

  it('should name the question the note belongs to, since the glyph alone does not', async () => {
    const fixture = await createNotes();

    expect(trigger(fixture).getAttribute('aria-label')).toBe(`Add notes for: ${QUESTION}`);
  });

  it('should sit above the full-row link overlay on an index row', async () => {
    const fixture = await createNotes();

    // the row link is stretched over the whole row, so without this the tap lands
    // on the link and navigates instead of opening the dialog
    expect(trigger(fixture).classList).toContain('z-10');
  });

  it('should open the dialog on the question and offer an empty draft', async () => {
    const fixture = await createNotes('angular-1');

    trigger(fixture).click();
    await fixture.whenStable();

    const dialog = openDialog();
    expect(dialog.textContent).toContain(QUESTION);
    expect(textarea(dialog).value).toBe('');
  });

  it('should save a written note against that question in localStorage', async () => {
    const fixture = await createNotes('angular-1');

    trigger(fixture).click();
    await fixture.whenStable();

    const dialog = openDialog();
    await type(dialog, 'Asked about zone coalescing - could not place the microtask queue.');
    action(dialog, 'Save').click();
    await fixture.whenStable();

    expect(JSON.parse(localStorage.getItem('q-notes') ?? '{}')).toEqual({
      'angular-1': 'Asked about zone coalescing - could not place the microtask queue.',
    });
  });

  it('should report that the question now has a note', async () => {
    const fixture = await createNotes('angular-1');

    expect(trigger(fixture).getAttribute('aria-label')).toBe(`Add notes for: ${QUESTION}`);
    // tinted through Material's own token rather than a text utility, which the
    // unlayered button rule would win against
    expect(trigger(fixture).style.getPropertyValue('--mat-icon-button-icon-color')).toBe('');

    trigger(fixture).click();
    await fixture.whenStable();

    const dialog = openDialog();
    await type(dialog, 'Revisit before the next interview.');
    action(dialog, 'Save').click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(trigger(fixture).getAttribute('aria-label')).toBe(`Edit notes for: ${QUESTION}`);
    expect(trigger(fixture).style.getPropertyValue('--mat-icon-button-icon-color')).toBe(
      'var(--mat-sys-primary)',
    );
  });

  it('should open the next time on the note that was already written', async () => {
    localStorage.setItem(
      'q-notes',
      JSON.stringify({ 'angular-1': 'Revisit before the next round.' }),
    );
    const fixture = await createNotes('angular-1');

    trigger(fixture).click();
    await fixture.whenStable();

    expect(textarea(openDialog()).value).toBe('Revisit before the next round.');
  });

  it("should keep one question's note out of another question's dialog", async () => {
    localStorage.setItem('q-notes', JSON.stringify({ 'angular-1': 'belongs to angular-1' }));
    const fixture = await createNotes('angular-2');

    trigger(fixture).click();
    await fixture.whenStable();

    expect(textarea(openDialog()).value).toBe('');
  });

  it('should discard an unsaved draft when the dialog is cancelled', async () => {
    localStorage.setItem('q-notes', JSON.stringify({ 'angular-1': 'saved text' }));
    const fixture = await createNotes('angular-1');

    trigger(fixture).click();
    await fixture.whenStable();

    const dialog = openDialog();
    await type(dialog, 'half typed and abandoned');
    action(dialog, 'Cancel').click();
    await fixture.whenStable();

    expect(JSON.parse(localStorage.getItem('q-notes') ?? '{}')).toEqual({
      'angular-1': 'saved text',
    });
  });

  it('should remove the note when the text is cleared and saved', async () => {
    localStorage.setItem('q-notes', JSON.stringify({ 'angular-1': 'saved text' }));
    const fixture = await createNotes('angular-1');

    trigger(fixture).click();
    await fixture.whenStable();

    const dialog = openDialog();
    await type(dialog, '');
    action(dialog, 'Save').click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(JSON.parse(localStorage.getItem('q-notes') ?? '{}')).toEqual({});
    expect(trigger(fixture).getAttribute('aria-label')).toBe(`Add notes for: ${QUESTION}`);
  });

  it('should drop the saved note on clear, discarding the draft with it', async () => {
    localStorage.setItem('q-notes', JSON.stringify({ 'angular-1': 'saved text' }));
    const fixture = await createNotes('angular-1');

    trigger(fixture).click();
    await fixture.whenStable();

    const dialog = openDialog();
    await type(dialog, 'replacement nobody saved');
    action(dialog, 'Clear').click();
    await fixture.whenStable();
    fixture.detectChanges();

    expect(JSON.parse(localStorage.getItem('q-notes') ?? '{}')).toEqual({});
    expect(trigger(fixture).getAttribute('aria-label')).toBe(`Add notes for: ${QUESTION}`);
  });

  it('should not offer clear on a question that has no note yet', async () => {
    const fixture = await createNotes('angular-1');

    trigger(fixture).click();
    await fixture.whenStable();

    const actions = Array.from(openDialog().querySelectorAll('button')).map((button) =>
      button.textContent?.trim(),
    );

    expect(actions).toEqual(['Cancel', 'Save']);
  });
});
