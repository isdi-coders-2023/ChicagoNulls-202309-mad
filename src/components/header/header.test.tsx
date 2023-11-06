import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<Header></Header>);
    });

    test('Then it should be the role', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
