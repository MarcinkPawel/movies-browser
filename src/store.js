import { configureStore } from "@reduxjs/toolkit";
import moviesListReducer from "./components/moviesListSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        moviesList: moviesListReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga)

export default store; 