// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Movie } from '../typings';

interface ListResponse<T> {
  results: Movie[];
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}

// Define a service using a base URL and expected endpoints
export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getAllMovie: builder.query<
      ListResponse<Movie>,
      { input: string; page: number }
    >({
      query: (args) => {
        const { input, page } = args;
        if (input)
          return {
            url: `search/movie?api_key=42fe6f8698473917f3f2d3c6327012b2&query=${input}&page=${page}`,
          };
        else
          return {
            url: `movie/popular?api_key=42fe6f8698473917f3f2d3c6327012b2&page=${page}`,
          };
      },
    }),
    getMovieDetail: builder.query<Movie, string | undefined>({
      query: (id) => `movie/${id}?api_key=42fe6f8698473917f3f2d3c6327012b2`,
    }),
    searchMovie: builder.query<
      ListResponse<Movie>,
      { input: string; page: number }
    >({
      query: (args) => {
        const { input } = args;
        const page = 1;
        return {
          url: `search/movie?api_key=42fe6f8698473917f3f2d3c6327012b2&query=${input}&page=${page}`,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllMovieQuery, useGetMovieDetailQuery } = movieApi;
