import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const gameApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://staging.belparyaj.com/api/pragmatic' }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: () => 'game_list',
    }),
  }),
});

export const { useGetGamesQuery } = gameApi;

export default gameApi;
