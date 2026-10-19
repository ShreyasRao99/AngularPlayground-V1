import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DevtoolsChart } from './devtools-chart';
import { DemoRow, DevtoolsRows } from './devtools-rows';

type FilterMode = 'method' | 'computed';
type ChartMode = 'eager' | 'deferred';

/**
 * The scenario from the DevTools/Lighthouse exercise, made interactive: a search
 * over a seeded dataset whose filter is either a template method or a computed.
 * The point is not the search itself but where the work happens - a method is
 * re-evaluated on every change detection pass, a computed only when the query
 * or the dataset changes - and that a method returning a fresh array each pass
 * also defeats the list's OnPush check.
 *
 * The counters are plain fields, not signals, because they are bumped from
 * inside the filter: on one path that runs inside a computed, which is not
 * allowed to write a signal. Reading them back through template methods means
 * the binding re-evaluates on every pass, which is exactly the number being
 * demonstrated.
 */
@Component({
  imports: [RouterLink, DevtoolsRows, DevtoolsChart],
  selector: 'app-devtools-demo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './devtools-demo.html',
})
export class DevtoolsDemo {
  protected readonly rowOptions = [200, 1000, 5000];
  protected readonly mode = signal<FilterMode>('method');
  protected readonly chartMode = signal<ChartMode>('eager');
  protected readonly heartbeat = signal(0);

  // Public so a spec can shrink the dataset; the control in the template sets
  // it through setRowCount.
  readonly rowCount = signal(1000);
  readonly query = signal('');

  private filterRuns = 0;
  private rowsScanned = 0;
  private lastFilterMs = 0;
  private totalFilterMs = 0;

  protected readonly rows = computed(() => generateRows(this.rowCount()));

  /** The fast path: recomputed only when the query or the dataset changes. */
  protected readonly visible = computed(() => this.runFilter(this.query()));

  /** The data the chart draws, taken from the same filtered set. */
  protected readonly chartData = computed(() => this.visible().map((row) => row.power));

  /** The slow path: a template method, so Angular calls it on every pass. */
  protected rowsMethod(): readonly DemoRow[] {
    return this.runFilter(this.query());
  }

  protected runCount(): number {
    return this.filterRuns;
  }

  protected scannedCount(): number {
    return this.rowsScanned;
  }

  protected lastMs(): string {
    return this.lastFilterMs.toFixed(1);
  }

  protected totalMs(): string {
    return this.totalFilterMs.toFixed(1);
  }

  protected onQueryInput(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  protected setMode(mode: FilterMode): void {
    if (this.mode() === mode) {
      return;
    }
    this.mode.set(mode);
    this.resetCounters();
  }

  protected setChartMode(mode: ChartMode): void {
    this.chartMode.set(mode);
  }

  protected onRowCountChange(event: Event): void {
    this.setRowCount(Number((event.target as HTMLSelectElement).value));
  }

  protected setRowCount(value: number): void {
    this.rowCount.set(value);
    this.resetCounters();
  }

  protected bumpHeartbeat(): void {
    this.heartbeat.update((value) => value + 1);
  }

  protected toggleClass(active: boolean): string {
    const base = 'rounded-full border px-3 py-1 text-xs font-medium';
    return active
      ? `${base} border-(--mat-sys-primary) bg-(--mat-sys-primary-container) text-(--mat-sys-on-primary-container)`
      : `${base} border-(--mat-sys-outline-variant) text-(--mat-sys-on-surface-variant)`;
  }

  private resetCounters(): void {
    this.filterRuns = 0;
    this.rowsScanned = 0;
    this.lastFilterMs = 0;
    this.totalFilterMs = 0;
  }

  private runFilter(term: string): readonly DemoRow[] {
    const started = performance.now();
    const needle = term.trim().toLowerCase();
    const rows = this.rows();
    const matches: DemoRow[] = [];

    if (!needle) {
      matches.push(...rows);
    } else {
      for (const row of rows) {
        if (relevance(row, needle) > 0) {
          matches.push(row);
        }
      }
      matches.sort((a, b) => relevance(b, needle) - relevance(a, needle));
    }

    const elapsed = performance.now() - started;
    this.filterRuns += 1;
    this.rowsScanned += rows.length;
    this.lastFilterMs = elapsed;
    this.totalFilterMs += elapsed;

    return matches;
  }
}

// A real per-row cost, the kind of scanning a fuzzy match does, so the wasted
// runs show up as milliseconds and not only as a counter.
function relevance(row: DemoRow, needle: string): number {
  const name = row.name.toLowerCase();
  let score = 0;

  for (let start = 0; start + needle.length <= name.length; start++) {
    let matched = 0;
    while (matched < needle.length && name[start + matched] === needle[matched]) {
      matched += 1;
    }
    if (matched === needle.length) {
      score += 10;
    } else if (matched >= 2) {
      score += matched;
    }
  }

  if (row.type.includes(needle)) {
    score += 5;
  }

  return score;
}

const NAME_STARTS = [
  'Bulba',
  'Char',
  'Squir',
  'Pika',
  'Ee',
  'Jiggly',
  'Meow',
  'Psy',
  'Mach',
  'Geo',
  'Snor',
  'Dra',
  'Gast',
  'Abra',
  'Odd',
  'Vul',
];

const NAME_ENDS = [
  'saur',
  'mander',
  'tle',
  'chu',
  'vee',
  'puff',
  'th',
  'duck',
  'op',
  'dude',
  'lax',
  'gonite',
  'ly',
  'kadabra',
  'ish',
  'pix',
];

const TYPES = ['grass', 'fire', 'water', 'electric', 'psychic', 'rock', 'ghost', 'dragon'];

/** Deterministic, seeded, and local so the demo runs with no network at all. */
function generateRows(count: number): DemoRow[] {
  const rows: DemoRow[] = [];
  let seed = 0x2f6e2b1;

  for (let id = 1; id <= count; id++) {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    const noise = seed / 0x100000000;
    const name = NAME_STARTS[id % NAME_STARTS.length] + NAME_ENDS[(id * 7) % NAME_ENDS.length];
    const type = TYPES[Math.floor(noise * TYPES.length)];
    const power = Math.floor(noise * 100) + 1;
    rows.push({ id, name, type, power });
  }

  return rows;
}
