import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardList } from './card.list';

describe('Given List component', () => {
  describe('When we instantiate', () => {
    render(<CardList></CardList>);

    test('It should be in the document', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
