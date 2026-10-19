import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DevtoolsDemo } from './devtools-demo';

// jsdom has no IntersectionObserver, which `@defer (on viewport)` reaches for the
// moment the deferred branch renders. A stub that never fires keeps the chart in
// its placeholder, which is exactly what the deferral assertions want.
class IntersectionObserverStub {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): [] {
    return [];
  }
}

(globalThis as unknown as { IntersectionObserver: unknown }).IntersectionObserver =
  IntersectionObserverStub;

async function createDemo(rowCount = 60): Promise<ComponentFixture<DevtoolsDemo>> {
  await TestBed.configureTestingModule({
    imports: [DevtoolsDemo],
    providers: [provideRouter([])],
  }).compileComponents();

  const fixture = TestBed.createComponent(DevtoolsDemo);
  fixture.componentInstance.rowCount.set(rowCount);
  fixture.detectChanges();

  return fixture;
}

function root(fixture: ComponentFixture<DevtoolsDemo>): HTMLElement {
  return fixture.nativeElement as HTMLElement;
}

function element(fixture: ComponentFixture<DevtoolsDemo>, testId: string): HTMLElement | null {
  return root(fixture).querySelector(`[data-testid="${testId}"]`);
}

function text(fixture: ComponentFixture<DevtoolsDemo>, testId: string): string {
  return element(fixture, testId)?.textContent?.trim() ?? '';
}

function click(fixture: ComponentFixture<DevtoolsDemo>, testId: string): void {
  element(fixture, testId)?.click();
  fixture.detectChanges();
}

function type(fixture: ComponentFixture<DevtoolsDemo>, value: string): void {
  const input = element(fixture, 'query') as HTMLInputElement;
  input.value = value;
  input.dispatchEvent(new Event('input'));
  fixture.detectChanges();
}

/** Reads the plain counters straight off the instance, whatever render order leaves in the DOM. */
function count(fixture: ComponentFixture<DevtoolsDemo>, name: string): number {
  return (fixture.componentInstance as unknown as Record<string, () => number>)[name]();
}

describe('DevtoolsDemo', () => {
  it('should create', async () => {
    const fixture = await createDemo();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should list every seeded row before a query is typed', async () => {
    const fixture = await createDemo(60);

    expect(text(fixture, 'match-count')).toBe('60');
    expect(root(fixture).querySelectorAll('[data-testid="rows"] li').length).toBe(60);
  });

  it('should filter the list as the query changes', async () => {
    const fixture = await createDemo(60);

    type(fixture, 'dragon');

    const matches = Number(text(fixture, 'match-count'));
    expect(matches).toBeGreaterThan(0);
    expect(matches).toBeLessThan(60);
  });

  it('should re-run the template method on unrelated change detection', async () => {
    const fixture = await createDemo();
    const before = count(fixture, 'runCount');

    click(fixture, 'bump');

    expect(count(fixture, 'runCount')).toBeGreaterThan(before);
  });

  it('should not re-run the computed on unrelated change detection', async () => {
    const fixture = await createDemo();
    click(fixture, 'mode-computed');
    type(fixture, 'dra');
    const before = count(fixture, 'runCount');

    click(fixture, 'bump');

    expect(count(fixture, 'runCount')).toBe(before);
  });

  it('should let the OnPush list skip its check once the array reference is stable', async () => {
    const fixture = await createDemo();

    const methodChecks = Number(text(fixture, 'list-checks'));
    click(fixture, 'bump');
    expect(Number(text(fixture, 'list-checks'))).toBeGreaterThan(methodChecks);

    click(fixture, 'mode-computed');
    type(fixture, 'dra');
    const computedChecks = Number(text(fixture, 'list-checks'));
    click(fixture, 'bump');
    expect(Number(text(fixture, 'list-checks'))).toBe(computedChecks);
  });

  it('should load the chart eagerly by default and defer it on request', async () => {
    const fixture = await createDemo();

    expect(element(fixture, 'chart')).toBeTruthy();
    expect(text(fixture, 'chart-status')).toContain('eagerly');

    click(fixture, 'chart-deferred');

    expect(element(fixture, 'chart')).toBeNull();
    expect(element(fixture, 'chart-placeholder')).toBeTruthy();
    expect(text(fixture, 'chart-status')).toContain('Deferred');
  });

  it('should reseed when the row count changes', async () => {
    const fixture = await createDemo();

    const select = element(fixture, 'row-count') as HTMLSelectElement;
    select.value = '200';
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(fixture.componentInstance.rowCount()).toBe(200);
    expect(text(fixture, 'match-count')).toBe('200');
  });

  it('should link back to the proof of concept it belongs to', async () => {
    const fixture = await createDemo();

    expect(root(fixture).querySelector('a')?.getAttribute('href')).toBe(
      '/poc/perf-devtools-lighthouse',
    );
  });
});
