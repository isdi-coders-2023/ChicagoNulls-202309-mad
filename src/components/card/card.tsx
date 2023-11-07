import { CharacterStructure } from '../../models/eldenring.api';

type Props = {
  character: CharacterStructure;
};
export function Card({ character }: Props) {
  const imageUrl = 'https://eldenring.fanapis.com/images/classes/';
  const imageType = '.png';

  return (
    <li className="Card">
      <img src={imageUrl + character.id + imageType} alt="" />
      <button>Show details</button>
    </li>
  );
}
