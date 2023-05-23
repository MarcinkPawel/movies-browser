import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../../common/Pagination";
import { selectMovies } from "./searchSlice";
import { MovieTile } from "../movies/MovieTile";
import { useQueryParameters } from "./queryParameters";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../movies/MoviesSaga/movieSlice";
import { useHistory } from "react-router-dom";
import { NoResults } from "../../common/NoResults";
import { Wrapper, Header, MoviesContainer } from "../movies/MoviesList/styled";

export const SearchMovie = () => {
  const searchParams = useQueryParameters("search");
  const id = useQueryParameters("id");
  const dispatch = useDispatch();
  const history = useHistory();
  const [typingTimer, setTypingTimer] = useState(null);

  useEffect(() => {
    const reload = () => {
      window.location.reload();
    };

    const unlisten = history.listen(() => {
      reload();
    });
    return () => {
      unlisten();
    };
  }, []);

  const { page, results, total_pages, total_results } =
    useSelector(selectMovies);

  useEffect(() => {
    if (id && searchParams === null) {
      dispatch(fetchMovieById(id));
    } else {
      clearTimeout(typingTimer);
      if (searchParams !== null) {
        setTypingTimer(setTimeout(() => {}, 2000));
      }
    }
  }, [searchParams, id]);

  if (total_results === 0) return <NoResults query={searchParams} />;
  else
    return (
      <Wrapper>
        <Header
          title={`Search results for "${searchParams}" (${total_results})`}
        />
        <MoviesContainer>
          {results.map((movie) => (
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
        <Pagination page={page} totalPages={total_pages} />
      </Wrapper>
    );
};
