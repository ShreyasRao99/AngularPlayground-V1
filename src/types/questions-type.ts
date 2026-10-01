export type Importance = 'low' | 'medium' | 'high';
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
  importance: Importance;
  forLater: boolean;
  question: string;
  answer: string;
  examples: QuestionExample[];
}
