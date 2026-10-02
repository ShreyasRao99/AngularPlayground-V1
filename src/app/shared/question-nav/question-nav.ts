import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

/** One side of the pair: the route to walk to, and what to call it in the link. */
export interface NavTarget {
  readonly link: readonly string[];
  readonly label: string;
}

/**
 * The previous/next pair that walks a list one screen at a time. It was
 * copy-pasted markup on the question and proof of concept pages, and the
 * question page needs it twice — once at the end of the answer and once in the
 * sticky header — so it lives here instead.
 *
 * Only the links belong to this component; the placement decoration does not.
 * The bottom copy adds a rule and padding above it, the header copy adds
 * nothing, and keeping that on the caller stops a `variant` input creeping in.
 */
@Component({
  selector: 'app-question-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatIconModule, RouterLink],
  template: `
    <!--
      This gap is the only thing separating the two titles. Both sides truncate,
      so the previous one ends in an ellipsis hard against the edge of its half
      and the next one starts at the edge of the other half; at the default 12px
      the ellipsis and the first letter of the next question read as one run of
      text. Wide enough that the pair is clearly two links.
    -->
    <nav class="flex items-center gap-5" [attr.aria-label]="label()">
      @if (previous(); as prev) {
        <!--
          A plain link, not mat-button: Material wraps button content in its own
          label element that will not shrink, so the two links overflow their box
          and collide instead of ellipsising. Each takes an equal half of the row,
          so the gap between them is the same whatever the entries are called.
        -->
        <a
          class="flex min-w-0 flex-1 items-center gap-1 overflow-hidden text-sm font-medium text-(--mat-sys-primary) no-underline hover:underline"
          [routerLink]="prev.link"
          [title]="prev.label"
        >
          <mat-icon class="shrink-0">arrow_back</mat-icon>
          <span class="min-w-0 truncate">{{ prev.label }}</span>
        </a>
      } @else {
        <!-- Holds the half of the row the missing neighbour would have taken. -->
        <span class="min-w-0 flex-1"></span>
      }

      @if (next(); as nextTarget) {
        <a
          class="flex min-w-0 flex-1 items-center justify-end gap-1 overflow-hidden text-sm font-medium text-(--mat-sys-primary) no-underline hover:underline"
          [routerLink]="nextTarget.link"
          [title]="nextTarget.label"
        >
          <span class="min-w-0 truncate">{{ nextTarget.label }}</span>
          <mat-icon class="shrink-0">arrow_forward</mat-icon>
        </a>
      }
    </nav>
  `,
})
export class QuestionNav {
  readonly previous = input<NavTarget>();
  readonly next = input<NavTarget>();

  // Required rather than defaulted because a page showing this twice ends up
  // with two navigation landmarks, and two landmarks given the same name are
  // announced as one ambiguous region.
  readonly label = input.required<string>();
}
