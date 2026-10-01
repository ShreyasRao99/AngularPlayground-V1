import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { Category } from '../../../types/questions-type';
import { QuestionStore } from '../question-store';

@Component({
  imports: [MatExpansionModule],
  selector: 'app-question-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './question-list.html',
})
export class QuestionList {
  private readonly store = inject(QuestionStore);

  readonly category = input.required<Category>();

  protected readonly faqs = computed(() =>
    this.store.questionData().filter((question) => question.category === this.category()),
  );
}