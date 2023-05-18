import { useLocation } from "react-router-dom";
import {
  StyledLink,
  StyledNavLink,
  Wrapper,
  ContentWidth,
  Section,
  Title,
  Video,
  List,
} from "./styled";
import { Search } from "./SearchInput";
import video from "../../images/Video.svg";

export const Nav = () => {
  const location = useLocation().pathname
  const activeclass = "true";

  return (
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
              <StyledNavLink to={"/movies"} activeclass={location.includes("/movie") ? activeclass : null}>MOVIES</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to={"/people"} activeclass={location.includes("/person") ? activeclass : null}>PEOPLE</StyledNavLink>
            </li>
          </List>
        </Section>
        <Search />
      </ContentWidth>
    </Wrapper>
  );
};