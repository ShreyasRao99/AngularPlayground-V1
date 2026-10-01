import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

const FEEDBACK_RECIPIENT = 'shreyasrao20000@gmail.com';
const FEEDBACK_SUBJECT = 'Angular Playground V1 - Suggestion/Feedback';

@Component({
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  readonly feedbackMailto = `mailto:${FEEDBACK_RECIPIENT}?subject=${encodeURIComponent(FEEDBACK_SUBJECT)}`;

  openFeedback(event: Event): void {
    event.preventDefault();
    window.location.href = this.feedbackMailto;
  }
}
