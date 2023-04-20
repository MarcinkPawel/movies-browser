import MovieTile from "../../components/MovieTile";
import { Header, MoviesContainer, Wrapper } from "./styled";

const Movies = () => {
  return (
    <Wrapper>
      <Header>Popular movies</Header>
      <MoviesContainer>
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />
      <MovieTile />

      </MoviesContainer>
    </Wrapper>
  );
};

export default Movies;
