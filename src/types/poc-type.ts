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
  prompt: string;
  endpoints: PocEndpoint[];
  steps: PocStep[];
  stretch: string[];
  starter: string;
  covers: string[];
}
