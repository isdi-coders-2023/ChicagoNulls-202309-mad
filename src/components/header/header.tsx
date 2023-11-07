import './header.scss';
import { Menu } from '../menu/menu';

export function Header() {
  return (
    <header>
      <img src="../../logoheader.png" alt="Logo de header de elden ring" />

      <h1>Elden Ring</h1>
      <Menu options={[]} />
    </header>
  );
}
