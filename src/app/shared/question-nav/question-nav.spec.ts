import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NavTarget, QuestionNav } from './question-nav';

const FIRST: NavTarget = { link: ['/', 'performance', 'performance-1'], label: 'First question' };
const SECOND: NavTarget = { link: ['/', 'performance', 'performance-2'], label: 'Second question' };

async function createNav(previous: NavTarget | undefined, next: NavTarget | undefined) {
  await TestBed.configureTestingModule({
    imports: [QuestionNav],
    providers: [provideRouter([])],
  }).compileComponents();

  const fixture = TestBed.createComponent(QuestionNav);
  fixture.componentRef.setInput('label', 'Question navigation');
  fixture.componentRef.setInput('previous', previous);
  fixture.componentRef.setInput('next', next);
  await fixture.whenStable();

  return fixture;
}

function root(fixture: ComponentFixture<QuestionNav>): HTMLElement {
  return fixture.nativeElement as HTMLElement;
}

function hrefs(fixture: ComponentFixture<QuestionNav>): (string | null)[] {
  return Array.from(root(fixture).querySelectorAll('a')).map((link) => link.getAttribute('href'));
}

describe('QuestionNav', () => {
  it('should create', async () => {
    const fixture = await createNav(FIRST, SECOND);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should link both ways with the labels as the link text', async () => {
    const fixture = await createNav(FIRST, SECOND);

    expect(hrefs(fixture)).toEqual(['/performance/performance-1', '/performance/performance-2']);
    expect(root(fixture).textContent).toContain('First question');
    expect(root(fixture).textContent).toContain('Second question');
  });

  it('should render only the neighbour that exists', async () => {
    const fixture = await createNav(FIRST, SECOND);

    fixture.componentRef.setInput('previous', undefined);
    await fixture.whenStable();

    // the half of the row the missing neighbour would have taken is held open,
    // so the one link that is there still sits against the far edge
    expect(hrefs(fixture)).toEqual(['/performance/performance-2']);

    fixture.componentRef.setInput('next', undefined);
    fixture.componentRef.setInput('previous', FIRST);
    await fixture.whenStable();

    expect(hrefs(fixture)).toEqual(['/performance/performance-1']);
  });

  it('should render no links when there is nowhere to go', async () => {
    const fixture = await createNav(undefined, undefined);

    expect(hrefs(fixture)).toEqual([]);
    expect(root(fixture).querySelector('nav')?.getAttribute('aria-label')).toBe(
      'Question navigation',
    );
  });
});
