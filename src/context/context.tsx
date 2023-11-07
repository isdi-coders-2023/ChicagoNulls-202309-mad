import { createContext } from 'react';

export type ContextStructure = {
  filterCase: string;
  setFilterCase: (filterState: string) => void;
};

const initialContext = {} as ContextStructure;
export const AppContext = createContext<ContextStructure>(initialContext);
