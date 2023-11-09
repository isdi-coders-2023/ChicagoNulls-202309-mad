import { CharacterStructure } from '../models/eldenring.api';

export type ActionCharacterTypes = 'load';

type ActionCharactersAll = {
  type: 'load';
  payload: CharacterStructure[];
};

export type ChangePage = {
  type: 'page';
  payload: number;
};

export type ActionCharacters = ActionCharactersAll | ChangePage;

export const loadActionCreator = (
  payload: CharacterStructure[]
): ActionCharacters => ({
  type: 'load',
  payload,
});

export const changePage = (payload: number): ActionCharacters => ({
  type: 'page',
  payload,
});
