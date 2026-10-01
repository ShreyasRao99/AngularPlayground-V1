import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuestionList } from '../shared/question-list/question-list';

@Component({
  imports: [QuestionList],
  selector: 'app-behavioural',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './behavioural.html',
})
export class Behavioural {}
