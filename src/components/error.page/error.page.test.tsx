import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ErrorPage } from './error.page.tsx';

describe('Given Error Page component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<ErrorPage />);
    });

    test('It should be in the document', () => {
      const element = screen.getByText(/Not Found/);
      expect(element).toBeInTheDocument();
    });
  });
});
