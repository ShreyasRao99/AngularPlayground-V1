import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuestionList } from '../shared/question-list/question-list';

@Component({
  imports: [QuestionList],
  selector: 'app-signals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './signals.html',
})
export class Signals {}
