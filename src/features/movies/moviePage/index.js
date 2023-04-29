import { Poster, Tile, Title, Year, Details } from "./styled";
import { Rating, Star, Rate, Votes } from "../../../common/Rating";
import { MovieGenre, MovieType } from "../../../components/MovieGenre";
import moviePoster from "../../../images/poster.png";
import star from "../../../images/star.svg";

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
