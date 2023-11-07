import './app.scss';
import { Header } from '../header/header';
import { Characters } from '../characters/characters';
import { CardList } from '../card.list/card.list';
import { Footer } from '../footer/footer';
import { FilterButton } from '../filter.button/filter.button';
import { DetailButton } from '../detail.buttton/detail.button';
export default function App() {
  return (
    <>
      <Header></Header>
      <Characters>
        <>
          <FilterButton></FilterButton>
          <CardList></CardList>
          <DetailButton></DetailButton>
        </>
      </Characters>
      <Footer></Footer>
    </>
  );
}
