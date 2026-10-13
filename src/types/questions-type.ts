export type Difficulty = 'basic' | 'medium' | 'advanced';
export type Category =
  | 'html'
  | 'css'
  | 'javascript'
  | 'angular'
  | 'performance'
  | 'rxjs'
  | 'signals'
  | 'misc'
  | 'behavioural';
export interface QuestionExample {
  title: string;
  code: string;
  explanation: string;
  url?: string;
}

export interface Question {
  id: string;
  category: Category;
  difficulty: Difficulty;
  scenarioBased: boolean;
  isMarked: boolean;
  isNew?: boolean;
  question: string;
  answer: string;
  examples: QuestionExample[];
}
