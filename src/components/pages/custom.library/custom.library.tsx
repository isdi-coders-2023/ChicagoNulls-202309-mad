import { Link } from 'react-router-dom';

export default function CustomLibrary() {
  return (
    <>
      <h2>Loaded page</h2>
      <button>
        <Link to="/form">Formulario</Link>
      </button>
    </>
  );
}
