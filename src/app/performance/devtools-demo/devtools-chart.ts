import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Stands in for the chart the scenario loads eagerly. It lives in its own file
 * on purpose: `@defer` can only split a component into a separate chunk if it
 * is a standalone component the router has not already pulled in, so importing
 * it directly versus deferring it is a real chunk difference, not a prop.
 */
@Component({
  selector: 'app-devtools-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure
      class="m-0 flex flex-col gap-2 rounded-lg border border-(--mat-sys-outline-variant) p-3"
      data-testid="chart"
    >
      <figcaption class="text-xs text-(--mat-sys-on-surface-variant)">
        Power of the first {{ bars().length }} matches
      </figcaption>
      <svg class="w-full" viewBox="0 0 240 80" role="img" aria-label="Power of the top matches">
        @for (bar of bars(); track $index) {
          <rect
            [attr.x]="$index * 10"
            [attr.y]="80 - bar"
            width="8"
            [attr.height]="bar"
            rx="1"
            fill="var(--mat-sys-primary)"
          />
        }
      </svg>
    </figure>
  `,
})
export class DevtoolsChart {
  readonly data = input.required<readonly number[]>();

  protected readonly bars = computed(() => {
    const values = this.data().slice(0, 24);
    const max = Math.max(1, ...values);
    return values.map((value) => Math.round((value / max) * 72) + 4);
  });
}
