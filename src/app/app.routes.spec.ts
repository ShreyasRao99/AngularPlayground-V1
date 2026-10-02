import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router, RouterOutlet, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

@Component({ selector: 'app-router-host', imports: [RouterOutlet], template: '<router-outlet />' })
class RouterHost {}

/**
 * The detail pages are only reachable through the router, and their inputs come
 * from route params. A component-level test sets those inputs by hand and would
 * happily pass while the real route never binds them, so the routes themselves
 * are exercised here.
 */
async function navigate(path: string) {
  await TestBed.configureTestingModule({
    imports: [RouterHost],
    providers: [provideRouter(routes, withComponentInputBinding())],
  }).compileComponents();

  const fixture = TestBed.createComponent(RouterHost);
  const router = TestBed.inject(Router);
  await router.navigateByUrl(path);
  await fixture.whenStable();
  fixture.detectChanges();

  return { fixture, router };
}

function outlet(fixture: { nativeElement: HTMLElement }): HTMLElement {
  return fixture.nativeElement as HTMLElement;
}

describe('app routes', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should still resolve a category index to the list', async () => {
    const { fixture } = await navigate('/performance');

    expect(outlet(fixture).querySelector('h1')?.textContent).toContain('Performance Questions');
    expect(outlet(fixture).querySelector('li > a')).toBeTruthy();
  });

  it('should resolve a question detail route with both of its params bound', async () => {
    const { fixture } = await navigate('/performance/performance-1');
    const root = outlet(fixture);

    expect(root.textContent).not.toContain('Question not found');
    expect(root.querySelector('h1')?.textContent?.trim().length).toBeGreaterThan(0);
    // the category label is rendered from the `:category` param, so a blank one
    // is the tell that the param never arrived
    expect(root.querySelector('a[href="/performance"]')?.textContent).toContain(
      'All Performance questions',
    );
  });

  it('should not read a bare category as a category segment', async () => {
    const { router } = await navigate('/html');

    expect(router.url).toBe('/html');
    expect(router.routerState.snapshot.root.firstChild?.routeConfig?.path).toBe('html');
  });

  it('should route a poc id to the poc page rather than the generic question route', async () => {
    const { fixture } = await navigate('/poc/html-semantic-entry');

    expect(outlet(fixture).textContent).not.toContain('Question not found');
    expect(outlet(fixture).textContent).not.toContain('Proof of concept not found');
  });

  it('should still show the not found state for an unknown id, with a usable label', async () => {
    const { fixture } = await navigate('/performance/performance-999');

    expect(outlet(fixture).textContent).toContain('Question not found');
    expect(outlet(fixture).querySelector('a[href="/performance"]')).toBeTruthy();
  });

  it('should show the not found state for a category that does not exist', async () => {
    const { fixture } = await navigate('/nonsense/nonsense-1');

    expect(outlet(fixture).textContent).toContain('Question not found');
    // the raw segment is echoed back instead of an empty label
    expect(outlet(fixture).textContent).toContain('nonsense');
  });

  it('should send an unmatched path to the index rather than a blank screen', async () => {
    const { fixture, router } = await navigate('/javascrip');

    expect(router.url).toBe('/html');
    expect(outlet(fixture).querySelector('li > a')).toBeTruthy();
  });
});
