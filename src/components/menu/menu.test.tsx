/* import { render } from '@testing-library/react';
import { Menu } from '../menu/menu';
import { MemoryRouter } from 'react-router-dom';

import userEvent from '@testing-library/user-event';

describe('Menu Component', () => {
  it('should render a list of navigation links', () => {
    const options = [{ label: 'Home', path: '/' }];

    const { getAllByText } = render(
      <MemoryRouter>
        <Menu options={options} />
      </MemoryRouter>
    );

    const link = getAllByText(/(Home)/i)[0];
    userEvent.click(link);
  });
});
 */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Menu } from '../menu/menu';

describe('Menu Component', () => {
  it('should toggle menu on burger icon click', () => {
    const options = [{ label: 'Home', path: '/' }];

    render(
      <MemoryRouter>
        <Menu options={options} />
      </MemoryRouter>
    );

    // Verifica que el menú no esté presente inicialmente
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();

    // Haz clic en el icono de hamburguesa
    const burgerIcon = screen.getByAltText('icono de menu plegable');
    userEvent.click(burgerIcon);

    // Verifica que el menú está presente después de hacer clic
    expect(screen.getByRole('menu')).toBeInTheDocument();

    // Haz clic nuevamente en el icono de hamburguesa
    userEvent.click(burgerIcon);

    // Verifica que el menú ya no está presente después de hacer clic nuevamente
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
});
