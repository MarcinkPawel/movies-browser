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
import { imagesAPIw400 } from "../../../getData";
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
  return (
    <Wrapper>
      <Tile>
        <Image src={poster ? `${imagesAPIw400}${poster}` : Video} />
        <Content>
          <Title>{title}</Title>
          <Year>{date ? date.toString().slice(0, 4) : null}</Year>
          <Details>
            <Label>Production:</Label>
            <Info>
              {productionCountry.map((country) => country.name).join(", ")}
            </Info>
            <Label>Release date:</Label>
            <Info>{new Date(release).toLocaleDateString()}</Info>
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