import { useState, KeyboardEvent, ChangeEvent } from 'react';
import './SearchBar.css';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../store/slices/gamesSlice';

function SearchBar() {
  const dispatch = useDispatch();

  const [localSearchQuery, setLocalSearchQuery] = useState<string>('');

  const handleSearch = () => {
    dispatch(setSearchQuery(localSearchQuery));
    setLocalSearchQuery('');
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearchQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search games..."
        value={localSearchQuery}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;


