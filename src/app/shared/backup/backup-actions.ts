import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Injector,
  inject,
  viewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { firstValueFrom } from 'rxjs';
// Type-only, and it has to stay that way. `./backup` reaches the question store,
// which imports questions.json - a quarter of a megabyte of question content the
// app otherwise loads one route at a time. Importing it for real here would put
// all of that in the initial bundle, so the module is loaded on demand instead.
import type { BackupFile, BackupSummary } from './backup';
// Likewise type-only: the dialog is opened by hand in `confirm`, which imports it.
import type { RestoreDialog, RestoreDialogData } from './restore-dialog';

/**
 * The two backup icons in the toolbar: one writes everything the user has saved
 * to this device as JSON, the other reads such a file back in.
 *
 * They sit together because they are two halves of one operation - a backup is
 * only worth taking if it can be put back - and because the tooltip on each has
 * to spell out that restoring replaces the current state, which is the one part
 * a bare upload glyph cannot convey.
 */
@Component({
  selector: 'app-backup-actions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'inline-flex shrink-0 items-center' },
  imports: [MatButtonModule],
  template: `
    <!--
      Each button is wrapped so the tooltip can be positioned against something
      this component owns, rather than against Material's own positioning on
      mat-icon-button. The wrapper is the hover group, so the tooltip also appears
      when the button is reached by keyboard.
    -->
    <span class="group relative inline-flex">
      <button mat-icon-button type="button" [attr.aria-label]="downloadTip" (click)="download()">
        <!--
          No size utility: the ligature class is 1em and an icon button is already
          24px of font size, so the glyph lands on the box a mat-icon would. Tinted
          like the menu button beside it, because the toolbar is painted with the
          primary colour and Material's default icon colour is on-surface.
        -->
        <span class="material-symbols-outlined text-white!" aria-hidden="true">download</span>
      </button>

      <!--
        A tooltip of our own rather than matTooltip. This component sits in the
        eagerly loaded header, and Material's tooltip pulls the shared Material and
        CDK chunk that the lazy routes use into the initial bundle - about 280kB,
        for two hovers. The whole explanation is also on the button's aria-label,
        so this stays out of the accessibility tree and is only here for a pointer.
      -->
      <span
        aria-hidden="true"
        data-testid="download-tip"
        class="pointer-events-none absolute top-full left-1/2 z-50 mt-1 w-max max-w-72 -translate-x-1/2
          rounded-md bg-(--mat-sys-inverse-surface) px-2 py-1 text-xs leading-snug shadow
          text-(--mat-sys-inverse-on-surface) opacity-0 transition-opacity duration-150
          group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {{ downloadTip }}
      </span>
    </span>

    <span class="group relative inline-flex">
      <button mat-icon-button type="button" [attr.aria-label]="uploadTip" (click)="pick()">
        <span class="material-symbols-outlined text-white!" aria-hidden="true">upload</span>
      </button>

      <span
        aria-hidden="true"
        data-testid="upload-tip"
        class="pointer-events-none absolute top-full left-1/2 z-50 mt-1 w-max max-w-72 -translate-x-1/2
          rounded-md bg-(--mat-sys-inverse-surface) px-2 py-1 text-xs leading-snug shadow
          text-(--mat-sys-inverse-on-surface) opacity-0 transition-opacity duration-150
          group-hover:opacity-100 group-focus-within:opacity-100"
      >
        {{ uploadTip }}
      </span>
    </span>

    <!--
      Kept in the DOM rather than created on demand so the browser's own picker
      is used. Taken out of the tab order and the accessibility tree because the
      button above is the control that labels it - a file input reached by
      keyboard would open the picker with no explanation of what it restores.
    -->
    <input
      #picker
      type="file"
      accept="application/json,.json"
      class="sr-only"
      tabindex="-1"
      aria-hidden="true"
      data-testid="backup-picker"
      (change)="onPicked($event)"
    />
  `,
})
export class BackupActions {
  // Em dashes as characters, not as `&mdash;`: these are bound as properties and
  // interpolated as text, so neither would decode the entity.
  protected readonly downloadTip =
    'Save your notes, read questions and finished POCs to this device as a JSON file';

