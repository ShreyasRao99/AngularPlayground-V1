import { ChangeDetectionStrategy, Component } from '@angular/core';
import { QuestionList } from '../shared/question-list/question-list';

@Component({
  imports: [QuestionList],
  selector: 'app-system-design',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './system-design.html',
})
export class SystemDesign {}
