import { CharacterStructure } from '../models/eldenring.api';
import { ActionCharacters } from './actions';

export type AppState = {
  characters: CharacterStructure[];
  filter: string;
};

export function charactersReducer(
  state: AppState,
  { type, payload }: ActionCharacters
): AppState {
  switch (type) {
    case 'load':
      return { ...state, characters: payload };

    default:
      return { ...state };
  }
}
