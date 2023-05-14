import React from "react";
import { AboutPerson } from "./AboutPerson";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPersonById, selectPersonInfo, selectPersonStatus } from "./personSlice";
import { useQueryParameters } from "../../search/queryParameters";
import { selectSearchPeopleStatus } from "../../search/searchSlice";
import { Error } from "../../../common/Error";
import { Loader } from "../../../common/Loader";
import { SearchResult } from "../../../common/SearchResult";
import { MovieTile } from "../../movies/moviePage";
import { Wrapper, Title, List } from "../../movies/moviesPage/CrewCast/styled";

export const PersonDetails = () => {
  const id = useQueryParameters("id");
  const query = useQueryParameters("search");
  const personInfo = useSelector(selectPersonInfo);
  const dispatch = useDispatch();
  const status = useSelector(selectPersonStatus);
  const searchStatus = useSelector(selectSearchPeopleStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchPersonById(id));
    } else return <SearchResult />;
  }, [dispatch, id]);

  if (status === "error" && query === null) return <Error />;
  if (status === "loading" && query === null)
    return <Loader searchFor={"person"} />;
  if (searchStatus === "success" && query !== null) return <SearchResult />;
  if (status === "success" && query === null)
    return (
      <>
        <AboutPerson
          poster={personInfo.personDescription.profile_path}
          name={personInfo.personDescription.name}
          birthday={personInfo.personDescription.birthday}
          birthplace={personInfo.personDescription.place_of_birth}
          biography={personInfo.personDescription.biography}
        />
        {personInfo.personMovies.cast.length === 0 ? null : (
          <>
            <Wrapper>
              <Title>Movies- cast {`(${personInfo.personMovies.cast.length})`}</Title>
              <List>
                {personInfo.personMovies.cast.map((movie) => (
                  <MovieTile
                    key={`${movie.id}${movie.character}`}
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.original_title}
                    date={movie.release_date}
                    rate={movie.vote_average}
                    voteCount={movie.vote_count}
                    genres={movie.genre_ids}
                  />
                ))}
              </List>
            </Wrapper>
          </>
        )}
        {personInfo.personMovies.crew.length === 0 ?
            null :
            <>
            <Wrapper>
              <Title>Movies - crew {`(${personInfo.personMovies.crew.length})`}</Title>
              <List>
                {personInfo.personMovies.crew.map((movie) => (
                  <MovieTile
                    key={`${movie.id}${movie.character}`}
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.original_title}
                    date={movie.release_date}
                    rate={movie.vote_average}
                    voteCount={movie.vote_count}
                    genres={movie.genre_ids}
                  />
                ))}
              </List>
            </Wrapper>
      </>
       }
       </>
    );
};
