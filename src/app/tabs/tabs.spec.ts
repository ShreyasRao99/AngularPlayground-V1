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

  it('should link to every question category', () => {
    // `links` is protected, so reach it through the instance by index signature
    const routes = component['links'].map((link) => link.route);
    expect(routes).toEqual([
      '/html',
      '/css',
      '/angular',
      '/javascript',
      '/performance',
      '/rxjs',
      '/signals',
      '/misc',
      '/poc',
      '/behavioural',
    ]);
  });
});
