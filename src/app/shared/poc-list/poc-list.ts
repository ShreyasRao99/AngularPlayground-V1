import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipListboxChange, MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { Category } from '../../../types/questions-type';
import { POCS } from '../../poc/pocs';
import { categoryLabel, POC_CATEGORIES, PocCategory } from '../categories';
import { PocStore } from '../poc-store';

type CompletionFilter = 'all' | 'done' | 'todo';

interface CategoryOption {
  value: PocCategory;
  label: string;
}

const CATEGORY_OPTIONS: readonly CategoryOption[] = POC_CATEGORIES.map((value) => ({
  value,
  label: categoryLabel(value),
}));

const POKEAPI_DOCS = 'https://pokeapi.co/docs/v2#pokemon';

@Component({
  imports: [
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
    }).map((poc) => ({ poc, isCompleted: completed.includes(poc.id) }));
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
    return categoryLabel(category);
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
}
