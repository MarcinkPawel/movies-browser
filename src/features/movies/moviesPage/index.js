import React from "react";
import { Wrapper } from "./styled";
import { AboutMovie } from "./AboutMovie";
import { BackgroundPoster } from "./BackgroundPoster";
import { CrewCast } from "./CrewCast";
import { Pagination } from "../../../common/Pagination"

export const Movie = () => (
  <>
  <Wrapper>
    <BackgroundPoster />
    <AboutMovie />
  </Wrapper>
    <CrewCast />
    <Pagination/>
    </>
);
