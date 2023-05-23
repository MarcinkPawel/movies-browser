import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useQueryParameters } from "../../search/queryParameters";
import {
  fetchMovieById,
  selectMovieInfo,
  selectMovieStatus,
} from "../MoviesSaga/movieSlice";
import { selectSearchMoviesStatus } from "../../search/searchSlice";
import { AboutMovie } from "./AboutMovie";
import { BackgroundPoster } from "./BackgroundPoster";
import { Error } from "../../../common/Error";
import { Loader } from "../../../common/Loader";
import { SearchResult } from "../../../common/SearchResult";
import { Wrapper, Title } from "../../movies/moviesPage/CrewCast/styled";
import { List } from "./styled";
import { Person } from "../../people/PersonTile";
import { SearchMovie } from "../../search/searchMovie";

export const Movie = () => {
  const dispatch = useDispatch();
  const id = useQueryParameters("id");
  const query = useQueryParameters("search");
  const movieInfo = useSelector(selectMovieInfo);
  const searchStatus = useSelector(selectSearchMoviesStatus);
  const status = useSelector(selectMovieStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieById(id));
    } else return <SearchResult />;
  }, [dispatch, id]);

  if (status === "error" && query === null) return <Error />;
  if (status === "loading" && query === null)
    return <Loader searchFor={"movie"} />;
  if (searchStatus === "success" && query !== null) return <SearchMovie />;
  if (status === "success" && query === null)
    return (
      <>
        {movieInfo.movieDescription.backdrop_path ? (
          <BackgroundPoster
            poster={movieInfo.movieDescription.backdrop_path}
            rate={movieInfo.movieDescription.vote_average}
            title={movieInfo.movieDescription.title}
            voteCount={movieInfo.movieDescription.vote_count}
          />
        ) : null}
        <AboutMovie
          poster={movieInfo.movieDescription.poster_path}
          title={movieInfo.movieDescription.title}
          productionCountry={movieInfo.movieDescription.production_countries}
          date={movieInfo.movieDescription.release_date}
          release={movieInfo.movieDescription.release_date}
          genres={movieInfo.movieDescription.genres}
          voteCount={movieInfo.movieDescription.vote_count}
          rate={movieInfo.movieDescription.vote_average}
          overview={movieInfo.movieDescription.overview}
        />
        <Wrapper>
          <Title>Cast</Title>
          <List>
            {movieInfo.movieCrew.cast.slice(0, 20).map((actor) => (
              <Person
                id={actor.id}
                key={`${actor.id}${actor.character}`}
                name={actor.name}
                profile_path={actor.profile_path}
                role={actor.character}
              />
            ))}
          </List>
        </Wrapper>
        <Wrapper>
          <Title>Crew</Title>
          <List>
            {movieInfo.movieCrew.crew.slice(0, 10).map((person) => (
              <Person
                key={`${person.id}${person.job}`}
                name={person.name}
                profile_path={person.profile_path}
                role={person.job}
                id={person.id}
              />
            ))}
          </List>
        </Wrapper>
      </>
    );
};
