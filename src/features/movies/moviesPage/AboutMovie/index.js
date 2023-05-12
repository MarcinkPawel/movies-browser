import React from "react";
import {
  Image,
  Content,
  Title,
  Year,
  Tile,
  Description,
  Details,
  Label,
  Info,
  Wrapper,
} from "./styled";
import { Rating, Star, Rate, Votes } from "../../../../common/Rating";
import { MovieGenre, MovieType } from "../../MovieGenre";
import { imagesAPI600x900, imagesAPIw400 } from "../../../getData";
import Video from "../../../../images/Video.svg";
import star from "../../../../images/star.svg";

export const AboutMovie = ({
  aboutMovie,
  poster,
  title,
  date,
  genres,
  productionCountry,
  release,
  rate,
  voteCount,
  overview,
}) => {
  // const movieGenres = Genres.filter((genre) => genres.includes(genre.id));

  return (
    <Wrapper>
      <Tile>
        <Image src={poster ? `${imagesAPIw400}${poster}` : Video} />
        <Content>
          <Title>{title}</Title>
          <Year>{date ? date.slice(0, 4) : null}</Year>
          <Details>
            <Label>
              Production:{" "}
              <Info>
                {productionCountry.map((country) => country.name).join(", ")}
              </Info>
            </Label>
            <Label>
              Release date:{" "}
              <Info>{new Date(release).toLocaleDateString()}</Info>
            </Label>
          </Details>
          <MovieGenre gap={aboutMovie}>
            {genres.map((genre) => (
              <MovieType key={genre.id}>{genre.name}</MovieType>
            ))}
          </MovieGenre>
          <Rating>
            <Star src={star} />
            <Rate>{rate.toFixed(1)}</Rate>/ 10
            <Votes>{voteCount} votes</Votes>
          </Rating>
        </Content>
        <Description>{overview}</Description>
      </Tile>
    </Wrapper>
  );
};
