import { createSlice } from '@reduxjs/toolkit';
import { Game } from '../../components/GameList/GameList';

export interface GamesState {
  data: Game[];
  isLoading: boolean;
  isError: boolean;
  displayCount: number;
  searchQuery: string;
  selectedPlatform: string;
}

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
    displayCount: 12,
    searchQuery: '',
    selectedPlatform: 'ALL',
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    setDisplayCount: (state, action) => {
      state.displayCount = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setSelectedPlatform: (state, action) => {
      state.selectedPlatform = action.payload;
    },
  },
});

export const { setData, setLoading, setError, setDisplayCount, setSearchQuery, setSelectedPlatform } = gamesSlice.actions;

export default gamesSlice.reducer;
