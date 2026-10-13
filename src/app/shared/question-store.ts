import { effect } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { Question } from '../../types/questions-type';
import questionsData from './questions.json';

type QuestionStoreState = {
  questionData: Question[];
};

type MarkedFlag = { id: string; isMarked: boolean };
type ReadFlag = { id: string; isRead: boolean };
type LegacyFlag = { id: string; importance?: string; forLater?: boolean };

const STORAGE_KEY = 'q-marked-flags';
const READ_STORAGE_KEY = 'q-read-flags';
const LEGACY_STORAGE_KEY = 'q-flags';

const seed: Question[] = Object.values(questionsData).flat() as Question[];

const idMigrations: Record<string, string> = {
  'angular-7': 'performance-21',
  'angular-23': 'performance-22',
  'angular-28': 'performance-23',
};

const initialState: QuestionStoreState = {
  questionData: [],
};

function parseArray<T>(raw: string | null): T[] {
  if (!raw) {
    return [];
  }
  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch {
    return [];
  }
}

function toMarkedMap<T extends { id: string }>(
  raw: string | null,
  toIsMarked: (flag: T) => boolean | null,
): Record<string, boolean> {
  const entries = parseArray<T>(raw)
    .filter((flag) => typeof flag?.id === 'string')
    .map((flag) => [idMigrations[flag.id] ?? flag.id, toIsMarked(flag)] as const)
    .filter((entry): entry is readonly [string, boolean] => entry[1] !== null);
  return Object.fromEntries(entries);
}

// `difficulty` and `scenarioBased` are curated in questions.json and are never
// persisted — only the user's review mark is, so shipping new labels is not
// shadowed by a stale localStorage entry.
function loadMarkedFlags(): Record<string, boolean> {
  const stored = localStorage.getItem(STORAGE_KEY);
  // Only the mark is persisted, so the stored list is empty when nothing is
  // marked. Fall back on absence, not on emptiness — otherwise clearing the last
  // mark would resurrect stale state from an older key.
  if (stored !== null) {
    return toMarkedMap(stored, (flag: MarkedFlag) =>
      typeof flag?.isMarked === 'boolean' ? flag.isMarked : null,
    );
  }

  // One-time bridge from the read flags this feature used to store. "Read" is not
  // quite "marked for review", but carrying it over keeps the user's existing
  // progress instead of silently dropping it.
  const read = localStorage.getItem(READ_STORAGE_KEY);
  if (read !== null) {
    return toMarkedMap(read, (flag: ReadFlag) =>
      typeof flag?.isRead === 'boolean' ? flag.isRead : null,
    );
  }

  const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
  if (!legacy) {
    return {};
  }

  return toMarkedMap(legacy, (flag: LegacyFlag) =>
    typeof flag?.forLater === 'boolean' ? flag.forLater : null,
  );
}

export const QuestionStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withHooks((store) => ({
    onInit() {
      const marked = loadMarkedFlags();

      patchState(store, {
        questionData: seed.map((question) => ({
          ...question,
          isMarked: marked[question.id] === true,
        })),
      });

      effect(() => {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(
            store
              .questionData()
              .map(({ id, isMarked }) => ({ id, isMarked }))
              .filter((flag) => flag.isMarked),
          ),
        );
      });
    },
  })),
  withMethods((store) => ({
    toggleMarked(id: string) {
      patchState(store, (state) => ({
        questionData: state.questionData.map((question) =>
          question.id === id ? { ...question, isMarked: !question.isMarked } : question,
        ),
      }));
    },

    /**
     * Marks exactly the questions in `ids` for review and clears the rest, which
     * is what restoring a backup needs - the toggle above can only ever flip one
     * question, so it cannot express "review state as of that file".
     *
     * An id that no longer matches a question is dropped by the same mapping
     * that drops it from the seeded list, so a backup exported from an older
     * build cannot resurrect a question that has since been removed.
     */
    replaceMarkedFlags(ids: readonly string[]): void {
      const marked = new Set(ids);

      patchState(store, (state) => ({
        questionData: state.questionData.map((question) => ({
          ...question,
          isMarked: marked.has(question.id),
        })),
      }));
    },
  })),
);
