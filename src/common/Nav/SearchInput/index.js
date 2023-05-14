import { SearchStyled, InputStyled, Magnifier } from "./styled"
import magnifier from "../../../images/search.svg";
import { useLocation } from "react-router-dom";
import { useQueryParameters,
         useReplaceQueryParameters } from "../../../features/search/queryParameters";
// import { pageQueryParamName,
//          searchQueryParamName, } from "../../../features/search/queryParamNames";
// import { Results } from "../Results";
// import { selectOpen } from "../../../features/search/searchSlice";
// import { useSelector } from "react-redux";
import { fetchMovieById } from "../../../features/movies/moviePage/movieSlice";
import { fetchPersonById } from "../../../features/people/PersonDetails/personSlice";
import { fetchSearchMoviesList, fetchSearchPeopleList } from "../../../features/search/searchSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";


export const Search = () => {
  const dispatch = useDispatch();
  const replaceQueryParameters = useReplaceQueryParameters();
  const page = useQueryParameters("page");
  const query = useQueryParameters("search");
  const { pathname } = useLocation();
  const id = useQueryParameters("id");
  const onInputChange = ({ target }) => {
    if (target.value === "") {
      replaceQueryParameters({
        key: "search",
        value: "",
      });
    }
    replaceQueryParameters({
      key: "search",
      value: query !== "" ? target.value : null,
    });

    if (pathname.includes("/movie")) {
      dispatch(fetchSearchMoviesList({ query: target.value.trim(), page: page }));
    }
    else if (pathname.includes("id") && pathname.includes("/movie") && pathname.includes("search") === false) {
      dispatch(fetchMovieById(id));
    }
    else if (pathname.includes("id") && pathname.includes("search") === false) {
      dispatch(fetchPersonById(id));
    }
    else dispatch(fetchSearchPeopleList({ query: target.value.trim(), page: page }));
  }

  useEffect(() => {
    if (pathname.includes("/movie")) {
      dispatch(fetchSearchMoviesList({ query: query, page: 1 }));
    }
    else dispatch(fetchSearchPeopleList({ query: query, page: 1 }));
  }, [query]);


    return (
        <SearchStyled>
          <Magnifier src={magnifier} />
          <InputStyled 
             value={query || ""}
             onChange={onInputChange}
             debounceTimeout={500}
             minLength={2}
             placeholder={
               pathname.includes("/movie") ?
                 "Search for movies..." :
                 "Search for people..."
             } />
        </SearchStyled>
    );
};

//Results Component jest jako test czy to w ogóle się odpali