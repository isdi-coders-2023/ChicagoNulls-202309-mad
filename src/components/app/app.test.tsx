import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './app';

/* describe('Given App component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<App></App>);
    });

    test('Then it should be the role', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
}); */

describe('App Component', () => {
  it('should render the App component with PageButton components', () => {
    const handleButtonClickMock = jest.fn(); // Define una función simulada

    render(<App />);

    const pageButtons = screen.getAllByRole('button', {
      name: /imagen de ave simbolizando una flecha/i,
    });
    expect(pageButtons).toHaveLength(2);

    pageButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
      button.click();
    });

    // Verifica que la función handleButtonClickMock se haya llamado dos veces, una vez por cada PageButton
    expect(handleButtonClickMock).toHaveBeenCalledTimes(2);
  });
});
