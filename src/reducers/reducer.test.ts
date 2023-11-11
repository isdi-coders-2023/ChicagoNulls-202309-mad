import { charactersReducer } from './reducer';

<<<<<<< HEAD
describe('Auth Reducer', () => {
  test('should return load correclty ', () => {
    const mockPayload = {
=======
describe('charactersReducer', () => {
  it('Given an initial state and a "load" action, When reducing the state, Then the characters should be updated', () => {
    const initialState: AppState = {
>>>>>>> 9b187af501595862ceb953f1cd71798d0d50b01f
      characters: [],
      page: 1,
      filteredCharacters: [],
      selectedValue: '',
    };

    const newState = charactersReducer(
      {
        characters: [],
        page: 1,
        filteredCharacters: [],
        selectedValue: '',
      },
      {
        type: 'load',
        payload: [],
      }
    );
    expect(newState).toEqual(mockPayload);
  });

  test('should return page correclty ', () => {
    const mockPayload = {
      characters: [],
      page: 1,
      filteredCharacters: [],
      selectedValue: '',
    };

    const newState = charactersReducer(
      {
        characters: [],
        page: 1,
        filteredCharacters: [],
        selectedValue: '',
      },
      {
        type: 'page',
        payload: 1,
      }
    );
    expect(newState).toEqual(mockPayload);
  });

  test('should return page correclty ', () => {
    const mockPayload = {
      characters: [],
      page: 1,
      filteredCharacters: [],
      selectedValue: '',
    };

    const newState = charactersReducer(
      {
        characters: [],
        page: 1,
        filteredCharacters: [],
        selectedValue: '',
      },
      {
        type: 'select',
        payload: '',
      }
    );
    expect(newState).toEqual(mockPayload);
  });
});
