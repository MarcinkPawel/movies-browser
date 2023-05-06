import React from "react";
import { Rating, Star } from "../../../../common/Rating";
import { Wrapper, PosterSpace, Poster, Section, Title, RateStyledA, RateStyledB, Votes } from "./styled";
import star from "../../../../images/star.svg";
import posterBig from "../../../../images/posterBig.png";

export const BackgroundPoster = () => (
  <Wrapper>
    <PosterSpace>
      <Poster src={posterBig} />   
      <Section>
        <Title>Mulan long Title</Title>
        <Rating>
          <Star src={star} />
          <RateStyledA>3</RateStyledA>
          <RateStyledB>/ 10</RateStyledB>
        </Rating>
          <Votes> 311 votes</Votes>
      </Section>
    </PosterSpace>
  </Wrapper>
);
