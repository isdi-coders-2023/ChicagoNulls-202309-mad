import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app';
import { AppContextProvider } from '../../context/context.provider';

describe('Given App component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(
        <AppContextProvider>
          <App></App>
        </AppContextProvider>
      );
    });

    test('Then it should be the role', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
