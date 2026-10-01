import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuestionList } from '../shared/question-list/question-list';

@Component({
  imports: [QuestionList],
  selector: 'app-html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './html.html',
})
export class Html {}
