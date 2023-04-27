import { Poster, Tile, Title, Wrapper, Year } from "./styled";

export const MovieTile = ({ movie }) => {
  return (
    <Tile>
      <Wrapper>
        {movie.poster_path ? (
      <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
      />
      ) : (
        "ooo"
      )}
      </Wrapper>
      <Title>{movie.title}</Title>
      <Year>{movie.release_date.slice(0, 4)}</Year>
    </Tile>
  );
};
