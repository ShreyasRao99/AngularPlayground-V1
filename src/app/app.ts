import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Tabs } from './tabs/tabs';

@Component({
  imports: [RouterOutlet, Header, Tabs],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('AngularPlayground-V1');
  constructor() {}
}
