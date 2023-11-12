import { CharacterStructure } from '../models/eldenring.api';
import {
  loadActionCreator,
  changePage,
  filterCharacters,
  selectedValue,
} from './actions';

describe('Action Creators', () => {
  test('should create a "load" action', () => {
    const characters: CharacterStructure[] = [];

    const action = loadActionCreator(characters);

    expect(action.type).toBe('load');
    expect(action.payload).toEqual(characters);
  });

  test('should create a "changePage" action', () => {
    const page = 2;

    const action = changePage(page);

    expect(action.type).toBe('page');
    expect(action.payload).toBe(page);
  });

  test('should create a "filterCharacters" action', () => {
    const filteredCharacters: CharacterStructure[] = [];

    const action = filterCharacters(filteredCharacters);

    expect(action.type).toBe('filter');
    expect(action.payload).toEqual(filteredCharacters);
  });

  test('should create a "selectedValue" action', () => {
    const value = 'someValue';

    const action = selectedValue(value);

    expect(action.type).toBe('select');
    expect(action.payload).toBe(value);
  });
});
