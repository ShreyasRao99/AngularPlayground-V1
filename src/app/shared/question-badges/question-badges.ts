import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Difficulty } from '../../../types/questions-type';

/**
 * The difficulty, scenario and prep-round pills. They appear on a question row in
 * the index and again on the question page, and they used to be copy-pasted markup
 * with a long chain of `[class.*]` bindings, so they live here instead.
 */
@Component({
  selector: 'app-question-badges',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    :host {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
    }
  `,
  template: `
    <span
      class="rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap"
      [class.bg-(--mat-sys-surface-container-highest)]="difficulty() === 'basic'"
      [class.text-(--mat-sys-on-surface-variant)]="difficulty() === 'basic'"
      [class.bg-(--mat-sys-primary-container)]="difficulty() === 'medium'"
      [class.text-(--mat-sys-on-primary-container)]="difficulty() === 'medium'"
      [class.bg-(--mat-sys-tertiary-container)]="difficulty() === 'advanced'"
      [class.text-(--mat-sys-on-tertiary-container)]="difficulty() === 'advanced'"
      >{{ difficulty() }}</span
    >

    @if (scenarioBased()) {
      <span
        class="rounded-full bg-(--mat-sys-primary-container) px-2 py-0.5 text-xs font-medium whitespace-nowrap text-(--mat-sys-on-primary-container)"
        >scenario</span
      >
    }

    @for (tag of tags(); track tag) {
      <span [class]="tagClass(tag)">{{ tag }}</span>
    }
  `,
})
export class QuestionBadges {
  readonly difficulty = input.required<Difficulty>();
  readonly scenarioBased = input(false);
  readonly tags = input<readonly string[]>([]);

  protected tagClass(tag: string): string {
    const base = 'rounded-full px-2 py-0.5 text-xs font-medium whitespace-nowrap';

    return tag === 'NEW'
      ? `${base} bg-(--mat-sys-tertiary-container) text-(--mat-sys-on-tertiary-container)`
      : `${base} bg-[#003986] text-white`;
  }
}
