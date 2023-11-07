import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FilterButton } from './filter.button';

describe('Given FilterButton component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<FilterButton></FilterButton>);
    });

    test('Then it should be the role', () => {
      const element = screen.getByRole('combobox');
      expect(element).toBeInTheDocument();
    });
  });
});
