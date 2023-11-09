import '@testing-library/jest-dom';
import { AppState, charactersReducer } from './reducer';
import { ActionCharacters, loadActionCreator } from './actions';
import { CharacterStructure } from '../models/eldenring.api';

describe('charactersReducer', () => {
  it('Given an initial state and a "load" action, When reducing the state, Then the characters should be updated', () => {
    // Given
    const initialState: AppState = {
      characters: [],
      page: 0,
      // filter: '',
    };

    const charactersData: CharacterStructure[] = [
      { name: { common: 'Hola' } } as unknown as CharacterStructure,
    ];

    const action: ActionCharacters = loadActionCreator(charactersData);

    const newState = charactersReducer(initialState, action);

    expect(newState).toEqual({
      characters: charactersData,
      // filter: '',
      page: 0,
    });
  });
});
