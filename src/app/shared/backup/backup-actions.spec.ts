import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BackupActions } from './backup-actions';

const DOWNLOAD_TIP =
  'Save your notes, read questions and finished POCs to this device as a JSON file';

const BACKUP = JSON.stringify({
  app: 'angular-playground-v1',
  version: 1,
  exportedAt: '2026-10-03T09:00:00.000Z',
  readQuestions: ['html-1'],
  completedPocs: ['signals-1'],
  notes: { 'css-2': 'a note from the file' },
});

async function create(): Promise<ComponentFixture<BackupActions>> {
  await TestBed.configureTestingModule({ imports: [BackupActions] }).compileComponents();

  const fixture = TestBed.createComponent(BackupActions);
  await fixture.whenStable();

  return fixture;
}

/**
 * The component loads its overlay modules on demand, and both the dialog and the
 * snackbar settle a few turns of the macrotask queue after their promise. Waiting
 * on the fixture alone would race either one.
 */
async function settle(fixture: ComponentFixture<BackupActions>): Promise<void> {
  for (let turn = 0; turn < 10; turn++) {
    await new Promise((resolve) => setTimeout(resolve, 0));
    await fixture.whenStable();
  }
}

function root(fixture: ComponentFixture<BackupActions>): HTMLElement {
  return fixture.nativeElement as HTMLElement;
}

function buttons(fixture: ComponentFixture<BackupActions>): HTMLButtonElement[] {
  return Array.from(root(fixture).querySelectorAll<HTMLButtonElement>('button'));
}

function glyphs(fixture: ComponentFixture<BackupActions>): string[] {
  return Array.from(root(fixture).querySelectorAll('.material-symbols-outlined')).map((node) =>
    (node.textContent ?? '').trim(),
  );
}

/** The hover explanation for a button, which sits in the DOM beside it. */
function tip(fixture: ComponentFixture<BackupActions>, name: 'download' | 'upload'): HTMLElement {
  return root(fixture).querySelector<HTMLElement>(`[data-testid="${name}-tip"]`)!;
}

function dialog(): HTMLElement {
  const found = document.querySelector<HTMLElement>('app-restore-dialog');
  expect(found).not.toBeNull();
  return found!;
}

function dialogAction(label: string): HTMLButtonElement {
  const button = Array.from(dialog().querySelectorAll<HTMLButtonElement>('button')).find(
    (candidate) => candidate.textContent?.trim() === label,
  );

  if (!button) {
    throw new Error(`no "${label}" button in the dialog`);
  }

  return button;
}

/** Hands the component a chosen file, the way the browser's own picker would. */
async function choose(fixture: ComponentFixture<BackupActions>, contents: string): Promise<void> {
  const picker = root(fixture).querySelector<HTMLInputElement>('[data-testid="backup-picker"]')!;
  const file = new File([contents], 'angular-playground-v1-backup-2026-10-03.json', {
    type: 'application/json',
  });

  Object.defineProperty(picker, 'files', { value: [file], configurable: true });
  picker.dispatchEvent(new Event('change'));
  await settle(fixture);
}

