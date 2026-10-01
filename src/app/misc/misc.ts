import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuestionList } from '../shared/question-list/question-list';

@Component({
  imports: [QuestionList],
  selector: 'app-misc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './misc.html',
})
export class Misc {}
