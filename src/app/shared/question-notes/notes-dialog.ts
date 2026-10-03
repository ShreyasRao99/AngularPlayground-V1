import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NotesStore } from '../notes-store';

export interface NotesDialogData {
  questionId: string;
  question: string;
}

/**
 * The notes modal. Opened from the icon on a question page and on its row in the
 * index, so the question text travels in as data to give the editor somewhere to
 * put what it is a note about.
 *
 * The draft lives in a signal rather than a form control: there is one field, it
 * is saved through one button, and a textarea bound with `[value]`/`(input)`
 * avoids pulling form-field machinery in for it.
 */
@Component({
  selector: 'app-notes-dialog',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, MatDialogModule],
  template: `
    <h2 mat-dialog-title class="m-0 text-lg font-semibold">Notes</h2>

    <mat-dialog-content>
      <p class="m-0 mb-3 line-clamp-2 text-sm text-(--mat-sys-on-surface-variant)">
        {{ data.question }}
      </p>

      <textarea
        rows="9"
        data-testid="notes-input"
        aria-label="Notes for this question"
        placeholder="What tripped you up, what you would answer differently, what to revisit…"
        class="w-full resize-y rounded-lg border border-(--mat-sys-outline-variant) bg-transparent p-2.5 text-[0.95rem] leading-relaxed outline-none focus-visible:border-(--mat-sys-primary)"
        [value]="draft()"
        (input)="onInput($event)"
        (keydown)="onKeydown($event)"
      ></textarea>

      <p class="m-0 mt-3 text-xs text-(--mat-sys-on-surface-variant)">
        Saved against this question in this browser.
      </p>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <!--
        Closes without touching the store, so dismissing by escape, the backdrop
        or this button all leave the saved note exactly as it was.
      -->
      <button mat-button type="button" mat-dialog-close>Cancel</button>

      <!-- Only worth offering on a question that already has a note. -->
      @if (hasSavedNote) {
        <button mat-button type="button" (click)="clear()">Clear</button>
      }

      <button mat-flat-button type="button" (click)="save()">Save</button>
    </mat-dialog-actions>
  `,
})
export class NotesDialog {
  protected readonly data = inject<NotesDialogData>(MAT_DIALOG_DATA);

  private readonly dialogRef = inject(MatDialogRef<NotesDialog>);
  private readonly notes = inject(NotesStore);

  protected readonly draft = signal(this.notes.noteFor(this.data.questionId));

  /** Read once, on open: the dialog edits a snapshot and only saves on demand. */
  protected readonly hasSavedNote = this.notes.hasNote(this.data.questionId);

  protected onInput(event: Event): void {
    this.draft.set((event.target as HTMLTextAreaElement).value);
  }

  /** Enter has to stay a newline, so saving is on the modifier. */
  protected onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && (event.metaKey || event.ctrlKey)) {
      event.preventDefault();
      this.save();
    }
  }

  protected save(): void {
    this.notes.setNote(this.data.questionId, this.draft());
    this.dialogRef.close();
  }

  protected clear(): void {
    this.notes.setNote(this.data.questionId, '');
    this.dialogRef.close();
  }
}
