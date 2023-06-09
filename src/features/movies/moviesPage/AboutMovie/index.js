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
  DetailsLine,
  Star,
  Rate,
  Votes,
  TotalRate,
} from "./styled";
import { Rating } from "../../../../common/Rating";
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
            <DetailsLine>
              <Label>Production:</Label>
              <Info>
                {productionCountry.map((country) => country.name).join(", ")}
              </Info>
            </DetailsLine>
            <DetailsLine>
              <Label>Release date:</Label>
              <Info>{new Date(release).toLocaleDateString()}</Info>
            </DetailsLine>
          </Details>
          <MovieGenre gap={aboutMovie}>
            {genres.map((genre) => (
              <MovieType key={genre.id}>{genre.name}</MovieType>
            ))}
          </MovieGenre>
          <Rating>
            <Star src={star} />
            <Rate>{rate.toFixed(1)}</Rate>
            <TotalRate> / 10</TotalRate>
            <Votes>{voteCount} votes</Votes>
          </Rating>
        </Content>
        <Description>{overview}</Description>
      </Tile>
    </Wrapper>
  );
};
