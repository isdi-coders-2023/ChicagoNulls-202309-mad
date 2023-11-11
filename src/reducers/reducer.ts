import { ActionCharacters, AppState } from './actions';

export function charactersReducer(
  state: AppState,
  { type, payload }: ActionCharacters
): AppState {
  switch (type) {
    case 'load':
      return { ...state, characters: payload };

    case 'page':
      return {
        characters: state.characters,
        page: payload,
        filteredCharacters: state.filteredCharacters,
        selectedValue: state.selectedValue,
      };

    case 'filter':
      return {
        characters: state.characters,
        page: state.page,
        filteredCharacters: payload,
        selectedValue: state.selectedValue,
      };

    case 'select':
      return {
        characters: state.characters,
        page: state.page,
        filteredCharacters: state.filteredCharacters,
        selectedValue: payload,
      };

    default:
      return { ...state };
  }
}
