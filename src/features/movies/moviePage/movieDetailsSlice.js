import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
      movieDetails: [],
      movieCredits: [],
      status: "initial",
    },
    reducers: {
      loadMovieDetails: (state) => {
        state.status = "loading";
      },
      loadMovieDetailsSuccess: (state, { payload: movieDetails }) => {
        state.movieDetails = movieDetails;
        state.status = "success";
      },
      loadMovieCreditsSuccess: (state, { payload: movieCredits }) => {
        state.movieCredits = movieCredits;
        state.status = "success";
      },
      loadMovieDetailsError: (state) => {
        state.status = "error";
      },
      fetchMovieDetails: () => {},
    },
  });
  
  export const {
    loadMovieDetails,
    loadMovieDetailsSuccess,
    loadMovieCreditsSuccess,
    loadMovieDetailsError,
    fetchMovieDetails,
  } = movieDetailsSlice.actions;
  
  const selectMovieDetailsState = (state) => state.movieDetailsAndCredits;
  
  export const selectMovieDetailsStatus = (state) => selectMovieDetailsState(state).status;
  export const selectMovieDetails = (state) => selectMovieDetailsState(state).movieDetails;
  export const selectMovieCredits = (state) => selectMovieDetailsState(state).movieCredits;
  
  export default movieDetailsSlice.reducer;