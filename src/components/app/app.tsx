import './app.scss';
import { Header } from '../header/header';
import { Characters } from '../characters/characters';
import { CardList } from '../card.list/card.list';
export default function App() {
  return (
    <>
      <Header></Header>
      <Characters>
        <CardList></CardList>
      </Characters>
    </>
  );
}
