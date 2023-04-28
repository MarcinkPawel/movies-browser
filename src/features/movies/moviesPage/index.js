import { Wrapper } from "./styled";
import { AboutMovie } from "../../../components/Movie/AboutMovie";
import { BackgroundPoster } from "./BackgroundPoster";

export const Movie = () => (
  <Wrapper>
    <BackgroundPoster />
    <AboutMovie />
  </Wrapper>
);
