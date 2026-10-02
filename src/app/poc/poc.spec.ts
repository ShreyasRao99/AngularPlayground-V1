import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { POCS } from './pocs';
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

  it('should render every poc as a row that links to its own page', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const rows = compiled.querySelectorAll('app-poc-list li > a');

    expect(rows.length).toBe(POCS.length);
    expect((rows[0] as HTMLAnchorElement).getAttribute('href')).toBe(`/poc/${POCS[0].id}`);
    expect(compiled.querySelector('mat-expansion-panel')).toBeNull();
  });
});
