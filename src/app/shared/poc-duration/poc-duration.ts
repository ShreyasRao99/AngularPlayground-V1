import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * The alarm clock and how long a proof of concept takes. It shows on the index
 * row and again on the poc page, so the icon and the formatting live here
 * instead of being written out twice.
 *
 * Tinted with `primary` rather than the muted body colour the surrounding
 * metadata uses: sitting next to text of the same colour it read as part of
 * that sentence instead of a separate fact about the poc.
 */
@Component({
  selector: 'app-poc-duration',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span
      class="poc-duration inline-flex items-center gap-1 whitespace-nowrap text-(--mat-sys-primary)"
    >
      <!-- The ligature is decorative and the number alone is ambiguous on a list row. -->
      <span class="sr-only">Takes about</span>
      <span class="material-symbols-outlined" aria-hidden="true">timer</span>
      <span data-testid="duration">{{ formatted() }}</span>
    </span>
  `,
})
export class PocDuration {
  readonly minutes = input.required<number>();

  // 90 reads as "1 hr 30 min" rather than "1.5 hours": someone deciding whether
  // to start this wants to know whether it is an evening or a coffee break.
  protected readonly formatted = computed(() => {
    const minutes = this.minutes();
    const hours = Math.floor(minutes / 60);
    const rest = minutes % 60;

    if (!hours) {
      return `${rest} min`;
    }

    return rest ? `${hours} hr ${rest} min` : `${hours} hr`;
  });
}
