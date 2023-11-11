import './filter.button.scss';

export function FilterButton() {
  return (
    <div className="filter-button">
      <label htmlFor="category">Pick an option: </label>
      <select name="category" id="category">
        <option value=""></option>
        <option value="stronger">Strength equal or over 8</option>
        <option value="weaker">Strength under 8</option>
      </select>
    </div>
  );
}
