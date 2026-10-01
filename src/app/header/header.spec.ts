import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build a mailto link addressed to the feedback inbox', () => {
    expect(component.feedbackMailto).toContain('mailto:shreyasrao20000@gmail.com');
  });

  it('should encode the subject so the slash is not read as a path separator', () => {
    expect(component.feedbackMailto).toContain(encodeURIComponent('Suggestion/Feedback'));
  });

  it('should render the feedback link in the desktop nav', () => {
    const link = fixture.nativeElement.querySelector('a[href]') as HTMLAnchorElement;
    expect(link.textContent?.trim()).toBe('Suggestion/Feedback');
    expect(link.getAttribute('href')).toBe(component.feedbackMailto);
  });

  it('should prevent the default navigation so the handler drives the mail client', () => {
    const event = new MouseEvent('click', { cancelable: true });
    component.openFeedback(event);
    expect(event.defaultPrevented).toBe(true);
  });
});
