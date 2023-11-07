import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DetailButton } from './detail.button';

describe('Given DetailButton component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<DetailButton></DetailButton>);
    });

    test('Then it should be the role', () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
