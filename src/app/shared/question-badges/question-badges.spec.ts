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
});
