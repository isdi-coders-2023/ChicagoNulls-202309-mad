import './app.scss';
import { Header } from '../header/header';
import { Characters } from '../characters/characters';
import { CardList } from '../card.list/card.list';
import { Footer } from '../footer/footer';
import { Card } from '../card/card';
import { ApiRepo } from '../../services/api.repo';
import { FilterButton } from '../filter.button/filter.button';
import { DetailButton } from '../detail.buttton/detail.button';

export default function App() {
  const repo = new ApiRepo();
  return (
    <>
      <Header></Header>
      <Characters>
          <FilterButton></FilterButton>
          <CardList repo={repo}></CardList>
          <DetailButton></DetailButton>
      </Characters>
      <Footer></Footer>
    </>
  );
}
