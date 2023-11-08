import { useState } from 'react';
import { AppContext, ContextStructure } from './context';
import { useCharacters } from '../hooks/use.characters';

type Props = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: Props) {
  const [filterCase, setFilterCase] = useState('');

  const charactersState = useCharacters();

  const context: ContextStructure = {
    filterCase,
    setFilterCase,
    charactersTools: charactersState,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
