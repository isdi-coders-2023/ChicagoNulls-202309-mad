import { SyntheticEvent, useCallback, useMemo, useReducer } from 'react';
import { ApiRepo } from '../services/api.repo';
import { AppState, charactersReducer } from '../reducers/reducer';
import * as ac from '../reducers/actions';
import { changePage } from '../reducers/actions';

export function useCharacters() {
  const initialState: AppState = {
    characters: [],
    // filter: '',
    page: 0,
  };
  const [appState, dispatch] = useReducer(charactersReducer, initialState);

  const repo = useMemo(() => new ApiRepo(appState.page), [appState.page]);

  const loadCharacters = useCallback(async () => {
    try {
      const loadedCharacters = await repo.getClasses();

      dispatch(ac.loadActionCreator(loadedCharacters));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [repo]);

  const handleNext = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(changePage(appState.page + 1));
  };

  const handlePrevious = (event: SyntheticEvent) => {
    event.preventDefault();
    dispatch(changePage(appState.page - 1));
  };

  return {
    characters: appState.characters,
    // filter: appState.filter,
    appState,
    loadCharacters,
    handleNext,
    handlePrevious,
  };
}
