import { TestBed } from '@angular/core/testing';
import { NotesStore } from '../notes-store';
import { PocStore } from '../poc-store';
import { QuestionStore } from '../question-store';
import { BACKUP_APP_ID, BACKUP_VERSION, Backup, BackupError, parseBackup } from './backup';

const NOTES_KEY = 'q-notes';
const READ_KEY = 'q-read-flags';
const COMPLETED_KEY = 'poc-completed';

/** A file as `build` would have written it, for the parser to be fed. */
function file(overrides: Record<string, unknown> = {}): string {
  return JSON.stringify({
    app: BACKUP_APP_ID,
    version: BACKUP_VERSION,
    exportedAt: '2026-10-03T09:00:00.000Z',
    readQuestions: ['html-1'],
    completedPocs: ['signals-1'],
    notes: { 'html-1': 'remember this' },
    ...overrides,
  });
}

describe('parseBackup', () => {
  it('should read back a file this app wrote', () => {
    const parsed = parseBackup(file());

    expect(parsed.readQuestions).toEqual(['html-1']);
    expect(parsed.completedPocs).toEqual(['signals-1']);
    expect(parsed.notes).toEqual({ 'html-1': 'remember this' });
    expect(parsed.exportedAt).toBe('2026-10-03T09:00:00.000Z');
  });

  it('should refuse text that is not JSON', () => {
    expect(() => parseBackup('not json at all')).toThrow(BackupError);
  });

  it('should refuse JSON that is not an object', () => {
    // an array or a bare value has nowhere to put the keys, so treating one as an
    // empty backup would wipe everything while looking like a success
    for (const raw of ['[]', '"a string"', '42', 'null']) {
      expect(() => parseBackup(raw)).toThrow(BackupError);
    }
  });

  it('should refuse some other file the user happened to pick', () => {
    const other = JSON.stringify({ name: 'package', dependencies: { react: '^19' } });

    expect(() => parseBackup(other)).toThrow(/not an Angular Playground backup/);
  });

  it('should refuse a backup from a newer version rather than misread it', () => {
    expect(() => parseBackup(file({ version: BACKUP_VERSION + 1 }))).toThrow(/newer version/);
  });

  it('should accept a backup stamped with an older version', () => {
    // older files only ever had fewer keys, and a missing key already reads as
    // empty, so there is nothing to migrate
    expect(parseBackup(file({ version: BACKUP_VERSION - 1 })).readQuestions).toEqual(['html-1']);
  });

  it('should keep the ids it can use and drop the ones it cannot', () => {
    const parsed = parseBackup(
      file({ readQuestions: ['html-1', 42, null, '', { id: 'css-1' }, 'html-2'] }),
    );

    expect(parsed.readQuestions).toEqual(['html-1', 'html-2']);
  });

  it('should drop a repeated id', () => {
    expect(parseBackup(file({ readQuestions: ['html-1', 'html-1'] })).readQuestions).toEqual([
      'html-1',
    ]);
  });

  it('should drop blank and non-string notes but keep the rest', () => {
    // a blank entry would leave the notes icon claiming a question has notes for
    // an empty note, because the icon is driven by the presence of a key
    const parsed = parseBackup(
      file({ notes: { 'html-1': 'kept', 'html-2': '   ', 'html-3': 42, 'html-4': null } }),
    );

    expect(parsed.notes).toEqual({ 'html-1': 'kept' });
  });

  it('should trim a note, so a backup round trips the way a note is stored', () => {
    expect(parseBackup(file({ notes: { 'html-1': '  padded  ' } })).notes).toEqual({
      'html-1': 'padded',
    });
  });

  it('should read a field of the wrong shape as empty rather than throwing', () => {
    // one damaged field should not cost the user the other two hundred questions
    const parsed = parseBackup(
      file({ readQuestions: 'html-1', completedPocs: { a: 1 }, notes: ['a note'] }),
    );

    expect(parsed.readQuestions).toEqual([]);
    expect(parsed.completedPocs).toEqual([]);
    expect(parsed.notes).toEqual({});
  });

  it('should survive a missing or nonsense export date', () => {
    expect(parseBackup(file({ exportedAt: undefined })).exportedAt).toBe('');
    expect(parseBackup(file({ exportedAt: 'never' })).exportedAt).toBe('never');
  });

  it('should accept a backup that only ever holds notes', () => {
    // a user who has read nothing still has a valid backup to restore
    expect(parseBackup(file({ readQuestions: [], completedPocs: [], notes: {} })).notes).toEqual(
      {},
    );
  });
});

