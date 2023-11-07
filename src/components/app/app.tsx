import './app.scss';
import { Header } from '../header/header';
import { Characters } from '../characters/characters';
import { CardList } from '../card.list/card.list';
import { Footer } from '../footer/footer';
import { FilterButton } from '../filter.button/filter.button';
import { PageButton } from '../page.button/page.button';

export default function App() {
  return (
    <>
      <Header></Header>
      <Characters>
        <>
          <FilterButton></FilterButton>
          <PageButton></PageButton>
          <CardList></CardList>
          <PageButton></PageButton>
        </>
      </Characters>
      <Footer></Footer>
    </>
  );
}
