import './FilterBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { GamesState, setSelectedPlatform } from '../../store/slices/gamesSlice';

function FilterBar() {
  const dispatch = useDispatch();
  const selectedPlatform = useSelector((state: { games: GamesState }) => state.games.selectedPlatform);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const platform = e.target.value;
    dispatch(setSelectedPlatform(platform));
  };

  return (
    <div className="filter-bar">
      <label>Filter by Platform:</label>
      <select value={selectedPlatform} onChange={handleSelectChange}>
        <option value="ALL">All</option>
        <option value="MOBILE">Mobile</option>
        <option value="WEB">Web</option>
        <option value="DOWNLOAD">Download</option>
      </select>
    </div>
  );
}

export default FilterBar;

