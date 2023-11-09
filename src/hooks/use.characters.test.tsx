import { act } from 'react-dom/test-utils';
import { useCharacters } from './use.characters';
import { CharacterStructure } from '../models/eldenring.api';
import '@testing-library/jest-dom';
import '@testing-library/react';

// Simulamos una respuesta de API ficticia
jest.mock('../services/api.repo', () => {
  return {
    ApiRepo: jest.fn().mockImplementation(() => {
      return {
        getCharacters: jest
          .fn()
          .mockResolvedValue(['Character 1', 'Character 2']),
      };
    }),
  };
});

describe('useCharacters hook', () => {
  it('loads characters and handles pagination', async () => {
    let result: {
      loadCharacters: any;
      appState: any;
      handleNext: any;
      handlePrevious: any;
      characters?: CharacterStructure[];
      page?: number;
    };

    // Given
    act(() => {
      result = useCharacters();
    });

    // When
    await act(async () => {
      await result.loadCharacters();
    });

    // Then
    expect(result.appState.characters).toHaveLengthGreaterThan(0); // Ajusta según tus expectativas reales
    expect(result.appState.page).toBe(0);

    // When (simulate clicking the next page)
    act(() => {
      result.handleNext({ preventDefault: jest.fn() });
    });

    // Then
    expect(result.appState.page).toBe(1);

    // When (simulate clicking the previous page)
    act(() => {
      result.handlePrevious({ preventDefault: jest.fn() });
    });

    // Then
    expect(result.appState.page).toBe(0);
  });
});
