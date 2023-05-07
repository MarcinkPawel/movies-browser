import { all } from "redux-saga/effects";
import { moviesSaga } from "./features/movies/moviesSaga";
import { movieDetailsSaga } from "./features/movies/moviePage/movieDetailsSaga";
import { genresSaga } from "./features/movies/MovieGenre/genresSaga";
import { configurationSaga } from "./features/configSaga";

export function* rootSaga() {
    yield all([
        movieDetailsSaga(),
        moviesSaga(),
        genresSaga(),
        configurationSaga(),

    ]);
}