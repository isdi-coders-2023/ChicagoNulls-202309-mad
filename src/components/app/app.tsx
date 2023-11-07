import './app.scss';
import { Header } from '../header/header';
import { Characters } from '../characters/characters';
import { CardList } from '../card.list/card.list';
import { Footer } from '../footer/footer';
import { FilterButton } from '';

export default function App() {
  return (
    <>
      <Header></Header>
      <Characters>
        <>
          <FilterButton></FilterButton>
          <CardList></CardList>
        </>
      </Characters>
      <Footer></Footer>
    </>
  );
}
