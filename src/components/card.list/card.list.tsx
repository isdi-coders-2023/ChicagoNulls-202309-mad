import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/context';
import { Card } from '../card/card.tsx';
import { CharacterStructure } from '../../models/eldenring.api.tsx';

// const {
//   tasksTools: { tasks, loadTasks },
// } = useContext(AppContext);

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
