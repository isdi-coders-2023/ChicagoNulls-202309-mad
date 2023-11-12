import { charactersReducer } from './reducer';

describe('Characters Reducer', () => {
  test('should return load correctly', () => {
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
        type: 'load',
        payload: [],
      }
    );
    expect(newState).toEqual(mockPayload);
  });

  test('should return page correctly', () => {
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

  test('should return filter correctly', () => {
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
        type: 'filter',
        payload: [],
      }
    );
    expect(newState).toEqual(mockPayload);
  });

  test('should return select correctly', () => {
    const mockPayload = {
      characters: [],
      page: 1,
      filteredCharacters: [],
      selectedValue: 'selectedValue',
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
        payload: 'selectedValue',
      }
    );
    expect(newState).toEqual(mockPayload);
  });

  test('should return default correctly', () => {
    const initialState = {
      characters: [],
      page: 1,
      filteredCharacters: [],
      selectedValue: 'selectedValue',
    };

    const unknownAction = {
      type: 'unknown',
      payload: 'somePayload',
    };

    const newState = charactersReducer(initialState, unknownAction as any);

    expect(newState).toEqual(initialState);
  });
});
