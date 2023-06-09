import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { MovieTile } from "../MovieTile";
import { Header, MoviesContainer, Wrapper } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { Error } from "../../../common/Error";
import { Loader } from "../../../common/Loader";
import {
  fetchPopularMovies,
  selectPopularMoviesList,
  selectPopularMoviesStatus,
} from "../MoviesSaga/popularMoviesSlice";
import {
  fetchSearchMoviesList,
  selectSearchMoviesStatus,
} from "../../search/searchSlice";
import { useQueryParameters } from "../../search/queryParameters";
import {
  pageQueryParamName,
  searchQueryParamName,
} from "../../search/queryParamNames";
import { SearchMovie } from "../../search/searchMovie";

export const Movies = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectPopularMoviesStatus);
  const movieList = useSelector(selectPopularMoviesList);
  const statusSearchMovie = useSelector(selectSearchMoviesStatus);
  const location = useLocation().pathname;
  const searchQuery = useQueryParameters(searchQueryParamName);
  const page = useQueryParameters(pageQueryParamName);

  useEffect(() => {
    if (location.includes("movie") && location.includes(searchQueryParamName))
      dispatch(fetchSearchMoviesList({ query: searchQuery, page: page }));
    else dispatch(fetchPopularMovies(page));
  }, []);

  if (status === "error") return <Error />;
  if (statusSearchMovie === "error") return <Error />;
  if (status === "loading" && searchQuery === null)
    return <Loader />;
  if (searchQuery !== null && statusSearchMovie === "loading")
    return <Loader />;
  if (searchQuery !== null && statusSearchMovie === "success")
    return <SearchMovie />;
  if (status === "success" && searchQuery === null)
    return (
      <Wrapper>
        <Header>Popular movies</Header>
        <MoviesContainer>
          {movieList.results.map((movie) => (
            <MovieTile
              id={movie.id}
              key={`${movie.id}${movie.index}`}
              poster={movie.poster_path}
              title={movie.title}
              date={movie.release_date}
              rate={movie.vote_average.toFixed(1)}
              voteCount={movie.vote_count}
              genres={movie.genre_ids}
            />
          ))}
        </MoviesContainer>
        <Pagination page={movieList.page} totalPages={movieList.total_pages} />
      </Wrapper>
    );
};
