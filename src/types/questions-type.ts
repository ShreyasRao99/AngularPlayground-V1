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
}

export interface Question {
  id: string;
  category: Category;
  difficulty: Difficulty;
  scenarioBased: boolean;
  isRead: boolean;
  question: string;
  answer: string;
  examples: QuestionExample[];
}
