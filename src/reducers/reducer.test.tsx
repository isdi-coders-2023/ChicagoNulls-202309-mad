import { charactersReducer } from './reducer';
import { ActionCharacters, loadActionCreator } from './actions';


describe('charactersReducer', () => {
  it('should handle "load" action correctly', () => {
    const initialState = {
      Characters: [],
      filter: '',
    };

    const payload = [{ name: { common: 'Hola' } } as Characters];

    const action = loadActionCreator(payload);
    const newState = charactersReducer(initialState, action);

    expect(newState).toEqual({
        characters: payload,
        filter: ''
    });
  });
});

describe('charactersReducer', () => {
  it('should handle an action to change the page', () => {
    const initialState = {
      Characters
      filter: ''
    };

    const action = changePageActionCreator(2);

    const newState = charactersReducer(initialState, action);

    expect(newState.page).toBe(2);
  });
});
