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

function badges(fixture: ComponentFixture<QuestionBadges>): string[] {
  const root = fixture.nativeElement as HTMLElement;
  return Array.from(root.querySelectorAll('span.rounded-full')).map(
    (badge) => (badge as HTMLElement).textContent?.trim() ?? '',
  );
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
  });

  it('should show a pill for each tag, after the other badges', async () => {
    const fixture = await createBadges('medium');

    expect(badges(fixture)).toEqual(['medium']);

    fixture.componentRef.setInput('tags', ['MS']);
    await fixture.whenStable();

    expect(badges(fixture)).toEqual(['medium', 'MS']);

    // the tag is a filled pill, not an outlined one, in the client's own colour
    const pills = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLElement>('span.rounded-full'),
    );
    const pill = pills[pills.length - 1];
    expect(pill.classList).toContain('bg-[#003986]');
    expect(pill.classList).toContain('text-white');
  });
});
