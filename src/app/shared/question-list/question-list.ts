import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Category, Difficulty } from '../../../types/questions-type';
import { QuestionBadges } from '../question-badges/question-badges';
import { QuestionNotes } from '../question-notes/question-notes';
import { QuestionStore } from '../question-store';

type ReadFilter = 'all' | 'unread' | 'read';

interface DifficultyOption {
  value: Difficulty;
  label: string;
}

@Component({
  imports: [
    MatChipsModule,
    MatCheckboxModule,
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
      .read-filter .mat-button-toggle-checked {
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
  protected readonly scenarioFilter = signal(false);
  protected readonly readFilter = signal<ReadFilter>('all');

  protected readonly faqs = computed(() => {
    const difficulties = this.difficultyFilter();
    const scenarioOnly = this.scenarioFilter();
    const read = this.readFilter();

    return this.store.questionData().filter((question) => {
      if (question.category !== this.category()) {
        return false;
      }
      if (difficulties.length && !difficulties.includes(question.difficulty)) {
        return false;
      }
      if (scenarioOnly && !question.scenarioBased) {
        return false;
      }
      return read === 'all' || question.isRead === (read === 'read');
    });
  });

  protected readonly categoryTotal = computed(
    () =>
      this.store.questionData().filter((question) => question.category === this.category()).length,
  );

  protected readonly readCount = computed(
    () =>
      this.store
        .questionData()
        .filter((question) => question.category === this.category() && question.isRead).length,
  );

  protected readonly hasActiveFilters = computed(
    () =>
      this.difficultyFilter().length > 0 || this.scenarioFilter() || this.readFilter() !== 'all',
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

  protected onReadFilterChange(event: MatButtonToggleChange): void {
    this.readFilter.set(event.value as ReadFilter);
  }

  protected clearFilters(): void {
    this.difficultyFilter.set([]);
    this.scenarioFilter.set(false);
    this.readFilter.set('all');
  }

  protected toggleRead(id: string): void {
    this.store.toggleRead(id);
  }
}
