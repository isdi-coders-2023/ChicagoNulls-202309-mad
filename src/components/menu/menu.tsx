import { Link } from 'react-router-dom';
import { MenuOption } from '../../models/menu.option.type';
import './menu.scss';
import { useState } from 'react';

type Props = {
  options: MenuOption[];
};

export function Menu({ options }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav role="menu">
      <img
        src="../bars.svg"
        alt="icono de menu plegable"
        className="burger-icon"
        onClick={toggleMenu}
      />
      <ul
        className={`menu-list ${isMenuOpen ? 'open' : ''}`}
        // style={{ backgroundColor: 'darkgreen' }}
      >
        {options.map((item) => (
          <li key={item.label}>
            <Link to={item.path} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
