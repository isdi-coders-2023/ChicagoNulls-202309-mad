import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DetailsPage from './details.page';
import { MemoryRouter } from 'react-router-dom';
import { AppContext, ContextStructure } from '../../../context/context';
import { State } from '../../../reducers/actions';
import { CharacterStructure } from '../../../models/eldenring.api';

// const mockContext: ContextStructure = {
//   characters: [{ name: 'Hero', id: 4 }],
//   loadCharacters: jest.fn(),
// } as unknown as ContextStructure;

const mockContext: ContextStructure = {
  state: {
    characters: [{ name: 'Hero', id: 4 }],
  } as unknown as State,
  loadCharacters: jest
    .fn()
    .mockResolvedValue([
      { name: 'Hero', id: 4 } as unknown as CharacterStructure,
    ]),
} as unknown as ContextStructure;

describe('Given DetailPage component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <AppContext.Provider value={mockContext}>
            <DetailsPage></DetailsPage>
          </AppContext.Provider>
        </MemoryRouter>
      );
    });

    test('renders Detail-page with Detail component', () => {
      const element = screen.getByText('Name:');
      expect(element).toBeInTheDocument();
    });
  });
});
