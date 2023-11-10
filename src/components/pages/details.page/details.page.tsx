import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../../../context/context';
import { useContext } from 'react';
import { CharacterStructure } from '../../../models/eldenring.api';
import './details.page.scss';

export default function DetailsPage() {
  const { id } = useParams();

  const { characters } = useContext(AppContext);

  const findCharacter: CharacterStructure = characters.find(
    (item) => item.id === id
  ) as CharacterStructure;

  console.log(findCharacter);
  return (
    <div className="card-container">
      <header className="card-title">
        <h2>Details</h2>
      </header>
      <div className="character-container">
        <section className="character-info">
          <p>
            <strong>Name:</strong> {findCharacter.name}
          </p>
          <p>
            <strong>Description:</strong> {findCharacter.description}
          </p>
          <p>
            <strong>Level:</strong> {findCharacter.stats.level}
          </p>
          <p>
            <strong>Vigor:</strong> {findCharacter.stats.vigor}
          </p>
          <p>
            <strong>Mind:</strong> {findCharacter.stats.mind}
          </p>
          <p>
            <strong>Strength:</strong> {findCharacter.stats.strength}
          </p>
        </section>
        <aside className="character-image">
          <img
            src={findCharacter.image}
            alt={`${findCharacter.name} image showing itself with game-themed clothes.`}
          />
        </aside>
      </div>
      <footer>
        <button>
          <Link to="/">Go back</Link>
        </button>
      </footer>
    </div>
  );
}
