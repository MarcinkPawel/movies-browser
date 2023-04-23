import { Person } from "../personTail";
import { Header, MoviesContainer, Wrapper } from "./styled";

const Movies = () => {
  return (
    <Wrapper>
      <Header>Popular people</Header>
      <MoviesContainer>
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
        <Person />
      </MoviesContainer>
    </Wrapper>
  );
};

export default Movies;
