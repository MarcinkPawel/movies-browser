import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./rootSaga";
import moviesReducer from "./features/movies/moviesSlice";
import movieDetailsReducer from "./features/movies/moviePage/movieDetailsSlice";
import genresReducer from "./features/movies/MovieGenre/genresSlice";
import configurationReducer from "./features/configSlice";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movieDetails: movieDetailsReducer,
    genres: genresReducer,
    config: configurationReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
