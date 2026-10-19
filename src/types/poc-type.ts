import { Category } from './questions-type';

export interface PocStep {
  title: string;
  task: string;
  learn: string;
}

export interface PocEndpoint {
  path: string;
  note: string;
}

export interface Poc {
  id: string;
  category: Category;
  title: string;
  summary: string;
  /**
   * Roughly how long the exercise takes end to end, in minutes. Stored as a
   * number rather than "1 hour" so it can be totalled and compared, and
   * formatted once where it is shown. Required on purpose: a poc with no
   * estimate is the one a reader is least likely to pick up.
   */
  durationMinutes: number;
  prompt: string;
  endpoints: PocEndpoint[];
  steps: PocStep[];
  stretch: string[];
  starter: string;
  covers: string[];
  /**
   * Optional absolute route to an interactive version of the exercise (leading
   * slash), for POCs whose point is easier to feel than to read. Rendered as a
   * button on the detail page; omit it for the POCs that are only a written
   * walkthrough. Keep the leading slash: a bare relative link resolves against
   * `/poc/:pocId` and falls through the catch-all to the first category.
   */
  demoRoute?: string;
}
