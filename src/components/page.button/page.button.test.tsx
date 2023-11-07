import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { PageButton } from './page.button';

describe('PageButton Component', () => {
  it('should render the PageButton component', () => {
    // Renderiza el componente
    const { getByRole } = render(<PageButton />);

    const button = getByRole('button', {
      name: /imagen de ave simbolizando una flecha/i,
    });
    expect(button).toBeInTheDocument();
  });
});
