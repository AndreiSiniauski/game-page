import { configureStore } from '@reduxjs/toolkit';
import gameApi from '../api/gameAPI';
import gamesReducer from './slices/gamesSlice';

const store = configureStore({
  reducer: {
    [gameApi.reducerPath]: gameApi.reducer,
    games: gamesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gameApi.middleware),
});

export default store;