  protected readonly uploadTip =
    'Restore from a JSON file you downloaded before — it replaces your notes, ' +
    'read questions and finished POCs in this browser';

  /**
   * The services here are fetched from the injector after their module has been
   * imported, because `inject()` needs an injection context and a click handler
   * has none by the time it yields. This is the way back to the root injector.
   */
  private readonly injector = inject(Injector);

  /** `import()` rather than a static import so the backup module stays lazy. */
  private readonly backupTools = () => import('./backup');

  private readonly picker = viewChild.required<ElementRef<HTMLInputElement>>('picker');

  protected async download(): Promise<void> {
    const { Backup, describeBackup } = await this.backupTools();
    const saved = describeBackup(this.injector.get(Backup).download());

    // An empty backup is still worth downloading - it is how someone clears out
    // their own state and starts again - but there is nothing to report in it.
    void this.notify(
      saved ? `Backup downloaded — ${saved}` : 'Backup downloaded — there was nothing in it',
    );
  }

  protected pick(): void {
    // Synchronous inside the click, so the browser still counts this as a user
    // gesture and opens the picker rather than refusing to.
    this.picker().nativeElement.click();
  }

  protected async onPicked(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    // Emptied before the read is awaited rather than after it: choosing the same
    // file twice in a row otherwise fires no change event the second time, so the
    // icons look broken instead of the restore having quietly done nothing.
    input.value = '';

    if (!file) {
      return;
    }

    const { Backup, describeBackup } = await this.backupTools();
    const backup = this.injector.get(Backup);

    let restored: BackupFile;

    try {
      restored = await backup.read(file);
    } catch (error) {
      // `read` only ever throws a BackupError, and its message is already written
      // for the user, so this needs no `instanceof` against a module that is not
      // loaded yet.
      void this.notify(
        error instanceof Error ? error.message : 'That file could not be restored.',
        true,
      );
      return;
    }

    if (!(await this.confirm(restored, backup.summary()))) {
      return;
    }

    backup.restore(restored);
    void this.notify(`Restored ${describeBackup(restored)}`);
  }

  /**
   * Material's overlay is a few hundred kilobytes that nothing else in the
   * toolbar needs, so it is fetched the first time there is something to say
   * rather than sitting in the initial bundle - the same trade the lazy routes
   * already make.
   */
  private async notify(message: string, isError = false): Promise<void> {
    try {
      const { MatSnackBar } = await import('@angular/material/snack-bar');

      this.injector.get(MatSnackBar).open(message, 'Dismiss', {
        // An error stays up longer: it is the only record of why a file was turned
        // down, and a few words that vanish in four seconds do not explain it.
        duration: isError ? 9000 : 5000,
      });
    } catch {
      // The only realistic way to get here is the chunk failing to load, and there
      // is no second surface to report it on. Swallowed deliberately rather than
      // left to reject, since this runs detached from the click that caused it.
    }
  }

  private async confirm(restored: BackupFile, current: BackupSummary): Promise<boolean> {
    const [overlay, dialog] = await Promise.all([
      import('@angular/material/dialog'),
      import('./restore-dialog'),
    ]);

    const ref = this.injector
      .get(overlay.MatDialog)
      .open<RestoreDialog, RestoreDialogData, boolean>(dialog.RestoreDialog, {
        // Counted before the dialog is opened, so the warning describes the state
        // it is about to replace rather than whatever that has become by the time
        // the question is answered.
        data: { backup: restored, current },
        restoreFocus: true,
        maxWidth: 'calc(100vw - 2rem)',
      });

    return (await firstValueFrom(ref.afterClosed())) === true;
  }
}
