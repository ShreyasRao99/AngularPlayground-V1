import { effect } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { Question } from '../../types/questions-type';
import questionsData from './questions.json';

type QuestionStoreState = {
  questionData: Question[];
};

type ReadFlag = { id: string; isRead: boolean };
type LegacyFlag = { id: string; importance?: string; forLater?: boolean };

const STORAGE_KEY = 'q-read-flags';
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

function toReadMap<T extends { id: string }>(
  raw: string | null,
  toIsRead: (flag: T) => boolean | null,
): Record<string, boolean> {
  const entries = parseArray<T>(raw)
    .filter((flag) => typeof flag?.id === 'string')
    .map((flag) => [idMigrations[flag.id] ?? flag.id, toIsRead(flag)] as const)
    .filter((entry): entry is readonly [string, boolean] => entry[1] !== null);
  return Object.fromEntries(entries);
}

// `difficulty` and `scenarioBased` are curated in questions.json and are never
// persisted — only the user's read state is, so shipping new labels is not
// shadowed by a stale localStorage entry.
function loadReadFlags(): Record<string, boolean> {
  const stored = localStorage.getItem(STORAGE_KEY);
  // Only read is persisted, so the stored list is empty when nothing is marked
  // read. Fall back to the legacy key on absence, not on emptiness — otherwise
  // unmarking the last question would resurrect stale legacy read state.
  if (stored !== null) {
    return toReadMap(stored, (flag: ReadFlag) =>
      typeof flag?.isRead === 'boolean' ? flag.isRead : null,
    );
  }

  const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
  if (!legacy) {
    return {};
  }

  return toReadMap(legacy, (flag: LegacyFlag) =>
    typeof flag?.forLater === 'boolean' ? flag.forLater : null,
  );
}

export const QuestionStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withHooks((store) => ({
    onInit() {
      const read = loadReadFlags();

      patchState(store, {
        questionData: seed.map((question) => ({ ...question, isRead: read[question.id] === true })),
      });

      effect(() => {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(
            store
              .questionData()
              .map(({ id, isRead }) => ({ id, isRead }))
              .filter((flag) => flag.isRead),
          ),
        );
      });
    },
  })),
  withMethods((store) => ({
    toggleRead(id: string) {
      patchState(store, (state) => ({
        questionData: state.questionData.map((question) =>
          question.id === id ? { ...question, isRead: !question.isRead } : question,
        ),
      }));
    },
  })),
);
