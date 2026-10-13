import {
  ChangeDetectionStrategy,
  Component,
  afterRenderEffect,
  computed,
  effect,
  inject,
  input,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DomSanitizer, SafeResourceUrl, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { Question, QuestionExample } from '../../../types/questions-type';
import { categoryLabel } from '../categories';
import { NavTarget, QuestionNav } from '../question-nav/question-nav';
import { QuestionBadges } from '../question-badges/question-badges';
import { QuestionNotes } from '../question-notes/question-notes';
import { QuestionStore } from '../question-store';

/**
 * One question per screen. `/:category` is the index and `/:category/:questionId`
 * is this page, so a question can be linked to directly and the phone's back
 * gesture returns to the index without any in-page expansion state.
 */
@Component({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    RouterLink,
    QuestionBadges,
    QuestionNav,
    QuestionNotes,
  ],
  selector: 'app-question-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './question-detail.html',
})
export class QuestionDetail {
  private readonly store = inject(QuestionStore);
  private readonly title = inject(Title);
  private readonly scroller = inject(ViewportScroller);
  private readonly sanitizer = inject(DomSanitizer);

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

  // The nav is rendered twice and only needs a route and a label, so the
  // questions are mapped once here instead of in the template twice over.
  protected readonly previousLink = computed(() => this.toTarget(this.previous()));
  protected readonly nextLink = computed(() => this.toTarget(this.next()));

  constructor() {
    effect(() => {
      const question = this.question();
      this.title.setTitle(
        question
          ? `${question.question} · ${categoryLabel(question.category)}`
          : 'Question not found',
      );
    });

    // Prev/next swaps the route param on this same component instance, so the
    // router never scrolls and the next answer would open wherever the last one
    // was left, with the sticky header covering the question it belongs to.
    // After the render so the new content is already in the DOM and the scroll
    // is not clamped against the old, shorter one.
    afterRenderEffect(() => {
      this.questionId();
      this.scroller.scrollToPosition([0, 0]);
    });
  }

  protected toggleMarked(): void {
    this.store.toggleMarked(this.questionId());
  }

  /**
   * A YouTube url on an example becomes an embedded player; anything else just
   * stays a link. The src is marked trusted because the id is matched against a
   * fixed allow-list of hosts rather than echoed from the data verbatim.
   */
  protected embedUrl(example: QuestionExample): SafeResourceUrl | null {
    const id = youtubeVideoId(example.url);
    return id
      ? this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${id}`)
      : null;
  }

  private neighbour(offset: number): Question | undefined {
    const position = this.position();
    const siblings = this.siblings();
    const target = position + offset;

    return position >= 0 && target >= 0 && target < siblings.length ? siblings[target] : undefined;
  }

  private toTarget(question: Question | undefined): NavTarget | undefined {
    return question
      ? { link: ['/', question.category, question.id], label: question.question }
      : undefined;
  }
}

/** Pulls a 5+ char video id out of the url forms YouTube actually issues. */
function youtubeVideoId(url?: string): string | null {
  const match = url?.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{5,})/,
  );
  return match ? match[1] : null;
}
