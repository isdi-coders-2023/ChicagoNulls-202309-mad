import { render } from '@testing-library/react';
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

    // Buscar el enlace y hacer clic en él usando userEvent
    const link = getAllByText(/(Home)/i)[0];
    userEvent.click(link);

    // Verificar que las funciones se ejecuten y no arrojen errores
  });
});
