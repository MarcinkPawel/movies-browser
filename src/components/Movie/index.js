import { Wrapper } from "./styled";
import { AboutMovie } from "./AboutMovie";
import { BackgroundPoster } from "./BackgroundPoster";

export const Movie = () => (
  <Wrapper>
    <BackgroundPoster />
    <AboutMovie />
  </Wrapper>
);
