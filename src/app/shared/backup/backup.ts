import { Injectable, inject } from '@angular/core';
import { NotesStore } from '../notes-store';
import { PocStore } from '../poc-store';
import { QuestionStore } from '../question-store';

/**
 * Identifies the file as ours, so picking an unrelated JSON off the machine is
 * refused rather than silently treated as an empty backup - which would look
 * like a successful import and quietly wipe everything.
 */
export const BACKUP_APP_ID = 'angular-playground-v1';

/**
 * Bumped only when the shape below changes in a way an older build cannot read.
 * A build refuses a file stamped higher than this rather than guessing, because
 * silently dropping a renamed field would drop the user's notes with it.
 */
export const BACKUP_VERSION = 1;

export interface BackupFile {
  app: typeof BACKUP_APP_ID;
  version: number;
  /** ISO stamp of when the file was written, shown back to the user on restore. */
  exportedAt: string;
  readQuestions: string[];
  completedPocs: string[];
  notes: Record<string, string>;
}

/** A file the user picked cannot be restored. The message is shown to them as-is. */
export class BackupError extends Error {}

type RawBackup = {
  app?: unknown;
  version?: unknown;
  exportedAt?: unknown;
  readQuestions?: unknown;
  completedPocs?: unknown;
  notes?: unknown;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Ids are kept as strings and nothing else, then deduped: the file is user-editable
 * and an id that is not a string would otherwise reach a lookup and match nothing
 * while still being written back out on the next export.
 */
function readIds(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return [...new Set(value.filter((id): id is string => typeof id === 'string' && id !== ''))];
}

/**
 * Notes go through the same filter `loadNotes` uses on localStorage, so a blank
 * or non-string entry in a hand-edited file cannot leave an empty note behind:
 * the notes icon claims a question has notes for every entry in the map, and an
 * entry that survives here would show that icon over an empty note.
 */
function readNotes(value: unknown): Record<string, string> {
  if (!isRecord(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value)
      .filter((entry): entry is [string, string] => typeof entry[1] === 'string')
      .filter(([, note]) => note.trim() !== '')
      .map(([id, note]) => [id, note.trim()]),
  );
}

/** Local date, not the UTC one `toISOString` gives, so the name matches their clock. */
function fileStamp(date: Date): string {
  const pad = (part: number) => String(part).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/** Backup counts get read as prose in a couple of places, so "1 notes" has to not happen. */
export function plural(count: number, noun: string): string {
  return `${count} ${noun}${count === 1 ? '' : 's'}`;
}

/**
 * "3 notes, 12 read questions" - what the user is told they just saved or
 * restored. Whatever the backup does not hold is left out rather than reported as
 * a zero, so an ordinary backup does not open with "0 notes".
 */
export function describeBackup(backup: BackupFile): string {
  const counts: [number, string][] = [
    [Object.keys(backup.notes).length, 'note'],
    [backup.readQuestions.length, 'read question'],
    [backup.completedPocs.length, 'completed POC'],
  ];

  return counts
    .filter(([count]) => count > 0)
    .map(([count, noun]) => plural(count, noun))
    .join(', ');
}

/** What the user currently has saved, for the restore confirmation to quote. */
export interface BackupSummary {
  readQuestions: number;
  completedPocs: number;
  notes: number;
}

/**
 * Turns the text of a file the user chose into a backup, or throws a
 * `BackupError` saying why it cannot be used.
 *
 * Everything here treats the input as hostile: it is whatever JSON happened to
 * be on the disk, chosen through a file picker with no filter the user has to
 * respect. Individual malformed entries are dropped rather than fatal, because
 * one bad note should not cost the user the other two hundred - but a file that
 * carries none of our keys at all is refused outright, since restoring that as
 * empty would destroy the current state while reporting success.
 */
export function parseBackup(raw: string): BackupFile {
  let parsed: unknown;

  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new BackupError('That file is not valid JSON.');
  }

  if (!isRecord(parsed)) {
    throw new BackupError('A backup has to be a JSON object.');
  }

  const file = parsed as RawBackup;

  if (typeof file.version === 'number' && file.version > BACKUP_VERSION) {
    throw new BackupError(
      'That backup came from a newer version of the app, so this one cannot read it.',
    );
  }

  if (!('readQuestions' in file) && !('completedPocs' in file) && !('notes' in file)) {
    throw new BackupError('That JSON file is not an Angular Playground backup.');
  }

  return {
    app: BACKUP_APP_ID,
    version: BACKUP_VERSION,
    // Absent or nonsense: the dialog falls back rather than showing "Invalid Date".
    exportedAt: typeof file.exportedAt === 'string' ? file.exportedAt : '',
    readQuestions: readIds(file.readQuestions),
    completedPocs: readIds(file.completedPocs),
    notes: readNotes(file.notes),
  };
}

/**
 * Everything the user has that is theirs alone, as one file: notes, which
 * questions they have read, and which POCs they finished. The question and poc
 * content itself is not in here - that ships with the app - so a backup stays
 * small and never goes stale against a newer questions.json.
 */
@Injectable({ providedIn: 'root' })
export class Backup {
  private readonly notes = inject(NotesStore);
  private readonly questions = inject(QuestionStore);
  private readonly pocs = inject(PocStore);

  build(): BackupFile {
    return {
      app: BACKUP_APP_ID,
      version: BACKUP_VERSION,
      exportedAt: new Date().toISOString(),
      // Only the read ones are kept, matching what the store persists: an unread
      // question is the default, so listing all of them would balloon the file.
      readQuestions: this.questions
        .questionData()
        .filter((question) => question.isRead)
        .map((question) => question.id),
      completedPocs: [...this.pocs.completed()],
      notes: { ...this.notes.notes() },
    };
  }

  /** What the user currently has saved, for the restore confirmation to quote. */
  summary(): BackupSummary {
    return {
      readQuestions: this.questions.questionData().filter((question) => question.isRead).length,
      completedPocs: this.pocs.completed().length,
      notes: Object.keys(this.notes.notes()).length,
    };
  }

  /** Writes the backup to the user's downloads and hands back what was written. */
  download(): BackupFile {
    const backup = this.build();
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');

    anchor.href = url;
    anchor.download = `${BACKUP_APP_ID}-backup-${fileStamp(new Date())}.json`;
    // Firefox only starts the download for an anchor that is in the document, and
    // removing it straight after keeps the click out of the user's hit testing.
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();

    // Revoked on the next tick rather than here: the click above only queues the
    // download, and freeing the blob first cancels it in some browsers.
    setTimeout(() => URL.revokeObjectURL(url), 0);

    return backup;
  }

  async read(file: File): Promise<BackupFile> {
    let text: string;

    try {
      text = await file.text();
    } catch {
      throw new BackupError('That file could not be read.');
    }

    return parseBackup(text);
  }

  /**
   * Overwrites rather than merges: the file is a snapshot of a whole browser, so
   * anything it does not mention is no longer part of the user's state. Each store
   * writes its own localStorage key through an effect, so the three writes land
   * independently and there is nothing to keep in step.
   */
  restore(backup: BackupFile): void {
    this.notes.replaceAll(backup.notes);
    this.questions.replaceReadFlags(backup.readQuestions);
    this.pocs.replaceCompleted(backup.completedPocs);
  }
}
