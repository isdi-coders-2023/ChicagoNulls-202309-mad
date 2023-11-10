import { useParams } from 'react-router-dom';
import { AppContext } from '../../../context/context';
import { useContext } from 'react';

export default function DetailsPage() {
  const { id } = useParams();
  const {
    appState: { characters },
  } = useContext(AppContext);
  const findCharacter = characters.find((item) => String(item.id) === id);
  return (
    <div className="card-container">
      <header className="card-title">
        <h2>Details</h2>
      </header>
      <div className="character-container">
        <section className="character-info">
          <p>
            <strong>Name:</strong> {findCharacter!.name}
          </p>
          <p>
            <strong>Description:</strong> {findCharacter!.description}
          </p>
          <p>
            <strong>Level:</strong> {findCharacter!.stats.level}
          </p>
          <p>
            <strong>Vigor:</strong> {findCharacter!.stats.vigor}
          </p>
          <p>
            <strong>Mind:</strong> {findCharacter!.stats.mind}
          </p>
          <p>
            <strong>Strength:</strong> {findCharacter!.stats.strength}
          </p>
        </section>
        <aside className="character-image">
          <img
            src={findCharacter!.image}
            alt={`${
              findCharacter!.name
            } image showing itself with game-themed clothes.`}
          />
        </aside>
      </div>
      <footer>
        <button>Go back</button>
      </footer>
    </div>
  );
}
