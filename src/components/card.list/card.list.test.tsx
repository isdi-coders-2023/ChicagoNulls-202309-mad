import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CardList } from './card.list';
import { AppContext, ContextStructure } from '../../context/context';

const mockContext: ContextStructure = {
  characters: [{ name: 'Hero', id: 4 }],
  loadCharacters: jest.fn(),
} as unknown as ContextStructure;

describe('Given List component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <AppContext.Provider value={mockContext}>
          <CardList></CardList>
        </AppContext.Provider>
      );
    });
    test('renders List with Card', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
    test('', () => {
      expect(mockContext.loadCharacters).toHaveBeenCalled();
      const element = screen.getByAltText('Hero');
      expect(element).toBeInTheDocument();
    });

    test('', () => {
      const mockContext: ContextStructure = {
        characters: null,
        loadCharacters: jest.fn(),
      } as unknown as ContextStructure;
      render(
        <AppContext.Provider value={mockContext}>
          <CardList></CardList>
        </AppContext.Provider>
      );
      expect(mockContext.loadCharacters).toHaveBeenCalled();
      const element = screen.getByText('Loading characters...');
      expect(element).toBeInTheDocument();
    });
  });
});
