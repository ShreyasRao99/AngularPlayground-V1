import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuestionList } from '../shared/question-list/question-list';

@Component({
  imports: [QuestionList],
  selector: 'app-rxjs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './rxjs.html',
})
export class RxJS {}
