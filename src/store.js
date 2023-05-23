import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
import popularMoviesReducer from "./features/movies/MoviesSaga/popularMoviesSlice";
import movieReducer from "./features/movies/MoviesSaga/movieSlice";
import searchReducer from "./features/search/searchSlice";
import popularPeopleReducer from "./features/people/PeopleSaga/popularPeopleSlice";
import personReducer from "./features/people/PeopleSaga/personSlice";

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