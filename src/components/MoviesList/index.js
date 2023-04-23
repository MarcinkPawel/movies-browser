import { MovieTile } from "../MovieTile";
import { Header, MoviesContainer, Wrapper } from "./styled";

export const Movies = () => {
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
