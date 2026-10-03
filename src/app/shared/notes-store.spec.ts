import { TestBed } from '@angular/core/testing';
import { NotesStore } from './notes-store';

function createStore(): InstanceType<typeof NotesStore> {
  TestBed.configureTestingModule({});
  return TestBed.inject(NotesStore);
}

function stored(): Record<string, string> {
  return JSON.parse(localStorage.getItem('q-notes') ?? '{}') as Record<string, string>;
}

describe('NotesStore', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should start empty when nothing has been saved', () => {
    const store = createStore();

    expect(store.notes()).toEqual({});
    expect(store.hasNote('performance-1')).toBe(false);
  });

  it('should keep a note against the question it was written for', () => {
    const store = createStore();

    store.setNote('performance-1', '  Remember hydration costs a full extra pass.  ');
    TestBed.tick();

    expect(store.noteFor('performance-1')).toBe('Remember hydration costs a full extra pass.');
    expect(stored()).toEqual({ 'performance-1': 'Remember hydration costs a full extra pass.' });
  });

  it('should keep notes on different questions apart', () => {
    const store = createStore();

    store.setNote('performance-1', 'first');
    store.setNote('angular-3', 'second');
    TestBed.tick();

    expect(stored()).toEqual({ 'performance-1': 'first', 'angular-3': 'second' });
  });

  it('should read back what was saved', () => {
    localStorage.setItem('q-notes', JSON.stringify({ 'rxjs-4': 'unsubscribe after switchMap' }));
    const store = createStore();

    expect(store.noteFor('rxjs-4')).toBe('unsubscribe after switchMap');
    expect(store.hasNote('rxjs-4')).toBe(true);
  });

  it('should overwrite a note rather than append to it', () => {
    localStorage.setItem('q-notes', JSON.stringify({ 'html-2': 'first draft' }));
    const store = createStore();

    store.setNote('html-2', 'second draft');
    TestBed.tick();

    expect(store.noteFor('html-2')).toBe('second draft');
  });

  it('should drop the entry when the text is cleared', () => {
    localStorage.setItem('q-notes', JSON.stringify({ 'html-2': 'something to remember' }));
    const store = createStore();

    store.setNote('html-2', '   ');
    TestBed.tick();

    // an empty note still stored would leave the icon claiming there is one
    expect(store.noteFor('html-2')).toBe('');
    expect(store.hasNote('html-2')).toBe(false);
    expect(stored()).toEqual({});
  });

  it('should ignore a corrupt or misshapen payload instead of throwing', () => {
    localStorage.setItem('q-notes', 'not json');
    const store = createStore();

    expect(store.notes()).toEqual({});

    store.setNote('html-1', 'still works');
    TestBed.tick();

    expect(stored()).toEqual({ 'html-1': 'still works' });
  });

  it('should ignore entries that are not strings', () => {
    localStorage.setItem(
      'q-notes',
      JSON.stringify({ 'html-1': 'kept', 'html-2': 42, 'html-3': '', 'html-4': null }),
    );
    const store = createStore();

    expect(store.notes()).toEqual({ 'html-1': 'kept' });
  });

  it('should swap the whole map in when told to replace it', () => {
    localStorage.setItem('q-notes', JSON.stringify({ 'html-1': 'first', 'html-2': 'second' }));
    const store = createStore();

    // restoring a backup replaces rather than merges, so a note the file does not
    // mention has to go rather than sit in beside the ones it does
    store.replaceAll({ 'css-3': 'from the file' });
    TestBed.tick();

    expect(store.notes()).toEqual({ 'css-3': 'from the file' });
    expect(stored()).toEqual({ 'css-3': 'from the file' });
  });

  it('should clear every note when replaced with nothing', () => {
    localStorage.setItem('q-notes', JSON.stringify({ 'html-1': 'a note' }));
    const store = createStore();

    store.replaceAll({});
    TestBed.tick();

    expect(store.notes()).toEqual({});
    expect(stored()).toEqual({});
  });
});
