import React from "react";
import { Rating, Star } from "../../../../common/Rating";
import { Wrapper, PosterSpace, Poster, Section, Title, RateStyledA, RateStyledB, Votes } from "./styled";
import star from "../../../../images/star.svg";
import { imagesFullApi } from "../../../getData";


export const BackgroundPoster = ({ poster, title, rate, voteCount }) => (
  <Wrapper>
    <PosterSpace>
      <Poster src={`${imagesFullApi}/original${poster}`} />   
      <Section>
        <Title>{title}</Title>
        <Rating>
          <Star src={star} />
          <RateStyledA>{rate}</RateStyledA>
          <RateStyledB>/ 10</RateStyledB>
        </Rating>
          <Votes>{voteCount} votes</Votes>
      </Section>
    </PosterSpace>
  </Wrapper>
);
