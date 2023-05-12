import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import popularMoviesReducer from "./features/movies/popularMoviesSlice";
import movieReducer from "./features/movies/moviePage/movieSlice";
import searchReducer from "./features/search/searchSlice";
import popularPeopleReducer from "./features/people/popularPeopleSlice";
import personReducer from "./features/people/PersonDetails/personSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore ({
    reducer: {
        
        movie: movieReducer,
        search: searchReducer,
        popularMovies: popularMoviesReducer,
        popularPeople: popularPeopleReducer,
        person: personReducer,
   },
   middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;