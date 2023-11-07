import { useState } from 'react';
import { AppContext, ContextStructure } from './context';

type Props = {
  children: JSX.Element;
};

export function AppContextProvider({ children }: Props) {
  const [filterCase, setFilterCase] = useState('');

  const context: ContextStructure = {
    filterCase,
    setFilterCase,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
