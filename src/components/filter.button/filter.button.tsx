import './filter.button.scss';

export function FilterButton() {
  return (
    <div className="filter-button">
      <label htmlFor="category">Choose a category: </label>
      <select name="category" id="category">
        <option value="characters">Characters</option>
        <option value="bosses">Bosses</option>
      </select>
    </div>
  );
}
