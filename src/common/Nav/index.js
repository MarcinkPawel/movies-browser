import React from "react";
import {
  Wrapper,
  Title,
  Video,
  List,
  Search,
  Magnifier,
  InputStyled,
  StyledLink,
  StyledNavLink,
  Section,
  ContentWidth
} from "./styled";
import video from "../../images/Video.svg";
import magnifier from "../../images/search.svg";

export const Nav = () => (
  <Wrapper>
    <ContentWidth>
      <Section>
        <StyledLink to={"/movies"}>
          <Title>
            <Video src={video} />
            Movies Browser
          </Title>
        </StyledLink>
        <List>
          <li>
            <StyledNavLink to={"/movies"}>MOVIES</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to={"/people"}>PEOPLE</StyledNavLink>
          </li>
        </List>
      </Section>
        <Search>
          <Magnifier src={magnifier} />
          <InputStyled placeholder={`Search for movies..`} />
        </Search>
    </ContentWidth>
  </Wrapper>
);
