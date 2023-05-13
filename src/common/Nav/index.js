import React from "react";
import {
  Wrapper,
  Title,
  Video,
  List,
  StyledLink,
  StyledNavLink,
  Section,
  ContentWidth
} from "./styled";
import video from "../../images/Video.svg";
import { Search } from "./SearchInput";

export const Nav = () => {
  return(
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
      <Search/>
    </ContentWidth>
  </Wrapper>
  );
};
