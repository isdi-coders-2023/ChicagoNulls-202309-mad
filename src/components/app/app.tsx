import './app.scss';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { AppRoutes } from '../app.routes/app.routes';

export default function App() {
  return (
    <>
      <Header></Header>
      <AppRoutes></AppRoutes>
      <Footer></Footer>
    </>
  );
}
