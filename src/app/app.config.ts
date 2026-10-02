import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Detail pages take their `:questionId` / `:pocId` as signal inputs, which
    // keeps them reactive when prev/next reuses the same component instance.
    // That reuse is also why those pages reset the scroll themselves: the router
    // does not scroll by itself. withInMemoryScrolling() would do it app-wide,
    // but it lands the scroller in the eager bundle and the initial budget only
    // had ~1kB of headroom, so the two detail pages do it locally instead.
    provideRouter(routes, withComponentInputBinding()),
  ],
};
