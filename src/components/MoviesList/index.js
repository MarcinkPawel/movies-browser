import { MovieTile } from "../MovieTile";
import { Header, Item, MoviesContainer, Wrapper } from "./styled";

export const Movies = ({ movies }) => {
  return (
    <Wrapper>
      <Header>Popular movies</Header>
      <MoviesContainer>
        {movies?.map((movie) => 
          <Item key={movie.id}>
            <MovieTile movie={movie} />
          </Item>
        )}
      </MoviesContainer>
    </Wrapper>
  );
};
