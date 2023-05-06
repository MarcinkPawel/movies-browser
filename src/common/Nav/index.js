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
import { useLocation } from "react-router-dom";

export const Nav = () => {
  const location = useLocation();

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
        <Search>
          <Magnifier src={magnifier} />
          <InputStyled 
            placeholder={
              `Search for
              ${location.pathname.includes("movies" 
                      ? "movies..." 
                      : "people...")
              }`} 
          />
        </Search>
    </ContentWidth>
  </Wrapper>
  );
};
