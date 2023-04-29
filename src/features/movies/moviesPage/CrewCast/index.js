import React from "react";
import { Person } from "../../../people/personPage";
import { Wrapper, Title, List } from "./styled";

export const CrewCast = () => (
  <Wrapper>
    <Title>Cast</Title>
    <List>
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
      <Person />
    </List>
  </Wrapper>
);
