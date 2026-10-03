import { effect } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';

type NotesStoreState = {
  notes: Record<string, string>;
};

const STORAGE_KEY = 'q-notes';

const initialState: NotesStoreState = {
  notes: {},
};

/**
 * Free text the user wrote about a question: what tripped them up, how they
 * answered it in an interview, what to say differently next time.
 *
 * A map rather than a flag list because the value is the point, and because a
 * question id is a stable key into the same bank the read flags use. Only the
 * user's own words are persisted — nothing curated — so there is no stale entry
 * to shadow when questions.json gains new material.
 */
function loadNotes(): Record<string, string> {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return {};
  }

  try {
    const parsed: unknown = JSON.parse(raw);

    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
      return {};
    }

    return Object.fromEntries(
      Object.entries(parsed).filter(
        (entry): entry is [string, string] =>
          typeof entry[1] === 'string' && entry[1].trim() !== '',
      ),
    );
  } catch {
    return {};
  }
}

export const NotesStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withHooks((store) => ({
    onInit() {
      patchState(store, { notes: loadNotes() });

      effect(() => localStorage.setItem(STORAGE_KEY, JSON.stringify(store.notes())));
    },
  })),
  withMethods((store) => ({
    noteFor(id: string): string {
      return store.notes()[id] ?? '';
    },

    hasNote(id: string): boolean {
      return store.notes()[id] !== undefined;
    },

    setNote(id: string, note: string): void {
      patchState(store, (state) => {
        const trimmed = note.trim();

        // Clearing the text is how a note is deleted, so an emptied draft has to
        // drop the entry. Otherwise a blank string would sit in storage and the
        // icon would keep claiming the question has notes.
        if (!trimmed) {
          if (!(id in state.notes)) {
            return {};
          }

          const notes = { ...state.notes };
          delete notes[id];
          return { notes };
        }

        return { notes: { ...state.notes, [id]: trimmed } };
      });
    },
  })),
);
