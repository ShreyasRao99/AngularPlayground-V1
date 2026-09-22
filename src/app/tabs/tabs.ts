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
      label: 'ANGULAR',
      route: '/angular',
    },
    {
      label: 'MISC',
      route: '/misc',
    },
  ];
}
