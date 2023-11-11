import { CharacterStructure } from '../../models/eldenring.api';
import './card.private.scss';
type Props = {
  character: CharacterStructure;
};
export function CardPrivate({ character }: Props) {
  return (
    <div className="card-container">
      <li className="Card">
        <div className="card-buttons-container">
          <button>
            <img src="delete-button.svg" alt="" />
          </button>
          <button>
            <img src="edit-button.svg" alt="" />
          </button>
        </div>
        <div>
          <img src="https://eldenring.fanapis.com/images/classes/17f69874f7bl0i32gmqaffmbfral8f.png" />
        </div>
        <button className="details">{character.name}</button>
      </li>
    </div>
  );
}
//