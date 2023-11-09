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
  });
});
