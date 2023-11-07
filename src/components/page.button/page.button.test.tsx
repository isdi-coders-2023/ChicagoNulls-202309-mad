import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';
import { PageButton } from './page.button';

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
});
