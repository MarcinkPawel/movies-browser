import React from "react";
import { MovieTile } from "..";
import { Header, MoviesContainer, Wrapper, MovieLink } from "./styled";
import { Pagination } from "../../../../common/Pagination";

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
      <Pagination/>
    </Wrapper>
  );
};
