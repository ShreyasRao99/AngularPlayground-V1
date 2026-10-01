import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Category, Question } from '../../../types/questions-type';
import { POCS } from '../../poc/pocs';
import { PocStore } from '../poc-store';
import { QuestionStore } from '../question-store';

type PocCategory = Exclude<Category, 'behavioural'>;
type CompletionFilter = 'all' | 'done' | 'todo';

interface CategoryOption {
  value: PocCategory;
  label: string;
}

const CATEGORY_LABELS: Record<Category, string> = {
  html: 'HTML',
  css: 'CSS',
  javascript: 'JavaScript',
  angular: 'Angular',
  performance: 'Performance',
  rxjs: 'RxJS',
  signals: 'Signals',
  misc: 'Misc',
  behavioural: 'Behavioural',
};

// No POC is behavioural - those are conversation, not something you can build.
const POC_CATEGORIES = Object.keys(CATEGORY_LABELS).filter(
  (category): category is PocCategory => category !== 'behavioural',
);

const CATEGORY_OPTIONS: readonly CategoryOption[] = POC_CATEGORIES.map((value) => ({
  value,
  label: CATEGORY_LABELS[value],
}));

const POKEAPI_DOCS = 'https://pokeapi.co/docs/v2#pokemon';

@Component({
  imports: [
    MatExpansionModule,
    MatChipsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatTooltipModule,
    RouterLink,
  ],
  selector: 'app-poc-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './poc-list.html',
  styles: [
    `
      .completion-filter .mat-button-toggle-checked {
        --mat-button-toggle-selected-state-background-color: var(--mat-sys-primary);
        --mat-button-toggle-selected-state-text-color: var(--mat-sys-on-primary);
      }
    `,
  ],
})
export class PocList {
  private readonly pocStore = inject(PocStore);
  private readonly questionStore = inject(QuestionStore);

  protected readonly categoryOptions = CATEGORY_OPTIONS;
  protected readonly pokeApiDocs = POKEAPI_DOCS;
  protected readonly categoryFilter = signal<readonly PocCategory[]>([]);
  protected readonly completionFilter = signal<CompletionFilter>('all');

  protected readonly pocs = computed(() => {
    const categories: readonly Category[] = this.categoryFilter();
    const completion = this.completionFilter();
    const completed = this.pocStore.completed();

    return POCS.filter((poc) => {
      if (categories.length && !categories.includes(poc.category)) {
        return false;
      }
      if (completion === 'all') {
        return true;
      }
      return completion === 'done' ? completed.includes(poc.id) : !completed.includes(poc.id);
    }).map((poc) => ({
      poc,
      isCompleted: completed.includes(poc.id),
      // Resolved from the question bank so a POC can never drift out of sync
      // with the question it says it covers.
      coveredQuestions: this.questionsFor(poc.covers),
    }));
  });

  protected readonly pocTotal = POCS.length;

  protected readonly completedCount = computed(() => this.pocStore.completed().length);

  protected readonly hasActiveFilters = computed(
    () => this.categoryFilter().length > 0 || this.completionFilter() !== 'all',
  );

  protected countForCategory(category: PocCategory): number {
    return POCS.filter((poc) => poc.category === category).length;
  }

  protected label(category: Category): string {
    return CATEGORY_LABELS[category];
  }

  protected onCategoryChange(event: MatChipListboxChange): void {
    this.categoryFilter.set((event.value ?? []) as readonly PocCategory[]);
  }

  protected onCompletionChange(event: MatButtonToggleChange): void {
    this.completionFilter.set(event.value as CompletionFilter);
  }

  protected clearFilters(): void {
    this.categoryFilter.set([]);
    this.completionFilter.set('all');
  }

  protected toggleCompleted(id: string): void {
    this.pocStore.toggleCompleted(id);
  }

  private questionsFor(ids: readonly string[]): Question[] {
    const bank = this.questionStore.questionData();
    const byId = new Map(bank.map((question) => [question.id, question]));

    return ids.flatMap((id) => {
      const question = byId.get(id);
      return question ? [question] : [];
    });
  }
}
