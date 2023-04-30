import React from "react";
import { MovieTile } from "..";
import { Header, MoviesContainer, Wrapper, MovieLink } from "./styled";

export const Movies = () => {
  return (
    <Wrapper>
      <Header>Popular movies</Header>
      <MoviesContainer>
          <MovieLink to={"/movie"}> <MovieTile /> </MovieLink>
          <MovieLink to={"/movie"}> <MovieTile /> </MovieLink>
          <MovieLink to={"/movie"}> <MovieTile /> </MovieLink>
          <MovieLink to={"/movie"}> <MovieTile /> </MovieLink>
          <MovieLink to={"/movie"}> <MovieTile /> </MovieLink>
          <MovieLink to={"/movie"}> <MovieTile /> </MovieLink>
          <MovieLink to={"/movie"}> <MovieTile /> </MovieLink>
          <MovieLink to={"/movie"}> <MovieTile /> </MovieLink>
          <MovieLink to={"/movie"}> <MovieTile /> </MovieLink>
      </MoviesContainer>
    </Wrapper>
  );
};
