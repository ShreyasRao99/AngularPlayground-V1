import { ChangeDetectionStrategy, Component, computed, effect, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Question } from '../../../types/questions-type';
import { categoryLabel } from '../categories';
import { QuestionBadges } from '../question-badges/question-badges';
import { QuestionStore } from '../question-store';

/**
 * One question per screen. `/:category` is the index and `/:category/:questionId`
 * is this page, so a question can be linked to directly and the phone's back
 * gesture returns to the index without any in-page expansion state.
 */
@Component({
  imports: [MatButtonModule, MatIconModule, RouterLink, QuestionBadges],
  selector: 'app-question-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './question-detail.html',
})
export class QuestionDetail {
  private readonly store = inject(QuestionStore);
  private readonly title = inject(Title);

  // Bound from the route by withComponentInputBinding(), so it is whatever the
  // URL said rather than a trusted Category - an unknown segment has to render
  // the not-found state instead of throwing.
  readonly category = input.required<string>();
  readonly questionId = input.required<string>();

  protected readonly categoryName = computed(() => categoryLabel(this.category()));

  protected readonly question = computed(
    () =>
      this.store
        .questionData()
        .find(
          (question) => question.id === this.questionId() && question.category === this.category(),
        ) ?? undefined,
  );

  // Prev/next walk the category in bank order, so paging through a topic never
  // needs the index to stay mounted.
  private readonly siblings = computed(() =>
    this.store.questionData().filter((question) => question.category === this.category()),
  );

  protected readonly position = computed(() =>
    this.siblings().findIndex((question) => question.id === this.questionId()),
  );

  protected readonly total = computed(() => this.siblings().length);

  protected readonly previous = computed(() => this.neighbour(-1));
  protected readonly next = computed(() => this.neighbour(1));

  constructor() {
    effect(() => {
      const question = this.question();
      this.title.setTitle(
        question
          ? `${question.question} · ${categoryLabel(question.category)}`
          : 'Question not found',
      );
    });
  }

  protected toggleRead(): void {
    this.store.toggleRead(this.questionId());
  }

  private neighbour(offset: number): Question | undefined {
    const position = this.position();
    const siblings = this.siblings();
    const target = position + offset;

    return position >= 0 && target >= 0 && target < siblings.length ? siblings[target] : undefined;
  }
}
