import { useEffect, useContext } from 'react';
import { AppContext } from '../../context/context';
import { Card } from '../card/card.tsx';

// const {
//   tasksTools: { tasks, loadTasks },
// } = useContext(AppContext);

export function CardList() {
  const {
    charactersTools: { characters, loadCharacters },
  } = useContext(AppContext);

  useEffect(() => {
    loadCharacters();
  }, [loadCharacters]);

  const charactersObject = characters.data;
  console.log(charactersObject);

  return (
    <ul>
      {charactersObject.map((item) => (
        <Card key={item.id} character={item}></Card>
      ))}
    </ul>
  );
}
