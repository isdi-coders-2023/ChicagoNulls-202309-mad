import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardList } from './card.list';

describe('Given CardList component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<CardList></CardList>);
    });

    test('Then it should be the role', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
