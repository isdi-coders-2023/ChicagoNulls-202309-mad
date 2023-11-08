import { render } from '@testing-library/react';
import { Menu } from '../menu/menu';
import { MemoryRouter } from 'react-router-dom';

describe('Menu Component', () => {
  it('should render a list of navigation links', () => {
    const options = [{ label: 'Home', path: '/' }];

    const { getAllByText } = render(
      <MemoryRouter>
        <Menu options={options} />
      </MemoryRouter>
    );

    const links = getAllByText(/(Home)/i);
    expect(links).toHaveLength(1);
  });
});
