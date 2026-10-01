import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Tabs } from './tabs';

describe('Tabs', () => {
  let component: Tabs;
  let fixture: ComponentFixture<Tabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabs],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Tabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
