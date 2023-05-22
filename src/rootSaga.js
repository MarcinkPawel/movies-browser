import { all } from "redux-saga/effects";
import { popularMoviesSaga } from "./features/movies/MoviesSaga/popularMoviesSaga";
import { movieSaga } from "./features/movies/MoviesSaga/movieSaga";
import { searchSaga } from "./features/search/searchSaga";
import { popularPeopleSaga } from "./features/people/PeopleSaga/popularPeopleSaga";
import { personSaga } from "./features/people/PeopleSaga/personSaga";

export default function* rootSaga() {
  yield all([
    popularMoviesSaga(),
    movieSaga(),
    searchSaga(),
    popularPeopleSaga(),
    personSaga()
]);
};
