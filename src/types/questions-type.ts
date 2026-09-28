export type Importance = 'low' | 'medium' | 'high';
export interface Question {
  id: string;
  importance: Importance;
  forLater: boolean;
  question: string;
  answer: string;
}
