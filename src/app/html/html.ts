import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import questions from '../shared/questions.json';

@Component({
  imports: [MatExpansionModule],
  selector: 'app-html',
  styleUrl: './html.css',
  templateUrl: './html.html',
})
export class Html {
  protected readonly faqs = questions.html;
}