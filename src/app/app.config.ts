import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Detail pages take their `:questionId` / `:pocId` as signal inputs, which
    // keeps them reactive when prev/next reuses the same component instance.
    provideRouter(routes, withComponentInputBinding()),
  ],
};
