import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CharacterPage from './character.page';
import { BrowserRouter } from 'react-router-dom';

describe('CharacterPage component', () => {
  test('renders FilterButton, CardList, and PageButton components', () => {
    render(
      <BrowserRouter>
        <CharacterPage />
      </BrowserRouter>
    );

    expect(
      screen.getByRole('combobox', { name: 'filter' })
    ).toBeInTheDocument();
    expect(screen.getByTestId('card-list')).toBeInTheDocument();
    expect(screen.getByTestId('page-button')).toBeInTheDocument();
  });
});
