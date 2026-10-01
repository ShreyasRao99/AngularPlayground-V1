import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuestionList } from '../shared/question-list/question-list';

@Component({
  imports: [QuestionList],
  selector: 'app-javascript',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './javascript.html',
})
export class Javascript {}
