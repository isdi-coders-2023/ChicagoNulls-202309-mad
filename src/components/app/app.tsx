import './app.scss';
import { Header } from '../header/header';
import { Characters } from '../characters/characters';
import { CardList } from '../card.list/card.list';
import { Footer } from '../footer/footer';
import { Card } from '../card/card';
import { ApiRepo } from '../../services/api.repo';

export default function App() {
  const repo = new ApiRepo();
  return (
    <>
      <Header></Header>
      <Card></Card>
      <Characters>
        <CardList repo={repo}></CardList>
      </Characters>
      <Footer></Footer>
    </>
  );
}
