import { effect } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { Question } from '../../types/questions-type';
import questionsData from './questions.json';

type QuestionStoreState = {
  questionData: Question[];
};

const seed: Question[] = Object.values(questionsData).flat() as Question[];

const initialState: QuestionStoreState = {
  questionData: [],
};

export const QuestionStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withHooks((store) => ({
    onInit() {
      const saved = localStorage.getItem('q-flags');
      if (saved) {
        const persisted = JSON.parse(saved) as Pick<Question, 'id' | 'importance' | 'forLater'>[];
        const flags = Object.fromEntries(
          persisted.map(({ id, importance, forLater }) => [id, { importance, forLater }]),
        );
        patchState(store, {
          questionData: seed.map((q) => ({ ...q, ...flags[q.id] })),
        });
      } else {
        patchState(store, { questionData: seed });
      }

      effect(() => {
        localStorage.setItem(
          'q-flags',
          JSON.stringify(
            store
              .questionData()
              .map(({ id, importance, forLater }) => ({ id, importance, forLater })),
          ),
        );
      });
    },
  })),
  withMethods((store) => ({
    updateDetails(details: Question, type: 'importance' | 'forLater') {
      patchState(store, (state) => ({
        questionData: state.questionData.map((quest) => {
          return quest.id === details.id ? { ...quest, [type]: details[type] } : quest;
        }),
      }));
    },
  })),
);
