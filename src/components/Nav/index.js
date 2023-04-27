import {
  Wrapper,
  Title,
  Video,
  List,
  Search,
  Magnifier,
  InputStyled,
  StyledLink,
  StyledNavLink
} from "./styled";
import video from "../../images/Video.svg";
import magnifier from "../../images/search.svg";

export const Nav = () => (
  <Wrapper>
    <StyledLink to={"/movies"}>
      <Title>
        <Video src={video} />
        Movies Browser
      </Title>
    </StyledLink>
    <List>
      <li>
        <StyledNavLink to={"/movies"}>Movies</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={"/people"}>People</StyledNavLink>
      </li>
    </List>
    <Search>
      <Magnifier src={magnifier} />
      <InputStyled placeholder={`Search for movies..`} />
    </Search>
  </Wrapper>
);
