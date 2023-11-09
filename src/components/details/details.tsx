import { CharacterStructure } from '../../models/eldenring.api';
import './details.scss';

type Props = {
  character: CharacterStructure;
};

export function Details({ character }: Props) {
  return (
    <div className="card-container">
      <header className="card-title">
        <h2>Details</h2>
      </header>
      <div className="character-container">
        <section className="character-info">
          <p>
            <strong>Name:</strong> {character.name}
          </p>
          <p>
            <strong>Description:</strong> {character.description}
          </p>
          <p>
            <strong>Level:</strong> {character.stats.level}
          </p>
          <p>
            <strong>Vigor:</strong> {character.stats.vigor}
          </p>
          <p>
            <strong>Mind:</strong> {character.stats.mind}
          </p>
          <p>
            <strong>Strength:</strong> {character.stats.strength}
          </p>
        </section>
        <aside className="character-image">
          <img
            src={character.image}
            alt={`${character.name} image showing itself with game-themed clothes.`}
          />
        </aside>
      </div>
      <footer>
        <button>Go back</button>
      </footer>
    </div>
  );
}
