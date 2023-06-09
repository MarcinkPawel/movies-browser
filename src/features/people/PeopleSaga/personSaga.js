import { call, delay, put, takeLatest } from "redux-saga/effects"
import { fetchPersonById, fetchPersonByIdError, fetchPersonByIdSuccess } from "./personSlice";
import { getPersonByID, getPersonInMoviesByID } from "./getPersonById";


function* fetchPersonByIDHandler({ payload }) {
  try {
    const personDescription = yield call(getPersonByID, payload);
    const personMovies = yield call (getPersonInMoviesByID, payload);
    const personInfo = {
      personDescription: personDescription,
      personMovies: personMovies
    }
    yield delay(300);
    yield put(fetchPersonByIdSuccess(personInfo));
  }
  catch (error) {
    yield put(fetchPersonByIdError());
    yield call(alert, "Download failed, please try again or check your internet connection")
  }
};

export function* personSaga() {
  yield takeLatest(fetchPersonById, fetchPersonByIDHandler);
};