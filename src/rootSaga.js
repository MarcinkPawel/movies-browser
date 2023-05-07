import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/moviesSaga";
import { movieDetailsAndCreditsSaga } from "./features/movies/moviePage/movieDetailsSaga";
import { genresSaga } from "./features/movies/MovieGenre/genresSaga";
import { configurationSaga } from "./features/configSaga";

export function* rootSaga() {
    yield all([
        movieDetailsAndCreditsSaga(),
        moviesSaga(),
        genresSaga(),
        configurationSaga(),

    ]);
}