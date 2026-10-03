import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { BackupFile, BackupSummary, plural } from './backup';

export interface RestoreDialogData {
  backup: BackupFile;
  /** What the import would overwrite, so the warning can be concrete. */
  current: BackupSummary;
}

/**
 * Confirmation before a restore. Importing replaces everything rather than
 * merging into it, so without this the icons in the header would silently
 * discard notes typed since the backup was taken - and the file picker gives no
 * other chance to back out.
 *
 * The counts come in as data rather than off the stores, so the warning can say
 * what is actually at stake instead of hedging, and so the dialog can be checked
 * without standing up the state it is describing.
 */
@Component({
  selector: 'app-restore-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title>Replace what this browser has?</h2>

    <mat-dialog-content>
      <p class="m-0 mb-3">
        The backup{{ takenOn() ? ' taken ' + takenOn() : '' }} holds
        {{ plural(backup.readQuestions.length, 'read question') }},
        {{ plural(backup.completedPocs.length, 'completed POC') }} and
        {{ plural(noteCount(), 'note') }}.
      </p>

      <p class="m-0 text-(--mat-sys-on-surface-variant)">
        Restoring swaps all of it for what the file contains, so the
        {{ plural(current.readQuestions, 'read question') }},
        {{ plural(current.completedPocs, 'completed POC') }} and
        {{ plural(current.notes, 'note') }} saved here now are discarded. Download a fresh backup
        first if you want to keep them.
      </p>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <!--
        Closes with false, which is also what escape and the backdrop produce, so
        backing out never needs its own handler.
      -->
      <button mat-button type="button" [mat-dialog-close]="false">Cancel</button>

      <button mat-flat-button type="button" [mat-dialog-close]="true">Restore</button>
    </mat-dialog-actions>
  `,
})
export class RestoreDialog {
  protected readonly data = inject<RestoreDialogData>(MAT_DIALOG_DATA);
  protected readonly backup = this.data.backup;
  protected readonly current = this.data.current;

  protected readonly noteCount = computed(() => Object.keys(this.backup.notes).length);

  /**
   * A backup written by hand may have no stamp, or one that is not a date, so
   * this renders as nothing rather than as "Invalid Date" in the sentence.
   */
  protected readonly takenOn = computed(() => {
    const exportedAt = new Date(this.backup.exportedAt);

    return isNaN(exportedAt.getTime()) ? '' : exportedAt.toLocaleDateString();
  });

  /** Bound as a method so the template reads as prose rather than as arithmetic. */
  protected plural = plural;
}
