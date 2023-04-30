import React from "react";
import { Wrapper } from "./styled";
import { AboutMovie } from "./AboutMovie";
import { BackgroundPoster } from "./BackgroundPoster";
import { CrewCast } from "./CrewCast";

export const Movie = () => (
  <Wrapper>
    <BackgroundPoster />
    <AboutMovie />
    <CrewCast />
  </Wrapper>
);
