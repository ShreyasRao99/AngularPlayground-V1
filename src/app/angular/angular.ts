import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuestionList } from '../shared/question-list/question-list';

@Component({
  imports: [QuestionList],
  selector: 'app-angular',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './angular.html',
})
export class Angular {}
