import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Behavioural } from './behavioural';

describe('Behavioural', () => {
  let component: Behavioural;
  let fixture: ComponentFixture<Behavioural>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Behavioural],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Behavioural);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the question list for the behavioural category', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Behavioural Questions');

    const list = compiled.querySelector('app-question-list');
    expect(list).toBeTruthy();
    expect(list?.getAttribute('category')).toBe('behavioural');
  });
});
