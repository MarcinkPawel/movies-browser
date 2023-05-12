import { all } from "redux-saga/effects";
import { popularMoviesSaga } from "./features/movies/popularMoviesSaga";
import { movieSaga } from "./features/movies/moviePage/movieSaga";
import { searchSaga } from "./features/search/searchSaga";
import { popularPeopleSaga } from "./features/people/popularPeopleSaga";
import { personSaga } from "./features/people//PersonDetails/personSaga";

export default function* rootSaga() {
  yield all([
    popularMoviesSaga(),
    movieSaga(),
    searchSaga(),
    popularPeopleSaga(),
    personSaga()
]);
};
