import { effect } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';

type PocStoreState = {
  completed: string[];
};

const STORAGE_KEY = 'poc-completed';

const initialState: PocStoreState = {
  completed: [],
};

function loadCompleted(): string[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }
  try {
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

// A POC is not "read" — it is a task you implement in your own project, so the
// only state worth keeping is whether you finished it.
export const PocStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withHooks((store) => ({
    onInit() {
      patchState(store, { completed: loadCompleted() });

      effect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(store.completed())));
    },
  })),
  withMethods((store) => ({
    toggleCompleted(id: string) {
      patchState(store, (state) => ({
        completed: state.completed.includes(id)
          ? state.completed.filter((completedId) => completedId !== id)
          : [...state.completed, id],
      }));
    },

    /**
     * Replaces the whole list in one patch, for the same reason as
     * `replaceAll` on the notes: a restored backup is the truth, not something
     * to merge into what is here. Deduped because a hand-edited file can
     * repeat an id, and the list is rendered by membership.
     */
    replaceCompleted(ids: readonly string[]): void {
      patchState(store, () => ({ completed: [...new Set(ids)] }));
    },
  })),
);
