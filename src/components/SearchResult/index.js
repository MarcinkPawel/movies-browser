import { Container, SearchInfo, ResultList } from "./styled";
import MovieTile from "../MovieTile";

export const SearchReasult = () => {
  return (
    <Container>
      <SearchInfo>Search results for ""</SearchInfo>
      <ResultList>
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile />
      </ResultList>
    </Container>
  );
};
