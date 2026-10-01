import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavLink {
  label: string;
  route: string;
}

@Component({
  imports: [MatTabsModule, RouterLink, RouterLinkActive],
  selector: 'app-tabs',
  styleUrl: './tabs.css',
  templateUrl: './tabs.html',
})
export class Tabs {
  protected links: Array<NavLink> = [
    {
      label: 'HTML',
      route: '/html',
    },
    {
      label: 'CSS',
      route: '/css',
    },
    {
      label: 'Angular',
      route: '/angular',
    },
    {
      label: 'JavaScript',
      route: '/javascript',
    },
    {
      label: 'Performance',
      route: '/performance',
    },
    {
      label: 'RxJS',
      route: '/rxjs',
    },
    {
      label: 'Signals',
      route: '/signals',
    },
    {
      label: 'Misc',
      route: '/misc',
    },
    {
      label: 'POC',
      route: '/poc',
    },
    {
      label: 'Behavioural',
      route: '/behavioural',
    },
  ];
}
