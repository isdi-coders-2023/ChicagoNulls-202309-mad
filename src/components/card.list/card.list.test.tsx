import { render, screen } from '@testing-library/react';
import { AppContext, ContextStructure } from '../../context/context';
import { CardList } from './card.list';
import '@testing-library/jest-dom';
import { CharacterStructure } from '../../models/eldenring.api';
import { AppState } from '../../reducers/actions';
import { BrowserRouter } from 'react-router-dom';
const mockContext: ContextStructure = {
  state: {
    characters: [{ name: 'Hero' }],
    page: 1,
    filteredCharacters: [{ name: 'Hero' }],
  } as AppState,
  loadCharacters: jest
    .fn()
    .mockResolvedValue([{ name: 'Hero' } as CharacterStructure]),
} as unknown as ContextStructure;

describe('Given List component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <BrowserRouter>
          <AppContext.Provider value={mockContext}>
            <CardList></CardList>
          </AppContext.Provider>
        </BrowserRouter>
      );
    });
    test('renders List with Card', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
    test('renders loading message while characters are being loaded', () => {
      const loadingElement = screen.getByText('Loading characters...');
      expect(loadingElement).toBeInTheDocument();

      // Simula que los personajes se han cargado
      const loadedContext: ContextStructure = {
        state: {
          characters: [{ name: 'Hero' }],
          page: 1,
          filteredCharacters: [{ name: 'Hero' }],
          selectedValue: '',
        } as AppState,
        loadCharacters: jest
          .fn()
          .mockResolvedValue([{ name: 'Hero' } as CharacterStructure]),
      } as unknown as ContextStructure;

      render(
        <BrowserRouter>
          <AppContext.Provider value={loadedContext}>
            <CardList></CardList>
          </AppContext.Provider>
        </BrowserRouter>
      );

      // Ahora, el mensaje de carga no debería estar presente
      expect(screen.queryByText('Loading characters...')).toBeNull();

      // Aquí puedes realizar más aserciones según la lógica de tu componente
    });
  });
});
