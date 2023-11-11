import { Link } from 'react-router-dom';
import { CardListPrivate } from '../../card.list.private/card.list.private';

export default function CustomLibraryPage() {
  return (
    <>
      <button className="addButton">
        <Link to="/form">Formulario</Link>
      </button>
      <CardListPrivate></CardListPrivate>
    </>
  );
}
