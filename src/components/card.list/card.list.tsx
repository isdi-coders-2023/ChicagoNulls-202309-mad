import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/context';
import { Card } from '../card/card.tsx';
import './card.list.scss';
import { CharacterStructure } from '../../models/eldenring.api.tsx';

export function CardList() {
  const { characters, loadCharacters } = useContext(AppContext);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  console.log(characters);

  return (
    <ul>
      {characters ? (
        characters.map((item: CharacterStructure) => (
          <Card key={item.id} character={item}></Card>
        ))
      ) : (
        <p>Loading characters...</p>
      )}
    </ul>
  );
}
