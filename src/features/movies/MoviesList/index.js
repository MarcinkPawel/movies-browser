import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MovieTile } from "../moviePage";
import { Header, MoviesContainer, Wrapper } from "./styled";
import { Pagination } from "../../../common/Pagination";
import { Error } from "../../../common/Error";
import { Loader } from "../../../common/Loader";
import { SearchResult } from "../../../common/SearchResult";
import { fetchPopularMovies, selectPopularMoviesList, selectPopularMoviesStatus } from "../popularMoviesSlice";
import { useLocation } from "react-router-dom";
import { fetchSearchMoviesList, selectSearchMoviesStatus } from "../../search/searchSlice";
import { useQueryParameters } from "../../search/queryParameters";
import { pageQueryParamName, searchQueryParamName, } from "../../search/queryParamNames"

export const Movies = () => {

  const dispatch = useDispatch();
  const status = useSelector(selectPopularMoviesStatus);
  const movieList = useSelector(selectPopularMoviesList);
  const statusSearchMovie = useSelector(selectSearchMoviesStatus);
  const location = useLocation().pathname
  const searchQuery = useQueryParameters(searchQueryParamName)
  const page = useQueryParameters(pageQueryParamName);
  
  useEffect(() => {
    if (location.includes("movie") && location.includes(searchQueryParamName))
      dispatch(fetchSearchMoviesList({query: searchQuery, page: page}));
    else dispatch(fetchPopularMovies(page));
  }, []);

  if (status === "error") return <Error />
  if (statusSearchMovie === "error") return <Error />
  if (status === "loading" && searchQuery === null) return <Loader searchFor={"popular movies"} />
  if (searchQuery !== null && statusSearchMovie === "loading") return <Loader searchFor={searchQuery} />
  if (searchQuery !== null && statusSearchMovie === "success") return <SearchResult />
  if (status === "success" && searchQuery === null)

  return (
    <Wrapper>
      <Header>Popular movies</Header>
      <MoviesContainer>
      {movieList.results.map(movie => (
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
    <Pagination/>
    </Wrapper>
  );
};