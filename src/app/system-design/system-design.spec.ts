import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SystemDesign } from './system-design';

describe('SystemDesign', () => {
  let component: SystemDesign;
  let fixture: ComponentFixture<SystemDesign>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemDesign],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(SystemDesign);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
