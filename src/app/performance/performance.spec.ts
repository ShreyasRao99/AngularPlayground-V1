import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Performance } from './performance';

describe('Performance', () => {
  let component: Performance;
  let fixture: ComponentFixture<Performance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Performance],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Performance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the question list for the performance category', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Performance Questions');

    const list = compiled.querySelector('app-question-list');
    expect(list).toBeTruthy();
    expect(list?.getAttribute('category')).toBe('performance');
  });
});
