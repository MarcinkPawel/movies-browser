import React from "react";
import { Person } from "../personPage";
import { Header, PeopleContainer, Wrapper } from "./styled";

export const People = () => {
  return (
    <Wrapper>
      <Header>Popular people</Header>
      <PeopleContainer>
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
        <Person />
        <Person />
        <Person />
      </PeopleContainer>
    </Wrapper>
  );
};