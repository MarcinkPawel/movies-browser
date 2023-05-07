import React from "react";
import { useSelector } from "react-redux";
import { MovieTile } from "..";
import { Header, MoviesContainer, Wrapper, MovieLink } from "./styled";
import { Pagination } from "../../../../common/Pagination";
import { Error } from "../../../../common/Error";
import { Loader } from "../../../../common/Loader";
import { selectMovies, selectMoviesStatus } from "../../moviesSlice";
import { selectPosterSizes } from "../../../configSlice";

export const Movies = () => {

  const movies = useSelector(selectMovies);
  const posterSizes = useSelector(selectPosterSizes);
  const moviesStatus = useSelector(selectMoviesStatus);

  return (
    <>
      {moviesStatus === "error" && <Error />}
      {moviesStatus === "loading" && <Loader />}
      {moviesStatus === "success" && (
        <Wrapper>
          <Header>Popular movies</Header>
          <MoviesContainer>
            {movies.map(
              ({
                id,
                title,
                release_date,
                poster_path,
                genre_ids,
                vote_average,
                vote_count,
              }) => (
                <MovieLink to={"/movie"}>
                  <MovieTile
                    movie
                    key={id}
                    posterSizes={posterSizes}
                    id={id}
                    title={title}
                    release_date={release_date}
                    poster_path={poster_path}
                    genre_ids={genre_ids}
                    vote_average={vote_average}
                    vote_count={vote_count}
                  />
                </MovieLink>
              )
            )}
          </MoviesContainer>
          <Pagination />
        </Wrapper>
      )}
    </>
  );
};
