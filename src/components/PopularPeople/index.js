import { Person } from "../PersonTile";
import { Header, MoviesContainer, Wrapper } from "./styled";

export const People = () => {
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