describe('BackupActions', () => {
  beforeAll(async () => {
    // The component imports these only when it has something to show. Warming them
    // first keeps these tests about behaviour rather than about how long a dynamic
    // import happens to take, which would otherwise leak into a later test.
    await Promise.all([
      import('./backup'),
      import('./restore-dialog'),
      import('@angular/material/dialog'),
      import('@angular/material/snack-bar'),
    ]);
  });

  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    // the overlay container outlives the dialog's and the snackbar's exit animation
    document
      .querySelectorAll('app-restore-dialog, mat-snack-bar-container, .cdk-overlay-container')
      .forEach((node) => node.remove());
  });

  it('should render a download and an upload ligature in the toolbar', async () => {
    const fixture = await create();

    expect(glyphs(fixture)).toEqual(['download', 'upload']);
  });

  it('should hide the ligatures from a screen reader, since the buttons are named', async () => {
    const fixture = await create();

    for (const glyph of root(fixture).querySelectorAll('.material-symbols-outlined')) {
      expect(glyph.getAttribute('aria-hidden')).toBe('true');
    }
  });

  it('should name each button after what it does, for anyone who cannot hover', async () => {
    const fixture = await create();
    const [download, upload] = buttons(fixture);

    expect(download.getAttribute('aria-label')).toBe(DOWNLOAD_TIP);
    expect(upload.getAttribute('aria-label')).toContain('Restore from a JSON file');
  });

  it('should say on hover that a backup covers notes, progress and POCs', async () => {
    const fixture = await create();

    // the tooltip is the visible copy of the label, so both have to carry the
    // explanation rather than just naming the glyph
    expect(tip(fixture, 'download').textContent?.trim()).toBe(DOWNLOAD_TIP);
    expect(tip(fixture, 'upload').textContent?.trim()).toContain('replaces your notes');
  });

  it('should warn on hover that restoring overwrites what is saved', async () => {
    const fixture = await create();

    expect(tip(fixture, 'upload').textContent).toContain('replaces');
  });

  it('should keep the tooltips out of the way until the icon is hovered or focused', async () => {
    const fixture = await create();

    for (const name of ['download', 'upload'] as const) {
      const hint = tip(fixture, name);

      // decoration for a sighted pointer: the button's label already says it, so a
      // second copy in the accessibility tree would only be read out twice
      expect(hint.getAttribute('aria-hidden')).toBe('true');
      expect(hint.className).toContain('opacity-0');
      expect(hint.className).toContain('group-hover:opacity-100');
      expect(hint.className).toContain('group-focus-within:opacity-100');
      expect(hint.parentElement!.className).toContain('group');
    }
  });

  it('should keep the file picker out of the tab order and the accessibility tree', async () => {
    const fixture = await create();
    const picker = root(fixture).querySelector<HTMLInputElement>('input[type="file"]')!;

    // the buttons are the controls; an input that a keyboard could land on would
    // open the picker with nothing having explained what it restores
    expect(picker.tabIndex).toBe(-1);
    expect(picker.getAttribute('aria-hidden')).toBe('true');
    expect(picker.accept).toBe('application/json,.json');
  });

  it('should say what was saved once a backup has been downloaded', async () => {
    const fixture = await create();
    const { NotesStore } = await import('../notes-store');

    TestBed.inject(NotesStore).setNote('css-2', 'a note');
    TestBed.tick();

    // jsdom has no download, so the anchor's click is as far as it can follow
    const realClick = HTMLAnchorElement.prototype.click;
    const realCreate = URL.createObjectURL;
    URL.createObjectURL = () => 'blob:mock';
    HTMLAnchorElement.prototype.click = () => undefined;

    try {
      buttons(fixture)[0].click();
      await settle(fixture);
    } finally {
      HTMLAnchorElement.prototype.click = realClick;
      URL.createObjectURL = realCreate;
    }

    // confirming what went into the file is the whole point of the message: the
    // file itself is gone by the time anyone wonders whether it was complete
    expect(document.querySelector('mat-snack-bar-container')?.textContent ?? '').toContain(
      '1 note',
    );
  });

  it('should refuse a file that is not a backup and change nothing', async () => {
    localStorage.setItem('q-notes', JSON.stringify({ 'css-2': 'still here' }));
    const fixture = await create();

    await choose(fixture, JSON.stringify({ name: 'package' }));

    expect(localStorage.getItem('q-notes')).toBe(JSON.stringify({ 'css-2': 'still here' }));
  });

  it('should say why a file was refused', async () => {
    const fixture = await create();

    await choose(fixture, 'not json at all');

    const message = document.querySelector('mat-snack-bar-container')?.textContent ?? '';
    expect(message).toContain('not valid JSON');
  });

  it('should ask before replacing what is saved', async () => {
    const fixture = await create();

    await choose(fixture, BACKUP);

    // restoring overwrites rather than merging, so the file picker is the only
    // other chance to change your mind
    expect(dialog().textContent).toContain('Replace what this browser has?');
  });

  it('should show what the file holds and what it would cost', async () => {
    const fixture = await create();

    await choose(fixture, BACKUP);

    const text = dialog().textContent ?? '';
    expect(text).toContain('1 read question');
    expect(text).toContain('1 completed POC');
    expect(text).toContain('1 note');
  });

  it('should leave everything alone when the restore is cancelled', async () => {
    localStorage.setItem('q-notes', JSON.stringify({ 'html-9': 'written after the backup' }));
    const fixture = await create();

    await choose(fixture, BACKUP);
    dialogAction('Cancel').click();
    await settle(fixture);

    expect(JSON.parse(localStorage.getItem('q-notes') ?? '{}')).toEqual({
      'html-9': 'written after the backup',
    });
  });

  it('should put the file back when the restore is confirmed', async () => {
    localStorage.setItem('q-notes', JSON.stringify({ 'html-9': 'written after the backup' }));
    const fixture = await create();

    await choose(fixture, BACKUP);
    dialogAction('Restore').click();
    await settle(fixture);

    expect(JSON.parse(localStorage.getItem('q-notes') ?? '{}')).toEqual({
      'css-2': 'a note from the file',
    });
  });
});
