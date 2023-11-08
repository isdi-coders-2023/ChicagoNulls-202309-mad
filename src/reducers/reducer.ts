import { CharacterStructure } from '../models/eldenring.api';
import { ActionCharacters } from './actions';

export function charactersReducer(
  state: CharacterStructure[],
  { type, payload }: ActionCharacters
): CharacterStructure[] {
  switch (type) {
    case 'load':
      return payload;

    default:
      return [...state];
  }
}
