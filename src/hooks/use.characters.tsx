import { useCallback, useMemo, useReducer } from 'react';
import { ApiRepo } from '../services/api.repo';
import { charactersReducer } from '../reducers/reducer';
import * as ac from '../reducers/actions';

export function useCharacters() {
  const [characters, dispatch] = useReducer(charactersReducer, []);

  const repo = useMemo(() => new ApiRepo(), []);

  const loadCharacters = useCallback(async () => {
    try {
      const loadedCharacters = await repo.getClasses();

      dispatch(ac.loadActionCreator(loadedCharacters));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  return {
    characters,
    loadCharacters,
  };
}
