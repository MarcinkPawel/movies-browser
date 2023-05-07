import { call, put, takeLatest, select, delay } from "redux-saga/effects";
import { getPopularMovies } from "../getData";
import {
  fetchMovies,
  loadMovies,
  loadMoviesError,
  loadMoviesSuccess,
  selectMoviesPages,
} from "./moviesSlice";

function* fetchMoviesHandler() {
  yield put(loadMovies());
  yield delay(3000);

  try {
    const page = yield select(selectMoviesPages);
    const movie = yield call(getPopularMovies, page);
    yield put(loadMoviesSuccess(movie.results));
  } catch (error) {
    yield put(loadMoviesError());
  }
}

export function* moviesSaga() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
}