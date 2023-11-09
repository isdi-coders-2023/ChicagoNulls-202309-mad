import { CharacterStructure } from '../models/eldenring.api';

export type ActionCharacterTypes = 'load';

type ActionCharactersAll = {
  type: 'load';
  payload: CharacterStructure[];
};

export type ActionCharacters = ActionCharactersAll;

export const loadActionCreator = (
  payload: CharacterStructure[]
): ActionCharacters => ({
  type: 'load',
  payload,
});