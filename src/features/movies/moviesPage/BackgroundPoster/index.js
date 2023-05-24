import React from "react";
import { Rating } from "../../../../common/Rating";
import {
  Wrapper,
  PosterSpace,
  Poster,
  Section,
  Title,
  RateStyledA,
  RateStyledB,
  Votes,
  Star,
  RateContainer,
  Container
} from "./styled";
import star from "../../../../images/star.svg";
import { imagesFullApi } from "../../../getData";

export const BackgroundPoster = ({ poster, title, rate, voteCount }) => (
  <Wrapper>
    <PosterSpace>
      <Poster src={`${imagesFullApi}/original${poster}`} />
      <Section>
        <Title>{title}</Title>
        <Container>
          <Rating>
            <Star src={star} />
            <RateContainer>
              <RateStyledA>{rate.toFixed(1)}</RateStyledA>
              <RateStyledB>/</RateStyledB>
              <RateStyledB>10</RateStyledB>
            </RateContainer>
          </Rating>
          <Votes>{voteCount} votes</Votes>
        </Container> 
      </Section>
    </PosterSpace>
  </Wrapper>
);
