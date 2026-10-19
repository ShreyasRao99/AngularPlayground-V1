import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Category, Difficulty } from '../../../types/questions-type';
import { QuestionBadges } from '../question-badges/question-badges';
import { QuestionNotes } from '../question-notes/question-notes';
import { QuestionStore } from '../question-store';

type MarkedFilter = 'all' | 'marked' | 'unmarked';
type MostAskedFilter = 'all' | 'most';

interface DifficultyOption {
  value: Difficulty;
  label: string;
}

@Component({
  imports: [
    MatChipsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTooltipModule,
    RouterLink,
    QuestionBadges,
    QuestionNotes,
  ],
  selector: 'app-question-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './question-list.html',
  styles: [
    `
      .marked-filter .mat-button-toggle-checked {
        --mat-button-toggle-selected-state-background-color: var(--mat-sys-primary);
        --mat-button-toggle-selected-state-text-color: var(--mat-sys-on-primary);
      }
    `,
  ],
})
export class QuestionList {
  private readonly store = inject(QuestionStore);

  readonly category = input.required<Category>();

  protected readonly difficultyOptions: readonly DifficultyOption[] = [
    { value: 'basic', label: 'Basic' },
    { value: 'medium', label: 'Medium' },
    { value: 'advanced', label: 'Advanced' },
  ];

  protected readonly difficultyFilter = signal<readonly Difficulty[]>([]);
  protected readonly markedFilter = signal<MarkedFilter>('all');
  protected readonly mostAskedFilter = signal<MostAskedFilter>('all');

  // Only behavioural has more questions than a reader can rehearse, so the
  // "Most asked" triage is offered there and nowhere else.
  protected readonly showMostAskedFilter = computed(() => this.category() === 'behavioural');

  protected readonly faqs = computed(() => {
    const difficulties = this.difficultyFilter();
    const marked = this.markedFilter();
    const mostAskedOnly = this.showMostAskedFilter() && this.mostAskedFilter() === 'most';

    return this.store.questionData().filter((question) => {
      if (question.category !== this.category()) {
        return false;
      }
      if (difficulties.length && !difficulties.includes(question.difficulty)) {
        return false;
      }
      if (mostAskedOnly && !question.mostAsked) {
        return false;
      }
      return marked === 'all' || question.isMarked === (marked === 'marked');
    });
  });

  protected readonly categoryTotal = computed(
    () =>
      this.store.questionData().filter((question) => question.category === this.category()).length,
  );

  protected readonly markedCount = computed(
    () =>
      this.store
        .questionData()
        .filter((question) => question.category === this.category() && question.isMarked).length,
  );

  protected readonly hasActiveFilters = computed(
    () =>
      this.difficultyFilter().length > 0 ||
      this.markedFilter() !== 'all' ||
      this.mostAskedFilter() !== 'all',
  );

  protected countForDifficulty(difficulty: Difficulty): number {
    return this.store
      .questionData()
      .filter(
        (question) => question.category === this.category() && question.difficulty === difficulty,
      ).length;
  }

  protected onDifficultyChange(event: MatChipListboxChange): void {
    this.difficultyFilter.set((event.value ?? []) as readonly Difficulty[]);
  }

  protected onMarkedFilterChange(event: MatButtonToggleChange): void {
    this.markedFilter.set(event.value as MarkedFilter);
  }

  protected onMostAskedFilterChange(event: MatButtonToggleChange): void {
    this.mostAskedFilter.set(event.value as MostAskedFilter);
  }

  protected clearFilters(): void {
    this.difficultyFilter.set([]);
    this.markedFilter.set('all');
    this.mostAskedFilter.set('all');
  }

  protected toggleMarked(id: string): void {
    this.store.toggleMarked(id);
  }
}
