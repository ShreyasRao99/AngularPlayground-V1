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
  question: string;
  answer: string;
  examples: QuestionExample[];
  /**
   * Prep round labels, e.g. `["MS"]` for the questions an interviewer said they
   * would ask. Optional so the older questions stay valid until they are tagged.
   */
  tags?: string[];
  /**
   * Curated "most likely to be asked" flag. Only used on behavioural questions,
   * where the bank is wide enough to need triage and there is no ask-frequency
   * data to sort by; the question list shows a "Most asked" toggle for that
   * category alone. Absent means simply not in the curated core.
   */
  mostAsked?: boolean;
}
