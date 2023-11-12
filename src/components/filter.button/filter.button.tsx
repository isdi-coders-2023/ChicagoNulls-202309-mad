import './filter.button.scss';
import { AppContext } from '../../context/context';
import { useContext } from 'react';

export function FilterButton() {
  const { handleFilter, appState } = useContext(AppContext);

  return (
    <div className="filter-button">
      <label htmlFor="filter">Choose a category: </label>
      <select
        role="combobox"
        onChange={handleFilter}
        name="filter"
        value={appState?.selectedValue || ''}
      >
        <option value="">Todos</option>
        <option value="10">Fuerza superior a 10</option>
        <option value="9">Fuerza inferior a 10</option>
      </select>
    </div>
  );
}
