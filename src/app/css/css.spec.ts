import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Css } from './css';

describe('Css', () => {
  let component: Css;
  let fixture: ComponentFixture<Css>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Css],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Css);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
