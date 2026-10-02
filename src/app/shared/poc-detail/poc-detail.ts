import { ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  afterRenderEffect,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Category, Question } from '../../../types/questions-type';
import { Poc } from '../../../types/poc-type';
import { POCS } from '../../poc/pocs';
import { categoryLabel } from '../categories';
import { NavTarget, QuestionNav } from '../question-nav/question-nav';
import { PocDuration } from '../poc-duration/poc-duration';
import { PocStore } from '../poc-store';
import { QuestionStore } from '../question-store';

/**
 * `/poc/:pocId` — one proof of concept per screen. The prompts, steps and
 * starter code are long enough that collapsing them behind a header made them
 * unreadable on a phone, and the index row is now a link straight here.
 */
@Component({
  imports: [MatButtonModule, MatIconModule, RouterLink, PocDuration, QuestionNav],
  selector: 'app-poc-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './poc-detail.html',
})
export class PocDetail {
  private readonly pocStore = inject(PocStore);
  private readonly questionStore = inject(QuestionStore);
  private readonly title = inject(Title);
  private readonly scroller = inject(ViewportScroller);

  // Bound from the route by withComponentInputBinding().
  readonly pocId = input.required<string>();

  protected readonly pokeApiDocs = 'https://pokeapi.co/docs/v2#pokemon';

  protected readonly poc = computed(() => POCS.find((poc) => poc.id === this.pocId()));

  protected readonly isCompleted = computed(() => this.pocStore.completed().includes(this.pocId()));

  // Resolved from the question bank so a POC can never drift out of sync with
  // the questions it says it covers, and each one is a real link now.
  protected readonly coveredQuestions = computed(() => {
    const covers = this.poc()?.covers ?? [];
    const byId = new Map(
      this.questionStore.questionData().map((question) => [question.id, question]),
    );

    return covers.flatMap((id) => {
      const question = byId.get(id);
      return question ? [question] : [];
    });
  });

  protected readonly position = computed(() => POCS.findIndex((poc) => poc.id === this.pocId()));

  protected readonly total = computed(() => POCS.length);

  protected readonly previous = computed(() => this.neighbour(-1));
  protected readonly next = computed(() => this.neighbour(1));

  protected readonly previousLink = computed(() => this.toTarget(this.previous()));
  protected readonly nextLink = computed(() => this.toTarget(this.next()));

  constructor() {
    effect(() => {
      const poc = this.poc();
      this.title.setTitle(poc ? `${poc.title} · Proof of Concept` : 'Proof of concept not found');
    });

    // Same reason as the question page: prev/next reuses this instance, so the
    // router does not scroll and the next poc would open at the last scroll
    // offset. See the note in question-detail.ts.
    afterRenderEffect(() => {
      this.pocId();
      this.scroller.scrollToPosition([0, 0]);
    });
  }

  protected label(category: Category): string {
    return categoryLabel(category);
  }

  protected questionLink(question: Question): string[] {
    return ['/', question.category, question.id];
  }

  protected toggleCompleted(): void {
    this.pocStore.toggleCompleted(this.pocId());
  }

  private neighbour(offset: number): Poc | undefined {
    const target = this.position() + offset;

    return this.position() >= 0 && target >= 0 && target < POCS.length ? POCS[target] : undefined;
  }

  private toTarget(poc: Poc | undefined): NavTarget | undefined {
    return poc ? { link: ['/poc', poc.id], label: poc.title } : undefined;
  }
}
