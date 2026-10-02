import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { POCS } from '../../poc/pocs';
import { PocDetail } from './poc-detail';

async function createDetail(pocId: string) {
  await TestBed.configureTestingModule({
    imports: [PocDetail],
    providers: [provideRouter([])],
  }).compileComponents();

  const fixture = TestBed.createComponent(PocDetail);
  fixture.componentRef.setInput('pocId', pocId);
  await fixture.whenStable();

  return fixture;
}

function root(fixture: ComponentFixture<PocDetail>): HTMLElement {
  return fixture.nativeElement as HTMLElement;
}

function hrefs(fixture: ComponentFixture<PocDetail>): (string | null)[] {
  return Array.from(root(fixture).querySelectorAll('a')).map((link) => link.getAttribute('href'));
}

describe('PocDetail', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should create', async () => {
    const fixture = await createDetail(POCS[0].id);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the prompt and steps on the page itself', async () => {
    const fixture = await createDetail(POCS[0].id);

    expect(root(fixture).querySelector('mat-expansion-panel')).toBeNull();
    expect(root(fixture).querySelector('ol')?.children.length).toBe(POCS[0].steps.length);
    expect(root(fixture).textContent).toContain('PokéAPI');
  });

  it('should link back to the poc index', async () => {
    const fixture = await createDetail(POCS[0].id);

    expect(hrefs(fixture)).toContain('/poc');
  });

  it('should link every covered question to that question page', async () => {
    const poc = POCS.find((item) => item.covers.length > 0)!;
    const fixture = await createDetail(poc.id);
    const links = hrefs(fixture);

    // one link per covered question, pointing at the question's own route
    expect(links.filter((href) => /^\/[a-z]+\/[a-z]+-\d+$/.test(href ?? '')).length).toBe(
      poc.covers.length,
    );
    expect(links).toContain(`/${poc.covers[0].split('-')[0]}/${poc.covers[0]}`);
  });

  it('should walk to the previous and next proof of concept', async () => {
    const fixture = await createDetail(POCS[1].id);
    const links = hrefs(fixture);

    expect(links).toContain(`/poc/${POCS[0].id}`);
    expect(links).toContain(`/poc/${POCS[2].id}`);
  });

  it('should not link past the end of the list', async () => {
    const fixture = await createDetail(POCS[POCS.length - 1].id);

    expect(hrefs(fixture).filter((href) => href?.startsWith('/poc/'))).toHaveLength(1);
  });

  it('should toggle completion for the routed poc only', async () => {
    const fixture = await createDetail(POCS[3].id);

    root(fixture).querySelector<HTMLButtonElement>('button[aria-pressed]')?.click();
    fixture.detectChanges();

    expect(root(fixture).querySelector('button[aria-pressed]')?.getAttribute('aria-pressed')).toBe(
      'true',
    );
    expect(JSON.parse(localStorage.getItem('poc-completed') ?? '[]')).toEqual([POCS[3].id]);
  });

  it('should show a not found state for an unknown id', async () => {
    const fixture = await createDetail('nope');

    expect(root(fixture).querySelector('h1')?.textContent).toContain('not found');
    expect(hrefs(fixture)).toContain('/poc');
  });
});
