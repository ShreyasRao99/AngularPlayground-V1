import { ComponentFixture, TestBed } from '@angular/core/testing';
import { POCS } from '../../poc/pocs';
import { PocDuration } from './poc-duration';

async function createDuration(minutes: number) {
  await TestBed.configureTestingModule({ imports: [PocDuration] }).compileComponents();

  const fixture = TestBed.createComponent(PocDuration);
  fixture.componentRef.setInput('minutes', minutes);
  await fixture.whenStable();

  return fixture;
}

function text(fixture: ComponentFixture<PocDuration>): string {
  const root = fixture.nativeElement as HTMLElement;

  // the ligature and the sr-only prefix are part of the element but not of the
  // formatted value, so read the value's own node
  return root.querySelector('[data-testid="duration"]')?.textContent?.trim() ?? '';
}

describe('PocDuration', () => {
  it('should create', async () => {
    const fixture = await createDuration(30);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show an alarm clock that screen readers skip', async () => {
    const fixture = await createDuration(30);
    const root = fixture.nativeElement as HTMLElement;
    const icon = root.querySelector('.material-symbols-outlined');

    expect(icon?.textContent?.trim()).toBe('timer');
    expect(icon?.getAttribute('aria-hidden')).toBe('true');
  });

  it('should spell the estimate out in minutes and hours', async () => {
    const fixture = await createDuration(45);

    expect(text(fixture)).toBe('45 min');

    for (const [minutes, expected] of [
      [60, '1 hr'],
      [90, '1 hr 30 min'],
      [120, '2 hr'],
    ] as const) {
      fixture.componentRef.setInput('minutes', minutes);
      await fixture.whenStable();

      expect(text(fixture)).toBe(expected);
    }
  });

  it('should give every poc a plausible estimate', () => {
    // the field is required, so this is really a guard against a 0 or a typo
    for (const poc of POCS) {
      expect(poc.durationMinutes).toBeGreaterThanOrEqual(15);
      expect(poc.durationMinutes % 15).toBe(0);
    }
  });
});
