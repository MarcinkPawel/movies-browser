import React from "react";
import { Person } from "../personPage";
import { Header, 
        PeopleContainer, 
        Wrapper,
        PersonLink } from "./styled";

export const People = () => {
  return (
    <Wrapper>
      <Header>Popular people</Header>
      <PeopleContainer>
        <PersonLink to={"/person"} ><Person /></PersonLink>
        <PersonLink to={"/person"} ><Person /></PersonLink>
        <PersonLink to={"/person"} ><Person /></PersonLink>
        <PersonLink to={"/person"} ><Person /></PersonLink>
        <PersonLink to={"/person"} ><Person /></PersonLink>
        <PersonLink to={"/person"} ><Person /></PersonLink>
        <PersonLink to={"/person"} ><Person /></PersonLink>
        <PersonLink to={"/person"} ><Person /></PersonLink>
        <PersonLink to={"/person"} ><Person /></PersonLink>
        <PersonLink to={"/person"} ><Person /></PersonLink>
        <PersonLink to={"/person"} ><Person /></PersonLink>
      </PeopleContainer>
    </Wrapper>
  );
};