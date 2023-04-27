import { getPopularMovies } from "./moviesAPI";
import { fetchMovies, fetchMoviesError, fetchMoviesSuccess } from "./moviesListSlice";

const loadingDelay = 1000;

function* fetchMovieHandler() {
    try {
        yield delay(loadingDelay);
        const movies = yield call(getPopularMovies);
        yield put(fetchMoviesSuccess(movies))
    } catch (error) {
        yield put(fetchMoviesError());
    }
};

export function* moviesListSaga() {
    yield takeLatest(fetchMovies.type, fetchMovieHandler);
}