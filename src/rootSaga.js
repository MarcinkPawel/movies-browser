import { all } from "redux-saga/effects";
import { moviesListSaga } from "./components/MoviesList";

export default function* rootSaga() {
    yield all([
        moviesListSaga(),
    ])
}