describe('Backup', () => {
  function create(): Backup {
    TestBed.configureTestingModule({});
    return TestBed.inject(Backup);
  }

  beforeEach(() => {
    localStorage.clear();
  });

  it('should gather the notes, read questions and finished pocs', () => {
    const store = create();
    const questions = TestBed.inject(QuestionStore);
    const pocs = TestBed.inject(PocStore);

    questions.toggleRead('html-1');
    pocs.toggleCompleted('signals-1');
    TestBed.inject(NotesStore).setNote('css-2', 'a note');
    TestBed.tick();

    expect(store.build()).toMatchObject({
      app: BACKUP_APP_ID,
      version: BACKUP_VERSION,
      readQuestions: ['html-1'],
      completedPocs: ['signals-1'],
      notes: { 'css-2': 'a note' },
    });
  });

  it('should leave unread questions out of the file', () => {
    // unread is the default, so listing every question would make the file huge
    // to say nothing that changes on restore
    const store = create();
    const questions = TestBed.inject(QuestionStore);

    const total = questions.questionData().length;
    expect(total).toBeGreaterThan(1);

    expect(store.build().readQuestions).toEqual([]);
  });

  it('should count what is saved', () => {
    const store = create();

    expect(store.summary()).toEqual({ readQuestions: 0, completedPocs: 0, notes: 0 });

    TestBed.inject(QuestionStore).toggleRead('html-1');
    TestBed.inject(PocStore).toggleCompleted('signals-1');
    TestBed.inject(NotesStore).setNote('css-2', 'a note');
    TestBed.tick();

    expect(store.summary()).toEqual({ readQuestions: 1, completedPocs: 1, notes: 1 });
  });

  it('should round trip through a file and come back where it started', () => {
    const store = create();

    TestBed.inject(QuestionStore).toggleRead('html-1');
    TestBed.inject(PocStore).toggleCompleted('signals-1');
    TestBed.inject(NotesStore).setNote('css-2', 'a note');
    TestBed.tick();

    const written = JSON.stringify(store.build());
    TestBed.resetTestingModule();
    localStorage.clear();

    create().restore(parseBackup(written));
    TestBed.tick();

    expect(JSON.parse(localStorage.getItem(NOTES_KEY) ?? '{}')).toEqual({ 'css-2': 'a note' });
    expect(JSON.parse(localStorage.getItem(READ_KEY) ?? '[]')).toEqual([
      { id: 'html-1', isRead: true },
    ]);
    expect(JSON.parse(localStorage.getItem(COMPLETED_KEY) ?? '[]')).toEqual(['signals-1']);
  });

  it('should replace what is saved rather than merge into it', () => {
    // a backup is a snapshot of a whole browser, so anything it does not mention
    // is no longer part of the user's state
    const store = create();

    TestBed.inject(NotesStore).setNote('css-2', 'written before the backup');
    TestBed.inject(PocStore).toggleCompleted('signals-1');
    TestBed.tick();

    store.restore(parseBackup(file({ notes: {}, completedPocs: [], readQuestions: [] })));
    TestBed.tick();

    expect(JSON.parse(localStorage.getItem(NOTES_KEY) ?? '{}')).toEqual({});
    expect(JSON.parse(localStorage.getItem(COMPLETED_KEY) ?? '[]')).toEqual([]);
    expect(JSON.parse(localStorage.getItem(READ_KEY) ?? '[]')).toEqual([]);
  });

  it('should ignore a question id that no longer exists', () => {
    // a file exported from an older build must not resurrect a removed question
    const store = create();

    store.restore(parseBackup(file({ readQuestions: ['html-1', 'a-question-that-was-removed'] })));
    TestBed.tick();

    const questions = TestBed.inject(QuestionStore);
    expect(questions.questionData().some((question) => question.isRead)).toBe(true);
    expect(
      questions.questionData().every((question) => question.id !== 'a-question-that-was-removed'),
    ).toBe(true);
  });

  it('should drop a repeated completed id', () => {
    const store = create();

    store.restore(parseBackup(file({ completedPocs: ['signals-1', 'signals-1'] })));
    TestBed.tick();

    expect(JSON.parse(localStorage.getItem(COMPLETED_KEY) ?? '[]')).toEqual(['signals-1']);
  });

  it('should read a chosen file as a backup', async () => {
    const store = create();
    const chosen = new File([file()], 'angular-playground-v1-backup-2026-10-03.json', {
      type: 'application/json',
    });

    await expect(store.read(chosen)).resolves.toMatchObject({ readQuestions: ['html-1'] });
  });
});

describe('Backup.download', () => {
  let created: Blob[];
  let clicks: HTMLAnchorElement[];
  let realCreate: typeof URL.createObjectURL;
  let realRevoke: typeof URL.revokeObjectURL;
  let realClick: typeof HTMLAnchorElement.prototype.click;

  beforeEach(() => {
    localStorage.clear();
    created = [];
    clicks = [];

    // jsdom has no object URLs and no download, so both are stood in for here and
    // the anchor's click is captured instead of followed
    realCreate = URL.createObjectURL;
    realRevoke = URL.revokeObjectURL;
    realClick = HTMLAnchorElement.prototype.click;

    URL.createObjectURL = (blob: Blob) => {
      created.push(blob);
      return 'blob:mock';
    };
    URL.revokeObjectURL = () => undefined;
    HTMLAnchorElement.prototype.click = function (this: HTMLAnchorElement) {
      clicks.push(this);
    };
  });

  afterEach(() => {
    URL.createObjectURL = realCreate;
    URL.revokeObjectURL = realRevoke;
    HTMLAnchorElement.prototype.click = realClick;
  });

  function create(): Backup {
    TestBed.configureTestingModule({});
    return TestBed.inject(Backup);
  }

  it('should hand the user a JSON file named for the day', () => {
    const store = create();
    TestBed.inject(NotesStore).setNote('css-2', 'a note');
    TestBed.tick();

    store.download();

    expect(clicks).toHaveLength(1);
    expect(clicks[0].download).toMatch(/^angular-playground-v1-backup-\d{4}-\d{2}-\d{2}\.json$/);
    expect(created).toHaveLength(1);
  });

  it('should write the backup into the file it offers', async () => {
    const store = create();
    TestBed.inject(QuestionStore).toggleRead('html-1');
    TestBed.tick();

    const written = store.download();

    expect(JSON.parse(await created[0].text())).toEqual(written);
  });

  it('should leave the anchor out of the page, and free the object URL afterwards', async () => {
    const store = create();

    store.download();

    expect(document.body.contains(clicks[0])).toBe(false);
    expect(document.querySelectorAll('a[download]')).toHaveLength(0);

    // revoked on the next tick rather than immediately, because the click above
    // only queues the download
    await new Promise((resolve) => setTimeout(resolve, 0));
  });
});
