/* import { screen, render } from '@testing-library/react';

import { userEvent } from '@testing-library/user-event';
import { PageButton } from './page.button'; */
/* 
describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    const pageButtonMockFn = jest.fn();

    render(<PageButton pageButton={pageButtonMockFn}></PageButton>);

    test('It should be in the document', async () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
      await userEvent.click(element);
      expect(pageButtonMockFn).toHaveBeenCalled();
    });
  });
}); */
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PageButton } from './page.button';

describe('PageButton Component', () => {
  it('should render the PageButton component', () => {
    // Renderiza el componente
    const { getByRole } = render(
      <PageButton
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );

    const button = getByRole('button', {
      name: /imagen de ave simbolizando una flecha/i,
    });
    expect(button).toBeInTheDocument();
  });
});
