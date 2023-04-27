import { createSlice } from "@reduxjs/toolkit";

const moviesListSlice = createSlice({
    name: "moviesList",
    initialState: {
        status: "loading",
        movies: [],
    },
    reducers: {
        fetchMovies: (state) => {
            state.status = "loading";
        },
        fetchMoviesSuccess: (state, { payload }) => {
            state.status = "success";
            state.movies = payload.results;
        },
        fetchMoviesError: (state) => {
            state.status = "error";
        },
    },
});

export const {
    fetchMovies,
    fetchMoviesSuccess,
    fetchMoviesError,
} = moviesListSlice.actions

const selectMoviesListState = (state) => state.moviesList;

export const selectMoviesStatus = (state) => selectMoviesListState(state).status;
export const selectMovies = (state) => selectMoviesListState(state).movies;

export default moviesListSlice.reducer;