import { InputStyled, SearchStyled, Magnifier } from "./styled";
import {
  useQueryParameters,
  useReplaceQueryParameters,
} from "../../../features/search/queryParameters";
import { useDispatch } from "react-redux";
import {
  fetchSearchMoviesList,
  fetchSearchPeopleList,
} from "../../../features/search/searchSlice";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovieById } from "../../../features/movies/MovieTile/movieSlice";
import { fetchPersonById } from "../../../features/people/PersonDetails/personSlice";
import search from "../../../images/search.svg";

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
      dispatch(
        fetchSearchMoviesList({ query: target.value.trim(), page: page })
      );
    } else if (
      pathname.includes("id") &&
      pathname.includes("/movie") &&
      pathname.includes("search") === false
    ) {
      dispatch(fetchMovieById(id));
    } else if (
      pathname.includes("id") &&
      pathname.includes("search") === false
    ) {
      dispatch(fetchPersonById(id));
    } else
      dispatch(
        fetchSearchPeopleList({ query: target.value.trim(), page: page })
      );
  };

  useEffect(() => {
    if (pathname.includes("/movie")) {
      dispatch(fetchSearchMoviesList({ query: query, page: 1 }));
    } else dispatch(fetchSearchPeopleList({ query: query, page: 1 }));
  }, [query]);

  return (
    <SearchStyled>
      <Magnifier src={search} />
      <InputStyled
        value={query || ""}
        onChange={onInputChange}
        debounceTimeout={500}
        minLength={2}
        placeholder={
          pathname.includes("/movie")
            ? "Search for movies..."
            : "Search for people..."
        }
      />
    </SearchStyled>
  );
};

//Results Component jest jako test czy to w ogóle się odpali
