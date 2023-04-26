import {
  Poster,
  Tile,
  Title,
  Year,
  Details,
  MovieType,
  MovieGenre,
} from "./styled";
import { Rating, Star, Rate, Votes } from "../Rating";
import moviePoster from "../../images/poster.png";
import star from "../../images/star.svg";

export const MovieTile = () => {
  return (
    <Tile>
      <Poster src={moviePoster} />
      <Details>
        <Title>TITLE</Title>
        <Year>YEAR</Year>
        <MovieGenre>
          <MovieType>Action</MovieType>
          <MovieType>Adventure</MovieType>
          <MovieType>Action</MovieType>
        </MovieGenre>
        <Rating>
          <Star src={star} />
          <Rate>4,4</Rate>
          <Votes>23 votes</Votes>
        </Rating>
      </Details>
    </Tile>
  );
};
