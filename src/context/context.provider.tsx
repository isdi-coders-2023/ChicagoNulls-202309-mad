import { AppContext, ContextStructure } from './context';
import { useCharacters } from '../hooks/use.characters';

type Props = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: Props) {
  // const [filterCase, setFilterCase] = useState('');

  const { characters, loadCharacters } = useCharacters();

  const context: ContextStructure = {
    characters,
    filter: '',
    loadCharacters,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
