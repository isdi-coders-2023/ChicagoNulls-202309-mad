import { AppContext } from '../../context/context';
import { useClasses } from '../../hooks/useClasses';

// const {
//   tasksTools: { tasks, loadTasks },
// } = useContext(AppContext);

export function CardList() {
  const {
    characterTools: { characters, loadCharacters },
  } = useClasses(AppContext);

  return (
    <ul>
      {classes.map((item) => (
        <Card character={item}></Card>
      ))}
    </ul>
  );
}
