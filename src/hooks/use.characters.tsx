import { useCallback, useMemo, useReducer } from 'react';
import { ApiRepo } from '../services/api.repo';
import { AppState, charactersReducer } from '../reducers/reducer';
import * as ac from '../reducers/actions';

export function useCharacters() {
  const initialState: AppState = {
    characters: [],
    filter: '',
  };
  const [appState, dispatch] = useReducer(charactersReducer, initialState);

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
    characters: appState.characters,
    filter: appState.filter,
    loadCharacters,
  };
}
