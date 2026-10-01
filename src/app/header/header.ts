import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  openFeedback(event: Event): void {
    event.preventDefault();
    const recipient = 'shreyasrao20000@gmail.com';
    const subject = 'Angular Playground V1 - Suggestion/Feedback';
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;
  }
}
