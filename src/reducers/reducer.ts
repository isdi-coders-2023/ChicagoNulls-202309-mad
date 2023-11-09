import { CharacterStructure } from '../models/eldenring.api';
import { ActionCharacters } from './actions';

export type AppState = {
  characters: CharacterStructure[];
  filter: string;
  page: number;
};

export function charactersReducer(
  state: AppState,
  { type, payload }: ActionCharacters
): AppState {
  switch (type) {
    case 'load':
      return { ...state, characters: payload };

    case 'changePage':
      return { ...state, page: payload };
    default:
      return { ...state };
  }
}
