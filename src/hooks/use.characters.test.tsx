import { act, renderHook } from '@testing-library/react';
import { useCharacters } from './use.characters';

jest.mock('../services/api.repo', () => ({
  ApiRepo: jest.fn(() => ({
    getCharacter: jest.fn(() => Promise.resolve([])),
  })),
}));

describe('Given useCharacter custom Hook', () => {
  describe('useCharacter Hook', () => {
    it('should load characters and update state', async () => {
      const { result } = renderHook(() => useCharacters());
      act(() => {
        result.current.loadCharacters();
      });
      expect(result.current.appState.characters).toHaveLength(0);
    });

    it('should change the page correctly', () => {
      const { result } = renderHook(() => useCharacters());
      const event = { preventDefault: () => {} } as React.SyntheticEvent;

      act(() => {
        result.current.handleNext(event);
      });
      expect(result.current.appState.page).toBe(1);
      act(() => {
        result.current.handleNext(event);
      });
      expect(result.current.appState.page).toBe(2);
      act(() => {
        result.current.handleNext(event);
      });
      expect(result.current.appState.page).toBe(3);
    });

    it('should handle decrement that goes below the minimum page correctly', () => {
      const { result } = renderHook(() => useCharacters());
      const event = { preventDefault: () => {} } as React.SyntheticEvent;

      act(() => {
        result.current.handlePrevious(event);
      });
      expect(result.current.appState.page).toBe(0);
    });

    // Nuevos

    it('should handle filter correctly', () => {
      const { result } = renderHook(() => useCharacters());
      const event = {
        preventDefault: jest.fn(),
        target: { value: 'someValue' },
      } as unknown as React.SyntheticEvent;

      act(() => {
        result.current.handleFilter(event);
      });

      expect(result.current.appState.selectedValue).toBe('someValue');
      expect(result.current.appState.filteredCharacters).toHaveLength(0);
      expect(result.current.appState.filteredCharacters).toEqual([]);
      expect(result.current.appState.page).toBe(0);
    });
  });
});
