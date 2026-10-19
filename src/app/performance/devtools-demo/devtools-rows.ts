import { ChangeDetectionStrategy, Component, DoCheck, input } from '@angular/core';

export interface DemoRow {
  id: number;
  name: string;
  type: string;
  power: number;
}

/**
 * The list the demo filters. Deliberately dumb: it takes rows and renders them,
 * so the difference between the parent's template method (a brand new array on
 * every change detection pass) and its computed (a new array only when the
 * query changes) shows up here as check count and re-render work.
 *
 * The check counter is a plain field read back through a method. `ngDoCheck`
 * only runs when Angular actually checks this component, and an OnPush
 * component is only checked when one of its inputs changed - so a stable array
 * reference means the counter stops moving.
 */
@Component({
  selector: 'app-devtools-rows',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="flex flex-col gap-2">
      <p class="m-0 text-sm text-(--mat-sys-on-surface-variant)">
        <span data-testid="match-count">{{ rows().length }}</span> of {{ total() }} rows match
        &middot; list checked <span data-testid="list-checks">{{ checks() }}</span> times
      </p>

      <ul
        class="m-0 max-h-64 list-none overflow-auto rounded-lg border border-(--mat-sys-outline-variant) p-0 font-mono text-xs"
        data-testid="rows"
      >
        @for (row of rows(); track row.id) {
          <li
            class="flex gap-2 border-b border-(--mat-sys-outline-variant) px-2 py-1 last:border-b-0"
          >
            <span class="w-12 shrink-0 text-(--mat-sys-on-surface-variant)">{{ row.id }}</span>
            <span class="min-w-0 flex-1 truncate">{{ row.name }}</span>
            <span class="shrink-0 text-(--mat-sys-primary)">{{ row.type }}</span>
          </li>
        } @empty {
          <li class="px-2 py-1 text-(--mat-sys-on-surface-variant)">No rows match.</li>
        }
      </ul>
    </div>
  `,
})
export class DevtoolsRows implements DoCheck {
  readonly rows = input.required<readonly DemoRow[]>();
  readonly total = input.required<number>();

  private checkCount = 0;

  ngDoCheck(): void {
    this.checkCount += 1;
  }

  protected checks(): number {
    return this.checkCount;
  }
}
