import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Difficulty } from '../../../types/questions-type';
import { QuestionBadges } from './question-badges';

async function createBadges(difficulty: Difficulty) {
  await TestBed.configureTestingModule({ imports: [QuestionBadges] }).compileComponents();

  const fixture = TestBed.createComponent(QuestionBadges);
  fixture.componentRef.setInput('difficulty', difficulty);
  await fixture.whenStable();

  return fixture;
}

function pills(fixture: ComponentFixture<QuestionBadges>): HTMLElement[] {
  const root = fixture.nativeElement as HTMLElement;
  return Array.from(root.querySelectorAll<HTMLElement>('span.rounded-full'));
}

function badges(fixture: ComponentFixture<QuestionBadges>): string[] {
  return pills(fixture).map((badge) => badge.textContent?.trim() ?? '');
}

describe('QuestionBadges', () => {
  it('should create', async () => {
    const fixture = await createBadges('basic');
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show the difficulty', async () => {
    const fixture = await createBadges('advanced');

    expect(badges(fixture)).toEqual(['advanced']);
  });

  it('should only show the scenario pill when the question is scenario based', async () => {
    const fixture = await createBadges('medium');

    expect(badges(fixture)).toEqual(['medium']);

    fixture.componentRef.setInput('scenarioBased', true);
    await fixture.whenStable();

    expect(badges(fixture)).toEqual(['medium', 'scenario']);

    const scenario = pills(fixture)[1];
    expect(scenario.classList).toContain('bg-(--mat-sys-primary-container)');
    expect(scenario.classList).toContain('text-(--mat-sys-on-primary-container)');
  });

  it('should show a pill for each tag, after the other badges', async () => {
    const fixture = await createBadges('medium');

    expect(badges(fixture)).toEqual(['medium']);

    fixture.componentRef.setInput('tags', ['MS']);
    await fixture.whenStable();

    expect(badges(fixture)).toEqual(['medium', 'MS']);

    // the standard tag is a filled pill, not an outlined one, in the client's own colour
    const allPills = pills(fixture);
    const pill = allPills[allPills.length - 1];
    expect(pill.classList).toContain('bg-[#003986]');
    expect(pill.classList).toContain('text-white');
  });

  it('should give the NEW tag the lighter tertiary pill', async () => {
    const fixture = await createBadges('advanced');

    fixture.componentRef.setInput('tags', ['NEW']);
    await fixture.whenStable();

    expect(badges(fixture)).toEqual(['advanced', 'NEW']);

    const allPills = pills(fixture);
    const pill = allPills[allPills.length - 1];
    expect(pill.classList).toContain('bg-(--mat-sys-tertiary-container)');
    expect(pill.classList).toContain('text-(--mat-sys-on-tertiary-container)');
    expect(pill.classList).not.toContain('bg-[#003986]');
  });
});
