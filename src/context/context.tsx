import { createContext } from 'react';
import { useCharacters } from '../hooks/use.characters';

export type ContextStructure = {
  filterCase: string;
  setFilterCase: (filterState: string) => void;
  charactersTools: ReturnType<typeof useCharacters>;
};

const initialContext = {} as ContextStructure;
export const AppContext = createContext<ContextStructure>(initialContext);
