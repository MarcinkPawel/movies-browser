import { call, put, select, takeLatest, delay, takeEvery } from "redux-saga/effects";
import { getMovie, getMovieCredits } from "../../getData";
import {
  fetchMovieDetails,
  loadMovieCreditsSuccess,
  loadMovieDetails,
  loadMovieDetailsError,
  loadMovieDetailsSuccess,
} from "./movieDetailsSlice";
import { selectMovieID } from "../moviesSlice";
import { getLocalStorage, setLocalStorage } from "../../localStorage";

function* fetchMovieDetailsHandler() {
  yield put(loadMovieDetails());
  yield delay(1000);

  try {
    const movieID = yield call(getLocalStorage, "movieId");
    const movieDetails = yield call(getMovie, movieID);
    const movieCredits = yield call(getMovieCredits, movieID);
    yield put(loadMovieDetailsSuccess(movieDetails));
    yield put(loadMovieCreditsSuccess(movieCredits));
  } catch (error) {
    yield put(loadMovieDetailsError());
  }
}

function* saveIdInLocalStorage() {
    const movieId = yield select(selectMovieID);
    yield call(setLocalStorage, "movieId", movieId);
};

export function* movieDetailsSaga() {
  yield takeLatest(fetchMovieDetails.type, fetchMovieDetailsHandler);
  yield takeEvery("*", saveIdInLocalStorage);
}