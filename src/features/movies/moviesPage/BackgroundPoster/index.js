import { Rating, Star, Rate, Votes } from "../../Rating";
import { Wrapper, PosterSpace, Poster, Section, Title } from "./styled";
import star from "../../../images/star.svg";
import posterBig from "../../../images/posterBig.png";

export const BackgroundPoster = () => (
  <Wrapper>
    <PosterSpace>
      <Poster src={posterBig} />
      <Section>
        <Title>Mulan</Title>
        <Rating>
          <Star src={star} />
          <Rate>3/10</Rate>
          <Votes> 311 votes</Votes>
        </Rating>
      </Section>
    </PosterSpace>
  </Wrapper>
);
