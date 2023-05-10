import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import popularMoviesReducer from "./features/movies/popularMoviesSlice";
import movieReducer from "./features/movies/moviePage/movieSlice";
import searchReducer from "./features/search/searchSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore ({
    reducer: {
        
        movie: movieReducer,
        search: searchReducer,
        popularMovies: popularMoviesReducer,
   },
   middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;