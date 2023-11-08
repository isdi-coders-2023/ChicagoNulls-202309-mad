import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PageButton } from './page.button';

describe('Given PageButton component', () => {
  describe('When we instantiate', () => {
    beforeEach(() => {
      render(<PageButton></PageButton>);
    });

    test('Then it should be the role', () => {
      const image = document.querySelector(
        '.image-birds-pagination-previous img'
      );
      const expectedAltText = 'imagenes de pajaros de paginado';

      expect(image).toHaveAttribute('alt', expectedAltText);
    });
  });
});
