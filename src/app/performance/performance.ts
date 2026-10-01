import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuestionList } from '../shared/question-list/question-list';

@Component({
  imports: [QuestionList],
  selector: 'app-performance',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './performance.html',
})
export class Performance {}
