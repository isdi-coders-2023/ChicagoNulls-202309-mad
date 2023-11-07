import { CharacterStructure } from '../../models/eldenring.api';

type Props = {
  character: CharacterStructure;
};
export function Card({ character }: Props) {
  console.log(character);
  return (
    <li className="Card">
      <img src="" alt="" />
      <button>Show details</button>
    </li>
  );
}
