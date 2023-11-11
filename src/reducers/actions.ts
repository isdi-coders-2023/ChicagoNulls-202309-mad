import { CharacterStructure } from '../models/eldenring.api';

export type ActionCharacterTypes = 'load';

export type AppState = {
  characters: CharacterStructure[];
  filteredCharacters: CharacterStructure[];
  page: number;
  selectedValue: string;
};

type ActionCharactersAll = {
  type: 'load';
  payload: CharacterStructure[];
};

export type ChangePage = {
  type: 'page';
  payload: number;
};

export type FilterCharacters = {
  type: 'filter';
  payload: CharacterStructure[];
};

export type SelectedValue = {
  type: 'select';
  payload: string;
};

export type ActionCharacters =
  | ActionCharactersAll
  | ChangePage
  | SelectedValue
  | FilterCharacters;

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

export const filterCharacters = (
  payload: CharacterStructure[]
): ActionCharacters => ({
  type: 'filter',
  payload,
});

export const selectedValue = (payload: string): ActionCharacters => ({
  type: 'select',
  payload,
});
