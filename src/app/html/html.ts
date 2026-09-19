import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-html',
  styleUrl: './html.css',
  templateUrl: './html.html',
})
export class Html {
  constructor() {
    console.log('lazy loaded');
  }
}
