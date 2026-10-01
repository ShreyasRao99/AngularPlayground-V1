import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Poc } from './poc';

describe('Poc', () => {
  let component: Poc;
  let fixture: ComponentFixture<Poc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poc],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Poc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the proof of concept list', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Proof of Concepts');

    const list = compiled.querySelector('app-poc-list');
    expect(list).toBeTruthy();
  });

  it('should render every poc in an accordion panel', () => {
    const panels = (fixture.nativeElement as HTMLElement).querySelectorAll('mat-expansion-panel');
    expect(panels.length).toBeGreaterThan(0);
  });
});
