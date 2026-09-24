type Importance = 'low' | 'medium' | 'high';
export interface Question {
  id: string;
  importance: Importance;
  review: boolean;
  question: string;
  answer: string;
}