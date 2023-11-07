import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/context';
import './filter.button.scss';

export function FilterButton() {
  const { filterCase, setFilterCase } = useContext(AppContext);

  const handleClickCharacters = () => {
    // if ('.characters') setFilterCase('characters');

    const domSelect: HTMLSelectElement | null =
      document.querySelector('#category');

    if (domSelect!.value === 'characters') {
      setFilterCase('characters');
    }

    if (domSelect!.value === 'bosses') {
      setFilterCase('bosses');
    }
  };

  useEffect(() => {
    console.log('desde context ' + filterCase);
  }, [filterCase]);

  return (
    <div className="filter-button">
      <label htmlFor="category">Choose a category: </label>
      <select onClick={handleClickCharacters} name="category" id="category">
        <option value="characters">Characters</option>
        <option value="bosses">Bosses</option>
      </select>
    </div>
  );
}
