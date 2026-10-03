import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NotesStore } from '../notes-store';
import { NotesDialog } from './notes-dialog';

/**
 * The notes icon, and the only place the modal is opened from. It sits in the
 * sticky header of a question page next to "Mark as read", and again on the
 * question's row in the index, so a note can be written either while reading the
 * answer or straight from the list of questions.
 */
@Component({
  selector: 'app-question-notes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex shrink-0' },
  imports: [MatButtonModule, MatTooltipModule],
  template: `
    <button
      mat-icon-button
      type="button"
      class="relative z-10"
      [style.--mat-icon-button-icon-color]="hasNote() ? 'var(--mat-sys-primary)' : null"
      [attr.aria-label]="label()"
      [matTooltip]="hasNote() ? 'Edit notes' : 'Add notes'"
      (click)="open()"
    >
      <!--
        No size utility: the ligature class is 1em, and an icon button is already
        24px of font size, so the glyph lands on the same box a mat-icon would.
        The glyph is decorative - the button's label carries the meaning and says
        which question the note belongs to.
      -->
      <span class="material-symbols-outlined" aria-hidden="true">add_notes</span>
    </button>
  `,
})
export class QuestionNotes {
  private readonly dialog = inject(MatDialog);
  private readonly notes = inject(NotesStore);

  readonly questionId = input.required<string>();
  readonly question = input.required<string>();

  protected readonly hasNote = computed(() => this.notes.hasNote(this.questionId()));

  protected readonly label = computed(
    () => `${this.hasNote() ? 'Edit notes for' : 'Add notes for'}: ${this.question()}`,
  );

  protected open(): void {
    // The dialog writes to the store itself, so closing it needs no result
    // handling - the icon's tint and label are computed off the store already.
    this.dialog.open(NotesDialog, {
      data: { questionId: this.questionId(), question: this.question() },
      // Puts the caret in the textarea rather than on Cancel, which is what the
      // dialog would pick first on its own.
      autoFocus: 'first-tabbable',
      restoreFocus: true,
      width: '34rem',
      // On a phone the fixed width has to lose to the viewport, or the dialog
      // runs off both edges.
      maxWidth: 'calc(100vw - 2rem)',
    });
  }
}
