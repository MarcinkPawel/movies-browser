import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useQueryParameters,
  useReplaceQueryParameters,
} from "../../search/queryParameters";
import {
  fetchMovieById,
  selectMovieInfo,
  selectMovieStatus,
} from "../moviePage/movieSlice";
import { selectSearchMoviesStatus } from "../../search/searchSlice";
import { useEffect } from "react";
import { AboutMovie } from "./AboutMovie";
import { BackgroundPoster } from "./BackgroundPoster";
import { CrewCast } from "./CrewCast";
import { Error } from "../../../common/Error";
import { Loader } from "../../../common/Loader";
import { SearchResult } from "../../../common/SearchResult";
import { useParams } from "react-router-dom";
import { Wrapper, Title, List } from "../../movies/moviesPage/CrewCast/styled";
import { Person } from "../../people/personPage";

export const Movie = () => {
  const dispatch = useDispatch();
  const id = useQueryParameters("id");
  const query = useQueryParameters("search");
  const movieInfo = useSelector(selectMovieInfo);
  const searchStatus = useSelector(selectSearchMoviesStatus);
  const status = useSelector(selectMovieStatus);
  const replaceQueryParameters = useReplaceQueryParameters();
  const params = useParams();

  useEffect(() => {
    replaceQueryParameters({
      key: "page",
      value: 1,
    });
    if (id) {
      dispatch(fetchMovieById(params.id));
    } else {<SearchResult/>}
  }, [dispatch, params.id]);


  if (status === "error" && query === null) return <Error />;
  if (status === "loading" && query === null) return <Loader searchFor={"movie"} />;
  if (searchStatus === "success" && query !== null) return <SearchResult />;
  if (status === "success" && query === null)
    return (
      <>
        {movieInfo.movieDescription.backdrop_path ? 
        <BackgroundPoster
            poster={movieInfo.movieDescription.backdrop_path}
            rate={movieInfo.movieDescription.vote_average}
            title={movieInfo.movieDescription.title}
            voteCount={movieInfo.movieDescription.vote_count}
          />
         : null}
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
            {movieInfo.movieCrew.cast.slice(0, 20).map(actor => 
              <Person
                id={actor.id}
                key={`${actor.id}${actor.character}`}
                name={actor.name}
                profile_path={actor.profile_path}
                role={actor.character}
              />
            )}
          </List>
        </Wrapper>
        <Wrapper>
          <Title>Crew</Title>
          <List>
            {movieInfo.movieCrew.crew.slice(0, 10).map(person => 
              <Person
                key={`${person.id}${person.job}`}
                name={person.name}
                profile_path={person.profile_path}
                role={person.job}
                id={person.id}
              />
            )}
          </List>
        </Wrapper>
      </>
    );

};
