import { useContext } from 'react';
import { CharacterStructure } from '../../models/eldenring.api';
import { AppContext } from '../../context/context';

type Props = {
  character: CharacterStructure;
};
export function Card({ character }: Props) {
  const {
    charactersTools: { loadCharacters },
  } = useContext(AppContext);

  // const handleLoad = () => {
  //   loadCharacters();
  // };

  const imageUrl = 'https://eldenring.fanapis.com/images/classes/';
  const imageType = '.png';

  return (
    <li className="Card">
      <img src={imageUrl + character.id + imageType} alt="" />
      <button>Show details</button>
    </li>
  );
}
